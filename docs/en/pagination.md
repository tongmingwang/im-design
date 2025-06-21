# Pagination Component

The paginator divides long lists into pages, loading only one page at a time.

## Basic Usage

Full-featured paginator.

<ImPagination
  layout="prev,next,pager"
  :total="200"
  :pageNumber="pageNumber"
  :pageSize="pageSize"
  @change="onChange" />

<script setup>
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

## Size Variations

28px size paginator:

<ImPagination
  layout="prev,next,pager"
  :total="200"
  size="28"
  :pageNumber="pageNumber"
  :pageSize="pageSize"
  @change="onChange" />

40px size paginator:

<ImPagination
  layout="prev,next,pager"
  :total="200"
  size="40"
  :pageNumber="pageNumber"
  :pageSize="pageSize"
  @change="onChange" />

## Full-featured Paginator

The default paginator includes: previous, next, and page jumper. Use the `layout` property to hide certain features.

<ImPagination
  :total="200"
  size="40"
  :pageNumber="pageNumber"
  :pageSize="pageSize"
  @change="onChange" />

## APIs