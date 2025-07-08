<template>
  <div class="page_card">
    <ImTitle :level="3">{{ props.title }}</ImTitle>
    <slot name="desc">
      <ImText>{{ props.desc }}</ImText>
    </slot>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  desc: string;
}>();
</script>

<style scoped lang="scss">
.page_card {
  .content {
    border-radius: 4px;
    margin-top: 16px;
  }
}
</style>
