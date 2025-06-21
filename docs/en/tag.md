# Tag Component

Used for labeling and selection.

## Basic Usage

Define color using the `color` property. Supported colors: success/info/warning/danger.

Set tag style by passing the `color` property.

<ImRow gutter="8">
  <ImTag>Default</ImTag>
  <ImTag color="primary">Primary</ImTag>
  <ImTag color="error">Error</ImTag>
  <ImTag color="success">Success</ImTag>
  <ImTag color="warning">Warning</ImTag>
</ImRow>

```vue
<template>
  <ImRow gutter="8">
    <ImTag>Default</ImTag>
    <ImTag color="primary">Primary</ImTag>
    <ImTag color="error">Error</ImTag>
    <ImTag color="success">Success</ImTag>
    <ImTag color="warning">Warning</ImTag>
  </ImRow>
</template>
```

## Removable Tags

Set `closeable` property to create removable tags. Triggers `close` event, or use `v-model` for two-way binding to control visibility.

<ImRow gutter="8">
  <ImTag closeable>Default</ImTag>
  <ImTag closeable color="primary">Primary</ImTag>
  <ImTag closeable color="error">Error</ImTag>
  <ImTag closeable color="success">Success</ImTag>
  <ImTag closeable color="warning">Warning</ImTag>
</ImRow>

## APIs