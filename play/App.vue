<template>
  <ImButton @click="click">测试</ImButton>
  <Menu />
</template>

<script setup lang="ts">
import Menu from './views/Menu.vue';
import { useImMessage } from '../packages/components';
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
