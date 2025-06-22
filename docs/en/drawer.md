# Drawer Component

A sliding panel that emerges from the screen edge, commonly used for navigation menus, settings panels, etc.

  <script setup>
import { ref } from 'vue';

const drawer = ref(false);
const left = ref(false);
const top = ref(false);
const bottom = ref(false);
const customSize = ref(false);
const open = ref(false);
</script>

<style scoped>

  .demo-buttons {
    display: flex;
    gap: 8px;
  }
</style>



## Basic Usage

Basic drawer component, slides in from right by default.

<ImDrawer v-model="drawer">
    <p>Drawer content area</p>
    <p>Can contain forms, lists or any other content</p>
  </ImDrawer>
  <ImButton @click="drawer = true">Open Drawer</ImButton>
  
```vue
<template>
  <ImDrawer v-model="drawer">
    <p>Drawer content area</p>
    <p>Can contain forms, lists or any other content</p>
  </ImDrawer>
  <ImButton @click="drawer = true">Open Drawer</ImButton>
</template>

<script setup>
import { ref } from 'vue';

const drawer = ref(false);
</script>

```

## Different Directions

Control drawer direction using `placement` property. Supports four directions:

 <div class="demo-buttons">
    <ImButton @click="left = true">Left</ImButton>
    <ImButton @click="top = true">Top</ImButton>
    <ImButton @click="bottom = true">Bottom</ImButton>
  </div>

  <ImDrawer v-model="left" placement="left" >
    <p>Left drawer content</p>
  </ImDrawer>

  <ImDrawer v-model="top" placement="top" >
    <p>Top drawer content</p>
  </ImDrawer>

  <ImDrawer v-model="bottom" placement="bottom" >
    <p>Bottom drawer content</p>
  </ImDrawer>

```vue
<template>
  <div class="demo-buttons">
    <ImButton @click="left = true">Left</ImButton>
    <ImButton @click="top = true">Top</ImButton>
    <ImButton @click="bottom = true">Bottom</ImButton>
  </div>

  <ImDrawer v-model="left" placement="left" >
    <p>Left drawer content</p>
  </ImDrawer>

  <ImDrawer v-model="top" placement="top" >
    <p>Top drawer content</p>
  </ImDrawer>

  <ImDrawer v-model="bottom" placement="bottom" >
    <p>Bottom drawer content</p>
  </ImDrawer>
</template>

```

## Custom Size

Customize drawer size using `size` property, supports percentage or pixel values:

<ImDrawer v-model="customSize" size="50%">
    <p>Drawer with 50% width</p>
  </ImDrawer>
  <ImButton @click="customSize = true">Open Half-width Drawer</ImButton>

```vue
<template>
  <ImDrawer v-model="customSize" size="50%">
    <p>Drawer with 50% width</p>
  </ImDrawer>
  <ImButton @click="customSize = true">Open Half-width Drawer</ImButton>
</template>
```

## Close Behavior Control

<ImDrawer
    v-model="open"
    :close-on-click-mask="false"
    >

<p>Clicking mask won't close this drawer</p>
<ImButton @click="open = false">Click to Close</ImButton>
</ImDrawer>
<ImButton @click="open = true">Open Drawer</ImButton>

```vue
<template>
  <ImDrawer
    v-model="open"
    :close-on-click-mask="false"
    >
    <p>Clicking mask won't close this drawer</p>
    <ImButton @click="open = false">Click to Close</ImButton>
  </ImDrawer>
  <ImButton @click="open = true">Open Drawer</ImButton>
</template>
```

## API

### ImDrawer Props

| Property         | Description                                      | Type          | Default | Required |
| ---------------- | ------------------------------------------------ | ------------- | ------- | -------- |
| modelValue       | Controls drawer visibility                       | boolean       | false   | Yes      |
| placement        | Drawer direction, options: left/right/top/bottom | string        | 'right' | No       |
| size             | Drawer size, supports percentage or pixel value  | string/number | '378px' | No       |
| mask             | Whether to show mask layer                       | boolean       | true    | No       |
| closeOnClickMask | Whether clicking mask closes drawer              | boolean       | true    | No       |
| zIndex           | Sets drawer's z-index                            | number/string | -       | No       |

### ImDrawer Events

| Event             | Description                              | Callback Parameters      |
| ----------------- | ---------------------------------------- | ------------------------ |
| update:modelValue | Triggered when drawer visibility changes | (value: boolean) => void |

### ImDrawer Slots

| Slot    | Description         |
| ------- | ------------------- |
| default | Drawer content area |
