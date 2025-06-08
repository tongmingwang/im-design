<template>
  <div>
    <ImSelect :options="options" v-model="val" />

    <div class="demo">
      <ImSelect :options="options" width="200px" v-model="val" />
      <div style="height: 100vh "></div>
    </div>
    <ImSelect :options="options" width="200px" v-model="val" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const val = ref('')
const options = [
  {
    label: '选项1x xxxxxxxx xxxxxxxxxxxxx xxxxxx xxxxxxxxxxxxxxxxxxxxxxx',
    value: '1',
  },
  {
    label: '选项2',
    value: '2',
  },
  {
    label: '选项3',
    value: '3',
  },
  {
    label: '选项4',
    value: '4',
  },
  {
    label: '选项5',
    value: '5',
  },
  {
    label: '选项6',
    value: '6',
  },
  {
    label: '选项7',
    value: '7',
  },
  {
    label: '选项8',
    value: '8',
  },
  {
    label: '选项9',
    value: '9',
  },
  {
    label: '选项10',
    value: '10',
  },
]
</script>

<style scoped>
  .demo {
    height: 50vh;
    overflow-y: auto;
  }
</style>