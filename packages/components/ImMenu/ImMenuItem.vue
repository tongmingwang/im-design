<template>
  <div
    :class="[
      bem.b(),
      bem.is('active', active),
      bem.is('disabled', props.disabled),
      bem.is('vertical', vertical),
    ]"
    :style="{
      paddingLeft: vertical ? `${16 * paddingLeft}px` : '',
    }"
    @click="handleClick"
    v-ripple="!props.disabled">
    <div :class="[bem.e('label')]">
      <slot>{{ props.label }}</slot>
    </div>
    <template v-if="!isSub && !vertical">
      <Transition name="fade" :duration="300" mode="out-in">
        <div v-show="active" :class="[bem.e('bar')]"></div>
      </Transition>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import { ripple } from '@/directive';
import { useMenuInject, useMenuItem } from './useProvider';

// 注册指令,
const vRipple = ripple;

const bem = useBem('menu-item');
defineOptions({
  name: 'ImMenuItem',
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

const { active, setActiveName, vertical, paddingLeft } = useMenuInject(props);
const { isSub } = useMenuItem();

function handleClick(e: Event) {
  if (props.disabled) return;
  setActiveName(props.name);
}
</script>

<style lang="scss" scoped>
.im-menu-item {
  padding: 6px 20px;
  margin: 0;
  height: 100%;
  cursor: pointer;
  user-select: none;
  color: var(--im-menu-text-color);
  background-color: var(--im-menu-bg-color);
  font-size: 14px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transition: all 0.3s;
  text-wrap: nowrap;
  height: var(--im-menu-item-height);
  border-radius: var(--im-menu-radius);

  &__bar-up {
    width: 3px;
    height: 1em;
    border: none;
    border-radius: 3px;
    background-color: var(--im-menu-active-text-color);
  }

  .im-menu-item__label {
    flex: 1;
    white-space: nowrap;
    word-break: break-all;
    text-align: left;
  }

  &.is-vertical {
    width: 100%;
    justify-content: flex-start;
    padding: 8px 16px;
    border-radius: var(--im-menu-radius);
    height: 40px;
    .im-menu-item__label {
      flex: 1;
      white-space: wrap;
      text-align: left;
    }
  }

  &:hover {
    background-color: var(--im-menu-hover-bg-color);
  }
  &.is-active {
    color: var(--im-menu-active-text-color);
    background-color: var(--im-menu-active-bg-color);
  }

  &.is-disabled {
    cursor: not-allowed;
    color: var(--im-gray-color-6);
    &:hover {
      background-color: transparent;
    }
  }

  .im-menu-item__bar {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3px;
    border-radius: 3px;
    border: none;
    border-bottom: 3px solid var(--im-menu-active-text-color);
  }
}

.fade-enter-active,
.fade-leave-active,
.fade-up-enter-active,
.fade-up-leave-active {
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
</style>
