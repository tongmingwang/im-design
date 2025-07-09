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
const trigger = ref(false)
function getTarget(){
  return document.querySelector('#Demo_Button')
}

const apiList = [
  {
    name: 'modelValue',
    type: 'Boolean',
    desc: '是否显示对话框',
    default: 'false',
    otherValues: ''
  },
  {
    name: 'closeOnClickMask',
    type: 'Boolean',
    desc: '是否可以通过点击遮罩关闭对话框',
    default: 'true',
    otherValues: ''
  },
  {
    name: 'width',
    type: 'String',
    desc: '对话框的宽度',
    default: '',
    otherValues: ''
  },
  {
    name: 'height',
    type: 'String',
    desc: '对话框的高度',
    default: '',
    otherValues: ''
  },
  {
    name: 'fullscreen',
    type: 'Boolean',
    desc: '是否全屏显示对话框',
    default: 'false',
    otherValues: ''
  },
  {
    name: 'closeOnEscape',
    type: 'Boolean',
    desc: '是否可以通过按下 Esc 键关闭对话框',
    default: 'true',
    otherValues: ''
  },
  {
    name: 'mask',
    type: 'Boolean',
    desc: '是否显示背景遮罩',
    default: 'true',
    otherValues: ''
  },
  {
    name: 'zIndex',
    type: 'Number',
    desc: '对话框的 z-index 值',
    default: '',
    otherValues: ''
  },
  {
    name: 'top',
    type: 'String | Number',
    desc: '对话框距离顶部的距离',
    default: '',
    otherValues: ''
  },
  {
    name: 'getTarget',
    type: 'Function',
    desc: '返回对话框挂载的目标元素',
    default: '',
    otherValues: ''
  },
  {
    name: 'draggable',
    type: 'Boolean',
    desc: '是否可以拖动对话框',
    default: 'false',
    otherValues: ''
  }
]


</script>

 <ImDialog v-model="open">
    <ImDialogHeader>标题</ImDialogHeader>
    <ImDialogBody>让我们一起摇摆！</ImDialogBody>
    <ImDialogFooter >
      <ImButton @click="open = false">关闭</ImButton>
      <ImButton @click="open = false" color="primary">确认</ImButton>
    </ImDialogFooter>
  </ImDialog>
  <ImButton @click="open = true" color="primary" variant="outlined">打开一下</ImButton>

```vue
<template>
  <ImDialog v-model="open">
    <ImDialogHeader>标题</ImDialogHeader>
    <ImDialogBody>让我们一起摇摆！</ImDialogBody>
    <ImDialogFooter>
      <ImButton @click="open = false">关闭</ImButton>
      <ImButton @click="open = false" color="primary">确认</ImButton>
    </ImDialogFooter>
  </ImDialog>
  <ImButton @click="open = true">打开一下</ImButton>
</template>
```

## 全屏对话框

使用 fullscreen 属性可以让对话框的内容区全屏显示。

  <ImDialog v-model="fullShow" fullscreen>
    <ImDialogHeader
     divider
      >标题
      <template #action>
        <ImButton @click="fullShow = false" size="36" shape="circle" variant="text">
          <ImIcon name="close" size="28"></ImIcon>
        </ImButton>
      </template>
    </ImDialogHeader>
    <ImDialogBody>
      <div v-for="i in 3">
        <ImCheckbox size="48">
          支持选择 Google 帮助应用确定位置。这意味着将匿名位置数据发送给 Google
        </ImCheckbox>
      </div>
    </ImDialogBody>
  </ImDialog>
  <ImButton @click="fullShow = true" color="primary" variant="outlined">打开全屏</ImButton>

```vue
<template>
  <ImDialog v-model="fullShow" fullscreen>
    <ImDialogHeader divider
      >标题
      <template #action>
        <ImButton
          @click="fullShow = false"
          size="36"
          shape="circle"
          variant="text">
          <ImIcon name="close" size="20"></ImIcon>
        </ImButton>
      </template>
    </ImDialogHeader>
    <ImDialogBody>
      <div v-for="i in 8">
        <ImCheckbox size="48">
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </ImCheckbox>
      </div>
    </ImDialogBody>
  </ImDialog>
  <ImButton @click="fullShow = true" color="primary" variant="outlined"
    >Open Fullscreen Dialog</ImButton
  >
</template>
```

## 触发器打开

设置 getTarget 属性，可以将 Dialog 的打开与关闭绑定到某个元素上。

 <ImDialog v-model="trigger" :getTarget="getTarget">
    <ImDialogHeader>标题</ImDialogHeader>
    <ImDialogBody>一段话</ImDialogBody>
    <ImDialogFooter>
      <ImButton @click="trigger = false">关闭</ImButton>
      <ImButton @click="trigger = false" color="primary">确认</ImButton>
    </ImDialogFooter>
  </ImDialog>
  <ImButton @click="trigger = true" color="primary" variant="outlined" id="Demo_Button">试试吧</ImButton>

