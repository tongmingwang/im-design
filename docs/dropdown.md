# Dropdown 下拉菜单

页面上的操作命令过多时，用此组件可以收纳操作元素。

## 基本用法

默认下拉菜单，鼠标移入则显示下拉菜单。

<script setup>
import { ref } from 'vue'

const selected = ref('1')
const list = [
  '三国演义',
  '水浒传',
  '西游记',
  '红楼梦',
]
</script>

 <ImDropdown>
    <ImButton >鼠标移入试试</ImButton>
    <template #content>
      <ImList>
        <ImListItem :value="item" v-for="item in list"
          >{{ item }}</ImListItem
        >
      </ImList>
    </template>
  </ImDropdown>

```vue
<template>
  <ImDropdown>
    <ImButton>鼠标移入试试</ImButton>
    <template #content>
      <ImList>
        <ImListItem :value="item" v-for="item in list">{{ item }}</ImListItem>
      </ImList>
    </template>
  </ImDropdown>
</template>

<script setup>
import { ref } from 'vue';

const selected = ref('1');
const list = ['三国演义', '水浒传', '西游记', '红楼梦'];
</script>
```

## 触发方式

通过设置 `trigger` 属性来定义触发下拉菜单的行为，默认为 `hover`。

<ImDropdown style="margin-right:8px">
    <ImButton>鼠标移入试试</ImButton>
    <template #content>
      <ImList>
        <ImListItem :value="item" v-for="item in list">{{ item }}</ImListItem>
      </ImList>
    </template>
  </ImDropdown>

<ImDropdown trigger="click">
    <ImButton>点击试试</ImButton>
    <template #content>
      <ImList>
        <ImListItem :value="item" v-for="item in list">{{ item }}</ImListItem>
      </ImList>
    </template>
  </ImDropdown>

## 出现位置

通过设置 `placement` 属性来设置下拉菜单出现的位置。默认为 `bottom-left`。

<ImRow gutter="8">
  <ImDropdown placement="top-left">
    <ImButton  color="primary">top-left</ImButton>
    <template #content>
      <ImList>
        <ImListItem :value="item" v-for="item in list">{{ item }}</ImListItem>
      </ImList>
    </template>
</ImDropdown>
<ImDropdown placement="top">
    <ImButton  color="primary">top</ImButton>
    <template #content>
      <ImList>
        <ImListItem :value="item" v-for="item in list">{{ item }}</ImListItem>
      </ImList>
    </template>
</ImDropdown>
<ImDropdown placement="top-right">
    <ImButton  color="primary">top-right</ImButton>
    <template #content>
      <ImList>
        <ImListItem :value="item" v-for="item in list">{{ item }}</ImListItem>
      </ImList>
    </template>
</ImDropdown>
</ImRow>
<br />
<ImRow gutter="8">
  <ImDropdown placement="bottom-left">
    <ImButton  color="primary">bottom-left</ImButton>
    <template #content>
      <ImList>
        <ImListItem :value="String(item)" v-for="item in 3"
          >Menu Item Index {{ item }}</ImListItem
        >
      </ImList>
    </template>
</ImDropdown>
<ImDropdown placement="bottom">
    <ImButton  color="primary">bottom</ImButton>
    <template #content>
      <ImList>
        <ImListItem :value="String(item)" v-for="item in 3"
          >Menu Item Index {{ item }}</ImListItem
        >
      </ImList>
    </template>
</ImDropdown>
<ImDropdown placement="bottom-right">
    <ImButton  color="primary">bottom-right</ImButton>
    <template #content>
      <ImList>
        <ImListItem :value="String(item)" v-for="item in 3"
          >Menu Item Index {{ item }}</ImListItem
        >
      </ImList>
    </template>
</ImDropdown>
</ImRow>

## 支持选中

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

## 箭头

通过设置 `arrow` 属性来控制是否显示下拉菜单的箭头。默认为 true。

<ImDropdown arrow style="margin-right:8px;">
    <ImButton  color="primary">有箭头</ImButton>
    <template #content>
      <ImList>
        <ImListItem :value="item" v-for="item in list">{{ item }}</ImListItem>
      </ImList>
    </template>
</ImDropdown>

<ImDropdown :arrow="false">
    <ImButton  color="primary">无箭头</ImButton>
    <template #content>
      <ImList>
        <ImListItem :value="item" v-for="item in list">{{ item }}</ImListItem>
      </ImList>
    </template>
</ImDropdown>

## API
