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
## API



| 字段名         | 类型                        | 描述                                                                 |
|----------------|-----------------------------|----------------------------------------------------------------------|
| modelValue     | string \| number            | 绑定的值                                                           |
| options        | Array\<{ label: string \| number; value: string \| number; disabled?: boolean } > | 选项列表，每个选项包含标签、值和是否禁用的状态 |
| width          | string \| number            | 下拉框宽度                                                         |
| size           | string \| number            | 下拉框大小                                                         |
| placeholder    | string                      | 占位符文本                                                         |
| clearable      | boolean                     | 是否可清除内容，默认为false                                        |
| zIndex         | number                      | 设置组件的z-index值                                                  |
| multiple       | boolean                     | 是否允许多选，默认为false                                          |
| disabled       | boolean                     | 是否禁用，默认为false                                              |
| maxTag         | number                      | 最多显示的标签数量                                                 |
| arrow          | boolean                     | 是否显示箭头，默认为true                                           |
| offset         | number                      | 箭头偏移量                                                         |
| scrollClose    | boolean                     | 滚动时是否关闭下拉菜单，默认为false                                |
| emptyText      | string                      | 无选项时的提示文本                                                 |
