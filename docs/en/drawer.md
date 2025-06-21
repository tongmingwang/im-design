# Drawer Component

A floating panel that slides in from the screen edge.

## Basic Usage

The drawer slides in from the screen edge and overlays content.

<script setup>
import { ref } from 'vue';

const drawer = ref(false);
const customW = ref(false);
const left = ref(false);
const top = ref(false);
const bottom = ref(false);
</script>

<ImDrawer v-model="drawer" placement="right">
  <ImCard title="Demo" borderless>
    <template #header-action>
      <ImButton @click="drawer = false" variant="text" shape="circle" size="48">
        <ImIcon name="close" size="20" />
      </ImButton>
    </template>
    <p>Text ...</p>
    <p>Text ...</p>
    <p>Text ...</p>
  </ImCard>
</ImDrawer>
<ImButton @click="drawer = true" color="primary">Try it</ImButton>

```vue
<template>
  <ImDrawer v-model="drawer">
    <ImCard title="Demo" borderless>
      <template #header-action>
        <ImButton
          @click="drawer = false"
          variant="text"
          shape="circle"
          size="48">
          <ImIcon name="close" size="20" />
        </ImButton>
      </template>
      <p>Text ...</p>
      <p>Text ...</p>
      <p>Text ...</p>
    </ImCard>
  </ImDrawer>
  <ImButton @click="drawer = true">Open</ImButton>
</template>

<script setup>
import { ref } from 'vue';

const drawer = ref(false);
</script>
```

## Drawer Direction

Change drawer direction using the `placement` property. Supports `left`, `right`, `top`, `bottom`

<ImButton @click="left = true">Left</ImButton>
<ImButton @click="top = true">Top</ImButton>
<ImButton @click="bottom = true">Bottom</ImButton>

<ImDrawer v-model="left" placement="left">
  <ImCard title="Demo" borderless>
    <p>Text ...</p>
    <p>Text ...</p>
    <p>Text ...</p>
  </ImCard>
</ImDrawer>

<ImDrawer v-model="top" placement="top">
  <ImCard title="Demo" borderless>
    <p>Text ...</p>
    <p>Text ...</p>
    <p>Text ...</p>
  </ImCard>
</ImDrawer>

<ImDrawer v-model="bottom" placement="bottom">
  <ImCard title="Demo" borderless>
    <p>Text ...</p>
    <p>Text ...</p>
    <p>Text ...</p>
  </ImCard>
</ImDrawer>

## Custom Drawer Width

Set a `size` property to customize drawer width. Example: `50%`

<ImDrawer v-model="customW" size="50%">
  <ImCard title="Demo" borderless>
    <p>Text ...</p>
    <p>Text ...</p>
    <p>Text ...</p>
  </ImCard>
</ImDrawer>
<ImButton @click="customW = true">Custom Width</ImButton>

## APIs