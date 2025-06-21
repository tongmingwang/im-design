# Collapse Component

Used to implement collapsible/expandable content panels.

<script setup lang="ts">
import { ref } from 'vue';
const activeName = ref('1');
</script>

## Basic Usage

Multiple panels can be expanded simultaneously without affecting each other

<ImCollapse>
  <ImCollapseItem :title="`News List ${item}`" :name="item" v-for="item in 5">
    A very long news content, omitted here.
  </ImCollapseItem>
</ImCollapse>

```vue
<template>
  <ImCollapse>
    <ImCollapseItem :title="`News List ${item}`" :name="item" v-for="item in 5">
      A very long news content, omitted here.
    </ImCollapseItem>
  </ImCollapse>
</template>
```

## Accordion Mode

Only one panel can be expanded at a time (accordion mode)
Use v-model to bind the currently active panel's name

<ImCollapse v-model="activeName">
  <ImCollapseItem :title="`News List ${item}`" :name="item" v-for="item in 5">
    A very long news content, omitted here.
  </ImCollapseItem>
</ImCollapse>

```vue
<template>
  <ImCollapse v-model="activeName">
    <ImCollapseItem :title="`News List ${item}`" :name="item" v-for="item in 5">
      A very long news content, omitted here.
    </ImCollapseItem>
  </ImCollapse>
</template>
```

## Custom Header Slot

Customize accordion header through slots

<ImCollapse accordion>
  <ImCollapseItem :name="item" v-for="item in 5">
    <template #header>
      <span style="color: red;">Custom Header {{item}}</span>
    </template>
    A very long news content, omitted here.
  </ImCollapseItem>
</ImCollapse>

```vue
<template>
  <ImCollapse accordion>
    <ImCollapseItem :name="item" v-for="item in 5">
      <template #header>
        <span style="color: red;">Custom Header {{ item }}</span>
      </template>
      A very long news content, omitted here.
    </ImCollapseItem>
  </ImCollapse>
</template>
```

## APIs