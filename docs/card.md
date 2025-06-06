# Card 卡片

卡片组件，用于展示内容区块。

## 基本用法

卡片可以包含标题、内容、操作区域等元素。

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

## 不需要边框

设置 `borderless` 属性，卡片将不显示边框。

<ImCard title="Card" borderless>
    <template #header-action>
      <ImButton variant="text" color="primary">Action</ImButton>
    </template>
    <div>Text ...</div>
    <div>Text ...</div>
  </ImCard>

## 显示阴影

设置属性 `shadow` 为 `always`、`hover`。

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
