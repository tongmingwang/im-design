# Drawer 抽屉

屏幕边缘滑出的浮层面板，常用于导航菜单、设置面板等场景。

<script setup>
import { ref } from 'vue';
const drawer = ref(false);
const left = ref(false);
const top = ref(false);
const bottom = ref(false);
const customSize = ref(false);
const open = ref(false);

const apiList = [
  {
    name:'modelValue',
    type: 'Boolean',
    desc: '抽屉是否可见',
    default: 'false',
    otherValues: ''
  },
  {
    name:'mask',
    type: 'Boolean',
    desc: '抽屉模态框可见',
    default: 'true',
    otherValues: ''
  },
  {
    name:'closeOnClickMask',
    type: 'Boolean',
    desc: '点击模态框是否关闭抽屉',
    default: 'true',
    other: ''
  },
  {
    name:'zIndex',
    type: 'Number',
    desc: '抽屉的 z-index',
    default: '1000',
    other: ''
  },
  {
    name:'placement',
    type: 'String',
    desc: '抽屉出现的位置',
    default: 'right',
    other: 'top,  bottom, left'
  },
  {
    name:'closeOnEscape',
    type: 'Boolean',
    desc: '是否可以通过按 ESC 键关闭抽屉',
    defaultValue: 'true',
    other: ''
  },
]
</script>

<style scoped>

  .demo-buttons {
    display: flex;
    gap: 8px;
  }
</style>

## 基础用法

基本抽屉组件，默认从右侧滑出。

<ImDrawer v-model="drawer">
  <ImDrawerHeader>抽屉标题</ImDrawerHeader>
  <ImDrawerBody>抽屉内容区域</ImDrawerBody>
  <ImDrawerFooter>抽屉底部区域</ImDrawerFooter>
</ImDrawer>
<ImButton @click="drawer = true">打开抽屉</ImButton>

```vue
<template>
  <ImDrawer v-model="drawer">
    <ImDrawerHeader>抽屉标题</ImDrawerHeader>
    <ImDrawerBody>抽屉内容区域</ImDrawerBody>
    <ImDrawerFooter>抽屉底部区域</ImDrawerFooter>
  </ImDrawer>
  <ImButton @click="drawer = true">打开抽屉</ImButton>
</template>

<script setup>
import { ref } from 'vue';
const drawer = ref(false);
</script>
```

## 不同方向

通过 `placement` 属性控制抽屉出现方向，支持四个方向：

<div class="demo-buttons">
  <ImButton @click="left = true">左侧</ImButton>
  <ImButton @click="top = true">顶部</ImButton>
  <ImButton @click="bottom = true">底部</ImButton>
</div>
<ImDrawer v-model="left" placement="left">
  <ImDrawerHeader>抽屉标题</ImDrawerHeader>
<ImDrawerBody>抽屉内容区域</ImDrawerBody>
<ImDrawerFooter>抽屉底部区域</ImDrawerFooter>
</ImDrawer>
<ImDrawer v-model="top" placement="top">
  <ImDrawerHeader>抽屉标题</ImDrawerHeader>
<ImDrawerBody>抽屉内容区域</ImDrawerBody>
<ImDrawerFooter>抽屉底部区域</ImDrawerFooter>
</ImDrawer>
<ImDrawer v-model="bottom" placement="bottom">
  <ImDrawerHeader>抽屉标题</ImDrawerHeader>
<ImDrawerBody>抽屉内容区域</ImDrawerBody>
<ImDrawerFooter>抽屉底部区域</ImDrawerFooter>
</ImDrawer>

```vue
<template>
  <ImDrawer v-model="left" placement="left">
    <ImDrawerHeader>抽屉标题</ImDrawerHeader>
    <ImDrawerBody>抽屉内容区域</ImDrawerBody>
    <ImDrawerFooter>抽屉底部区域</ImDrawerFooter>
  </ImDrawer>
</template>
```

## 自定义尺寸

通过 `size` 属性自定义抽屉大小，支持百分比或具体像素值：

<ImDrawer v-model="customSize" size="50%">
  <ImDrawerHeader>抽屉标题</ImDrawerHeader>
  <ImDrawerBody>抽屉内容区域</ImDrawerBody>
  <ImDrawerFooter>抽屉底部区域</ImDrawerFooter>
</ImDrawer>
<ImButton @click="customSize = true">打开半宽抽屉</ImButton>

```vue
<template>
  <ImDrawer v-model="customSize" size="50%">
    <ImDrawerHeader>抽屉标题</ImDrawerHeader>
    <ImDrawerBody>抽屉内容区域</ImDrawerBody>
    <ImDrawerFooter>抽屉底部区域</ImDrawerFooter>
  </ImDrawer>
  <ImButton @click="customSize = true">打开半宽抽屉</ImButton>
</template>
```

## 关闭行为控制

<ImDrawer
    v-model="open"
    :close-on-click-mask="false"
    title="需确认关闭的抽屉">
<ImDrawerHeader>抽屉标题</ImDrawerHeader>
<ImDrawerBody>抽屉内容区域</ImDrawerBody>
<ImDrawerFooter
      ><ImButton @click="open = false">点击关闭</ImButton></ImDrawerFooter
    >
</ImDrawer>
<ImButton @click="open = true">打开抽屉</ImButton>

```vue
<template>
  <ImDrawer
    v-model="open"
    :close-on-click-mask="false"
    title="需确认关闭的抽屉">
    <ImDrawerHeader>抽屉标题</ImDrawerHeader>
    <ImDrawerBody>抽屉内容区域</ImDrawerBody>
    <ImDrawerFooter
      ><ImButton @click="open = false">点击关闭</ImButton></ImDrawerFooter
    >
  </ImDrawer>
  <ImButton @click="open = true">打开抽屉</ImButton>
</template>
```

## API

Drawer 组件提供了以下属性：

<Api :list="apiList" />

## 涉及的组件

`ImDrawerHeader`
`ImDrawerBody`
`ImDrawerFooter`

ImDrawerFooter 组件用于抽屉的底部区域，通常包含关闭按钮或其他操作。flex 布局，默认 flex-start 对齐。可以设置 `align` 属性来改变对齐方式。
