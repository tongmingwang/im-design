<template>
  <Transition name="fade">
    <RouterView />
  </Transition>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
// .fade-enter-active,
// .fade-enter-active {
//   transition: all 0.3s ease-in-out;
// }
// .fade-enter-from,
// .fade-leave-to {
//   opacity: 0;
// }
</style>
