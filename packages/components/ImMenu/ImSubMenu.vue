<template>
  <li
    :class="[
      bem.b(),
      bem.is('active', isActive),
      props.color && bem.m(props.color),
      bem.is('disabled', props.disabled),
    ]"
    @mouseenter="handleClick"
    @click="handleClick"
    @mouseleave="onLeave"
    ref="triggerRef"
    v-ripple="!props.disabled">
    <slot>{{ props.label }} </slot>
    <Transition
      name="fade"
      :duration="{ enter: 300, leave: 300 }"
      mode="out-in">
      <div v-if="isActive" :class="[bem.e('bar')]"></div>
    </Transition>

    <ImLayer
      :visible="show"
      :arrow="false"
      :getTriggerContainer="getTriggerContainer">
      <div
        :class="[bem.e('content')]"
        ref="contentRef"
        @mouseenter="handleClick"
        @mouseleave="onLeave">
        <slot name="content"></slot>
      </div>
    </ImLayer>
  </li>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import { computed, ref, watch } from 'vue';
import ImLayer from '../Common/ImLayer.vue';
import { debounce } from '@/utils';
import { ripple } from '@/directive';
// 注册指令,
const vRipple = ripple;

const show = ref(false);
const bem = useBem('sub-menu');
const triggerRef = ref();
const contentRef = ref<HTMLElement | null>();
defineOptions({
  name: 'ImSubMenu',
});

const props = withDefaults(
  defineProps<{
    disabled?: boolean;
    vertical?: boolean;
    color?: 'primary' | 'success' | 'warning' | 'error' | '';
    name: string | number;
    label?: string | number;
    subActives?: Array<string | number>;
    activeName?: string | number;
  }>(),
  {
    disabled: false,
    vertical: false,
    color: '',
    name: '',
    label: undefined,
    subActives: () => [],
  }
);

const isActive = computed(
  () => !!(props.subActives.includes(props.name) && isValue(props.name))
);

watch(
  () => show.value,
  (val) => {
    document.removeEventListener('click', docHandleClick, { capture: true });
    if (val) {
      document.addEventListener('click', docHandleClick, {
        passive: true,
        capture: true,
      });
    }
  }
);
function getTriggerContainer() {
  return triggerRef.value;
}
function isValue(val: string | number | undefined) {
  return val || val === 0;
}

const handle = debounce((bol: boolean) => {
  show.value = bol;
}, 100);

function docHandleClick(e: Event) {
  const target = e.target as HTMLElement;
  const cEl = contentRef.value;
  if (
    cEl &&
    cEl.contains(target) &&
    !target.classList.contains('is-disabled')
  ) {
    handle(false);
  }
}
function handleClick(e: Event) {
  e.stopPropagation();
  if (props.disabled) return;
  handle(true);
}

function onLeave() {
  handle(false);
}
</script>

<style scoped lang="scss">
.im-sub-menu {
  padding: 0 20px;
  margin: 0;
  height: 100%;
  cursor: pointer;
  user-select: none;
  color: var(--im-gray-color-8);
  font-size: 14px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;

  &:hover {
    background-color: var(--im-rgb-color-1);
  }
  &.is-active {
    color: var(--im-primary-color-8);
  }

  @each $color in primary, success, warning, error {
    &.im-sub-menu--#{$color} {
      background-color: var(--im-#{$color}-color-8);
      color: var(--im-#{$color}-color-1);
      .im-sub-menu__bar {
        background-color: var(--im-#{$color}-color-1);
      }
      &.is-active {
        color: var(--im-#{$color}-color-1);
        .im-sub-menu__bar {
          background-color: var(--im-#{$color}-color-1);
        }
      }
      &.is-disabled {
        color: var(--im-#{$color}-color-3);
        &:hover {
          background-color: transparent;
        }
      }
    }
  }

  &.is-disabled {
    cursor: not-allowed;
    color: var(--im-gray-color-6);
    &:hover {
      background-color: transparent;
    }
  }

  .im-sub-menu__bar {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    border-radius: 2px;
    background-color: var(--im-primary-color-8);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleX(0);
}
</style>

<style lang="scss">
.im-sub-menu__content {
  padding: 4px 0;
  min-width: 100%;
  border-radius: inherit;

  .im-menu-item {
    height: 36px;
    padding: 0 12px;
    justify-content: flex-start;

    // 去掉bar
    .im-menu-item__bar {
      display: none;
    }
  }
}
</style>
