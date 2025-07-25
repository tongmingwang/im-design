# InputNumber 数字输入框

通过鼠标或键盘，输入范围内的数值。

## 基础用法

<script setup lang="ts">
import { ref } from 'vue';
const value = ref('');
const input = ref(null);
</script>

通过 `v-model` 双向绑定输入框的值。

<ImInputNumber v-model="value" placeholder="基础使用" />

```vue
<template>
  <ImInputNumber v-model="value" placeholder="基础使用" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref('');
</script>
```

## 控制步长

设置 `step` 属性可以控制步长。

<ImInputNumber v-model="value" step="10" placeholder="控制步长" />

```vue
<template>
  <ImInputNumber v-model="value" step="10" placeholder="控制步长" />
</template>
```

## 前缀和后缀

<ImInputNumber
    v-model="value"
    placeholder="价值"
    prefix="Total:"
    suffix="亿" />

插槽方式自定义前缀和后缀。

<ImInputNumber v-model="value" placeholder="价值">
    <template #prefix>Total:</template>
    <template #suffix>亿</template>
  </ImInputNumber>

```vue
<template>
  <ImInputNumber
    v-model="value"
    placeholder="价值"
    prefix="Total:"
    suffix="亿" />
  <ImInputNumber v-model="value" placeholder="价值">
    <template #prefix>Total:</template>
    <template #suffix>亿</template>
  </ImInputNumber>
</template>
```

## 右侧按钮

设置 `controlRight` 属性可以显示右侧按钮，点击可增加或减少输入框的值。

<ImInputNumber v-model="value" controlRight placeholder="右侧按钮" />

```vue
<template>
  <ImInputNumber v-model="value" controlRight placeholder="右侧按钮" />
</template>
```

## 小数位

设置 `precision` 属性可以控制小数位数。

<ImInputNumber
    v-model="value"
    :precision="2"
    :step="0.01"
    placeholder="小数位" />

```vue
<template>
  <ImInputNumber
    v-model="value"
    :precision="2"
    :step="0.01"
    placeholder="小数位" />
</template>
```

## 禁用

设置 `disabled` 属性可以禁用输入框。

<ImInputNumber disabled clearable  v-model="value" />

```vue
<template>
  <ImInputNumber disabled clearable v-model="value" />
</template>
```

## 只读

设置 `readonly` 属性可以设置输入框为只读。

<ImInputNumber readonly v-model="value" />

```vue
<template>
  <ImInputNumber readonly v-model="value" />
</template>
```

## 最大值和最小值

设置 `max` 和 `min` 属性可以控制输入框的最大值和最小值。

<ImInputNumber v-model="value" :max="100" :min="0" placeholder="最大值和最小值" />

```vue
<template>
  <ImInputNumber
    v-model="value"
    :max="100"
    :min="0"
    placeholder="最大值和最小值" />
</template>
```

## 清除

设置 `clearable` 属性可以显示一个清空按钮，点击可清除输入框内容。

<ImInputNumber clearable v-model="value" />

```vue
<template>
  <ImInputNumber clearable v-model="value" />
</template>
```

## 尺寸

设置 `size` 属性可以控制输入框的大小。 48

<ImInputNumber size="48" v-model="value" />

```vue
<template>
  <ImInputNumber size="48" v-model="value" />
</template>
```

## API

| 字段名         | 类型                        | 描述                                                                 |
|----------------|-----------------------------|----------------------------------------------------------------------|
| modelValue     | string \| number \| any     | 绑定的值                                                           |
| disabled       | boolean                     | 是否禁用，默认为false                                              |
| readonly       | boolean                     | 是否只读，默认为false                                              |
| placeholder    | string                      | 输入框占位符                                                       |
| name           | string                      | 输入框名称                                                         |
| id             | string                      | 输入框ID                                                           |
| maxlength      | number                      | 最大长度                                                           |
| minlength      | number                      | 最小长度                                                           |
| max            | number                      | 最大值                                                             |
| min            | number                      | 最小值                                                             |
| step           | number                      | 步长                                                               |
| pattern        | string                      | 输入验证正则表达式                                                 |
| required       | boolean                     | 是否必填，默认为false                                              |
| autocomplete   | string                      | 自动完成提示信息                                                   |
| autofocus      | boolean                     | 页面加载时是否自动聚焦，默认为false                                |
| tabindex       | number                      | tab索引                                                            |
| precision      | number                      | 数值精度                                                           |
| size           | number \| string            | 输入框大小                                                         |
| prefix         | string                      | 输入框前缀                                                         |
| suffix         | string                      | 输入框后缀                                                         |
| clearable      | boolean                     | 是否可清除内容，默认为false                                        |