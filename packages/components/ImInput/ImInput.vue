<template>
  <div :class="[bem.b()]" :style="{
    '--in-input-size': (props.size || sizeToken || 36) + 'px',
  }">
    <input :class="[bem.e('input')]" v-model="val" v-bind="props" @input="handInput" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { type InputProps } from './InputProps';
import { useBem } from '@/utils/bem';
import { useToken } from '@/hooks/useToken';

defineOptions({ name: 'ImInput' });
const props = defineProps<InputProps>();
const { sizeToken } = useToken();
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'change', value: string): void;
}>();
const val = ref(props.modelValue);
const bem = useBem('input');

const handInput = () => {
  emit('update:modelValue', val.value);
  emit('change', val.value);
};
</script>

<style lang="scss">
  .im-input {
    display: inline-flex;
    align-items: center;
    border: 1px solid var(--im-gray-color-5);
    height: var(--in-input-size);
    border-radius: var(--im-radius);
    transition: all 0.2s ease-in-out;

    &:focus-within,
    &:hover {
      border-color: var(--im-primary-color-6);
    }

    .im-input__input {
      border: none;
      outline: none;
      padding: 0;
      flex: 1;
      padding: 0 8px;
      color: var(--im-gray-color-10);

      &::placeholder {
        color: var(--im-gray-color-6);
      }
    }
  }
</style>
