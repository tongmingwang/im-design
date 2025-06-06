# Drawer 抽屉

屏幕边缘滑出的浮层面板。

## 基础用法

抽屉从屏幕边缘滑入，覆盖内容。

<script setup>
import { ref } from 'vue';

const drawer = ref(false);
const customW = ref(false);
const topShow = ref(false);
const bottomShow = ref(false);
const leftShow = ref(false);
const actionShow = ref(false);
</script>

<ImDrawer v-model="drawer">
    <ImCard title="Demo" borderless>
      <p>Text ...</p>
      <p>Text ...</p>
      <p>Text ...</p>
    </ImCard>
  </ImDrawer>
  <ImButton @click="drawer = true">Open</ImButton>

```vue
<template>
  <ImDrawer v-model="drawer">
    <ImCard title="Demo" borderless>
      <p>Text ...</p>
      <p>Text ...</p>
      <p>Text ...</p>
    </ImCard>
  </ImDrawer>
  <ImButton @click="drawer = true">Open</ImButton>
</template>

<script setup>
import { ref } from 'vue';

const drawer = ref(false);
</script>
```

## 自定义抽屉宽度

设置一个 `size` 属性来自定义抽屉的宽度。支持 number 类型

<ImDrawer v-model="customW" :size="600">
    <ImCard title="Demo" borderless>
      <p>Text ...</p>
      <p>Text ...</p>
      <p>Text ...</p>
    </ImCard>
  </ImDrawer>
  <ImButton @click="customW = true">custom Width</ImButton>

## 抽屉方向

通过设置 `placement` 属性来改变抽屉的方向。支持 `left`、`right`、`top`、`bottom`

<ImRow gutter="8">
  <ImDrawer v-model="topShow" placement="top">
    <ImCard title="Demo" borderless>
      <p>Text ...</p>
      <p>Text ...</p>
      <p>Text ...</p>
    </ImCard>
  </ImDrawer>
  <ImButton @click="topShow = true">Top In</ImButton>

  <ImDrawer v-model="bottomShow" placement="bottom">
    <ImCard title="Demo" borderless>
      <p>Text ...</p>
      <p>Text ...</p>
      <p>Text ...</p>
    </ImCard>
  </ImDrawer>
  <ImButton @click="bottomShow = true">Bottom In</ImButton>

  <ImDrawer v-model="leftShow" placement="left">
    <ImCard title="Demo" borderless>
      <p>Text ...</p>
      <p>Text ...</p>
      <p>Text ...</p>
    </ImCard>
  </ImDrawer>
  <ImButton @click="leftShow = true">Left In</ImButton>
</ImRow>

## 关闭按钮

可以自定义头部右侧的关闭按钮为文字或其他元素。`card` 支持 `header-action` 插槽;

<ImDrawer v-model="actionShow" placement="left">
    <ImCard title="Demo" borderless>
    <template #header-action>
      <ImButton @click="actionShow = false" size="48" shape="circle" color="error" variant="text">
        <ImIcon name="close" size='24' />
      </ImButton>
    </template>
      <p>Text ...</p>
      <p>Text ...</p>
      <p>Text ...</p>
    </ImCard>
  </ImDrawer>
  <ImButton @click="actionShow = true">Close Button</ImButton>

```vue
<template>
  <ImDrawer v-model="actionShow" placement="left">
    <ImCard title="Demo" borderless>
      <template #header-action>
        <ImButton
          @click="actionShow = false"
          size="48"
          shape="circle"
          color="error"
          variant="text">
          <ImIcon name="close" size="24" />
        </ImButton>
      </template>
      <p>Text ...</p>
      <p>Text ...</p>
      <p>Text ...</p>
    </ImCard>
  </ImDrawer>
  <ImButton @click="actionShow = true">Close Button</ImButton>
</template>
```
