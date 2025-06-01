<template>
  <div :class="[bem.b()]" :style="{
    '--im-row-gutter': props.gutter + 'px',
    'align-items': props.align,
  }">
    <component :is="item" v-for="(item, index) in items" :key="index"></component>
  </div>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import { useSlots, computed } from 'vue';
defineOptions({
  name: 'ImRow',
});
const props = defineProps({
  gutter: {
    type: Number,
    default: 0,
  },
  align: {
    type: String,
    default: 'top',
  },
});
const slots = useSlots();
const items = computed(() => {
  // @ts-ignore
  return slots.default?.() || [];
});

const bem = useBem('row');
</script>

<style lang="scss" scoped>
  .im-row {
    display: flex;
    justify-content: flex-start;
    flex-wrap: nowrap;
    gap: var(--im-row-gutter, 0px);
    max-width: 100%;
    overflow: hidden;
  }
</style>
