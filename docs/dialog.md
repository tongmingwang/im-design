# Dialog 对话框

在保留当前页面状态的情况下，告知用户并承载相关操作。

## 基础用法

Dialog 默认从中间弹出居中显示。

<script setup>
import { ref } from 'vue'

const open = ref(false)
const open2 = ref(false)
const fullShow = ref(false)
const parent = ref(false)
const child = ref(false)
const drag = ref(false)
const headerClose = ref(false)
const dividerShow = ref(false)
const top = ref(false)
</script>

 <ImDialog v-model="open">
    <ImDialogHeader>Dialog Title</ImDialogHeader>
    <ImDialogBody>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</ImDialogBody>
    <ImDialogFooter >
      <ImButton @click="open = false" variant="text">Cancel</ImButton>
      <ImButton @click="open = false" variant="text" color="primary">Confirm</ImButton>
    </ImDialogFooter>
  </ImDialog>
  <ImButton @click="open = true" color="primary" variant="outlined">Open Dialog</ImButton>

```vue
<template>
  <ImDialog v-model="open">
    <ImDialogHeader>Dialog Title</ImDialogHeader>
    <ImDialogBody
      >Let Google help apps determine location. This means sending anonymous
      location data to Google, even when no apps are running.</ImDialogBody
    >
    <ImDialogFooter>
      <ImButton @click="open = false" variant="text">Cancel</ImButton>
      <ImButton @click="open = false" variant="text" color="primary"
        >Confirm</ImButton
      >
    </ImDialogFooter>
  </ImDialog>
  <ImButton @click="open = true">Oen Dialog</ImButton>
</template>
```

## 全屏对话框

使用 fullscreen 属性可以让对话框的内容区全屏显示。

  <ImDialog v-model="fullShow" fullscreen>
    <ImDialogHeader
     divider
      >Dialog Title
      <template #action>
        <ImButton @click="fullShow = false" size="36" variant="text" shape="circle">
          <ImIcon name="close" size="20"></ImIcon>
        </ImButton>
      </template>
    </ImDialogHeader>
    <ImDialogBody
      >
      <ImList>
        <ImListItem>1</ImListItem>
        <ImListItem>2</ImListItem>
        <ImListItem>3</ImListItem>
      </ImList>
      </ImDialogBody
    >
  </ImDialog>
  <ImButton @click="fullShow = true" color="primary" variant="outlined">Open Fullscreen Dialog</ImButton>

```vue
<template>
  <ImDialog v-model="fullShow" fullscreen>
    <ImDialogHeader
      >Dialog Title
      <template #action>
        <ImButton @click="fullShow = false" variant="text">Cancel</ImButton>
      </template>
    </ImDialogHeader>
    <ImDialogBody
      >Let Google help apps determine location. This means sending anonymous
      location data to Google, even when no apps are running.</ImDialogBody
    >
    <ImDialogFooter>
      <ImButton @click="fullShow = false" variant="text">Cancel</ImButton>
      <ImButton @click="fullShow = false" variant="text" color="primary"
        >Confirm</ImButton
      >
    </ImDialogFooter>
  </ImDialog>
  <ImButton @click="fullShow = true" color="primary" variant="outlined"
    >Open Fullscreen Dialog</ImButton
  >
</template>
```

## 嵌套使用

<ImDialog v-model="parent">
    <ImDialogHeader>Dialog Title</ImDialogHeader>
    <ImDialogBody
      >这里是内容区域
      <ImButton @click="child = true">打开子级对话框</ImButton>
    </ImDialogBody>
    <ImDialog v-model="child" parent>
      <ImDialogHeader>Child Dialog</ImDialogHeader>
      <ImDialogBody>这里是内容区域</ImDialogBody>
    </ImDialog>
  </ImDialog>
  <ImButton @click="parent = true">打开父级对话框</ImButton>

```vue
<template>
  <ImDialog v-model="parent">
    <ImDialogHeader>Dialog Title</ImDialogHeader>
    <ImDialogBody
      >这里是内容区域
      <ImButton @click="child = true">打开子级对话框</ImButton>
    </ImDialogBody>

    <ImDialog v-model="child" parent>
      <ImDialogHeader>Child Dialog</ImDialogHeader>
      <ImDialogBody>这里是内容区域</ImDialogBody>
    </ImDialog>
  </ImDialog>
  <ImButton @click="parent = true">打开父级对话框</ImButton>
</template>
```

## 支持拖拽

设置 draggable 属性，可以让对话框支持拖拽。支持 PC 端。

<ImDialog v-model="drag" draggable>
<ImDialogHeader>Dialog Title</ImDialogHeader>
<ImDialogBody>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</ImDialogBody>
<ImDialogFooter >
<ImButton @click="drag = false" variant="text">Cancel</ImButton>
<ImButton @click="drag = false" variant="text" color="primary">Confirm</ImButton>
</ImDialogFooter>
</ImDialog>
<ImButton @click="drag = true" color="primary" variant="outlined">Open Dialog</ImButton>

```vue
<template>
  <ImDialog v-model="drag" draggable>
    <ImDialogHeader>Dialog Title</ImDialogHeader>
    <ImDialogBody
      >Let Google help apps determine location. This means sending anonymous
      location data to Google, even when no apps are running.</ImDialogBody
    >
    <ImDialogFooter>
      <ImButton @click="drag = false" variant="text">Cancel</ImButton>
      <ImButton @click="drag = false" variant="text" color="primary"
        >Confirm</ImButton
      >
    </ImDialogFooter>
  </ImDialog>
  <ImButton @click="drag = true" color="primary" variant="outlined"
    >Open Dialog</ImButton
  >
</template>
```

