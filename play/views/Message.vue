<template>
  <div>
    <ImButton @click="info('基础提示，这是提示消息')">Primary</ImButton>
    <ImButton @click="error('Hello' + new Date().getTime())">Error</ImButton>
    <ImButton @click="msg.success('Hello' + new Date().getTime())">success</ImButton>
    <ImButton @click="msg.warning('Hello' + new Date().getTime())">warning</ImButton>
  </div>
</template>

<script setup lang="ts">
import { useImMessage } from '../../packages/components'
const { info, error } = useImMessage()

const msg = useImMessage()
</script>

<style scoped></style>