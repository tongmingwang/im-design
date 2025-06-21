# Popover Component

A floating card that shows additional content when clicked.

<script setup lang="ts">
  import { ref } from 'vue'
 
  const show = ref(false)

  const toggle = () => {
    show.value = !show.value;
  }
</script>

## Basic Usage

Basic Popover card that displays additional content in a corner of the page.

<ImPopover title="Popover Title" style="margin-right:8px;">
  <ImButton>Hover Show Popover</ImButton>
  <template #content>This is a popover content.</template>
</ImPopover>

```vue
<template>
  <ImPopover title="Popover Title">
    <ImButton>Hover Show Popover</ImButton>
    <template #content>This is a popover content.</template>
  </ImPopover>

  <ImPopover
    trigger="click"
    content="This is a popover content."
    title="Popover">
    <ImButton>Click Show</ImButton>
  </ImPopover>
</template>
```

## Trigger Methods

Click to show the popover card.

<ImPopover
  trigger="click"
  content="This is a popover content."
  title="Popover">
  <ImButton>Click Show</ImButton>
</ImPopover>

## External Control

Use `v-model` to control Popover visibility.

<ImPopover
  trigger="click"
  content="This is a popover content."
  title="Popover" 
  v-model="show">
  <span>Show</span>
</ImPopover>
<br />
<br />
<ImButton @click="show = !show">Toggle Popover</ImButton>

## Positioning

Supports 8 different positions.
The `placement` property sets where the Popover appears.
Options: `bottom`, `bottom-left`, `bottom-right`, `top`, `top-left`, `top-right`, `left`, `left-top`, `left-bottom`, `right`, `right-top`, `right-bottom`

<ImPopover
  placement="top-left"
  content="This is a popover content."
  title="Popover">
  <ImButton>top-left</ImButton>
</ImPopover>

## APIs