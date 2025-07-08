<template>
  <Mobile v-if="appStore.isMobile" />
  <Desktop v-else />
  <BackTop />
</template>

<script setup lang="ts">
import Mobile from './layouts/Mobile.vue';
import Desktop from './layouts/Desktop.vue';
import BackTop from './components/BackTop.vue';
import { ref, onBeforeMount } from 'vue';
import { useAppStore } from './store/useApp';

const appStore = useAppStore();

onBeforeMount(() => {
  checkMobile();
  window.addEventListener('resize', () => {
    checkMobile();
  });
});

function checkMobile() {
  if (window.innerWidth < 1100) {
    appStore.isMobile = true;
  } else {
    appStore.isMobile = false;
  }
}
</script>