```vue
<template>
  <ImDialog v-model="trigger">
    <ImDialogHeader>标题</ImDialogHeader>
    <ImDialogBody>一段话</ImDialogBody>
    <ImDialogFooter>
      <ImButton @click="trigger = false">关闭</ImButton>
      <ImButton @click="trigger = false" color="primary">确认</ImButton>
    </ImDialogFooter>
  </ImDialog>
  <ImButton @click="trigger = true">试试吧</ImButton>
</template>
```

## 嵌套使用

<ImDialog v-model="parent">
    <ImDialogHeader>父标题</ImDialogHeader>
    <ImDialogBody
      >这里是内容区域
      <ImButton @click="child = true">打开子级对话框</ImButton>
    </ImDialogBody>
    <ImDialog v-model="child" parent>
      <ImDialogHeader>子标题</ImDialogHeader>
      <ImDialogBody>这里是内容区域</ImDialogBody>
    </ImDialog>
  </ImDialog>
  <ImButton @click="parent = true">打开父级对话框</ImButton>

```vue
<template>
  <ImDialog v-model="parent">
    <ImDialogHeader>父标题</ImDialogHeader>
    <ImDialogBody
      >这里是内容区域
      <ImButton @click="child = true">打开子级对话框</ImButton>
    </ImDialogBody>

    <ImDialog v-model="child" parent>
      <ImDialogHeader>子标题</ImDialogHeader>
      <ImDialogBody>这里是内容区域</ImDialogBody>
    </ImDialog>
  </ImDialog>
  <ImButton @click="parent = true">打开父级对话框</ImButton>
</template>
```

## 支持拖拽

设置 draggable 属性，可以让对话框支持拖拽。支持 PC 端 移动端。

<ImDialog v-model="drag" draggable>
<ImDialogHeader>标题</ImDialogHeader>
    <ImDialogBody>你可以拖拽头部</ImDialogBody>
    <ImDialogFooter>
      <ImButton @click="drag = false">Cancel</ImButton>
      <ImButton @click="drag = false" color="primary">Confirm</ImButton>
    </ImDialogFooter>
</ImDialog>
<ImButton @click="drag = true" color="primary" variant="outlined">Open Dialog</ImButton>

```vue
<template>
  <ImDialog v-model="drag" draggable>
    <ImDialogHeader>标题</ImDialogHeader>
    <ImDialogBody>你可以拖拽头部</ImDialogBody>
    <ImDialogFooter>
      <ImButton @click="drag = false">Cancel</ImButton>
      <ImButton @click="drag = false" color="primary">Confirm</ImButton>
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
<ImDialogBody>Let Google help apps determine location. </ImDialogBody>
<ImDialogFooter >
<ImButton @click="headerClose = false">Cancel</ImButton>
<ImButton @click="headerClose = false" color="primary">Confirm</ImButton>
</ImDialogFooter>
</ImDialog>
<ImButton @click="headerClose = true" color="primary" variant="outlined">Open Dialog</ImButton>

```vue
<template>
  <ImDialog v-model="headerClose">
    <ImDialogHeader
      >Dialog Title
      <template #action>
        <ImButton @click="headerClose = false" shape="circle" variant="text">
          <ImIcon name="close" size="20"></ImIcon>
        </ImButton>
      </template>
    </ImDialogHeader>
    <ImDialogBody>Let Google help apps determine location. </ImDialogBody>
    <ImDialogFooter>
      <ImButton @click="headerClose = false">Cancel</ImButton>
      <ImButton @click="headerClose = false" color="primary">Confirm</ImButton>
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
<ImButton @click="dividerShow = false">Cancel</ImButton>
<ImButton @click="dividerShow = false" color="primary">Confirm</ImButton>
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
      <ImButton @click="dividerShow = false">Cancel</ImButton>
      <ImButton @click="dividerShow = false" color="primary">Confirm</ImButton>
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
<ImButton @click="top = false">Cancel</ImButton>
<ImButton @click="top = false" color="primary">Confirm</ImButton>
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
      <ImButton @click="top = false">Cancel</ImButton>
      <ImButton @click="top = false" color="primary">Confirm</ImButton>
    </ImDialogFooter>
  </ImDialog>
  <ImButton @click="top = true" color="primary" variant="outlined"
    >Open Dialog</ImButton
  >
</template>
```

## API

Dialog 组件提供了以下属性：

<Api :list="apiList" />