## 自定义头部关闭按钮

<ImDialog v-model="headerClose" >
<ImDialogHeader>Dialog Title
  <template #action>
    <ImButton @click="headerClose = false" shape="circle" variant="text">
    <ImIcon name="close" size="20"></ImIcon>
    </ImButton>
    </template>
</ImDialogHeader>
<ImDialogBody>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</ImDialogBody>
<ImDialogFooter >
<ImButton @click="headerClose = false" variant="text">Cancel</ImButton>
<ImButton @click="headerClose = false" variant="text" color="primary">Confirm</ImButton>
</ImDialogFooter>
</ImDialog>
<ImButton @click="headerClose = true" color="primary" variant="outlined">Open Dialog</ImButton>

```vue
<template>
  <ImDialog v-model="headerClose">
    <ImDialogHeader>Dialog Title</ImDialogHeader>
    <ImDialogBody
      >Let Google help apps determine location. This means sending anonymous
      location data to Google, even when no apps are running.</ImDialogBody
    >
    <ImDialogFooter>
      <ImButton @click="headerClose = false" variant="text">Cancel</ImButton>
      <ImButton @click="headerClose = false" variant="text" color="primary"
        >Confirm</ImButton
      >
    </ImDialogFooter>
  </ImDialog>
  <ImButton @click="headerClose = true" color="primary" variant="outlined"
    >Open Dialog</ImButton
  >
</template>
```

## 分割线

设置分割线属性，可以让头部显示分割线。

<ImDialog v-model="dividerShow" >
<ImDialogHeader divider>Dialog Title
</ImDialogHeader>
<ImDialogBody>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</ImDialogBody>
<ImDialogFooter divider>
<ImButton @click="dividerShow = false" variant="text">Cancel</ImButton>
<ImButton @click="dividerShow = false" variant="text" color="primary">Confirm</ImButton>
</ImDialogFooter>
</ImDialog>
<ImButton @click="dividerShow = true" color="primary" variant="outlined">Open Dialog</ImButton>

```vue
<template>
  <ImDialog v-model="dividerShow">
    <ImDialogHeader divider>Dialog Title </ImDialogHeader>
    <ImDialogBody
      >Let Google help apps determine location. This means sending anonymous
      location data to Google, even when no apps are running.</ImDialogBody
    >
    <ImDialogFooter divider>
      <ImButton @click="dividerShow = false" variant="text">Cancel</ImButton>
      <ImButton @click="dividerShow = false" variant="text" color="primary"
        >Confirm</ImButton
      >
    </ImDialogFooter>
  </ImDialog>
  <ImButton @click="dividerShow = true" color="primary" variant="outlined"
    >Open Dialog</ImButton
  >
</template>
```

## 顶部距离

设置 top 属性，可以设置对话框顶部距离。

<ImDialog v-model="top" top="100px">
<ImDialogHeader>Dialog Title</ImDialogHeader>
<ImDialogBody>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</ImDialogBody>
<ImDialogFooter >
<ImButton @click="top = false" variant="text">Cancel</ImButton>
<ImButton @click="top = false" variant="text" color="primary">Confirm</ImButton>
</ImDialogFooter>
</ImDialog>
<ImButton @click="top = true" color="primary" variant="outlined">Open Dialog</ImButton>

```vue
<template>
  <ImDialog v-model="top" top="100px">
    <ImDialogHeader>Dialog Title</ImDialogHeader>
    <ImDialogBody
      >Let Google help apps determine location. This means sending anonymous
      location data to Google, even when no apps are running.</ImDialogBody
    >
    <ImDialogFooter>
      <ImButton @click="top = false" variant="text">Cancel</ImButton>
      <ImButton @click="top = false" variant="text" color="primary"
        >Confirm</ImButton
      >
    </ImDialogFooter>
  </ImDialog>
  <ImButton @click="top = true" color="primary" variant="outlined"
    >Open Dialog</ImButton
  >
</template>
```

## API

### ImDialog Props

| 属性名           | 说明                     | 类型    | 默认值  | 必填 |
| ---------------- | ------------------------ | ------- | ------- | ---- |
| modelValue       | 对话框是否可见           | boolean | false   | 是   |
| closeOnClickMask | 点击遮罩层是否关闭对话框 | boolean | true    | 否   |
| width            | 对话框宽度               | string  | '420px' | 否   |
| height           | 对话框高度               | string  | 'auto'  | 否   |
| fullscreen       | 是否全屏显示             | boolean | false   | 否   |
| closeOnEscape    | 按 ESC 键是否关闭对话框  | boolean | true    | 否   |
| mask             | 是否显示遮罩层           | boolean | true    | 否   |
| zIndex           | 设置对话框的 z-index     | number  | 1000    | 否   |
| top              | 对话框顶部距离           | string  | -       | 否   |
| draggable        | 是否可拖拽               | boolean | false   | 否   |
| divider          | 是否显示分割线           | boolean | false   | 否   |

### ImDialog Events

| 事件名            | 说明                     | 回调参数                 |
| ----------------- | ------------------------ | ------------------------ |
| update:modelValue | 对话框显示状态变化时触发 | (value: boolean) => void |

### ImDialogHeader Slots

| 插槽名  | 说明                       |
| ------- | -------------------------- |
| default | 对话框标题内容             |
| action  | 对话框头部右侧操作按钮区域 |

### ImDialogBody Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 对话框主体内容 |

### ImDialogFooter Slots

| 插槽名  | 说明               |
| ------- | ------------------ |
| default | 对话框底部按钮区域 |
