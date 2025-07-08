# Loading 加载中

需要加载的资源较多时，可以显示一个加载动画，方便用户知道当前正在加载中。

<script setup lang="ts">
  import { ref } from 'vue'
 
  const show = ref(false)

  const toggle = () => {
    show.value = !show.value;
  }

</script>

<style scoped>
  .demo {
    height: 200px;
    width: 100%;
    background-color: var(--im-rgb-color-3);
    border-radius: 4px;
    padding: 20px;
  }
</style>

## 基础使用

使用指令 `v-loading` 可以开启加载动画。支持传一个响应式布尔值或者是响应式对象，当值为 `true` 时显示加载动画，为 `false` 时隐藏。

<ImButton @click="toggle">{{ !show ? '显示' : '隐藏' }} Loading</ImButton>
<br />
<br />

<div class="demo" v-loading="show">
 加载内容好多...
</div>

```vue
<template>
  <ImButton @click="toggle">显示隐藏</ImButton>
  <div v-loading="show" class="demo">加载内容好多...</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const show = ref(false);
const toggle = () => {
  show.value = !show.value;
};
</script>
```

## 全局加载

使用单例的全局加载，可以覆盖整个页面。

## APIS
