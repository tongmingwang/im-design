# Tooltip Component

Displays additional information when hovering over an element.

## Basic Usage

Show tooltip text when hovering over an element.

<ImTooltip content="This is a tooltip message">
  Hover over me
</ImTooltip>

```vue
<template>
  <ImTooltip content="This is a tooltip message">
    Hover over me
  </ImTooltip>
</template>
```

## Positioning

Set tooltip position using the `placement` property.

<ImRow gutter="8">
  <ImTooltip content="Tooltip content" placement="top">
    <ImButton>top</ImButton>
  </ImTooltip>

  <ImTooltip content="Tooltip content" placement="top-left">
    <ImButton>top-left</ImButton>
  </ImTooltip>

  <ImTooltip content="Tooltip content" placement="top-right">
    <ImButton>top-right</ImButton>
  </ImTooltip>
</ImRow>

<br/>
<br/>

<ImRow gutter="8">
  <ImTooltip content="Tooltip content" placement="bottom">
    <ImButton>bottom</ImButton>
  </ImTooltip>

  <ImTooltip content="Tooltip content" placement="bottom-left">
    <ImButton>bottom-left</ImButton>
  </ImTooltip>

  <ImTooltip content="Tooltip content" placement="bottom-right">
    <ImButton>bottom-right</ImButton>
  </ImTooltip>
</ImRow>

<br/>
<br/>

<ImRow gutter="8">
  <ImTooltip content="Tooltip content" placement="left">
    <ImButton>left</ImButton>
  </ImTooltip>

  <ImTooltip content="Tooltip content" placement="left-bottom">
    <ImButton>left-bottom</ImButton>
  </ImTooltip>

  <ImTooltip content="Tooltip content" placement="left-top">
    <ImButton>left-top</ImButton>
  </ImTooltip>
</ImRow>

<br/>
<br/>

<ImRow gutter="8">
  <ImTooltip content="Tooltip content" placement="right">
    <ImButton>right</ImButton>
  </ImTooltip>

  <ImTooltip content="Tooltip content" placement="right-bottom">
    <ImButton>right-bottom</ImButton>
  </ImTooltip>

  <ImTooltip content="Tooltip content" placement="right-top">
    <ImButton>right-top</ImButton>
  </ImTooltip>
</ImRow>

## Trigger Methods

Set `trigger` to control activation method. Supports `hover` (default) and `click`.

<ImTooltip content="Tooltip content" trigger="click">
  <ImButton>Click to show</ImButton>
</ImTooltip>

## Scroll Close

Set `scrollClose` to close tooltip when scrolling.

<ImTooltip content="Tooltip content" scrollClose trigger="click">
  <ImButton>Close on scroll</ImButton>
</ImTooltip>

## APIs