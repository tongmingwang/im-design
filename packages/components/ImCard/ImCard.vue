<template>
  <div
    :class="[
      bem.b(),
      bem.is('borderless', props.borderless),
      props.shadow ? bem.m(props.shadow) : '',
    ]">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';

defineOptions({ name: 'ImCard' });
const bem = useBem('card');
const props = withDefaults(
  defineProps<{
    title?: string;
    borderless?: boolean;
    shadow?: 'always' | 'hover' | '';
  }>(),
  {
    title: '',
    borderless: false,
    shadow: '',
  }
);
</script>

<style scoped lang="scss">
.im-card {
  box-sizing: border-box;
  border: 1px solid var(--im-gray-color-4);
  border-radius: var(--im-radius);
  background-color: var(--im-bg-content-color, #fff);
  transition: box-shadow 0.3s ease-in-out;
  width: 100%;
  height: 100%;
  position: relative;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  --im-box-shadow: 0 3px 8px var(--im-shadow-color, rgba(0, 0, 0, 0.15));

  &.is-borderless {
    border: none;
  }

  &.im-card--hover {
    &:hover {
      box-shadow: var(--im-box-shadow);
    }
  }

  &.im-card--always {
    box-shadow: var(--im-box-shadow);
  }
}
</style>
