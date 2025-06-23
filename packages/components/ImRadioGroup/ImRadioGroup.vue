<template>
  <div
    :class="[
      bem.b(),
      bem.is('vertical', props.vertical),
      bem.is('button', props.variant === 'button'),
      bem.is('disabled', props.disabled),
      bem.is('readonly', props.readonly),
    ]">
    <component
      :is="item"
      v-for="item in radios"
      @change="onSelected"
      v-bind="props" />
  </div>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import { computed, useSlots } from 'vue';

defineOptions({ name: 'ImRadioGroup' });
const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void;
  (e: 'change', value: string | number): void;
}>();
const bem = useBem('radio-group');
const props = withDefaults(
  defineProps<{
    modelValue: string | number;
    disabled?: boolean;
    readonly?: boolean;
    size?: string | number;
    vertical?: boolean;
    variant?: 'button';
  }>(),
  {
    modelValue: '',
  }
);
const slots = useSlots();
const radios = computed(() => filterRadios(slots.default?.() || []));

function isRadio(slot: any) {
  return slot.type?.name === 'ImRadio';
}
function filterRadios(slotArr: Array<any>) {
  const result: Array<any> = [];

  slotArr.forEach((slot) => {
    if (isRadio(slot)) {
      result.push(slot);
    } else if (Array.isArray(slot?.children)) {
      result.push(...filterRadios(slot?.children));
    }
  });

  return result;
}

function onSelected(value: string | number) {
  emit('update:modelValue', value);
  emit('change', value);
}
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
