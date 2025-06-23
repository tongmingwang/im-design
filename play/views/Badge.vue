<template>
  <div class="demo">
    <ImBadge :value="25">
      <ImButton>Reply</ImButton>
    </ImBadge>

    <ImBadge :value="25" v-for="item in colors" :color="item">
      <ImButton>Reply</ImButton>
    </ImBadge>

    <ImBadge :value="25" v-for="item in colors" :color="item" dot size="12">
      <ImButton>Reply</ImButton>
    </ImBadge>
  </div>
</template>

<script setup>
const colors = ['primary', 'success', 'warning', 'error'];
</script>

<style lang="scss" scoped>
.demo {
  display: flex;
  gap: 12px;
}
</style>
