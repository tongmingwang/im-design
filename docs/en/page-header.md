# PageHeader Component

A header component for displaying page titles, subtitles and action areas.

## Complete Usage

<ImPageHeader title="Order" subTitle="Edit">
    <template #action>
      <ImButton color="primary">Save</ImButton>
    </template>
    <template #content>
      <ImTag color="primary">Hot</ImTag>
    </template>
  </ImPageHeader>


```vue
<template>
  <ImPageHeader title="Order" subTitle="Edit">
    <template #action>
      <ImButton color="primary">Save</ImButton>
    </template>
    <template #content>
      <ImTag color="primary">Hot</ImTag>
    </template>
  </ImPageHeader>
</template>
```

## Simple Usage

<ImPageHeader title="Order" subTitle="Edit order information"></ImPageHeader>

```vue
<template>
  <ImPageHeader title="Order" subTitle="Edit order information"></ImPageHeader>
</template>
```

## API

### ImPageHeader Props

| Property | Description     | Type   | Default | Required |
| -------- | --------------- | ------ | ------- | -------- |
| title    | Main title text | string | -       | Yes      |
| subTitle | Subtitle text   | string | -       | No       |

### ImPageHeader Slots

| Slot     | Description             |
| -------- | ----------------------- |
| title    | Title Slot area         |
| action   | Action buttons area     |
| content  | Additional content area |
| subTitle | Sub Title               |