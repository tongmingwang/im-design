<template>
  <div :class="[bem.b()]">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
const bem = useBem('im-menu-title');
defineOptions({ name: 'ImMenuTitle' });
</script>

<style scoped></style>
