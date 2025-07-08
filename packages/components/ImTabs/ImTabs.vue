<template>
  <ul
    :class="[bem.b(), bem.m(props.color)]"
    :style="{
      justifyContent: alignValue,
    }"
    ref="tabRef">
    <slot />
  </ul>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import { computed, ref } from 'vue';
import type { TabsProps } from './types';
import { useTab } from './useTab';

const bem = useBem('tabs');
defineOptions({ name: 'ImTabs' });
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'change', value: string): void;
}>();
const props = withDefaults(defineProps<TabsProps>(), {
  modelValue: '',
  color: 'default',
  align: 'left',
});
const tabRef = ref<HTMLElement>();
const alignValue = computed(() => {
  switch (props.align) {
    case 'center':
      return 'center';
    case 'right':
      return 'flex-end';
    default:
      return 'flex-start';
  }
});
const { active } = useTab(props, emit);
</script>

<style scoped lang="scss">
.im-tabs {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: var(--im-bg-content-color);
  border-radius: 0;
  overflow-y: hidden;
  overflow-x: auto;
  width: 100%;
  border-top-left-radius: var(--im-radius, 4px);
  border-top-right-radius: var(--im-radius, 4px);
  position: relative;
  border: none;
  --bar-size: 2px;
  border-bottom: 1px solid var(--im-gray-color-3);

  @each $color in primary, error, success, warning {
    &.im-tabs--#{$color} {
      background-color: var(--im-#{$color}-color-8);
      color: var(--im-gray-color-1);
      .im-tabs__bar-wrapper {
        border-color: var(--im-#{$color}-color-8);
      }
    }
  }
}
</style>
