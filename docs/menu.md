# Menu 菜单

为网站提供导航功能的菜单。

<script setup lang="ts">
import { ref, watch } from 'vue';
const value = ref('1');
const subActiveList = ref<Array<string | number>>([]);

const active = ref('1');
const subActiveList2 = ref<Array<string | undefined>>([]);

watch(
  () => active.value,
  (val) => {
    if (['1-2', '1-3'].includes(val)) {
      subActiveList2.value = ['1-1'];
    } else {
      subActiveList2.value = [];
    }
  }
);

watch(
  () => value.value,
  (val) => {
    if (['3-1', '3-2', '3-3'].includes(val)) {
      subActiveList.value = ['sub-1'];
    } else {
      subActiveList.value = [];
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

设置 `align="center"` 可以让菜单居中。

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

<ImMenu v-model="value" color="primary" :subActiveList="subActiveList">
    <ImMenuItem name="1">Home</ImMenuItem>
    <ImMenuItem name="2">About </ImMenuItem>
    <ImSubMenu name="sub-1">
      <template #label>
      Orders
      </template>
        <ImMenuItem name="3-1">子页面 - 1 </ImMenuItem>
        <ImMenuItem name="3-2">子页面 - 2 </ImMenuItem>
        <ImMenuItem name="3-3">子页面 - 3 </ImMenuItem>
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

## 纵向菜单

设置 vertical 可以让菜单纵向显示。

<ImMenu
  vertical
  v-model="value"
  :subActiveList="subActiveList2"
  align="right">
<ImMenuItem name="1"> Home </ImMenuItem>
<ImSubMenu name="1-1">
<template #label> <ImIcon name="home" /> Orders</template>
<ImMenuItem name="1-2">Order Page1</ImMenuItem>
<ImMenuItem name="1-3">Order Page2</ImMenuItem>
</ImSubMenu>
<ImMenuItem name="2">About Us</ImMenuItem>
</ImMenu>

<ImMenu
  vertical
  v-model="value"
  :subActiveList="subActiveList2"
  color="primary"
  align="right">
<ImMenuItem name="1"> Home </ImMenuItem>
<ImSubMenu name="1-1">
<template #label> <ImIcon name="home" /> Orders</template>
<ImMenuItem name="1-2">Order Page1</ImMenuItem>
<ImMenuItem name="1-3">Order Page2</ImMenuItem>
</ImSubMenu>
<ImMenuItem name="2">About Us</ImMenuItem>
</ImMenu>

<ImMenu
  vertical
  v-model="value"
  :subActiveList="subActiveList2"
  color="success"
  align="right">
<ImMenuItem name="1"> Home </ImMenuItem>
<ImSubMenu name="1-1">
<template #label> <ImIcon name="home" /> Orders</template>
<ImMenuItem name="1-2">Order Page1</ImMenuItem>
<ImMenuItem name="1-3">Order Page2</ImMenuItem>
</ImSubMenu>
<ImMenuItem name="2">About Us</ImMenuItem>
</ImMenu>

<ImMenu
  vertical
  v-model="value"
  :subActiveList="subActiveList2"
  color="error"
  align="right">
<ImMenuItem name="1"> Home </ImMenuItem>
<ImSubMenu name="1-1">
<template #label> <ImIcon name="home" /> Orders</template>
<ImMenuItem name="1-2">Order Page1</ImMenuItem>
<ImMenuItem name="1-3">Order Page2</ImMenuItem>
</ImSubMenu>
<ImMenuItem name="2">About Us</ImMenuItem>
</ImMenu>

<ImMenu
  vertical
  v-model="value"
  :subActiveList="subActiveList2"
  color="warning"
  align="right">
<ImMenuItem name="1"> Home </ImMenuItem>
<ImSubMenu name="1-1">
<template #label> <ImIcon name="home" /> Orders</template>
<ImMenuItem name="1-2">Order Page1</ImMenuItem>
<ImMenuItem name="1-3">Order Page2</ImMenuItem>
</ImSubMenu>
<ImMenuItem name="2">About Us</ImMenuItem>
</ImMenu>
