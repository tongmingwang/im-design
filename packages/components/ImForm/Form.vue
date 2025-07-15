<template>
  <form :class="[bem.b()]" ref="formRef">
    <slot />
  </form>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import type { FormProps } from './types';
import { useForm } from './useForm';

const bem = useBem('form');
defineOptions({ name: 'ImForm' });
const emit = defineEmits<{ (e: 'update:modelValue', value: any): void }>();
const props = withDefaults(defineProps<FormProps>(), {
  modelValue: () => ({}),
  rules: () => ({}),
  labelWidth: 100,
  labelPosition: 'right',
});
const { formRef, validate, reset } = useForm(props);

defineExpose({ validate, $el: formRef, reset });
</script>

<style scoped lang="scss">
.im-form {
  padding: 0;
  margin: 0;
}
</style>
