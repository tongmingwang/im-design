# Input 输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 基础用法

<script setup lang="ts">
import { ref } from 'vue';
const value = ref('');
const input = ref(null);
</script>

通过 `v-model` 双向绑定输入框的值。

<ImInput v-model="value" placeholder="基础使用" />

```vue
<template>
  <ImInput v-model="value" placeholder="基础使用" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref('');
</script>
```

## 前缀后缀

在输入框中添加前缀或后缀图标。

<ImInput v-model="value" placeholder="基础使用" prefix="https" suffix=".com" />

插槽方式
<ImInput v-model="value" placeholder="基础使用">
<template #prefix>https</template>
<template #suffix>.com</template>
</ImInput>

```vue
<template>
  <ImInput
    v-model="value"
    placeholder="基础使用"
    prefix="https"
    suffix=".com" />

  <ImInput v-model="value" placeholder="基础使用">
    <template #prefix>https</template>
    <template #suffix>.com</template>
  </ImInput>
</template>
```

## 前置后置

设置 `prepend` 和 `append` 属性可以分别在输入框前置和后置内容。

<ImInput prepend="Prepend" clearable append="Append" v-model="value" />

插槽方式
<ImInput v-model="value" placeholder="基础使用">
<template #prepend>https</template>
<template #append>.com</template>
</ImInput>

```vue
<template>
  <ImInput prepend="Prepend" clearable append="Append" v-model="value" />
  <ImInput v-model="value" placeholder="基础使用">
    <template #prepend>https</template>
    <template #append>.com</template>
  </ImInput>
</template>
```

## 禁用

设置 `disabled` 属性可以禁用输入框。

<ImInput disabled clearable  v-model="value" />

```vue
<template>
  <ImInput disabled clearable v-model="value" />
</template>
```

## 清除

设置 `clearable` 属性可以显示一个清空按钮，点击可清除输入框内容。

<ImInput clearable v-model="value" />

```vue
<template>
  <ImInput clearable v-model="value" />
</template>
```

## 密码

设置类型 `password` 可以将输入框设置为密码类型，此时输入内容会被隐藏。

<ImInput type="password" v-model="value" />

```vue
<template>
  <ImInput type="password" v-model="value" />
</template>
```

## 尺寸

设置 `size` 属性可以控制输入框的大小。 48

<ImInput size="48" v-model="value" />

```vue
<template>
  <ImInput size="48" v-model="value" />
</template>
```

## API


| 字段名         | 类型                        | 描述                                                                 |
|----------------|-----------------------------|----------------------------------------------------------------------|
| modelValue     | string \| number \| any     | 绑定的值                                                           |
| disabled       | boolean                     | 是否禁用，默认为false                                              |
| readonly       | boolean                     | 是否只读，默认为false                                              |
| placeholder    | string                      | 输入框占位符                                                       |
| type           | string                      | 输入框类型                                                         |
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
| passwordEye    | boolean                     | 密码输入框是否显示眼睛图标，默认为false                            |
| showWordCount  | boolean                     | 是否显示字数统计，默认为false                                      |
| prepend        | string                      | 输入框前置内容                                                     |
| append         | string                      | 输入框后置内容                                                     |
