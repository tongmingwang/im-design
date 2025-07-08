<template>
  <div>
    <ImInput disabled placeholder="输入" />
    <ImInput readonly placeholder="输入" />
    <ImInput placeholder="输入" v-model="v" type="password" passwordEye />
    <ImInputNumber v-model="v" clearable />
    <ImInputNumber v-model="v" clearable control-right size="48px" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const v = ref('');
</script>

<style scoped></style>
