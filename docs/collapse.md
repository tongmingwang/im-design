# Collapse 折叠面板

用于实现内容的折叠/展开功能。

<script setup lang="ts">
import { ref } from 'vue';
const activeName = ref('1');
</script>

## 基本用法

可同时展开多个面板，面板之间不影响

<ImCollapse>
  <ImCollapseItem :title="`新闻列表 ${item}`" :name="item" v-for="item in 5">
    一个很长的新闻内容，这里省略了。
  </ImCollapseItem>
</ImCollapse>

```vue
<template>
  <ImCollapse>
    <ImCollapseItem :title="`新闻列表 ${item}`" :name="item" v-for="item in 5">
      一个很长的新闻内容，这里省略了。
    </ImCollapseItem>
  </ImCollapse>
</template>
```

## 手风琴模式

同时只能展开一个面板 (手风琴模式)
使用 v-model 绑定当前激活面板的 name

<ImCollapse v-model="activeName">
  <ImCollapseItem :title="`新闻列表 ${item}`" :name="item" v-for="item in 5">
    一个很长的新闻内容，这里省略了。
  </ImCollapseItem>
</ImCollapse>

```vue
<template>
  <ImCollapse v-model="activeName">
    <ImCollapseItem :title="`新闻列表 ${item}`" :name="item" v-for="item in 5">
      一个很长的新闻内容，这里省略了。
    </ImCollapseItem>
  </ImCollapse>
</template>
```

## 自定义标题插槽

通过插槽自定义手风琴模式的标题

<ImCollapse accordion>
  <ImCollapseItem :name="item" v-for="item in 5">
    <template #header>
      <span style="color: red;">自定义标题 {{item}}</span>
    </template>
    一个很长的新闻内容，这里省略了。
  </ImCollapseItem>
</ImCollapse>

```vue
<template>
  <ImCollapse accordion>
    <ImCollapseItem :name="item" v-for="item in 5">
      <template #header>
        <span style="color: red;">自定义标题 {{ item }}</span>
      </template>
      一个很长的新闻内容，这里省略了。
    </ImCollapseItem>
  </ImCollapse>
</template>
```

## APIS
