# DatePicker 日期选择器

需要现在某一日期时使用该组件

<script setup lang="ts">
import { ref, watch } from 'vue';
const selectedDate = ref('');
</script>

## 基础使用
 
使用 v-model 绑定日期值，默认为空字符串。


<ImDatePicker v-model="selectedDate" />

```vue
<template>
  <ImMenu>
    <ImMenuItem>Home</ImMenuItem>
    <ImMenuItem>Home</ImMenuItem>
    <ImMenuItem>Home</ImMenuItem>
  </ImMenu>
  <ImButton>BUTTON</ImButton>
  <ImDatePicker v-model="selectedDate" />
  <Anchor />
</template>
```

## APIS

基础配置
