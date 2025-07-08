<template>
  <Tabs />
  <Dialog />
  <ImButton @click="click">测试</ImButton>
</template>

<script setup lang="ts">
import Tabs from './views/Tabs.vue';
import Dialog from './views/Dialog.vue';
import Dropdown from './views/Dropdown.vue';
import { useImMessage } from '../packages/components';
import { ImButton } from 'im-design';

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
