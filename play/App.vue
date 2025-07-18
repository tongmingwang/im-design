<template>
  <Button />
  <Tabs />
  <ImButton class="trigger" @click="visible = !visible">显示</ImButton>

  <ImLayer :visible="visible" :getTriggerContainer="getTriggerContainer">
    <div>显示的内容</div>
    <div>完全自定义</div>
  </ImLayer>
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
