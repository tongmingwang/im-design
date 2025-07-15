# DatePicker 日期选择器

需要选择某一日期时使用

<script setup lang="ts">
import { ref, watch } from 'vue';

const selectedDate = ref('');
const timeValue = ref('');
</script>

## 基础使用
 
使用 v-model 绑定日期值，默认为空字符串。


<ImDatePicker  v-model="selectedDate" />

```vue
<template>
  <ImDatePicker v-model="selectedDate" />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
const selectedDate = ref('');
</script>
```



## 支持清除

设置 clearable 为 true，则可以清除已选择的日期。
  <ImDatePicker clearable v-model="selectedDate" />

```vue
<template>
  <ImDatePicker clearable v-model="selectedDate" />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
const selectedDate = ref('');
</script>
```


## 支持时间选择

设置 showTime 为 true，则可以同时选择日期和时间。

<ImDatePicker :showTime="true" format="YYYY-MM-DD HH:mm:ss" v-model="timeValue" />

```vue
<template>
  <ImDatePicker showTime format="YYYY-MM-DD HH:mm:ss" v-model="timeValue" />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
const timeValue = ref('');
</script>
```
## API


## DatePickerProps

| 字段名         | 类型                           | 描述                                                                 |
|----------------|--------------------------------|----------------------------------------------------------------------|
| modelValue     | string                         | 绑定的值                                                           |
| disabled       | boolean                        | 是否禁用，默认为false                                              |
| readonly       | boolean                        | 是否只读，默认为false                                              |
| clearable      | boolean                        | 是否可清除内容，默认为false                                        |
| placeholder    | string                         | 占位符文本                                                         |
| format         | string                         | 日期格式                                                           |
| zIndex         | number                         | 设置组件的z-index值                                                  |
| placement      | ImPlaceType                    | 弹出位置类型                                                       |
| showTime       | boolean                        | 是否显示时间选择器，默认为false                                    |
| disabledDate   | (date?: Date) => boolean       | 禁用特定日期的函数                                               |
