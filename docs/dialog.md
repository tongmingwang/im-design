# Dialog 对话框

在保留当前页面状态的情况下，告知用户并承载相关操作。

## 基础用法

Dialog 弹出一个对话框，适合需要定制性更大的场景。

<script setup>
import { ref } from 'vue'

const open = ref(false)
const fullShow = ref(false)
const parent = ref(false)
const child = ref(false)
</script>

<ImDialog v-model="open">
    <ImCard title="Title 标题"> 这里是内容区域 </ImCard>
</ImDialog>
  <ImButton @click="open = true">打开对话框</ImButton>

```vue
<template>
  <ImDialog v-model="open">
    <ImCard title="Title 标题"> 这里是内容区域 </ImCard>
  </ImDialog>
  <ImButton @click="open = true">打开对话框</ImButton>
</template>
```

## 全屏对话框

使用 fullscreen 属性可以让对话框的内容区全屏显示。

<ImDialog v-model="fullShow" fullscreen>
    <ImCard title="Title 标题" borderless>
      <template #header-action>
        <ImButton
          size="48"
          shape="circle"
          variant="text"
          @click="fullShow = false">
          <ImIcon name="close" size="22" />
        </ImButton>
      </template>
      这里是内容区域
    </ImCard>
  </ImDialog>
<ImButton @click="fullShow = true">打开全屏对话框</ImButton>

```vue
<template>
  <ImDialog v-model="fullShow" fullscreen>
    <ImCard title="Title 标题" borderless>
      <template #header-action>
        <ImButton
          size="48"
          shape="circle"
          variant="text"
          @click="fullShow = false">
          <ImIcon name="close" size="22" />
        </ImButton>
      </template>
      这里是内容区域
    </ImCard>
  </ImDialog>
  <ImButton @click="fullShow = true">打开全屏对话框</ImButton>
</template>
```

## 嵌套使用

<ImDialog v-model="parent">
    <ImCard title="Parent 父层级">
      这里是内容区域
      <div style="padding: 8px">
      <ImButton @click="child = true">打开子级对话框</ImButton>
      </div>
    </ImCard>
    <ImDialog v-model="child" >
      <ImCard title="Title 标题"> 这里是内容区域 </ImCard>
    </ImDialog>
  </ImDialog>
<ImButton @click="parent = true">打开父级对话框</ImButton>

```vue
<template>
  <ImDialog v-model="parent">
    <template #header>
      <div class="flex items-center justify-between w-full">
        <span>父级对话框</span>
        <ImButton
          size="48"
          shape="circle"
          variant="text"
          @click="parent = false">
          <ImIcon name="close" size="22" />
        </ImButton>
      </div>
    </template>
    这里是内容区域
    <ImButton @click="child = true">打开子级对话框</ImButton>
    <ImDialog v-model="child" parent>
      <ImCard title="Title 标题"> 这里是内容区域 </ImCard>
    </ImDialog>
  </ImDialog>
  <ImButton @click="parent = true">打开父级对话框</ImButton>
</template>
```
