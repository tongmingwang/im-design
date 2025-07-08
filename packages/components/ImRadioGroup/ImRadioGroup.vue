<template>
  <div
    :class="[
      bem.b(),
      bem.is('vertical', props.vertical),
      bem.is('button', props.variant === 'button'),
      bem.is('disabled', props.disabled),
      bem.is('readonly', props.readonly),
    ]">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import { useRadioGroup } from './hooks';
import type { RadioGroupProps } from './types';

defineOptions({ name: 'ImRadioGroup' });
const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void;
  (e: 'change', value: string | number): void;
}>();
const bem = useBem('radio-group');
const props = withDefaults(defineProps<RadioGroupProps>(), {
  modelValue: '',
});
useRadioGroup(props, emit);
</script>

<style scoped lang="scss">
.im-radio-group {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  &.is-vertical {
    flex-direction: column;
    gap: 0;
  }

  &.is-button {
    gap: 0;
  }
}
</style>
