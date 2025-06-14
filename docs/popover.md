# Popover 气泡卡片

点击可以显示更多内容的浮层。

<script setup lang="ts">
  import { ref } from 'vue'
 
  const show = ref(false)

  const toggle = () => {
    show.value = !show.value;
  }

</script>

## 基础用法

基础的 Popover 气泡卡片，在页面的一角展示更多内容。

<ImPopover title="Popover Title" style="margin-right:8px;">
    <ImButton>Hover Show Popover</ImButton>
    <template #content> This is a popover content. </template>
  </ImPopover>

```vue
<template>
  <ImPopover title="Popover Title">
    <ImButton>Hover Show Popover</ImButton>
    <template #content> This is a popover content. </template>
  </ImPopover>

  <ImPopover
    trigger="click"
    content="This is a popover content."
    title="Popover">
    <ImButton>Click Show</ImButton>
  </ImPopover>
</template>
```

## 触发方式

点击触发显示气泡卡片。

<ImPopover
    trigger="click"
    content="This is a popover content."
    title="Popover">
<ImButton>Click Show</ImButton>
</ImPopover>

## 外部控制

使用 `v-model` 控制 Popover 的显示和隐藏。

<ImPopover
    trigger="click"
    content="This is a popover content."
    title="Popover" v-model="show">
<span>Show</span>
</ImPopover>
<br />
<br />
<ImButton @click="show = !show">Toggle Popover</ImButton>

## 设置位置

支持 8 个方向的位置设置。
placement 属性用于设置 Popover 的弹出位置。
`bottom` `bottom-left` `bottom-right` `top` `top-left` `top-right` `left` `left-top` `left-bottom` `right` `right-top` `right-bottom`

<ImPopover
    placement="top-left"
    content="This is a popover content."
    title="Popover">
<ImButton>top-left</ImButton>
</ImPopover>

## APIS
