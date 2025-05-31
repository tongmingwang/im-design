<template>
  <div :class="[bem.b()]" :style="{
    '--im-col-w': spanW,
    '--im-col-offset': props.offset,
  }">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import { computed } from 'vue';
defineOptions({
  name: 'ImCol',
});
const props = defineProps({
  span: {
    type: [Number, String],
    default: 4,
  },
  offset: {
    type: Number,
    default: 0,
  },
});
const bem = useBem('col');

const spanW = computed(
  () => +((Number(props.span) || 0) / 24).toFixed(2) * 100 + '%'
);
</script>

<style lang="scss" scoped>
  .im-col {
    max-width: var(--im-col-w);
    flex: 0 0 var(--im-col-w);
  }
</style>
