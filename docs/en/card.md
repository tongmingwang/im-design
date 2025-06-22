# Card

Card component for displaying content blocks.

## Basic Usage

A card can contain elements such as title, content, and action area.

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

## Without Border

Set the `borderless` property to hide the card border.

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
    <ImCardHeader >Card</ImCardHeader>
    <ImCardBody>Text ...</ImCardBody>
    <ImCardFooter>
      <ImButton variant="text" color="primary">Action</ImButton>
    </ImCardFooter>
  </ImCard>
</template>
```

## Footer Alignment

Set `align` to `left`, `center` or `right` to configure the alignment of the action area.


<ImCard >
    <ImCardHeader >Card</ImCardHeader>
    <ImCardBody>Text ...</ImCardBody>
    <ImCardFooter align="right">
      <ImButton variant="text" color="primary">Action</ImButton>
    </ImCardFooter>
  </ImCard>

  ```vue
<template>
  <ImCard >
    <ImCardHeader >Card</ImCardHeader>
    <ImCardBody>Text ...</ImCardBody>
    <ImCardFooter align="center">
      <ImButton variant="text" color="primary">Action</ImButton>
    </ImCardFooter>
  </ImCard>
</template>
```

## Divider

Set `divider` to true to display a divider line.


<ImCard >
    <ImCardHeader divider>Card</ImCardHeader>
    <ImCardBody>Text ...</ImCardBody>
    <ImCardFooter align="right" divider>
      <ImButton variant="text" color="primary">Action</ImButton>
    </ImCardFooter>
  </ImCard>

  ```vue
<template>
  <ImCard >
    <ImCardHeader divider>Card</ImCardHeader>
    <ImCardBody>Text ...</ImCardBody>
    <ImCardFooter align="right" divider>
      <ImButton variant="text" color="primary">Action</ImButton>
    </ImCardFooter>
  </ImCard>
</template>
```

## Shadow Effect

Set the `shadow` property to `always` or `hover`.

<ImCard  shadow="always">
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

Dependent components: `ImCardHeader`, `ImCardBody`, `ImCardFooter`, `ImCard`
