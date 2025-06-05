# Dropdown 下拉菜单

当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。

## 基本用法

最简单的下拉菜单。

 <ImDropdown>
    <ImButton variant="text" color="primary">Hover Me</ImButton>
    <template #content>
      <ImList>
        <ImListItem :value="String(item)" v-for="item in 3"
          >Menu Item Index {{ item }}</ImListItem
        >
      </ImList>
    </template>
  </ImDropdown>

```vue
<template>
  <ImDropdown>
    <ImButton variant="text" color="primary">Hover Me</ImButton>
    <template #content>
      <ImList>
        <ImListItem :value="String(item)" v-for="item in 3"
          >Menu Item Index {{ item }}</ImListItem
        >
      </ImList>
    </template>
  </ImDropdown>
</template>
```

## 触发方式

下拉菜单可以被触发的方式有两种：`click` 和 `hover`。通过设置 `trigger` 属性来设置触发方式。默认为 `hover`。

<ImDropdown trigger="click">
    <ImButton variant="outlined" color="primary">Click Me</ImButton>
    <template #content>
      <ImList>
        <ImListItem :value="String(item)" v-for="item in 3"
          >Menu Item Index {{ item }}</ImListItem
        >
      </ImList>
    </template>
  </ImDropdown>

## 出现位置

通过设置 `placement` 属性来设置下拉菜单出现的位置。默认为 `bottom-left`。

<ImRow gutter="8">
  <ImDropdown placement="topLeft">
    <ImButton  color="primary" width="120px">topLeft</ImButton>
    <template #content>
      <ImList>
        <ImListItem :value="String(item)" v-for="item in 3"
          >Menu Item Index {{ item }}</ImListItem
        >
      </ImList>
    </template>
</ImDropdown>
<ImDropdown placement="top">
    <ImButton  color="primary" width="120px">top</ImButton>
    <template #content>
      <ImList>
        <ImListItem :value="String(item)" v-for="item in 3"
          >Menu Item Index {{ item }}</ImListItem
        >
      </ImList>
    </template>
</ImDropdown>
<ImDropdown placement="topRight">
    <ImButton  color="primary" width="120px">topRight</ImButton>
    <template #content>
      <ImList>
        <ImListItem :value="String(item)" v-for="item in 3"
          >Menu Item Index {{ item }}</ImListItem
        >
      </ImList>
    </template>
</ImDropdown>
</ImRow>
<br />

<ImRow gutter="8">
  <ImDropdown placement="bottomLeft">
    <ImButton  color="primary" width="120px">bottomLeft</ImButton>
    <template #content>
      <ImList>
        <ImListItem :value="String(item)" v-for="item in 3"
          >Menu Item Index {{ item }}</ImListItem
        >
      </ImList>
    </template>
</ImDropdown>
<ImDropdown placement="bottom">
    <ImButton  color="primary" width="120px">bottom</ImButton>
    <template #content>
      <ImList>
        <ImListItem :value="String(item)" v-for="item in 3"
          >Menu Item Index {{ item }}</ImListItem
        >
      </ImList>
    </template>
</ImDropdown>
<ImDropdown placement="bottomRight">
    <ImButton  color="primary" width="120px">bottomRight</ImButton>
    <template #content>
      <ImList>
        <ImListItem :value="String(item)" v-for="item in 3"
          >Menu Item Index {{ item }}</ImListItem
        >
      </ImList>
    </template>
</ImDropdown>
</ImRow>

## 选择菜单

下拉菜单支持选择模式，只需要设置 v-model 和对应的 value 即可。

<ImDropdown >
    <ImButton width="120px">支持选择 {{ selected }}</ImButton>
    <template #content>
      <ImList v-model="selected">
        <ImListItem :value="String(item)" v-for="item in 3"
          >Menu Item Index {{ item }}</ImListItem
        >
      </ImList>
    </template>
</ImDropdown>

<script setup>
import { ref } from 'vue'

const selected = ref('1')
</script>

```vue
<template>
  <ImDropdown>
    <ImButton width="120px">支持选择 {{ selected }}</ImButton>
    <template #content>
      <ImList v-model="selected">
        <ImListItem :value="String(item)" v-for="item in 3"
          >Menu Item Index {{ item }}</ImListItem
        >
      </ImList>
    </template>
  </ImDropdown>
</template>
<script setup>
import { ref } from 'vue';

const selected = ref('1');
</script>
```
