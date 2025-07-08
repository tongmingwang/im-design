<template>
  <ImBackTop :getTarget="getTarget" right="8vw">
    <ImButton color="primary" shape="circle" size="48">
      <ImIcon name="vertical-align-top" size="28"></ImIcon>
    </ImButton>
  </ImBackTop>
</template>

<script setup lang="ts">
import { ImBackTop } from 'im-design';

const getTarget = () => document.querySelector('.app_scroll')!;
</script>

<style scoped></style>
