<template>
  <li
    :class="[
      bem.b(),
      bem.is('active', subActive),
      bem.is('disabled', props.disabled),
      bem.is('vertical', vertical),
    ]">
    <!-- 内容 -->
    <div
      :class="[bem.e('label')]"
      @mouseenter="onMouseEnter"
      @click="handleClick"
      @mouseleave="onMouseLeave"
      :style="{
        paddingLeft: `${paddingLeft * 16}px`,
      }">
      <span :class="[bem.e('inner')]">
        <slot name="label">{{ props.label }} </slot>
      </span>
      <slot name="rightIcon">
        <ImIcon
          name="down"
          size="0.8em"
          :class="[bem.e('icon'), bem.is('open', show)]" />
      </slot>
    </div>

    <template v-if="!vertical">
      <Transition name="fade" :duration="300" mode="out-in">
        <div v-if="subActive" :class="[bem.e('bar')]" />
      </Transition>
    </template>

    <!-- 下拉子菜单 -->
    <template v-if="vertical">
      <Transition
        @beforeEnter="onBeforeEnter"
        @afterEnter="onAfterEnter"
        @beforeLeave="onBeforeLeave"
        @leave="onLeave"
        mode="out-in"
        :duration="300">
        <ul
          :class="[bem.e('list')]"
          v-show="show"
          :style="{
            '--im-vertical-item-height': '40px',
          }">
          <slot />
        </ul>
      </Transition>
    </template>

    <template v-else>
      <Transition name="menu-fade" mode="out-in" :duration="300">
        <ul
          :class="[
            bem.e('children'),
            vertical ? bem.e('vertical') : 'im-shadow',
          ]"
          @mouseenter="onMouseEnter"
          @mouseleave="onMouseLeave"
          v-show="show">
          <slot />
        </ul>
      </Transition>
    </template>
  </li>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import { ref } from 'vue';
import { debounce } from '@/utils';
import ImIcon from '../ImIcon';
import { useMenuInject, useSubProvider } from './useProvider';

const show = ref(false);
const bem = useBem('sub-menu');
defineOptions({
  name: 'ImSubMenu',
});

const props = withDefaults(
  defineProps<{
    disabled?: boolean;
    name: string | number;
    label?: string | number;
  }>(),
  {
    disabled: false,
    name: '',
    label: undefined,
  }
);
const { vertical, subActive, paddingLeft } = useMenuInject(props);
useSubProvider();

// 防抖处理下拉菜单显示隐藏逻辑
const setVisible = debounce((bol: boolean) => {
  show.value = bol;
}, 100);

function handleClick() {
  if (props.disabled) return;
  if (vertical.value) {
    setVisible(!show.value);
  } else {
    setVisible(true);
  }
}
function onMouseEnter() {
  if (props.disabled || vertical.value) return;
  setVisible(true);
}

function onMouseLeave() {
  if (vertical.value) return;
  setVisible(false);
}

// 动画钩子
async function onBeforeEnter(el: Element) {
  const node = el as HTMLElement;
  node.style.height = 'auto';
  await new Promise((resolve) => requestAnimationFrame(resolve));
  // 读取高度，强制渲染
  const height = node.offsetHeight;
  node.style.height = '0px';
  node.getBoundingClientRect(); // 强制浏览器渲染
  node.style.height = `${height}px`;
}

async function onAfterEnter(el: Element) {
  const node = el as HTMLElement;
  node.style.height = 'auto';
}

function onBeforeLeave(el: Element) {
  const node = el as HTMLElement;
  node.style.height = `${node.offsetHeight}px`;
}
async function onLeave(el: Element, done: () => void) {
  const node = el as HTMLElement;
  node.style.height = '0px';
  setTimeout(() => {
    done();
  }, 280);
}
</script>

<style lang="scss" scoped>
.im-sub-menu {
  padding: 0;
  margin: 0;
  height: 100%;
  cursor: pointer;
  user-select: none;
  color: var(--im-menu-text-color);
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transition: all 0.3s;
  overflow: visible;
  position: relative;

  &.is-vertical {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0;

    .im-sub-menu__label {
      width: 100%;
      text-align: left;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 8px 8px 16px;
      border-radius: var(--im-menu-radius);
      height: 40px;
    }
  }

  &.is-active {
    color: var(--im-menu-active-text-color);
    .im-sub-menu__label {
      color: var(--im-menu-active-text-color);
    }
  }

  &__children {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    min-width: 100%;
    background-color: var(--im-menu-bg-color);
    border-radius: var(--im-menu-radius);
    padding: 4px;
    margin: 0;
    transform-origin: center top;

    .im-menu-item {
      padding: 5px 12px !important;
    }
  }

  &__list {
    width: 100%;
    overflow: hidden;
    transition: height 0.3s ease-in-out;
    will-change: height;
    margin: 0;
    padding: 0;

    .im-menu-item {
      border-radius: var(--im-menu-radius);
      width: 100%;
      min-width: 100%;
      overflow: hidden;
      text-emphasis: none;
      word-wrap: normal;
      text-overflow: ellipsis;
    }
  }

  &__inner {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
    gap: 8px;
    color: inherit;
  }

  &__label {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 8px 20px;
    transition: all 0.3s;
    color: var(--im-menu-text-color);
    position: relative;
    &:hover {
      background-color: var(--im-menu-hover-bg-color);
    }
  }

  &__icon {
    margin-left: 8px;
    transition: all 0.3s ease-out;
    &.is-open {
      transform: rotate(180deg);
    }
  }

  &.is-disabled {
    cursor: not-allowed;
    color: var(--im-gray-color-6);
    &:hover {
      background-color: transparent;
    }
  }

  &__bar {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0;
    border-bottom: 3px solid var(--im-menu-active-text-color);
    border-radius: 3px;
  }
}

.fade-enter-active,
.fade-leave-active,
.fade-up-enter-active,
.fade-up-leave-active,
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: all 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleX(0);
}
.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: scaleY(0);
}

.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
  transform: scaleY(0.88);
}
</style>
