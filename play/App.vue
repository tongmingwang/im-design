<template>
  <ImButton @click="click">测试</ImButton>
  <Drawer />
  <Dialog />
  <Card />
</template>

<script setup lang="ts">
import Drawer from './views/Drawer.vue';
import { useImMessage } from '../packages/components';
import Dialog from './views/Dialog.vue';
import Card from './views/Card.vue';
const click = () => {
  useImMessage().info('This is a message!');
};
</script>

<style lang="scss">
#app {
  padding: 50px;
  background-color: var(--im-bg-container-color);
}
</style>
