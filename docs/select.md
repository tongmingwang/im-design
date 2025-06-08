# Select 选择器

下拉选择器，用于从一组选项中选择一个。

## 基础用法

基本使用。

<script setup >
import { ref } from 'vue'
const val = ref('')
const options = new Array(4).fill().map((_, index) => ({ value: `${index}`, label: `选项 ${index} ` }))
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
  .map((_, index) => ({ value: `${index}`, label: `选项 ${index} ` }));
</script>
```

## 设置宽度

设置 width 为一个 css 样式值或者数字，单位默认为 px。

<ImSelect :options="options" v-model="val" width="200" />

## 设置尺寸

设置 `size` 为数字，默认为 36。
<ImSelect :options="options" v-model="val" size="28" />
