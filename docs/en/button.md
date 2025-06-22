# Button Component

Button component for triggering actions, such as submitting forms.

## Basic Usage

Use `color` and `variant` properties to define button styles.

<style scoped>
 .im-button {
  margin-right: 8px;
  margin-bottom: 8px;
 }
.im-row {
  flex-wrap: wrap;
}
</style>

<script setup>
const colors = ['default', 'primary', 'error', 'warning', 'success'];
</script>

<ImRow>
    <ImButton :color="item" v-for="(item, index) in colors" :key="index">{{ item.toLocaleUpperCase() }}</ImButton>
  </ImRow>
  <ImRow>
    <ImButton :color="item" v-for="(item, index) in colors" variant="outlined" :key="index">{{ item.toLocaleUpperCase()
    }}</ImButton>
  </ImRow>
  <ImRow>
    <ImButton :color="item" v-for="(item, index) in colors" variant="tonal" :key="index">{{ item.toLocaleUpperCase()
    }}</ImButton>
  </ImRow>
  <ImRow>
    <ImButton :color="item" v-for="(item, index) in colors" variant="text" :key="index">{{ item.toLocaleUpperCase()
    }}</ImButton>
  </ImRow>

```vue
<template>
  <ImButton color="primary">Primary</ImButton>
  <ImButton color="primary" variant="outlined">Primary</ImButton>
  <ImButton color="primary" variant="tonal">Primary</ImButton>
  <ImButton color="primary" variant="text">Primary</ImButton>
</template>
```

## Circular Buttons

Buttons with `shape="circle"`:

  <im-row>
    <im-button :color="item" v-for="(item, index) in colors" shape="circle" :key="index">
      <ImIcon name="like" />
    </im-button>
  </im-row>
  <im-row>
    <im-button :color="item" v-for="(item, index) in colors" shape="circle" variant="outlined" :key="index">
      <ImIcon name="like" />
    </im-button>
  </im-row>
  <im-row>
    <im-button :color="item" v-for="(item, index) in colors" shape="circle" variant="tonal" :key="index">
      <ImIcon name="like" />
    </im-button>
  </im-row>
  <im-row>
    <im-button :color="item" v-for="(item, index) in colors" shape="circle" variant="text" :key="index">
      <ImIcon name="like" />
    </im-button>
  </im-row>

```vue
<template>
  <ImButton color="primary" shape="circle"><ImIcon name="like" /></ImButton>
</template>
```

## Square Buttons

Buttons with `shape="square"`:

<im-row>
<im-button :color="item" v-for="(item, index) in colors" shape="square" :key="index">
<ImIcon name="like" />
</im-button>
</im-row>
<im-row>
<im-button :color="item" v-for="(item, index) in colors" shape="square" variant="outlined" :key="index">
<ImIcon name="like" />
</im-button>
</im-row>
<im-row>
<im-button :color="item" v-for="(item, index) in colors" shape="square" variant="tonal" :key="index">
<ImIcon name="like" />
</im-button>
</im-row>
<im-row>
<im-button :color="item" v-for="(item, index) in colors" shape="square" variant="text" :key="index">
<ImIcon name="like" />
</im-button>
</im-row>

```vue
<template>
  <ImButton color="primary" shape="square"><ImIcon name="like" /></ImButton>
</template>
```

## Rounded Buttons

Buttons with `shape="round"`:
<im-row>
<im-button :color="item" v-for="(item, index) in colors" shape="round" :key="index">{{ item.toUpperCase()
    }}</im-button>
</im-row>
<im-row>
<im-button :color="item" v-for="(item, index) in colors" shape="round" variant="outlined" :key="index">{{
      item.toUpperCase() }}</im-button>
</im-row>
<im-row>
<im-button :color="item" v-for="(item, index) in colors" shape="round" variant="tonal" :key="index">{{
      item.toUpperCase() }}</im-button>
</im-row>
<im-row>
<im-button :color="item" v-for="(item, index) in colors" shape="round" variant="text" :key="index">{{
      item.toUpperCase() }}</im-button>
</im-row>

```vue
<template>
  <ImButton color="primary" shape="round"><ImIcon name="like" /></ImButton>
</template>
```

## Full Width

Use `width` property to define button width (e.g. "100px" or "100%"):

  <section>
    <im-button width="100%" :color="item" v-ripple="true" v-for="(item, index) in colors" :key="index">{{
      item.toUpperCase() }}</im-button>
  </section>

```vue
<template>
  <ImButton width="100%" color="primary" shape="square">Button</ImButton>
</template>
```

## Disabled State

Use `disabled` property to disable the button:

