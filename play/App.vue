<template>
  <div class="play">
    <section>
      <im-button color="success">普通按钮</im-button>
      <im-button color="info">信息按钮</im-button>
      <im-button color="warning">警告按钮</im-button>
      <im-button color="error">危险按钮</im-button>
      <im-button color="primary">禁用按钮</im-button>
    </section>
    <section>
      <im-button color="primary" shape="round">Round</im-button>
      <im-button color="primary" shape="circle">I</im-button>
      <im-button color="primary" shape="square">I</im-button>
    </section>

    <section>
      <im-button color="primary" variant="text">变体按钮</im-button>
      <im-button color="error" variant="text">变体按钮</im-button>
      <im-button color="success" variant="text">变体按钮</im-button>
      <im-button color="warning" variant="text">变体按钮</im-button>
      <im-button color="" variant="text">变体按钮</im-button>
    </section>
    <section>
      <im-button color="primary" variant="tonal">变体按钮</im-button>
      <im-button color="error" variant="tonal">变体按钮</im-button>
      <im-button color="success" variant="tonal">变体按钮</im-button>
      <im-button color="warning" variant="tonal">变体按钮</im-button>
      <im-button color="" variant="tonal">变体按钮</im-button>
    </section>
    <section>
      <im-button color="primary" variant="outlined">变体按钮</im-button>
      <im-button color="error" variant="outlined">变体按钮</im-button>
      <im-button color="success" variant="outlined">变体按钮</im-button>
      <im-button color="warning" variant="outlined">变体按钮</im-button>
      <im-button color="" variant="outlined">变体按钮</im-button>
    </section>
    <section>
      <im-button color="error" variant="text" shape="circle">I</im-button>
      <im-button color="success" variant="tonal" shape="circle">I</im-button>
      <im-button
        color="warning"
        variant="tonal"
        shape="square"
        text="he"></im-button>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
</script>

<style scoped>
.play {
  text-align: center;
  padding: 20px;
}
</style>
