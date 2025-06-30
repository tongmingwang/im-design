# DateRangePicker 日期范围选择器

日期范围选择器组件，用于选择日期范围。支持快捷选项、自定义格式等特性。

两个面板独立选择日期范围，互不影响。开始必须小于结束日期。组件内部会判断，

<script setup>
import {ref} from 'vue'
const startDate = ref('2025-06-06')
const endDate = ref('2025-07-06')
</script>

## 基本用法

<ImDateRangePicker
:startDate="startDate"
:endDate="endDate"
@change="onChange" />

```vue
<template>
  <ImDateRangePicker
    :startDate="startDate"
    :endDate="endDate"
    @change="onChange" />
</template>

<script setup>
import { ref } from 'vue';
const startDate = ref('2025-06-06');
const endDate = ref('2025-07-06');

const onChange = (value) => {
  console.log(value); // { startDate: '2025-06-06', endDate: '2025-07-06' }
  startDate.value = value.startDate;
  endDate.value = value.endDate;
};
</script>
```

## 选择时间

<ImDateRangePicker
:startDate="startDate"
:endDate="endDate"
@change="onChange"
showTime />

```vue
<template>
  <ImDateRangePicker
    :startDate="startDate"
    :endDate="endDate"
    @change="onChange"
    showTime />
</template>

<script setup>
import { ref } from 'vue';
const startDate = ref('2025-06-06');
const endDate = ref('2025-07-06');

const onChange = (value) => {
  console.log(value); // { startDate: '2025-06-06 00:00:00', endDate: '2025-07-06 00:00:00' }
  startDate.value = value.startDate;
  endDate.value = value.endDate;
};
</script>
```

## 禁用

设置 `disabled` 属性为 `true` 可以禁用日期范围选择器。

<ImDateRangePicker disabled />

```vue
<template>
  <ImDateRangePicker disabled />
</template>
```
