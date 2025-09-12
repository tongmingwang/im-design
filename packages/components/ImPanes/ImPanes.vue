<template>
  <div
    v-bind="attr"
    :class="[bem.b()]"
    :style="{
      '--slide-x': slideX,
      '--pane-pd': '24px',
    }">
    <component
      v-for="com in paneList"
      :is="com"
      :active="props.modelValue"></component>
  </div>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import { computed, useSlots, useAttrs, ref, watch } from 'vue';

const bem = useBem('panes');
const slideX = ref('24px');
defineOptions({ name: 'ImPanes' });
const props = withDefaults(
  defineProps<{
    modelValue?: string;
  }>(),
  {
    modelValue: '',
  }
);
const slots = useSlots();
const attr = useAttrs();
const paneList = computed(() => filterPane(slots.default?.() || []));

watch(
  () => props.modelValue,
  (n, o) => {
    const cIndex = paneList.value.findIndex((item) => item.props.name === n);
    const oIndex = paneList.value.findIndex((item) => item.props.name === o);
    slideX.value = cIndex > oIndex ? '24px' : '-24px';
  }
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
