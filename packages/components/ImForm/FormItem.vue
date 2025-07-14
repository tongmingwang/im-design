<template>
  <div :class="[bem.e('item')]">
    <div :class="[bem.e('label')]" v-if="props.label || $slots.label">
      <slot name="label">{{ props.label }}</slot>
    </div>
    <div :class="[bem.e('content')]" ref="contentRef">
      <slot />
      <Transition name="fade" appear :duration="300">
        <div :class="[bem.e('error--text')]" v-show="error">{{ error }}</div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import type { FormItemProps } from './types';
import { computed, ref } from 'vue';
import { useFormItem } from './useForm';

const bem = useBem('form');
defineOptions({ name: 'ImFormItem' });

const props = withDefaults(defineProps<FormItemProps>(), {
  label: '',
});
const { error, contentRef } = useFormItem(props);

const onChange = (value: any) => {
  console.log(value, 'value');
};
</script>

<style scoped lang="scss">
.im-form {
  &__item {
    margin: 0;
    padding: 0;
    margin-bottom: 18px;
  }

  &__error--text {
    color: var(--im-error-color-8);
    font-size: 12px;
    margin: 0;
    padding: 0;
    line-height: 1;
    position: absolute;
    top: 100%;
    left: 0;
    padding-top: 2px;
  }

  &__label {
    line-height: 22px;
    margin-bottom: 8px;
    color: var(--im-gray-color-8);
  }

  &__content {
    position: relative;
  }
}

.fade-enter-active,
.fade-enter-active {
  transition: all 0.3s ease-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
