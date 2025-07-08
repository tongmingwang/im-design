<template>
  <Tabs />
  <Dialog />
  <Dropdown />
</template>

<script setup lang="ts">
import Tabs from './views/Tabs.vue';
import Dialog from './views/Dialog.vue';
import Dropdown from './views/Dropdown.vue';
</script>

<style lang="scss">
#app {
  padding: 50px;
  background-color: var(--im-bg-container-color);
}
</style>
