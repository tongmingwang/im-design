# Loading Component

Displays a loading animation when resources take time to load, letting users know the content is being processed.

<script setup lang="ts">
  import { ref } from 'vue'
 
  const show = ref(false)

  const toggle = () => {
    show.value = !show.value;
  }
</script>

<style scoped>
  .demo {
    height: 200px;
    width: 100%;
    background-color: var(--im-rgb-color-3);
    border-radius: 4px;
    padding: 20px;
  }
</style>

## Basic Usage

Use the `v-loading` directive to toggle loading animations. Accepts a reactive boolean or object - shows animation when `true`, hides when `false`.

<ImButton @click="toggle">{{ !show ? 'Show' : 'Hide' }} Loading</ImButton>
<br />
<br />

<div class="demo" v-loading="show">
 Loading content...
</div>

```vue
<template>
  <ImButton @click="toggle">Toggle Loading</ImButton>
  <div v-loading="show" class="demo">Loading content...</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const show = ref(false);
const toggle = () => {
  show.value = !show.value;
};
</script>
```

## Global Loading

Use singleton global loading to cover the entire page.

## APIs