<div>
<im-button color="success" disabled>Disabled</im-button>
<im-button color="warning" disabled>Disabled</im-button>
<im-button color="primary" disabled>Disabled</im-button>
<im-button color="error" disabled>Disabled</im-button>
</div>
<div>
<im-button variant="outlined" color="success" disabled>Disabled</im-button>
<im-button variant="outlined" color="warning" disabled>Disabled</im-button>
<im-button variant="outlined" color="primary" disabled>Disabled</im-button>
<im-button variant="outlined" color="error" disabled>Disabled</im-button>
</div>

```vue
<template>
  <div>
    <im-button color="success" disabled>Disabled</im-button>
    <im-button color="warning" disabled>Disabled</im-button>
    <im-button color="primary" disabled>Disabled</im-button>
    <im-button color="error" disabled>Disabled</im-button>
  </div>
  <div>
    <im-button variant="outlined" color="success" disabled>Disabled</im-button>
    <im-button variant="outlined" color="warning" disabled>Disabled</im-button>
    <im-button variant="outlined" color="primary" disabled>Disabled</im-button>
    <im-button variant="outlined" color="error" disabled>Disabled</im-button>
  </div>
</template>
```

## Loading State

Use `loading` property to show loading state:

<div>
    <im-button color="success" loading>Loading</im-button>
    <im-button color="warning" loading>Loading</im-button>
    <im-button color="primary" loading>Loading</im-button>
    <im-button color="error" loading>Loading</im-button>
</div>
<div>
  <im-button variant="outlined" color="success" loading>Loading</im-button>
  <im-button variant="outlined" color="warning" loading>Loading</im-button>
  <im-button variant="outlined" color="primary" loading>Loading</im-button>
  <im-button variant="outlined" color="error" loading>Loading</im-button>
</div>

```vue
<template>
  <ImButton loading>loading</ImButton>
</template>
```

## Sizing

Support multiple sizes, default size is `36`. Use `size` property to define button size.

<div>
    <im-button color="primary" size="24">24</im-button>
    <im-button color="primary" size="32">32</im-button>
    <im-button color="primary" size="36">36</im-button>
    <im-button color="primary" size="48">48</im-button>
    <im-button color="primary" size="60">60</im-button>
</div>

```html
<div>
  <im-button color="primary" size="24">24</im-button>
  <im-button color="primary" size="32">32</im-button>
  <im-button color="primary" size="36">36</im-button>
  <im-button color="primary" size="48">48</im-button>
  <im-button color="primary" size="60">60</im-button>
</div>
```

## Custom Colors

Override CSS variables for custom colors:

<div>
  <im-button
    color="primary"
    style="--im-gray-color-1: #fff;--im-primary-color-8: #262626;--im-primary-color-7: #565656;--im-primary-color-9: #000;"
    >Custom</im-button
  >
  <im-button
    color="primary"
    style="--im-gray-color-1: #fff;--im-primary-color-7: rgb(187, 37, 132);--im-primary-color-8:rgb(150, 14, 100);--im-primary-color-9: rgb(125, 8, 82);"
    >Custom</im-button
  >
</div>

```html
<div>
  <im-button
    color="primary"
    style="--im-gray-color-1: #fff;--im-primary-color-8: #262626;--im-primary-color-7: #565656;--im-primary-color-9: #000;"
    >Custom</im-button
  >
  <im-button
    color="primary"
    style="--im-gray-color-1: #fff;--im-primary-color-7: rgb(187, 37, 132);--im-primary-color-8:rgb(150, 14, 100);--im-primary-color-9: rgb(125, 8, 82);"
    >Custom</im-button
  >
</div>
```

## API

### ImButton Props

| Property | Description           | Type                        | Default   | Required |
| -------- | --------------------- | --------------------------- | --------- | -------- |
| color    | Button color theme    | string                      | 'default' | No       |
| variant  | Button style variant  | 'text'\|'outlined'\|'tonal' | -         | No       |
| shape    | Button shape          | 'circle'\|'square'\|'round' | -         | No       |
| size     | Button size in pixels | number                      | 36        | No       |
| width    | Button width          | string                      | -         | No       |
| loading  | Show loading state    | boolean                     | false     | No       |
| disabled | Disable the button    | boolean                     | false     | No       |
| ripple   | Enable ripple effect  | boolean                     | true      | No       |

### ImButton Events

| Event | Description            | Callback Parameters     |
| ----- | ---------------------- | ----------------------- |
| click | Triggered when clicked | (e: MouseEvent) => void |

### ImButton Slots

| Slot    | Description           |
| ------- | --------------------- |
| default | Button content area   |
| loading | Loading state content |

### CSS Variables

| Variable             | Description         |
| -------------------- | ------------------- |
| --im-primary-color-7 | Light primary color |
| --im-primary-color-8 | Primary color       |
| --im-primary-color-9 | Dark primary color  |
| --im-gray-color-1    | Text color          |