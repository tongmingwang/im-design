# Breadcrumb 面包屑

显示当前页面在系统层级结构中的位置，并能向上返回。
我相信你们公司肯定用自定义，所以这里就很简单的方式

<script setup lang="ts">
import { ref } from 'vue'
const active = ref('3')
const change = (val: string) => {
  console.log(val)
}
</script>

### 基础用法

面包屑组件通过 `ImBreadcrumb` 和 `ImBreadcrumbItem` 组合使用，可以方便的生成面包屑导航。

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

### API

### ImBreadcrumb

| 属性      | 说明                                   |
| --------- | -------------------------------------- |
| v-model   | 当前选中项的值，绑定值应为字符串。     |
| change    | 选中项改变时触发，返回当前选中项的值。 |
| separator | 分隔符，默认为斜杠（/）。              |

### ImBreadcrumbItem

| 属性  | 说明                   |
| ----- | ---------------------- |
| value | 唯一标识符，默认为空。 |
