<template>
  <li
    :class="[
      bem.b(),
      bem.is('active', isActive),
      props.color && bem.m(props.color),
      bem.is('disabled', props.disabled),
    ]"
    @click="handleClick"
    v-ripple="!props.disabled">
    <slot>{{ props.label }}</slot>
    <Transition
      name="fade"
      :duration="{ enter: 300, leave: 300 }"
      mode="out-in">
      <div v-if="isActive" :class="[bem.e('bar')]"></div>
    </Transition>
  </li>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import { computed, inject } from 'vue';
import { ripple } from '@/directive';
// 注册指令,
const vRipple = ripple;

const bem = useBem('menu-item');
defineOptions({
  name: 'ImMenuItem',
});
const emit = defineEmits<{
  (e: 'change', name: string | number): void;
}>();
const props = withDefaults(
  defineProps<{
    activeName?: string | number;
    disabled?: boolean;
    vertical?: boolean;
    color?: 'primary' | 'success' | 'warning' | 'error' | '';
    name: string | number;
    label?: string | number;
  }>(),
  {
    disabled: false,
    vertical: false,
    color: '',
    name: '',
    label: undefined,
  }
);
const MenuInject = inject('ImMenuProvider', {} as any);
const isActive = computed(
  () =>
    !!(
      (props.activeName === props.name && isValue(props.name)) ||
      (isValue(props.name) && MenuInject?.isActive?.(props.name))
    )
);

function isValue(val: string | number | undefined) {
  return val || val === 0;
}

function handleClick(e: Event) {
  e.stopPropagation();
  if (props.disabled || !isValue(props.name)) return;
  emit('change', props.name);
  MenuInject?.setActive?.(props.name);
}
</script>

<style scoped lang="scss">
.im-menu-item {
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
    &.im-menu-item--#{$color} {
      background-color: var(--im-#{$color}-color-8);
      color: var(--im-#{$color}-color-1);
      .im-menu-item__bar {
        background-color: var(--im-#{$color}-color-1);
      }
      &.is-active {
        color: var(--im-#{$color}-color-1);
        .im-menu-item__bar {
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

  .im-menu-item__bar {
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
