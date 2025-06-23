<template>
  <li
    :class="[
      bem.b(),
      bem.is('active', !!(props.active && props.active === props.value)),
      bem.is('disabled', props.disabled),
    ]"
    @click="handleClick"
    v-ripple="props.ripple && !props.disabled">
    <slot />
  </li>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import { ripple } from '@/directive';
// 注册指令,
const vRipple = ripple;

defineOptions({ name: 'ImListItem' });
const bem = useBem('list__item');
const emit = defineEmits(['click']);
const props = withDefaults(
  defineProps<{
    disabled?: boolean;
    value: string;
    active?: string;
    ripple?: boolean;
  }>(),
  {
    disabled: false,
    active: '',
    value: '',
    ripple: true,
  }
);

function handleClick(e: Event) {
  if (props.disabled) {
    // e.stopPropagation();
    return;
  }
  emit('click', props.value);
}
</script>

<style scoped lang="scss">
.im-list__item {
  padding: 4px 12px;
  margin: 0;
  text-wrap: nowrap;
  font-size: 14px;
  line-height: 24px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 0;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: var(--im-gray-color-8);

  &:hover {
    background-color: var(--im-rgb-color-1);
  }

  &.is-active {
    background-color: var(--im-primary-color-1);
    color: var(--im-primary-color-10);
  }

  &.is-disabled {
    cursor: not-allowed;
    color: var(--im-gray-color-6);
  }
}
</style>
