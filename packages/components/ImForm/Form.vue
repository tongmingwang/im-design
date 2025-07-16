<template>
  <form :class="[bem.b()]" ref="formRef">
    <slot />
  </form>
</template>

<script setup lang="ts">
import type { FormProps } from './types';
import { useBem } from '@/utils/bem';
import { useForm } from './useForm';

defineOptions({ name: 'ImForm' });
const bem = useBem('form');
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
