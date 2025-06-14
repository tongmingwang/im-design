# Alert 警告提示

警告提示，展现需要关注的信息。

## 基础用法

ImAlert 组件提供四种主题，由`color`属性指定，默认值为`primary`。

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

## 可关闭

ImAlert 组件提供了`closable`属性来控制是否可关闭

<ImAlert title="Alert" closable>This is a Alert Component</ImAlert>
<ImAlert  v-for="item in colors" :color="item" closable variant="outlined">This is a Alert Component</ImAlert>

```vue
<template>
  <ImAlert title="Alert" closable>This is a Alert Component</ImAlert>
</template>
```

## 变种 Alert

ImAlert 组件提供了`variant="outlined"`属性。

<ImAlert title="Alert" v-for="item in colors" :color="item" variant="outlined">This is a Alert Component</ImAlert>

ImAlert 组件提供了`variant="tonal"`属性。

<ImAlert title="Alert" v-for="item in colors" :color="item" variant="tonal">This is a Alert Component</ImAlert>

## 不需要标题

<ImAlert v-for="item in colors" :color="item" variant="outlined">This is a Alert Component</ImAlert>

```vue
<template>
  <ImAlert v-for="item in colors" :color="item" variant="outlined"
    >This is a Alert Component</ImAlert
  >
</template>
```

## 自定义 icon

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

## APIS
