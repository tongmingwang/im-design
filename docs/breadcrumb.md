# Breadcrumb 面包屑

显示当前页面在系统层级结构中的位置，并能向上返回。

<script setup lang="ts">
import { ref } from 'vue'
const active = ref('3')
const change = (val: string) => {
  console.log(val)
}
</script>

## 使用

<ImBreadcrumb v-model="active" @change="change">
<ImBreadcrumbItem value="1">首页</ImBreadcrumbItem>
<ImBreadcrumbItem value="2">组件</ImBreadcrumbItem>
<ImBreadcrumbItem value="3">面包屑</ImBreadcrumbItem>
</ImBreadcrumb>

```vue
<template>
  <ImBreadcrumb v-model="active" @change="change">
    <ImBreadcrumbItem value="1">首页</ImBreadcrumbItem>
    <ImBreadcrumbItem value="2">组件</ImBreadcrumbItem>
    <ImBreadcrumbItem value="3">面包屑</ImBreadcrumbItem>
  </ImBreadcrumb>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const active = ref('3');
const change = (val: string) => {
  console.log(val);
};
</script>
```
