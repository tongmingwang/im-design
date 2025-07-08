<template>
  <div
    :class="[bem.b()]"
    :style="{
      '--im-row-gutter': props.gutter + 'px',
      'align-items': props.align,
    }">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
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

const bem = useBem('row');
</script>

<style lang="scss" scoped>
.im-row {
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  gap: var(--im-row-gutter, 0px);
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
