# Breadcrumb Component

Displays the current page's location in the system hierarchy and allows navigation back up.
I believe your company will customize this, so here's a simple implementation.

<script setup lang="ts">
import { ref } from 'vue'
const active = ref('3')
const change = (val: string) => {
  console.log(val)
}
</script>

## Basic Usage

The breadcrumb component combines `ImBreadcrumb` and `ImBreadcrumbItem` to easily generate breadcrumb navigation.

<ImBreadcrumb v-model="active" @change="change">
<ImBreadcrumbItem value="1">Home</ImBreadcrumbItem>
<ImBreadcrumbItem value="2">Components</ImBreadcrumbItem>
<ImBreadcrumbItem value="3">Breadcrumb</ImBreadcrumbItem>
</ImBreadcrumb>

```vue
<template>
  <ImBreadcrumb v-model="active" @change="change">
    <ImBreadcrumbItem value="1">Home</ImBreadcrumbItem>
    <ImBreadcrumbItem value="2">Components</ImBreadcrumbItem>
    <ImBreadcrumbItem value="3">Breadcrumb</ImBreadcrumbItem>
  </ImBreadcrumb>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const active = ref('3');
const change = (val: string) => {
  console.log(val);
};
</script>
```

## APIs