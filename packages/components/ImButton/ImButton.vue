<template>
  <button :class="classname" :style="style" v-ripple>
    <slot>{{ props.text }}</slot>
  </button>
</template>

<script setup lang="ts">
import { type ButtonProps } from './ButtonProp';
import { useBem } from '@/utils/bem';
import { computed } from 'vue';
import { useToken } from '@/hooks/useToken';
defineOptions({ name: 'ImButton' });
const props = defineProps<ButtonProps>();
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
  };
});
</script>

<style lang="scss">
.im-button {
  border: 1px solid var(--im-gray-color-5);
  outline: none;
  user-select: none;
  cursor: pointer;
  background-color: var(--im-gray-color-1);
  color: var(--im-gray-color-8);
  border-radius: var(--im-radius);
  height: var(--im-button-size);
  padding: 0 var(--im-button-padding);
  letter-spacing: 0.125em;
  font-family: inherit;
  transition: all 0.2s ease-out;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  vertical-align: middle;
  text-wrap: nowrap;
  &:hover {
    color: var(--im-primary-color-7);
    border-color: var(--im-primary-color-7);
  }
}

@each $color in (primary, success, warning, error) {
  .im-button--#{$color} {
    background-color: var(--im-#{$color}-color-7);
    color: var(--im-gray-color-1);
    border-color: var(--im-#{$color}-color-7);
    &:hover {
      color: var(--im-gray-color-1);
      background-color: var(--im-#{$color}-color-8);
      border-color: var(--im-#{$color}-color-8);
    }

    &.im-button--text {
      color: var(--im-#{$color}-color-7);
      &:hover {
        background-color: var(--im-#{$color}-color-2);
        border-color: transparent;
        color: var(--im-#{$color}-color-8);
      }
    }

    &.im-button--tonal {
      color: var(--im-#{$color}-color-7);
      background-color: var(--im-#{$color}-color-1);
      &:hover {
        background-color: var(--im-#{$color}-color-2);
        color: var(--im-#{$color}-color-8);
      }
    }

    &.im-button--outlined {
      color: var(--im-#{$color}-color-7);
      &:hover {
        background-color: var(--im-#{$color}-color-2);
      }
    }
  }
}

.im-button--round {
  border-radius: calc(var(--im-button-size) / 2);
}
.im-button--circle {
  border-radius: 50%;
  width: var(--im-button-size);
  padding: 0;
  max-width: var(--im-button-size);
}
.im-button--square {
  max-width: var(--im-button-size);
}
.im-button--text {
  border: none;
  background-color: transparent;
  &:hover {
    background-color: var(--im-rgb-color-2);
  }
}

.im-button--tonal {
  background-color: var(--im-rgb-color-1);
  border: none;
  &:hover {
    background-color: var(--im-rgb-color-2);
  }
}

.im-button--outlined {
  background-color: var(--im-gray-color-1);
}
</style>
