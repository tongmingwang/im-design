<template>
  <i class="im-icon" :class="[`im-icon-${props.name}`]" :style="{
    '--im-icon-size': iconSize,
    '--im-icon-color': props.color,
  }">

  </i>
</template>

<script setup lang="ts">
import { getSizeValue } from '@/utils';
import { computed } from 'vue';

defineOptions({ name: 'ImIcon' })
const props = withDefaults(defineProps<{
  size?: string | number,
  name: string,
  color?: string,
}>(), {
  size: 16,
  color: ''
})

// 计算图标大小
const iconSize = computed(() => getSizeValue(props.size))

</script>

<style lang="scss" scoped>
  @import './font/iconfont.css';

  .im-icon {
    display: inline-block;
    font-size: var(--im-icon-size, 16px);
    color: var(--im-icon-color, currentColor);
  }

</style>