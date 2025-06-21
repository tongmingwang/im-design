# Card Component

Card component for displaying content blocks.

## Basic Usage

Cards can contain elements like title, content, and action areas.

<ImCard title="Card">
  <template #header-action>
    <ImButton variant="text" color="primary">Action</ImButton>
  </template>
  <div>Text ...</div>
  <div>Text ...</div>
</ImCard>

```vue
<template>
  <ImCard title="Card">
    <template #header-action>
      <ImButton variant="text" color="primary">Action</ImButton>
    </template>
    <div>Text ...</div>
    <div>Text ...</div>
  </ImCard>
</template>
```

## Borderless

Set the `borderless` property to hide the card border.

<ImCard title="Card" borderless>
    <template #header-action>
      <ImButton variant="text" color="primary">Action</ImButton>
    </template>
    <div>Text ...</div>
    <div>Text ...</div>
  </ImCard>

## Shadow Effects

Set the `shadow` property to `always` or `hover`.

<ImCard title="Card" shadow="always">
    <template #header-action>
      <ImButton variant="text" color="primary">Action</ImButton>
    </template>
    <div>Text ...</div>
    <div>Text ...</div>
  </ImCard>
  <br />

<ImCard title="Card" shadow="hover">
    <template #header-action>
      <ImButton variant="text" color="primary">Action</ImButton>
    </template>
    <div>Text ...</div>
    <div>Text ...</div>
</ImCard>

## APIs