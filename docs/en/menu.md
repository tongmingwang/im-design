# Menu Component

Provides navigation functionality for websites.

<script setup lang="ts">
import { ref, watch } from 'vue';
const value = ref('1');
const subActiveList = ref<Array<string | number>>([]);

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

## Top Navigation

Set `v-model` to highlight the selected menu item.

<ImMenu v-model="value">
  <ImMenuItem name="1">Home</ImMenuItem>
  <ImMenuItem name="2">About</ImMenuItem>
  <ImMenuItem name="3">Order List</ImMenuItem>
</ImMenu>

```vue
<template>
  <ImMenu v-model="value">
    <ImMenuItem name="1">Home</ImMenuItem>
    <ImMenuItem name="2">About</ImMenuItem>
    <ImMenuItem name="3">Order List</ImMenuItem>
  </ImMenu>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref('1');
</script>
```

## Right Alignment

Set `align="right"` to right-align the menu.

<ImMenu v-model="value" align="right">
  <ImMenuItem name="1">Home</ImMenuItem>
  <ImMenuItem name="2">About</ImMenuItem>
  <ImMenuItem name="3">Order List</ImMenuItem>
</ImMenu>

```vue
<template>
  <ImMenu v-model="value" align="right">
    <ImMenuItem name="1">Home</ImMenuItem>
    <ImMenuItem name="2">About</ImMenuItem>
    <ImMenuItem name="3">Order List</ImMenuItem>
  </ImMenu>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref('1');
</script>
```

## Center Alignment

Set `align="center"` to center-align the menu.

<ImMenu v-model="value" align="center">
  <ImMenuItem name="1">Home</ImMenuItem>
  <ImMenuItem name="2">About</ImMenuItem>
  <ImMenuItem name="3">Order List</ImMenuItem>
</ImMenu>

```vue
<template>
  <ImMenu v-model="value" align="center">
    <ImMenuItem name="1">Home</ImMenuItem>
    <ImMenuItem name="2">About</ImMenuItem>
    <ImMenuItem name="3">Order List</ImMenuItem>
  </ImMenu>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref('1');
</script>
```

## Colors

Set `color` to change menu color. Supports `primary`, `success`, `warning`, `error`.

<ImMenu v-model="value" color="primary" align="center">
  <ImMenuItem name="1">Home</ImMenuItem>
  <ImMenuItem name="2">About</ImMenuItem>
  <ImMenuItem name="3">Order List</ImMenuItem>
</ImMenu>

<ImMenu v-model="value" color="success" align="center">
  <ImMenuItem name="1">Home</ImMenuItem>
  <ImMenuItem name="2">About</ImMenuItem>
  <ImMenuItem name="3">Order List</ImMenuItem>
</ImMenu>

<ImMenu v-model="value" color="warning" align="center">
  <ImMenuItem name="1">Home</ImMenuItem>
  <ImMenuItem name="2">About</ImMenuItem>
  <ImMenuItem name="3">Order List</ImMenuItem>
</ImMenu>

<ImMenu v-model="value" color="error" align="center">
  <ImMenuItem name="1">Home</ImMenuItem>
  <ImMenuItem name="2">About</ImMenuItem>
  <ImMenuItem name="3">Order List</ImMenuItem>
</ImMenu>

```vue
<template>
  <ImMenu v-model="value" color="primary" align="center">
    <ImMenuItem name="1">Home</ImMenuItem>
    <ImMenuItem name="2">About</ImMenuItem>
    <ImMenuItem name="3">Order List</ImMenuItem>
  </ImMenu>

  <ImMenu v-model="value" color="success" align="center">
    <ImMenuItem name="1">Home</ImMenuItem>
    <ImMenuItem name="2">About</ImMenuItem>
    <ImMenuItem name="3">Order List</ImMenuItem>
  </ImMenu>

  <ImMenu v-model="value" color="warning" align="center">
    <ImMenuItem name="1">Home</ImMenuItem>
    <ImMenuItem name="2">About</ImMenuItem>
    <ImMenuItem name="3">Order List</ImMenuItem>
  </ImMenu>

  <ImMenu v-model="value" color="error" align="center">
    <ImMenuItem name="1">Home</ImMenuItem>
    <ImMenuItem name="2">About</ImMenuItem>
    <ImMenuItem name="3">Order List</ImMenuItem>
  </ImMenu>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref('1');
</script>
```

## Disabled State

<ImMenu v-model="value" color="primary" align="center">
  <ImMenuItem name="1">Home</ImMenuItem>
  <ImMenuItem name="2" disabled>About</ImMenuItem>
  <ImMenuItem name="3">Order List</ImMenuItem>
</ImMenu>

```vue
<template>
  <ImMenu v-model="value" color="primary" align="center">
    <ImMenuItem name="1">Home</ImMenuItem>
    <ImMenuItem name="2" disabled>About</ImMenuItem>
    <ImMenuItem name="3">Order List</ImMenuItem>
  </ImMenu>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref('1');
</script>
```

## Submenus

<ImMenu v-model="value" color="primary" :subActiveList="subActiveList">
  <ImMenuItem name="1">Home</ImMenuItem>
  <ImMenuItem name="2">About</ImMenuItem>
  <ImSubMenu name="sub-1">
    <template #label>Orders </template>
      <ImMenuItem name="3-1">Subpage - 1</ImMenuItem>
      <ImMenuItem name="3-2">Subpage - 2</ImMenuItem>
      <ImMenuItem name="3-3">Subpage - 3</ImMenuItem>
  </ImSubMenu>
</ImMenu>

```vue
<template>
  <ImMenu v-model="value" color="primary" :subActiveList="subActiveList">
    <ImMenuItem name="1">Home</ImMenuItem>
    <ImMenuItem name="2">About</ImMenuItem>
    <ImSubMenu name="sub-1">
      <span>Order <ImIcon name="down" size="12px" /></span>
      <template #content>
        <ImMenuItem name="3-1">Subpage - 1</ImMenuItem>
        <ImMenuItem name="3-2">Subpage - 2</ImMenuItem>
        <ImMenuItem name="3-3">Subpage - 3</ImMenuItem>
      </template>
    </ImSubMenu>
  </ImMenu>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
const value = ref('1');
const subActiveList = ref<Array<string | number>>([]);

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
```

## Vertical Menu

Set `vertical="true"` to make the menu vertical.

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
