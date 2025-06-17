# Menu 菜单

为网站提供导航功能的菜单。

<script setup lang="ts">
import { ref, watch } from 'vue';
const value = ref('1');
const subActives = ref<Array<string | number>>([]);

watch(
  () => value.value,
  (val) => {
    if (['3-1', '3-2', '3-3'].includes(val)) {
      subActives.value = ['sub-1'];
      console.log(subActives.value, 'subActives');
    } else {
      subActives.value = [];
    }
  }
);
</script>

## 顶部导航

设置 `v-model` 可以让菜单选中项高亮。

<ImMenu v-model="value">
  <ImMenuItem name="1">Home</ImMenuItem>
  <ImMenuItem name="2">About </ImMenuItem>
  <ImMenuItem name="3">Order List</ImMenuItem>
</ImMenu>

```vue
<template>
<ImMenu v-model="value">
  <ImMenuItem name="1">Home</ImMenuItem>
  <ImMenuItem name="2">About </ImMenuItem>
  <ImMenuItem name="3">Order List</ImMenuItem>
</ImMenu>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref('1');
</script>
```

## 右对齐

设置 `align="right"` 可以让菜单右对齐。

<ImMenu v-model="value" align="right">
  <ImMenuItem name="1">Home</ImMenuItem>
  <ImMenuItem name="2">About </ImMenuItem>
  <ImMenuItem name="3">Order List</ImMenuItem>
</ImMenu>

```vue
<template>
<ImMenu v-model="value" align="right">
  <ImMenuItem name="1">Home</ImMenuItem>
  <ImMenuItem name="2">About </ImMenuItem>
  <ImMenuItem name="3">Order List</ImMenuItem>
</ImMenu>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref('1');
</script>
```
## 居中

设置 `align="center"`  可以让菜单居中。

<ImMenu v-model="value" align="center">
  <ImMenuItem name="1">Home</ImMenuItem>
  <ImMenuItem name="2">About </ImMenuItem>
  <ImMenuItem name="3">Order List</ImMenuItem>
</ImMenu>

```vue
<template>
<ImMenu v-model="value" align="center">
  <ImMenuItem name="1">Home</ImMenuItem>
  <ImMenuItem name="2">About </ImMenuItem>
  <ImMenuItem name="3">Order List</ImMenuItem>
</ImMenu>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref('1');
</script>
```

## 颜色

设置 `color` 可以改变菜单的颜色。支持 `primary`、`success`、`warning`、`error`。

<ImMenu v-model="value" color="primary" align="center">
  <ImMenuItem name="1">Home</ImMenuItem>
  <ImMenuItem name="2">About </ImMenuItem>
  <ImMenuItem name="3">Order List</ImMenuItem>
</ImMenu>

<ImMenu v-model="value" color="success" align="center">
  <ImMenuItem name="1">Home</ImMenuItem>
  <ImMenuItem name="2">About </ImMenuItem>
  <ImMenuItem name="3">Order List</ImMenuItem>
</ImMenu>

<ImMenu v-model="value" color="warning" align="center">
  <ImMenuItem name="1">Home</ImMenuItem>
  <ImMenuItem name="2">About </ImMenuItem>
  <ImMenuItem name="3">Order List</ImMenuItem>
</ImMenu>

<ImMenu v-model="value" color="error" align="center">
  <ImMenuItem name="1">Home</ImMenuItem>
  <ImMenuItem name="2">About </ImMenuItem>
  <ImMenuItem name="3">Order List</ImMenuItem>
</ImMenu>


```vue
<template>
<ImMenu v-model="value" color="primary" align="center">
  <ImMenuItem name="1">Home</ImMenuItem>
  <ImMenuItem name="2">About </ImMenuItem>
  <ImMenuItem name="3">Order List</ImMenuItem>
</ImMenu>

<ImMenu v-model="value" color="success" align="center">
  <ImMenuItem name="1">Home</ImMenuItem>
  <ImMenuItem name="2">About </ImMenuItem>
  <ImMenuItem name="3">Order List</ImMenuItem>
</ImMenu>

<ImMenu v-model="value" color="warning" align="center">
  <ImMenuItem name="1">Home</ImMenuItem>
  <ImMenuItem name="2">About </ImMenuItem>
  <ImMenuItem name="3">Order List</ImMenuItem>
</ImMenu>

<ImMenu v-model="value" color="error" align="center">
  <ImMenuItem name="1">Home</ImMenuItem>
  <ImMenuItem name="2">About </ImMenuItem>
  <ImMenuItem name="3">Order List</ImMenuItem>
</ImMenu>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref('1');
</script>
```

## 禁用

<ImMenu v-model="value" color="primary" align="center">
  <ImMenuItem name="1">Home</ImMenuItem>
  <ImMenuItem name="2" disabled>About </ImMenuItem>
  <ImMenuItem name="3">Order List</ImMenuItem>
</ImMenu>

```vue
<template>
<ImMenu v-model="value" color="primary" align="center">
  <ImMenuItem name="1">Home</ImMenuItem>
  <ImMenuItem name="2" disabled>About </ImMenuItem>
  <ImMenuItem name="3">Order List</ImMenuItem>
</ImMenu>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref('1');
</script>
```

## 子菜单

<ImMenu v-model="value" color="primary" :subActives="subActives">
    <ImMenuItem name="1">Home</ImMenuItem>
    <ImMenuItem name="2">About </ImMenuItem>
    <ImSubMenu name="sub-1">
      <span>Order <ImIcon name="down" size="12px" /></span>
      <template #content>
        <ImMenuItem name="3-1">子页面 - 1 </ImMenuItem>
        <ImMenuItem name="3-2">子页面 - 2 </ImMenuItem>
        <ImMenuItem name="3-3">子页面 - 3 </ImMenuItem>
      </template>
    </ImSubMenu>
  </ImMenu>

  ```vue
<template>
<ImMenu v-model="value" color="primary" :subActives="subActives">
    <ImMenuItem name="1">Home</ImMenuItem>
    <ImMenuItem name="2">About </ImMenuItem>
    <ImSubMenu name="sub-1">
      <span>Order <ImIcon name="down" size="12px" /></span>
      <template #content>
        <ImMenuItem name="3-1">子页面 - 1 </ImMenuItem>
        <ImMenuItem name="3-2">子页面 - 2 </ImMenuItem>
        <ImMenuItem name="3-3">子页面 - 3 </ImMenuItem>
      </template>
    </ImSubMenu>
  </ImMenu>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
const value = ref('1');
const subActives = ref<Array<string | number>>([]);

watch(
  () => value.value,
  (val) => {
    if (['3-1', '3-2', '3-3'].includes(val)) {
      subActives.value = ['sub-1'];
      console.log(subActives.value, 'subActives');
    } else {
      subActives.value = [];
    }
  }
);
</script>
```