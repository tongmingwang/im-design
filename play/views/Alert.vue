<template>
  <div>
    <ImAlert title="" variant="tonal" v-for="c in colors" closable :color="c">
      <template #icon>

        <ImIcon name="alert" size="16" />
      </template>
      Hello This is a Alert
    </ImAlert>
  </div>
</template>

<script setup lang="ts">
const colors = ['success', 'warning', 'error', 'primary']
</script>

<style scoped></style>