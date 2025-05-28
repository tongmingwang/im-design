<template>
  <im-row>
    <im-input v-model="value" placeholder="输入问啊" />
    {{ value }}
  </im-row>
  <ImIconSearch />
</template>

<script setup lang="ts">
import { ImIconSearch } from '../packages/components';
import { ref } from 'vue';
const value = ref('');
</script>

<style scoped lang="scss">
.demo {
  background-color: #c2bfbf;
  height: 100px;
  border-radius: 4px;
  width: 100%;
}

.im-row {
  margin-bottom: 10px;
}
</style>
