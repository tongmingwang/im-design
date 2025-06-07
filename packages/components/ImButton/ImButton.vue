<template>
  <button :class="classname" @click="handleClick" :style="style" v-ripple="true" :tabindex="props.tabindex || 0"
    :type="props.type || 'button'" :disabled="props.disabled || props.loading">
    <span :class="[bem.e('loading')]" v-if="props.loading">
      <Loading />
    </span>
    <slot v-if="!hideContent">{{ props.text }}</slot>
  </button>
</template>

<script setup lang="ts">
import { type ButtonProps } from './ButtonProp';
import { useBem } from '@/utils/bem';
import { computed } from 'vue';
import { useToken } from '@/hooks/useToken';
import Loading from './Loading.svg';
defineOptions({ name: 'ImButton' });
const props = defineProps<ButtonProps>();
const emit = defineEmits<{ (e: 'click'): void }>();
const bem = useBem('button');
const { sizeToken } = useToken();

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

const style = computed(() => {
  let s = +(props.size || sizeToken.value || 36);
  return {
    '--im-button-size': s + 'px',
    '--im-button-padding': (s * 0.45).toFixed(0) + 'px',
    width: props.width
  };
});

// 不需要显示内容
const hideContent = computed(() => {
  return props.loading && ['square', 'circle'].includes(props.shape!);
});

const handleClick = () => {
  if (props.disabled || props.loading) return;
  emit('click');
};
</script>

<style lang="scss" scoped>
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
    @include btn-colors(var(--im-bg-content-color),
      var(--im-gray-color-10),
      var(--im-gray-color-5));

    &:hover {
      @include btn-colors(var(--im-gray-color-1),
        var(--im-primary-color-8),
        var(--im-primary-color-8));
    }

    &.is-loading {
      pointer-events: none;
      opacity: 0.75;
    }

    &.is-disabled {
      cursor: not-allowed;
      @include btn-colors(var(--im-gray-color-3),
        var(--im-gray-color-6),
        var(--im-gray-color-5));

      &:hover {
        @include btn-colors(var(--im-gray-color-3),
          var(--im-gray-color-6),
          var(--im-gray-color-5));
      }
    }
  }

  @each $color in (primary, success, warning, error) {
    .im-button--#{$color} {
      border-width: 0;
      @include btn-colors(var(--im-#{$color}-color-8),
        var(--im-gray-color-1),
        var(--im-#{$color}-color-8));

      &:hover {
        @include btn-colors(var(--im-#{$color}-color-9),
          var(--im-gray-color-1),
          var(--im-#{$color}-color-9));
      }

      &.is-disabled,
      &.is-disabled:hover,
      &.is-disabled:active {
        cursor: not-allowed;
        @include btn-colors(var(--im-#{$color}-color-3),
          var(--im-gray-color-1),
          var(--im-#{$color}-color-3));
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
          @include btn-colors(transparent,
            var(--im-#{$color}-color-4),
            transparent);
        }
      }

      &.im-button--tonal {
        @include btn-colors(var(--im-#{$color}-color-1),
          var(--im-#{$color}-color-8),
          var(--im-#{$color}-color-1));

        &:hover {
          @include btn-colors(var(--im-#{$color}-color-2),
            var(--im-#{$color}-color-9),
            var(--im-#{$color}-color-2));
        }

        &.is-disabled,
        &.is-disabled:hover {
          @include btn-colors(var(--im-#{$color}-color-1),
            var(--im-#{$color}-color-4),
            var(--im-#{$color}-color-1));
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
          @include btn-colors(transparent,
            var(--im-#{$color}-color-4),
            var(--im-#{$color}-color-3));
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

    &:hover {
      background-color: var(--im-rgb-color-2);
      color: var(--im-gray-color-10);
    }
  }

  .im-button--tonal {
    background-color: var(--im-rgb-color-1);
    border: none;

    &:hover {
      background-color: var(--im-rgb-color-2);
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
