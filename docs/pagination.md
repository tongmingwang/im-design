# Pagination 分页

分页器用于分隔长列表，每次只加载一个页面。

## 基本用法

完整功能分页器。

<ImPagination
layout="prev,next,pager"
:total="200"
:pageNumber="pageNumber"
:pageSize="pageSize"
@change="onChange" />

<script setup >
import { ref } from 'vue';

const pageNumber = ref(1);
const pageSize = ref(30);

const onChange = (data) => {
  console.log(data);
  pageNumber.value = data.pageNumber;
  pageSize.value = data.pageSize;
};
</script>

```vue
<template>
  <ImPagination
    :total="200"
    layout="prev,next,pager"
    :pageNumber="pageNumber"
    :pageSize="pageSize"
    @change="onChange" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const pageNumber = ref(10);
const pageSize = ref(10);
const onChange = (data) => {
  pageNumber.value = data.pageNumber;
  pageSize.value = data.pageSize;
};
</script>
```

## size 尺寸

设置 `size` 28 尺寸的分页器。

<ImPagination
layout="prev,next,pager"
:total="200"
size="28"
:pageNumber="pageNumber"
:pageSize="pageSize"
@change="onChange" />

设置 `size` 40 尺寸的分页器。

<ImPagination
layout="prev,next,pager"
:total="200"
size="40"
:pageNumber="pageNumber"
:pageSize="pageSize"
@change="onChange" />

## 完整功能分页器

默认是完整的分页器，包含：上一页、下一页、跳转页码。你可以设置 `layout` 属性来隐藏部分功能。

<ImPagination
:total="200"
size="40"
:pageNumber="pageNumber"
:pageSize="pageSize"
@change="onChange" />

## APIS
