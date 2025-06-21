# List Component

The list component is used to display a set of data.

<script setup lang="ts">
import { ref } from 'vue'
const selected = ref('1')
</script>

## Basic Usage

Use `ImListItem` components within `ImList` to display data with proper styling.

<ImList>
  <ImListItem :value="String(item)" v-for="item in 5">
    {{ item }}. List Item Content
  </ImListItem>
</ImList>

```html
<template>
  <ImList>
    <ImListItem :value="String(item)" v-for="item in 5">
      {{ item }}. List Item Content
    </ImListItem>
  </ImList>
</template>
```

## Selection State

Bind selection state using `v-model` to display selected list items.

<ImList v-model="selected">
  <ImListItem :value="String(item)" v-for="item in 5">
    {{ item }}. List Item Content
  </ImListItem>
</ImList>

```html
<template>
  <ImList v-model="selected">
    <ImListItem :value="String(item)" v-for="item in 5">
      {{ item }}. List Item Content
    </ImListItem>
  </ImList>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  const selected = ref('1');
</script>
```

## APIs