<template>
  <li
    :class="[
      bem.b(),
      props.color && bem.m(props.color),
      bem.is('active', isActive),
      bem.is('disabled', props.disabled),
    ]"
    @click="handleClick"
    v-ripple="!props.disabled">
    <slot>{{ props.label }}</slot>
  </li>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import { computed } from 'vue';
import { ripple } from '@/directive';
// 注册指令,
const vRipple = ripple;
const bem = useBem('tab');
defineOptions({ name: 'ImTab' });

const emit = defineEmits<{ (e: 'change', name: string | number): void }>();
const props = withDefaults(
  defineProps<{
    name: string | number | undefined;
    label?: string;
    modelValue?: string;
    disabled?: boolean;
    color?: string;
  }>(),
  {
    label: '',
    modelValue: '',
    name: '',
    disabled: false,
    color: '',
  }
);
const isActive = computed(
  () => !!(isValue(props.name) && props.modelValue === props.name)
);
function handleClick(e: Event) {
  e.stopPropagation();
  if (props.disabled) return;
  isValue(props.name) && emit('change', props.name);
}
function isValue(val: string | number | undefined) {
  return val || val === 0;
}
</script>

<style scoped lang="scss">
.im-tab {
  display: flex;
  margin: 0;
  overflow: hidden;
  text-wrap: nowrap;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  font-size: 14px;
  min-width: fit-content;
  transition: all 0.3s ease-in-out;
  user-select: none;
  position: relative;
  z-index: 1;
  color: var(--im-gray-color-8);

  &:hover {
    background: var(--im-rgb-color-1);
  }
  &.is-active {
    color: var(--im-primary-color-8);
  }
  &.is-disabled {
    cursor: not-allowed;
    color: var(--im-gray-color-6);
    background: transparent;
  }

  // 色彩
  @each $color in primary, error, success, warning {
    &.im-tab--#{$color} {
      color: var(--im-#{$color}-color-2);
      .im-tab__bar {
        background-color: var(--im-gray-color-1);
        bottom: 0px;
      }
      &.is-active {
        color: var(--im-#{$color}-color-1);
      }
      &.is-disabled {
        cursor: not-allowed;
        color: var(--im-#{$color}-color-4);
        background: transparent;
      }
    }
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-in-out;
}
.slide-enter-from,
.slide-leave-to {
  transform: scale(0);
  opacity: 0;
}
</style>
