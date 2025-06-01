<template>
  <div class="main">
    <Button />
    <!-- <Divider /> -->
    <!-- <Anchor /> -->
    <!-- <Alert /> -->
  </div>
</template>

<script setup lang="ts">
import Button from './views/Button.vue'
import Divider from './views/Divider.vue'
import Anchor from './views/Anchor.vue';
import Alert from './views/Alert.vue';
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
