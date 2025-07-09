<template>
  <div>
    <ImDrawer v-model="visible" :placement="placement">
      <ImDrawerHeader>标题</ImDrawerHeader>
      <ImDrawerBody>内容</ImDrawerBody>
      <ImDrawerFooter align="flex-end">底部</ImDrawerFooter>
    </ImDrawer>
    <ImButton @click="() => handle('right')"> Default </ImButton>
    <ImButton @click="() => handle('top')">top</ImButton>
    <ImButton @click="() => handle('bottom')">bottom</ImButton>
    <ImButton @click="() => handle('left')">left</ImButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const visible = ref(false);
const placement = ref('right');

const handle = (val: 'top' | 'left' | 'bottom' | 'right') => {
  placement.value = val;
  visible.value = true;
};
</script>

<style scoped></style>
