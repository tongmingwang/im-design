<template>
  <div v-bind="attr" :class="[bem.b()]">
    <component :is="current" />
  </div>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import { computed, useSlots, useAttrs } from 'vue';

const bem = useBem('panes');
defineOptions({ name: 'ImPanes' });
const props = withDefaults(
  defineProps<{
    modelValue?: string;
    activeName?: string;
  }>(),
  {
    modelValue: '',
    activeName: '',
  }
);
const slots = useSlots();
const attr = useAttrs();
const paneList = computed(() => filterPane(slots.default?.() || []));
const current = computed(() =>
  paneList.value.find((pane) => {
    return pane.props?.name === props.modelValue;
  })
);

function isPane(slot: any) {
  return slot.type?.name === 'ImPane';
}

function filterPane(arr: Array<any>) {
  const result: Array<any> = [];
  arr.forEach((slot) => {
    if (isPane(slot)) {
      result.push(slot);
    } else if (Array.isArray(slot.children)) {
      result.push(...filterPane(slot.children));
    }
  });
  return result;
}
</script>

<style scoped lang="scss">
.im-panes {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  list-style: none;
  position: relative;
  padding: 0;
  margin: 0;
  background-color: var(--im-bg-content-color);
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-bottom-left-radius: var(--im-radius, 4px);
  border-bottom-right-radius: var(--im-radius, 4px);
  box-shadow: none;
  box-sizing: border-box;
}
</style>
