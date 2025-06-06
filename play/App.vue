<template>
  <div class="main">
    <!-- <Button /> -->
    <!-- <Divider /> -->
    <!-- <Anchor /> -->
    <!-- <Alert /> -->
    <!-- <Breadcrumb /> -->
    <!-- <Dropdown /> -->
    <!-- <List /> -->
    <!-- <Avatar /> -->
    <Drawer />
    <Card />
    <ImButton @click="msg.info('基础提示，这是提示消息')">Primary</ImButton>
    <ImButton @click="info('Hello' + new Date().getTime())">Error</ImButton>
    <ImButton @click="msg.success('Hello' + new Date().getTime())">Error</ImButton>
    <ImButton @click="msg.warning('Hello' + new Date().getTime())">Error</ImButton>
  </div>
</template>

<script setup lang="ts">
import Button from './views/Button.vue'
import Divider from './views/Divider.vue'
import Anchor from './views/Anchor.vue';
import Alert from './views/Alert.vue';
import Breadcrumb from './views/Breadcrumb.vue';
import Dropdown from './views/Dropdown.vue';
import List from './views/List.vue'
import Avatar from './views/Avatar.vue';
import Drawer from './views/Drawer.vue';
import Card from './views/Card.vue'
import { useImMessage } from '../packages/components'

const { info } = useImMessage()

const msg = useImMessage()


</script>

<style scoped lang="scss">
  .main {
    padding: 24px;
    background-color: var(--im-bg-content-color);
    border-radius: 8px;
    box-shadow: 0 0 12px rgba(0, 0, 0, .1);
    margin: 20px;
  }
</style>
