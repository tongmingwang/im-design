<template>
  <div :class="[bem.b()]" :style="styles">
    <div :class="[bem.e('line')]"></div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import { computed } from 'vue';
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
const styles = computed(() => {
  return {
    '--im-tabs-align': getAlign(props.align),
    ...getColor(props.color),
  };
});
useTab(props, emit);

function getAlign(align: TabsProps['align']) {
  return align === 'center'
    ? 'center'
    : align === 'right'
    ? 'flex-end'
    : 'flex-start';
}

function getColor(color: TabsProps['color']) {
  if (['primary', 'success', 'warning', 'error'].includes(color || '')) {
    return {
      '--im-tabs-color': `var(--im-${color}-color-2)`,
      '--im-tabs-color-active': `var(--im-${color}-color-1)`,
      '--im-tabs-bg-color': `var(--im-${color}-color-8)`,
      '--im-tabs-border-color': `var(--im-${color}-color-8)`,
    };
  }
  return {
    '--im-tabs-color': 'var(--im-gray-color-8)',
    '--im-tabs-color-active': 'var(--im-primary-color-8)',
    '--im-tabs-bg-color': 'var(--im-bg-content-color)',
    '--im-tabs-border-color': 'var(--im-gray-color-4)',
  };
}
</script>

<style scoped lang="scss">
.im-tabs {
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  border-radius: 0;
  overflow-y: hidden;
  overflow-x: auto;
  width: 100%;
  border-top-left-radius: var(--im-radius, 4px);
  border-top-right-radius: var(--im-radius, 4px);
  position: relative;
  border: none;
  background-color: var(--im-tabs-bg-color);
  color: var(--im-tabs-color);
  justify-content: var(--im-tabs-align);
  box-shadow: none;

  &__line {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 1px;
    max-height: 1px;
    min-height: 1px;
    width: 100%;
    background-color: var(--im-tabs-border-color);
  }
}
</style>
