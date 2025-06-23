<template>
  <div>
    <ImSelect
      :options="options"
      v-model="val"
      multiple
      :maxTag="2"
      clearable
      placeholder="xxx" />
    <ImSelect :options="options" v-model="val" multiple placeholder="xxx" />
    <ImSelect
      :options="options"
      clearable
      width="200px"
      v-model="val"
      placeholder="xxx" />
    <ImSelect
      :options="options"
      width="200px"
      clearable
      v-model="val"
      placeholder="Select"
      scrollClose />

    <div>
      <ImTag>Hello</ImTag>
      <ImTag border>Hello</ImTag>
      <ImTag closeable>Hello</ImTag>
      <template v-for="item in colors">
        <ImTag :color="item">Hello</ImTag>
        <ImTag :color="item" border>Hello</ImTag>
        <ImTag :color="item" closeable>Hello</ImTag>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const val = ref('');
const options = new Array(20).fill(0).map((_, i) => ({
  value: `${i + 1}`,
  label: `选项${i + 1}`,
  disabled: i === 0,
}));
const colors = ['primary', 'success', 'warning', 'error'];
</script>

<style scoped>
.demo {
  height: 50vh;
  overflow-y: auto;
}
</style>
