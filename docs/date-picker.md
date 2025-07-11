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
## APIS
