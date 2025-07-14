<template>
  <div :class="[bem.e('item')]">
    <div :class="[bem.e('label')]" v-if="props.label || $slots.label">
      <slot name="label">{{ props.label }}</slot>
    </div>
    <div :class="[bem.e('content'), bem.is('error', !!error)]" ref="contentRef">
      <slot />
      <div :class="[bem.e('suffix')]" v-if="error">
        <slot name="suffix">
          <ImIcon name="close-circle-fill" size="18px" />
        </slot>
      </div>
      <Transition name="fade" appear :duration="300">
        <div :class="[bem.e('error--text')]" v-show="error">
          {{ error }}
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import type { FormItemProps } from './types';
import { useFormItem } from './useForm';
import { ImIcon } from '@/components';

const bem = useBem('form');
defineOptions({ name: 'ImFormItem' });

const props = withDefaults(defineProps<FormItemProps>(), {
  label: '',
});
const { error, contentRef } = useFormItem(props);
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

  &__suffix {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    color: var(--im-error-color-8);
  }

  &__content {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    padding: 0;
    margin: 0;
    &.is-error {
      position: relative;
      background-color: var(--im-error-color-1);
      &::after {
        position: absolute;
        box-sizing: border-box;
        content: '';
        display: block;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 1px solid var(--im-error-color-8);
        z-index: 10;
        border-radius: var(--im-radius);
        pointer-events: none;
        background-color: transparent;
      }
    }
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

<style lang="scss">
.im-form__content.is-error {
  .im-input,
  .im-textarea,
  .im-select__trigger,
  .im-date-trigger,
  input {
    border: none !important;
  }
}
</style>
