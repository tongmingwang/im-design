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
    <!-- <Drawer /> -->
    <!-- <Card /> -->
    <!-- <Message /> -->
    <!-- <Dialog /> -->
    <!-- <Pagination /> -->
    <Select />
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
import Message from './views/Message.vue'
import Dialog from './views/Dialog.vue';
import Pagination from './views/Pagination.vue';
import Select from './views/Select.vue'

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
