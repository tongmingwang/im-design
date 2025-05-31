<template>
  <i class="im-icon" :class="[`im-icon-${props.name}`]" :style="{
    '--icon-size': props.size || 16 + 'px',
    '--icon-color': props.color,
  }">

  </i>
</template>

<script setup lang="ts">

defineOptions({ name: 'ImIcon' })
const props = defineProps({
  name: String,
  size: Number,
  color: String,
})
</script>

<style lang="scss" scoped>
  @import './font/iconfont.css';

  .im-icon {
    display: inline-block;
    font-size: var(--icon-size, 16px);
    fill: currentColor;
  }

</style>