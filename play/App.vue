<template>
  <ImButton class="trigger" @click="visible = !visible">显示</ImButton>

  <div v-loading="visible">
    <Tabs />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from './views/Button.vue';
import Tabs from './views/Tabs.vue';
import { ImLayer } from '../packages/components';

const visible = ref(false);
const getTriggerContainer = () => document.querySelector('.trigger');
</script>

<style lang="scss">
#app {
  padding: 50px;
}
</style>
