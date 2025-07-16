<template>
  <div :class="[bem.e('item'), className]" :style="formItemStyles">
    <div
      :class="[bem.e('label'), bem.is('required', props.required)]"
      v-if="props.label || $slots.label">
      <slot name="label">{{ props.label }}</slot>
    </div>
    <div :class="[bem.e('content'), bem.is('show-msg', !!message)]">
      <slot />
      <Transition name="right-in" :duration="300">
        <div :class="[bem.e('suffix')]" v-if="message">
          <slot name="suffix">
            <ImIcon
              name="close-circle-fill"
              size="18px"
              v-if="props.showIcon" />
          </slot>
        </div>
      </Transition>
      <Transition name="fade" appear :duration="300">
        <div :class="[bem.e('message')]" v-show="message">
          {{ message }}
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
  showMessage: true,
  labelWidth: '',
  showIcon: false,
});
const { message, formItemStyles, className } = useFormItem(props);
</script>

<style scoped lang="scss">
.im-form {
  &__item {
    margin: 0;
    padding: 0;
    margin-bottom: 18px;
    height: fit-content;
  }
  &__item--right,
  &__item--left {
    display: flex;
    align-items: center;
    gap: 0;
    .im-form__label {
      width: var(--im-form-label-width);
      margin: 0;
      margin-right: 12px;
      text-align: inherit;
    }
  }

  &__item--left {
    text-align: left;
  }
  &__item--right {
    text-align: right;
  }
  &__item--top {
    display: flex;
    flex-direction: column;
    gap: 0;
    .im-form__label {
      width: 100%;
      margin: 0;
      margin-bottom: 8px;
      text-align: left;
    }
  }

  &__message {
    color: var(--im-form-message-color);
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

    &.is-required::before {
      content: '*';
      color: var(--im-form-message-color);
      margin-right: 4px;
      font-size: 1em;
      font-family: 'SimSun', 'sans-serif';
    }
  }

  &__suffix {
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
    color: var(--im-form-message-color);
  }

  &__content {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    padding: 0;
    margin: 0;
    transition: all 0.3s ease-out;
    &.is-show-msg {
      position: relative;
      background-color: transparent;
      &::after {
        position: absolute;
        box-sizing: border-box;
        transition: all 0.3s ease-out;
        content: '';
        display: block;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 1px solid var(--im-form-message-color);
        z-index: 10;
        border-radius: var(--im-radius);
        pointer-events: none;
        background-color: transparent;
      }
    }
  }
}

.fade-enter-active,
.fade-enter-active,
.right-in-enter-active,
.right-in-leave-active {
  transition: all 0.3s ease-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.right-in-enter-from,
.right-in-leave-to {
  opacity: 0;
  transform: scale(0.5);
}
</style>

<style lang="scss">
.im-form__content.is-show-msg {
  .im-input,
  .im-textarea,
  .im-select__trigger,
  .im-date-trigger,
  input {
    border-color: transparent !important;
  }
}
</style>
