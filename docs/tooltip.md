# Tooltip 文字提示

常用于展示鼠标 hover 时的提示信息。

## 基本用法

鼠标移入元素，显示提示的文案。

<ImTooltip content=" This is a tooltip. 意思是 这是一个文字提示">
  This is a tooltip.
</ImTooltip>

```vue
<template>
  <ImTooltip content=" This is a tooltip. 意思是 这是一个文字提示">
    This is a tooltip.
  </ImTooltip>
</template>
```

## 方向

placement 属性设置提示框出现的位置。

<ImRow gutter="8">
  <ImTooltip content="这是提示文字组件！" placement="top">
  <ImButton>top</ImButton>
</ImTooltip>

<ImTooltip content="这是提示文字组件！" placement="top-left">
  <ImButton>top-left</ImButton>
</ImTooltip>

<ImTooltip content="这是提示文字组件！" placement="top-right">
  <ImButton>top-right</ImButton>
</ImTooltip>
</ImRow>

<br/>
<br/>

<ImRow gutter="8">
  <ImTooltip content="这是提示文字组件！" placement="bottom">
  <ImButton>bottom</ImButton>
</ImTooltip>

<ImTooltip content="这是提示文字组件！" placement="bottom-left">
  <ImButton>bottom-left</ImButton>
</ImTooltip>

<ImTooltip content="这是提示文字组件！" placement="bottom-right">
  <ImButton>bottom-right</ImButton>
</ImTooltip>
</ImRow>

<br/>
<br/>

<ImRow gutter="8">
  <ImTooltip content="这是提示文字组件！" placement="left">
  <ImButton>left</ImButton>
</ImTooltip>

<ImTooltip content="这是提示文字组件！" placement="left-bottom">
  <ImButton>left-bottom</ImButton>
</ImTooltip>

<ImTooltip content="这是提示文字组件！" placement="left-top">
  <ImButton>left-top</ImButton>
</ImTooltip>
</ImRow>

<br/>
<br/>

<ImRow gutter="8">
  <ImTooltip content="这是提示文字组件！" placement="right">
  <ImButton>right</ImButton>
</ImTooltip>

<ImTooltip content="这是提示文字组件！" placement="right-bottom">
  <ImButton>right-bottom</ImButton>
</ImTooltip>

<ImTooltip content="这是提示文字组件！" placement="right-top">
  <ImButton>right-top</ImButton>
</ImTooltip>
</ImRow>

## 触发方式

设置 `trigger` 属性，可以设置鼠标点击或停留触发提示。支持 `hover`, `click`。

<ImTooltip content="这是提示文字组件！"  trigger="click">
  <ImButton>点击显示</ImButton>
  </ImTooltip>

## 滚动关闭

设置 `scrollClose` 属性，当鼠标滚动时关闭提示框。

<ImTooltip content="这是提示文字组件！" scrollClose trigger="click">
  <ImButton>滚动鼠标滚轮关闭提示</ImButton>
  </ImTooltip>

## APIS
