# Select 选择器

下拉选择器，用于从一组选项中选择一个。

## 基础用法

基本使用。

<script setup >
import { ref } from 'vue'
const val = ref('')
const options = new Array(4).fill().map((_, index) => ({ value: `${index}`, label: `Item ${index} ` }))
</script>

<ImSelect :options="options" v-model="val" />

```vue
<template>
  <ImSelect :options="options" v-model="val" />
</template>

<script setup>
import { ref } from 'vue';
const val = ref('');
const options = new Array(4)
  .fill()
  .map((_, index) => ({ value: `${index}`, label: `Item ${index} ` }));
</script>
```

## 设置宽度

设置 width 为一个 css 样式值或者数字，单位默认为 px。

<ImSelect :options="options" v-model="val" width="300" placeholder="选择试试" />

## 设置尺寸

设置 `size` 为数字，默认为 36。
<ImSelect :options="options" v-model="val" size="40" />

## 多选模式

设置 `multiple` 为 true，开启多选模式。

<ImSelect :options="options" v-model="val" multiple placeholder="选择多个试试" />

设置 `maxTag` 最多显示的选项数量，默认为 1。

<ImSelect :options="options" v-model="val" multiple maxTag="2" width="280" />

## 禁用状态

设置 `disabled` 为 true，禁用选择器。

<ImSelect :options="options" v-model="val" disabled />

## 清空选中

设置 `clearable` 为 true，开启清空选中功能。

<ImSelect :options="options" v-model="val" clearable />

## 隐藏箭头

设置 `arrow` 为 false，隐藏下拉箭头。

<ImSelect :options="options" v-model="val" :arrow="false" />

## 滚动关闭

设置 `scrollClose` 属性为 true,即可实现

<ImSelect :options="options" v-model="val" scrollClose />
## APIS
