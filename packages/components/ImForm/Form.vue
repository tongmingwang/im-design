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
const props = withDefaults(defineProps<FormProps>(), {});

const { formRef, validate } = useForm(props);

defineExpose({ validate, $el: formRef });
</script>

<style scoped lang="scss">
.im-form {
  padding: 0;
  margin: 0;
}
</style>
