<template>
  <div>
    <ImSelect :options="options" v-model="val" />

    <div class="demo">
      <ImSelect :options="options" allowClear width="200px" v-model="val" />
      <div style="height: 100vh "></div>
    </div>
    <ImSelect :options="options" width="200px" allowClear v-model="val" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const val = ref('')
const options = new Array(20).fill(0).map((_, i) => ({ value: `选项${i}`, label: `选项${i}`, disabled: i === 0 }))
</script>

<style scoped>
  .demo {
    height: 50vh;
    overflow-y: auto;
  }
</style>