<template>
  <button
    v-bind="attrs"
    :class="classname"
    @click="handleClick"
    ref="buttonRef"
    :style="style"
    v-ripple="!props.disabled && !props.loading"
    :tabindex="props.tabindex || 0"
    :type="props.type || 'button'"
    :disabled="props.disabled || props.loading">
    <span :class="[bem.e('loading')]" v-if="props.loading">
      <svg fill="currentColor" viewBox="0 0 1024 1024" width="1em" height="1em">
        <path
          d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3 0.1 19.9-16 36-35.9 36z"></path>
      </svg>
    </span>
    <slot v-if="!hideContent">{{ props.text }}</slot>
  </button>
</template>

<script setup lang="ts">
import { type ButtonProps } from './ButtonProp';
import { useBem } from '@/utils/bem';
import { computed, ref, useAttrs } from 'vue';
import { useToken } from '@/hooks/useToken';
import { getSizeValue } from '@/utils';
import { ripple } from '@/directive';
// 注册指令,
const vRipple = ripple;

defineOptions({ name: 'ImButton' });
const props = defineProps<ButtonProps>();
const emit = defineEmits<{ (e: 'click', event: Event): void }>();
const bem = useBem('button');
const { sizeToken } = useToken();
const attrs = useAttrs();
const classname = computed(() => {
  return [
    bem.b(),
    props.color && bem.m(props.color),
    props.shape && bem.m(props.shape),
    props.variant && bem.m(props.variant),
    bem.is('disabled', props.disabled),
    bem.is('loading', props.loading),
  ].filter(Boolean);
});
const buttonRef = ref<HTMLButtonElement>();
const style = computed(() => {
  let s = +(props.size || sizeToken.value || 36);
  return {
    '--im-button-size': getSizeValue(s),
    '--im-button-padding': (s * 0.45).toFixed(0) + 'px',
    width: props.width,
  };
});
defineExpose({
  ref: buttonRef,
  $el: buttonRef,
  focus: () => buttonRef.value?.focus(),
  blur: () => buttonRef.value?.blur(),
});

// 不需要显示内容
const hideContent = computed(() => {
  return props.loading && ['square', 'circle'].includes(props.shape!);
});

const handleClick = (e: Event) => {
  if (props.disabled || props.loading) return;
  emit('click', e);
};
</script>

<style lang="scss">
@mixin btn-colors($bg, $color, $borderColor) {
  background-color: $bg;
  border-color: $borderColor;
  color: $color;
}

@keyframes loading {
  to {
    transform: rotate(360deg);
  }
}

.im-button {
  border: 1px solid transparent;
  outline: none;
  user-select: none;
  cursor: pointer;
  border-radius: var(--im-radius);
  height: var(--im-button-size);
  padding: 0 var(--im-button-padding);
  letter-spacing: 0.02857em;
  font-family: inherit;
  transition: all 0.2s ease-in-out;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  overflow: hidden;
  vertical-align: middle;
  text-wrap: nowrap;
  @include btn-colors(
    var(--im-bg-content-color),
    var(--im-gray-color-10),
    var(--im-gray-color-5)
  );

  &:hover {
    @include btn-colors(
      var(--im-gray-color-1),
      var(--im-primary-color-8),
      var(--im-primary-color-8)
    );
  }

  &.is-loading {
    pointer-events: none;
    opacity: 0.75;
  }

  &.is-disabled {
    cursor: not-allowed;
    @include btn-colors(
      var(--im-gray-color-3),
      var(--im-gray-color-6),
      var(--im-gray-color-5)
    );

    &:hover {
      @include btn-colors(
        var(--im-gray-color-3),
        var(--im-gray-color-6),
        var(--im-gray-color-5)
      );
    }
  }
}

@each $color in (primary, success, warning, error) {
  .im-button--#{$color} {
    border-width: 0;
    @include btn-colors(
      var(--im-#{$color}-color-8),
      var(--im-gray-color-1),
      var(--im-#{$color}-color-8)
    );

    &:hover {
      @include btn-colors(
        var(--im-#{$color}-color-9),
        var(--im-gray-color-1),
        var(--im-#{$color}-color-9)
      );
    }

    &.is-disabled,
    &.is-disabled:hover,
    &.is-disabled:active {
      cursor: not-allowed;
      @include btn-colors(
        var(--im-#{$color}-color-3),
        var(--im-gray-color-1),
        var(--im-#{$color}-color-3)
      );
    }

    &.im-button--text {
      color: var(--im-#{$color}-color-8);

      &:hover {
        background-color: var(--im-#{$color}-color-1);
        border-color: transparent;
        color: var(--im-#{$color}-color-8);
      }

      &.is-disabled,
      &.is-disabled:hover {
        @include btn-colors(
          transparent,
          var(--im-#{$color}-color-4),
          transparent
        );
      }
    }

    &.im-button--tonal {
      @include btn-colors(
        var(--im-#{$color}-color-1),
        var(--im-#{$color}-color-8),
        var(--im-#{$color}-color-1)
      );

      &:hover {
        @include btn-colors(
          var(--im-#{$color}-color-1),
          var(--im-#{$color}-color-9),
          var(--im-#{$color}-color-2)
        );
      }

      &.is-disabled,
      &.is-disabled:hover {
        @include btn-colors(
          var(--im-#{$color}-color-1),
          var(--im-#{$color}-color-4),
          var(--im-#{$color}-color-1)
        );
      }
    }

    &.im-button--outlined {
      color: var(--im-#{$color}-color-8);
      border-width: 1px;

      &:hover {
        background-color: var(--im-#{$color}-color-1);
      }

      &.is-disabled,
      &.is-disabled:hover {
        @include btn-colors(
          transparent,
          var(--im-#{$color}-color-4),
          var(--im-#{$color}-color-3)
        );
      }
    }
  }
}

.im-button--round {
  border-radius: calc(var(--im-button-size) / 2);
}

.im-button--circle {
  border-radius: 50%;
  max-width: var(--im-button-size) !important;
  width: var(--im-button-size);
  min-width: var(--im-button-size);
  padding: 0;

  .im-button__loading {
    margin-right: 0;
  }
}

.im-button--square {
  max-width: var(--im-button-size) !important;
  width: var(--im-button-size);
  min-width: var(--im-button-size);
  padding: 0;

  .im-button__loading {
    margin-right: 0;
  }
}

.im-button--text {
  border: none;
  background-color: transparent;
  padding: 6px 8px;

  &:hover {
    background-color: var(--im-rgb-color-1);
    color: var(--im-gray-color-10);
  }
}

.im-button--tonal {
  background-color: var(--im-rgb-color-1);
  border: none;

  &:hover {
    background-color: var(--im-rgb-color-1);
    color: var(--im-gray-color-10);
  }
}

.im-button--outlined {
  background-color: var(--im-gray-color-1);
}

.im-button__loading {
  animation: loading 1.2s linear infinite;
  margin-right: 8px;
}
</style>
