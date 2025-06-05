<template>
  <div>
    <ImList>
      <ImListItem :value="String(item)" v-for="item in 5">{{ item }}</ImListItem>
    </ImList>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const val = ref('1')
</script>

<style scoped></style>