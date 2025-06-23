<template>
  <div>
    <ImList>
      <ImListItem :value="String(item)" v-for="item in list">{{ item }}</ImListItem>
    </ImList>

    <ImList v-model="selected">
      <ImListItem :value="String(item)" v-for="item in list">{{ item }}</ImListItem>
    </ImList>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const list = ref(['1', '2', '3'])
const selected = ref('1')

setTimeout(() => {
  list.value.push('4')
}, 2000);
</script>

<style scoped></style>