# Menu 菜单

为网站提供导航功能的菜单。

<script setup lang="ts">
import { ref, watch } from 'vue';
const subActiveList = ref<Array<string | number>>([]);
const active = ref('1');

watch(
  () => active.value,
  (val) => {
    if (['2-1','2-2'].includes(val)) {
      subActiveList.value = ['2'];
    } else {
      subActiveList.value = [];
    }
  }
);
</script>

## 顶部导航

设置 `v-model` 可以让菜单选中项高亮。

<ImMenu v-model="active" :subActiveList="subActiveList">
  <ImMenuItem name="1">Home</ImMenuItem>
  <ImSubMenu name="2">
    <template #label>Orders</template>
    <ImMenuItem name="2-1">Order Page1</ImMenuItem>
    <ImMenuItem name="2-2">Order Page2</ImMenuItem>
  </ImSubMenu>
  <ImMenuItem name="3">About Us</ImMenuItem>
</ImMenu>

```vue
<template>
  <ImMenu v-model="active" :subActiveList="subActiveList">
    <ImMenuItem name="1">Home</ImMenuItem>
    <ImSubMenu name="2">
      <template #label>Orders</template>
      <ImMenuItem name="2-1">Order Page1</ImMenuItem>
      <ImMenuItem name="2-2">Order Page2</ImMenuItem>
    </ImSubMenu>
    <ImMenuItem name="3">About Us</ImMenuItem>
  </ImMenu>
</template>

<script setup lang="ts">
<script setup lang="ts">
import { ref, watch } from 'vue';
const subActiveList = ref<Array<string | number>>([]);
const active = ref('1');

watch(
  () => active.value,
  (val) => {
    if (['2-1','2-2'].includes(val)) {
      subActiveList.value = ['2'];
    } else {
      subActiveList.value = [];
    }
  }
);
</script>
```

## 右对齐

设置 `align="right"` 可以让菜单右对齐。

 <ImMenu v-model="active"  align="right" :subActiveList="subActiveList">
  <ImMenuItem name="1">Home</ImMenuItem>
  <ImSubMenu name="2">
    <template #label>Orders</template>
    <ImMenuItem name="2-1">Order Page1</ImMenuItem>
    <ImMenuItem name="2-2">Order Page2</ImMenuItem>
  </ImSubMenu>
  <ImMenuItem name="3">About Us</ImMenuItem>
</ImMenu>

```vue
<template>
  <ImMenu v-model="active" align="right">
    <ImMenuItem name="1">Home</ImMenuItem>
    <ImSubMenu name="2">
      <template #label>Orders</template>
      <ImMenuItem name="2-1">Order Page1</ImMenuItem>
      <ImMenuItem name="2-2">Order Page2</ImMenuItem>
    </ImSubMenu>
    <ImMenuItem name="3">About Us</ImMenuItem>
  </ImMenu>
</template>
```

## 居中

设置 `align="center"` 可以让菜单居中。

<ImMenu v-model="active" align="center" :subActiveList="subActiveList">
    <ImMenuItem name="1">Home</ImMenuItem>
    <ImSubMenu name="2">
      <template #label>Orders</template>
      <ImMenuItem name="2-1">Order Page1</ImMenuItem>
      <ImMenuItem name="2-2">Order Page2</ImMenuItem>
    </ImSubMenu>
    <ImMenuItem name="3">About Us</ImMenuItem>
  </ImMenu>

```vue
<template>
  <ImMenu v-model="active" align="center" :subActiveList="subActiveList">
    <ImMenuItem name="1">Home</ImMenuItem>
    <ImSubMenu name="2">
      <template #label>Orders</template>
      <ImMenuItem name="2-1">Order Page1</ImMenuItem>
      <ImMenuItem name="2-2">Order Page2</ImMenuItem>
    </ImSubMenu>
    <ImMenuItem name="3">About Us</ImMenuItem>
  </ImMenu>
</template>
```

## 颜色

设置 `color` 可以改变菜单的颜色。支持 `primary`、`success`、`warning`、`error`。

<ImMenu v-model="active" align="center" :subActiveList="subActiveList" v-for="color in ['primary','error','success','warning']" :color="color">
    <ImMenuItem name="1">Home</ImMenuItem>
    <ImSubMenu name="2">
      <template #label>Orders</template>
      <ImMenuItem name="2-1">Order Page1</ImMenuItem>
      <ImMenuItem name="2-2">Order Page2</ImMenuItem>
    </ImSubMenu>
    <ImMenuItem name="3">About Us</ImMenuItem>
  </ImMenu>

```vue
<template>
  <ImMenu
    v-model="active"
    align="center"
    :subActiveList="subActiveList"
    v-for="color in ['primary', 'error', 'success', 'warning']"
    :color="color">
    <ImMenuItem name="1">Home</ImMenuItem>
    <ImSubMenu name="2">
      <template #label>Orders</template>
      <ImMenuItem name="2-1">Order Page1</ImMenuItem>
      <ImMenuItem name="2-2">Order Page2</ImMenuItem>
    </ImSubMenu>
    <ImMenuItem name="3">About Us</ImMenuItem>
  </ImMenu>
</template>
```

## 禁用

<ImMenu v-model="active" color="primary" align="center">
  <ImMenuItem name="1">Home</ImMenuItem>
  <ImMenuItem name="2" disabled>About </ImMenuItem>
  <ImMenuItem name="3">Order List</ImMenuItem>
</ImMenu>

```vue
<template>
  <ImMenu v-model="active" color="primary" align="center">
    <ImMenuItem name="1">Home</ImMenuItem>
    <ImMenuItem name="2" disabled>About </ImMenuItem>
    <ImMenuItem name="3">Order List</ImMenuItem>
  </ImMenu>
</template>
```

## 纵向菜单

设置 vertical 可以让菜单纵向显示。

<ImMenu v-model="active" :subActiveList="subActiveList" vertical>
  <ImMenuItem name="1">Home</ImMenuItem>
  <ImSubMenu name="2">
    <template #label>Orders</template>
    <ImMenuItem name="2-1">Order Page1</ImMenuItem>
    <ImMenuItem name="2-2">Order Page2</ImMenuItem>
  </ImSubMenu>
  <ImMenuItem name="3">About Us</ImMenuItem>
</ImMenu>
