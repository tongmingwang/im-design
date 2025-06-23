<template>
  <div
    :class="[
      bem.b(),
      props.color && bem.m(props.color),
      bem.is('dot', props.dot),
    ]"
    :style="{
      '--im-badge-size': sizeValue,
    }">
    <slot />
    <sub :class="[bem.e('content')]">
      <slot name="content" v-if="!props.dot">{{ props.value }}</slot>
    </sub>
  </div>
</template>

<script setup lang="ts">
import { getSizeValue } from '@/utils';
import { useBem } from '@/utils/bem';
import { computed } from 'vue';

const bem = useBem('badge');
defineOptions({ name: 'ImBadge' });
const props = withDefaults(
  defineProps<{
    value?: number;
    size?: number | string;
    color?: 'primary' | 'success' | 'warning' | 'danger' | '';
    dot?: boolean;
  }>(),
  {
    value: undefined,
    size: '16px',
    color: '',
    dot: false,
  }
);

const sizeValue = computed(() => getSizeValue(props.size));
</script>

<style scoped lang="scss">
.im-badge {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  overflow: visible;

  &__content {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    z-index: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: var(--im-badge-size, 12px);
    white-space: nowrap;
    background: var(--im-gray-color-10);
    color: var(--im-gray-color-1);
    border-radius: var(--im-badge-size, 12px);
    padding: 0 4px;
  }

  &.is-dot {
    .im-badge__content {
      width: var(--im-badge-size, 12px);
      height: var(--im-badge-size, 12px);
      padding: 0;
      border-radius: 50%;
      min-width: var(--im-badge-size, 12px);
      min-height: var(--im-badge-size, 12px);
    }
  }

  @each $color in (primary, success, warning, error) {
    &--#{$color} {
      .im-badge__content {
        background: var(--im-#{$color}-color-8);
        color: var(--im-gray-color-1);
      }
    }
  }
}
</style>
