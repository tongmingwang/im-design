<template>
  <div>
    <ImDrawer v-model="visible" :placement="placement">
      <ImCard title="Default" borderless>
        <template #header-action>
          <ImButton
            variant="text"
            size="48"
            shape="circle"
            @click="visible = false">
            <ImIcon name="close" size="20" />
          </ImButton>
        </template>
        <p>Content ...</p>
        <p>Content ...</p>
      </ImCard>
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
