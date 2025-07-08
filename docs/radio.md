# Radio 单选框

在一组备选项中进行单选

<script setup lang="ts">
import { ref } from 'vue';
const value = ref(1);
const arr = new Array(3).fill(0).map((_, index) => ({
  value: index,
  label: `选项${index}`,
}));
</script>

## 基本用法

单选框不应该有太多的可选项， 如果你有很多的可选项你应该使用选择框而不是单选框。

<ImRadioGroup v-model="value">
  <ImRadio
    v-for="item in arr"
    :key="item.value"
    :label="item.label"
    :value="item.value"></ImRadio>
</ImRadioGroup>
    
```vue
<template>
  <ImRadioGroup v-model="value">
    <ImRadio
      v-for="item in arr"
      :key="item.value"
      :label="item.label"
      :value="item.value"></ImRadio>
  </ImRadioGroup>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref(1);
const arr = new Array(3).fill(0).map((_, index) => ({
  value: index,
  label: `选项${index}`,
}));
</script>

````


## 垂直方向

通过设置 `vertical` 属性为 `true` 可以使单选框垂直排列

<ImRadioGroup v-model="value" vertical>
  <ImRadio
    v-for="item in arr"
    :key="item.value"
    :label="item.label"
    :value="item.value"></ImRadio>
</ImRadioGroup>

```vue
<template>
  <ImRadioGroup v-model="value" vertical>
  <ImRadio
    v-for="item in arr"
    :key="item.value"
    :label="item.label"
    :value="item.value"></ImRadio>
</ImRadioGroup>
</template>

````

## 单选按钮

设置 `variant="button"` 可以将单选框变为按钮样式。

<ImRadioGroup v-model="value" variant="button">
  <ImRadio
    v-for="item in arr"
    :key="item.value"
    :label="item.label"
    :value="item.value"></ImRadio>
</ImRadioGroup>

```vue
<template>
  <ImRadioGroup v-model="value" variant="button">
    <ImRadio
      v-for="item in arr"
      :key="item.value"
      :label="item.label"
      :value="item.value"></ImRadio>
  </ImRadioGroup>
</template>
```

## 垂直方向按钮

<ImRadioGroup v-model="value" vertical variant="button">
 <ImRadio
    v-for="item in arr"
    :key="item.value"
    :label="item.label"
    :value="item.value" />
</ImRadioGroup>

## size 属性

通过设置 `size` 属性可以控制单选框的大小

<ImRadioGroup v-model="value" size="48">
  <ImRadio
    v-for="item in arr"
    :key="item.value"
    :label="item.label"
    :value="item.value"></ImRadio>
</ImRadioGroup>

<ImRadioGroup v-model="value" size="48" variant="button">
  <ImRadio
    v-for="item in arr"
    :key="item.value"
    :label="item.label"
    :value="item.value"></ImRadio>
</ImRadioGroup>

```vue
<template>
  <ImRadioGroup v-model="value" size="48">
    <ImRadio
      v-for="item in arr"
      :key="item.value"
      :label="item.label"
      :value="item.value"></ImRadio>
  </ImRadioGroup>

  <ImRadioGroup v-model="value" size="48" variant="button">
    <ImRadio
      v-for="item in arr"
      :key="item.value"
      :label="item.label"
      :value="item.value"></ImRadio>
  </ImRadioGroup>
</template>
```

## disabled 属性

通过设置 `disabled` 属性禁用

<ImRadioGroup v-model="value" size="48">
  <ImRadio
    v-for="item in arr"
    :key="item.value"
    :label="item.label"
    :value="item.value" disabled></ImRadio>
</ImRadioGroup>

```vue
<template>
  <ImRadioGroup v-model="value">
    <ImRadio
      v-for="item in arr"
      disabled
      :key="item.value"
      :label="item.label"
      :value="item.value"></ImRadio>
  </ImRadioGroup>
</template>
```

## readonly 属性

通过设置 `readonly` 属性只读

<ImRadioGroup v-model="value" size="48">
  <ImRadio
    v-for="item in arr"
    :key="item.value"
    :label="item.label"
    :value="item.value" readonly></ImRadio>
</ImRadioGroup>

```vue
<template>
  <ImRadioGroup v-model="value">
    <ImRadio
      v-for="item in arr"
      readonly
      :key="item.value"
      :label="item.label"
      :value="item.value"></ImRadio>
  </ImRadioGroup>
</template>
```
