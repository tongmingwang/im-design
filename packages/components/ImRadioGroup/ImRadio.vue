<template>
  <label
    :class="[
      bem.b(),
      bem.is('checked', isActive),
      bem.is('button', isButton),
      bem.is('vertical', vertical),
      bem.is('disabled', props.disabled),
      bem.is('readonly', props.readonly),
    ]"
    :style="{
      '--im-radio-size': size,
    }"
    v-ripple="!(props.disabled || props.readonly) && isButton">
    <div
      :class="[bem.e('state')]"
      v-ripple="!(props.disabled || props.readonly)"
      v-if="!isButton">
      <Transition name="fade" :appear="true" mode="out-in" :duration="200">
        <svg
          :class="[bem.e('svg')]"
          v-if="isActive"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path
            d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"></path>
        </svg>
        <svg
          :class="[bem.e('svg')]"
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="currentColor"
          v-else>
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"></path>
        </svg>
      </Transition>
    </div>
    <div :class="[bem.e('label')]">
      <slot>{{ props.label }}</slot>
    </div>
    <input
      type="radio"
      :disabled="props.disabled"
      :readonly="props.readonly"
      @change="setActive"
      :checked="isActive"
      :class="[bem.e('input')]"
      :value="props.value" />
  </label>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import { ripple } from '@/directive';
import type { RadioProps } from './types';
import { useRadio } from './hooks';
const vRipple = ripple;

defineOptions({ name: 'ImRadio' });
const bem = useBem('radio');
const props = withDefaults(defineProps<RadioProps>(), {
  value: '',
});
const { isActive, size, setActive, isButton, vertical } = useRadio(props);
</script>

<style scoped lang="scss">
.im-radio {
  display: flex;
  align-items: center;
  color: var(--im-gray-color-10);
  line-height: 24px;
  cursor: pointer;
  background-color: transparent;
  height: var(--im-radio-size);
  font-size: 14px;

  &__state {
    color: var(--im-gray-color-8);
    cursor: inherit;
    width: var(--im-radio-size);
    height: var(--im-radio-size);
    min-width: var(--im-radio-size);
    min-height: var(--im-radio-size);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.3s ease;

    &:hover {
      background-color: var(--im-rgb-color-1);
    }
  }

  &__svg {
    --svg-size: calc(var(--im-radio-size, 36px) * 0.6);
    width: var(--svg-size);
    height: var(--svg-size);
  }

  &__input {
    position: absolute;
    z-index: -9999;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
    outline: none;
    overflow: hidden;
  }

  &.is-checked {
    .im-radio__state {
      color: var(--im-primary-color-8);
    }
  }

  &.is-disabled {
    color: var(--im-gray-color-6);
    cursor: not-allowed;
    .im-radio__state {
      pointer-events: none;
      color: inherit;
    }
  }
  &.is-readonly {
    pointer-events: none;
  }

  &.is-button {
    border: 1px solid var(--im-gray-color-5);
    background-color: var(--im-bg-content-color);
    padding: 0 calc(var(--im-radio-size, 36px) * 0.45);
    transition: all 0.3s ease;
    position: relative;
    z-index: 0;
    &:hover {
      color: var(--im-primary-color-8);
      z-index: 1;
      border-color: var(--im-primary-color-8);
    }
    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    &:not(:first-child) {
      margin-left: -1px;
    }

    &.is-checked {
      color: var(--im-gray-color-1);
      border-color: var(--im-primary-color-8);
      background-color: var(--im-primary-color-8);
    }
    &.is-disabled {
      color: var(--im-gray-color-6);
      border-color: var(--im-gray-color-5);
      background-color: var(--im-gray-color-3);
    }

    &.is-vertical {
      border-radius: 0;
      margin: 0;
      &:first-child {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }
      &:last-child {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      }
      &:not(:first-child) {
        margin-top: -1px;
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 200ms ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0.66;
  transform: scale(0.88);
}
</style>
