<template>
  <ImButton class="trigger" @click="() => success('这是一条消息')"
    >显示</ImButton
  >
  <ImButton class="trigger" @click="() => error('这是一条消息')">显示</ImButton>
  <ImButton class="trigger" @click="() => info('这是一条消息')">显示</ImButton>
  <ImButton class="trigger" @click="() => warning('这是一条消息')"
    >显示</ImButton
  >

  <div v-loading="visible">
    <Dialog />
    <Select />
    <Tabs />
    <Button />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from './views/Button.vue';
import Dialog from './views/Dialog.vue';
import Select from './views/Select.vue';
import Tabs from './views/Tabs.vue';
import { useImMessage } from '../packages/components';

const { success, error, info, warning } = useImMessage();

const visible = ref(false);
const getTriggerContainer = () => document.querySelector('.trigger');
</script>

<style lang="scss">
#app {
  padding: 50px;
}
</style>
