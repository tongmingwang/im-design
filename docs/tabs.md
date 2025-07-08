# Tabs 标签页

分隔内容上有关联但属于不同类别的数据集合。

<script setup lang="ts">
import { ref } from 'vue';
const value = ref('1');
const arr = new Array(3).fill(0).map((_, index) => ({
  value: index.toString(),
  label: `Tab Index ${index}`,
}));
</script>

## 基础用法

基础的、简洁的标签页。

<ImTabs v-model="value">
  <ImTab v-for="item in arr" :name="item.value" :label="item.label" />
</ImTabs>
<ImPanes v-model="value">
  <ImPane v-for="item in arr" :name="item.value"
    >
       <div>This is a Panes Components, This Index is {{ item.label }}</div>
    </ImPane>
</ImPanes>

```vue
<template>
  <ImTabs v-model="value">
  <ImTab v-for="item in arr" :name="item.value" :label="item.label" />
</ImTabs>
<ImPanes v-model="value">
  <ImPane v-for="item in arr" :name="item.value"
    >
       <div>This is a Panes Components, This Index is {{ item.label }}</div>
    </ImPane>
</ImPanes>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref('1');
const arr = new Array(3).fill(0).map((_, index) => ({
  value: index.toString(),
  label: `Tab Index ${index}`,
}));
</script>
```

## 色彩

通过 `color` 属性可以改变标签页的色彩。

设置 `color` 为 `primary`色彩的标签页和内容。

<ImTabs v-model="value" color="primary">
  <ImTab v-for="item in arr" :name="item.value" :label="item.label" />
</ImTabs>
<ImPanes v-model="value">
  <ImPane v-for="item in arr" :name="item.value"
    >
       <div>This is a Panes Components, This Index is {{ item.label }}</div>
    </ImPane>
</ImPanes>

设置 `color` 为 `error`色彩的标签页和内容。
<ImTabs v-model="value" color="error">
<ImTab v-for="item in arr" :name="item.value" :label="item.label" />
</ImTabs>
<ImPanes v-model="value">
  <ImPane v-for="item in arr" :name="item.value"
    >
       <div>This is a Panes Components, This Index is {{ item.label }}</div>
    </ImPane>
</ImPanes>

设置 `color` 为 `success`色彩的标签页和内容。
<ImTabs v-model="value" color="success">
<ImTab v-for="item in arr" :name="item.value" :label="item.label" />
</ImTabs>
<ImPanes v-model="value">
  <ImPane v-for="item in arr" :name="item.value"
    >
       <div>This is a Panes Components, This Index is {{ item.label }}</div>
    </ImPane>
</ImPanes>

设置 `color` 为 `warning`色彩的标签页和内容。
<ImTabs v-model="value" color="warning">
<ImTab v-for="item in arr" :name="item.value" :label="item.label" />
</ImTabs>
<ImPanes v-model="value">
  <ImPane v-for="item in arr" :name="item.value"
    >
       <div>This is a Panes Components, This Index is {{ item.label }}</div>
    </ImPane>
</ImPanes>

## 对齐方式

支持三种对齐方式：左对齐、右对齐和居中对齐。

左对齐

<ImTabs v-model="value" color="primary" align="left">
<ImTab v-for="item in arr" :name="item.value" :label="item.label" />
</ImTabs>
<ImPanes v-model="value">
  <ImPane v-for="item in arr" :name="item.value"
    >
       <div>This is a Panes Components, This Index is {{ item.label }}</div>
    </ImPane>
</ImPanes>

右对齐

<ImTabs v-model="value" color="primary" align="right">
<ImTab v-for="item in arr" :name="item.value" :label="item.label" />
</ImTabs>
<ImPanes v-model="value">
  <ImPane v-for="item in arr" :name="item.value"
    >
       <div>This is a Panes Components, This Index is {{ item.label }}</div>
    </ImPane>
</ImPanes>

居中对齐

<ImTabs v-model="value" color="primary" align="center">
<ImTab v-for="item in arr" :name="item.value" :label="item.label" />
</ImTabs>
<ImPanes v-model="value">
  <ImPane v-for="item in arr" :name="item.value"
    >
  <div>This is a Panes Components</div>
    </ImPane>
</ImPanes>
