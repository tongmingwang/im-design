# List 列表组件

列表组件用于展示一组数据。

<script setup lang="ts">
import { ref } from 'vue'
const selected = ref('1')
</script>

## 基本用法

需要在列表组件中使用`ImListItem`组件来展示数据。才会有更好的样式表现。

 <ImList>
    <ImListItem :value="String(item)" v-for="item in 5"
      >{{ item }}. List Item Content
    </ImListItem>
  </ImList>

```html
<template>
  <ImList>
    <ImListItem :value="String(item)" v-for="item in 5"
      >{{ item }}. List Item Content
    </ImListItem>
  </ImList>
</template>
```

## 选中状态

通过`v-model`绑定选中状态，可以展示选中状态的列表。

 <ImList v-model="selected">
    <ImListItem :value="String(item)" v-for="item in 5"
      >{{ item }}. List Item Content
    </ImListItem>
  </ImList>

```html
<template>
  <ImList v-model="selected">
    <ImListItem :value="String(item)" v-for="item in 5"
      >{{ item }}. List Item Content
    </ImListItem>
  </ImList>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  const selected = ref('1');
</script>
```

## APIS
