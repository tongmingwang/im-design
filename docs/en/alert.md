# Alert Component

Warning alerts to display information that requires attention.

## Basic Usage

The ImAlert component provides four themes, specified by the `color` property, with a default value of `primary`.

<ImAlert title="Alert" v-for="item in colors" :color="item">This is a Alert Component</ImAlert>

```vue
<template>
  <ImAlert title="Alert" v-for="item in colors" :color="item"
    >This is a Alert Component</ImAlert
  >
</template>

<script setup>
const colors = ['success', 'warning', 'primary', 'error'];
</script>
```

## Closable

The ImAlert component provides a `closable` property to control whether it can be closed.

<ImAlert title="Alert" closable>This is a Alert Component</ImAlert>
<ImAlert  v-for="item in colors" :color="item" closable variant="outlined">This is a Alert Component</ImAlert>

```vue
<template>
  <ImAlert title="Alert" closable>This is a Alert Component</ImAlert>
</template>
```

## Alert Variants

The ImAlert component provides a `variant="outlined"` property.

<ImAlert title="Alert" v-for="item in colors" :color="item" variant="outlined">This is a Alert Component</ImAlert>

The ImAlert component provides a `variant="tonal"` property.

<ImAlert title="Alert" v-for="item in colors" :color="item" variant="tonal">This is a Alert Component</ImAlert>

## Without Title

<ImAlert v-for="item in colors" :color="item" variant="outlined">This is a Alert Component</ImAlert>

```vue
<template>
  <ImAlert v-for="item in colors" :color="item" variant="outlined"
    >This is a Alert Component</ImAlert
  >
</template>
```

## Custom Icon

<ImAlert title="Alert" v-for="item in colors" :color="item" variant="outlined">
  <template #icon><ImIcon name="bell" size="24" /></template> This is a Alert Component
</ImAlert>
<ImAlert v-for="item in colors" :color="item" variant="outlined">
  <template #icon><ImIcon name="bell" size="16" /></template> This is a Alert Component
</ImAlert>

```vue
<template>
  <ImAlert
    title="Alert"
    v-for="item in colors"
    :color="item"
    variant="outlined">
    <template #icon><ImIcon name="bell" size="24" /></template> This is a Alert
    Component
  </ImAlert>
  <ImAlert v-for="item in colors" :color="item" variant="outlined">
    <template #icon><ImIcon name="bell" size="16" /></template> This is a Alert
    Component
  </ImAlert>
</template>
```

<script setup>
  const colors = ['success', 'warning', 'primary', 'error'];
</script>

<style >
.im-alert {
  margin-bottom: 12px!important;
}
</style>

## APIs