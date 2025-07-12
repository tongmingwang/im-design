# Card 卡片

卡片组件，用于展示内容区块。

## 基本用法

卡片可以包含标题、内容、操作区域等元素。

<ImCard>
<ImCardHeader title="Card">
 <template #actions>
    <ImButton variant="text" color="primary">Action</ImButton>
  </template>
 </ImCardHeader>
 
  <ImCardBody>Text ...</ImCardBody>
  <ImCardFooter>
  <ImButton variant="text" color="primary">Action</ImButton>
  </ImCardFooter>
</ImCard>

```vue
<template>
  <ImCard>
    <ImCardHeader title="Card">
      <template #actions>
        <ImButton variant="text" color="primary">Action</ImButton>
      </template>
    </ImCardHeader>

    <ImCardBody>Text ...</ImCardBody>
    <ImCardFooter>
      <ImButton variant="text" color="primary">Action</ImButton>
    </ImCardFooter>
  </ImCard>
</template>
```

## 不需要边框

设置 `borderless` 属性，卡片将不显示边框。

<ImCard borderless>
    <ImCardHeader >Card</ImCardHeader>
    <ImCardBody>Text ...</ImCardBody>
    <ImCardFooter>
      <ImButton variant="text" color="primary">Action</ImButton>
    </ImCardFooter>
  </ImCard>

```vue
<template>
  <ImCard borderless>
    <ImCardHeader>Card</ImCardHeader>
    <ImCardBody>Text ...</ImCardBody>
    <ImCardFooter>
      <ImButton variant="text" color="primary">Action</ImButton>
    </ImCardFooter>
  </ImCard>
</template>
```

## Footer 对齐方式

设置 `align` 为 `left` `center` `right` 可以设置操作区域的对齐方式。

<ImCard >
    <ImCardHeader >Card</ImCardHeader>
    <ImCardBody>Text ...</ImCardBody>
    <ImCardFooter align="right">
      <ImButton variant="text" color="primary">Action</ImButton>
    </ImCardFooter>
  </ImCard>

```vue
<template>
  <ImCard>
    <ImCardHeader>Card</ImCardHeader>
    <ImCardBody>Text ...</ImCardBody>
    <ImCardFooter align="center">
      <ImButton variant="text" color="primary">Action</ImButton>
    </ImCardFooter>
  </ImCard>
</template>
```

## 分割线

设置 `divider` 为 true ，则出现分割线。

<ImCard >
    <ImCardHeader divider>Card</ImCardHeader>
    <ImCardBody>Text ...</ImCardBody>
    <ImCardFooter align="right" divider>
      <ImButton variant="text" color="primary">Action</ImButton>
    </ImCardFooter>
  </ImCard>

```vue
<template>
  <ImCard>
    <ImCardHeader divider>Card</ImCardHeader>
    <ImCardBody>Text ...</ImCardBody>
    <ImCardFooter align="right" divider>
      <ImButton variant="text" color="primary">Action</ImButton>
    </ImCardFooter>
  </ImCard>
</template>
```

## 显示阴影

设置属性 `shadow` 为 `always`、`hover`。

<ImCard borderless shadow="always">
    <ImCardHeader >Card</ImCardHeader>
    <ImCardBody>Text ...</ImCardBody>
    <ImCardFooter>
      <ImButton variant="text" color="primary">Action</ImButton>
    </ImCardFooter>
  </ImCard>

Hover:

  <ImCard  shadow="hover">
    <ImCardHeader >Card</ImCardHeader>
    <ImCardBody>Text ...</ImCardBody>
    <ImCardFooter>
      <ImButton variant="text" color="primary">Action</ImButton>
    </ImCardFooter>
  </ImCard>

## API

依赖组件：`ImCardHeader`, `ImCardBody`, `ImCardFooter` `ImCard`
