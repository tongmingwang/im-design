# Textarea 文本域

多行文本输入框，用于输入较长的文本内容。

## 基础用法

通过设置 `v-model` 绑定输入框的值

<script setup lang="ts">
import { ref, watch } from 'vue';

const textarea = ref('Hello World!');
const textarea2 = ref(`这是一个很长很长的文本，用于测试文本域的自动高度功能。
这是一个很长很长的文本，用于测试文本域的自动高度功能。`);
</script>

<ImTextarea v-model="textarea"></ImTextarea>

```vue
<template>
  <ImTextarea v-model="textarea"></ImTextarea>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const textarea = ref('Hello World!');
</script>
```

## 禁用文本域

通过设置 `disabled` 属性来禁用文本域

<ImTextarea v-model="textarea" disabled></ImTextarea>

```vue
<template>
  <ImTextarea v-model="textarea" disabled></ImTextarea>
</template>
```

## 只读文本域

通过设置 `readonly` 属性来只读文本域

<ImTextarea v-model="textarea" readonly></ImTextarea>

```vue
<template>
  <ImTextarea v-model="textarea" readonly></ImTextarea>
</template>
```

## 设置 rows

通过设置 `rows` 属性来控制文本域的行数。如果不设置，则默认为 2 行。

<ImTextarea  :rows="5"></ImTextarea>

```vue
<template>
  <ImTextarea :rows="5"></ImTextarea>
</template>
```

## 自适应高度

通过设置 `autoSize` 属性为 true，可以使得文本域的高度自动适应内容。

<ImTextarea v-model="textarea2" autoSize></ImTextarea>

```vue
<template>
  <ImTextarea v-model="textarea2" autoSize></ImTextarea>
</template>
```

## 限制输入长度

设置 最大长度 `maxlength` 属性，可以限制文本域的输入长度。

<ImTextarea  maxlength="10" placeholder="最多十个字"></ImTextarea>

```vue
<template>
  <ImTextarea maxlength="10" placeholder="最多十个字"></ImTextarea>
</template>
```
