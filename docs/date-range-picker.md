# DateRangePicker 日期范围选择器

日期范围选择器组件，用于选择日期范围。支持快捷选项、自定义格式等特性。

### 为什么要这样设计？

- 在交互和体验上，目前采用全新的设计;
- 面板中明确了开始面板和结束面板；
- 开始就是开始，结束就是结束，一目了然。

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

## 自定义格式

设置 `format` 属性可以自定义日期格式。
<ImDateRangePicker
format="YYYY/MM/DD HH:mm:ss"
:startDate="startDate"
:endDate="endDate"
@change="onChange" />

```vue
<template>
  <ImDateRangePicker
    format="YYYY/MM/DD HH:mm:ss"
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

## 禁用

设置 `disabled` 属性为 `true` 可以禁用日期范围选择器。

<ImDateRangePicker disabled />

```vue
<template>
  <ImDateRangePicker disabled />
</template>
```
