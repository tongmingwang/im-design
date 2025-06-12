# Drawer 抽屉

屏幕边缘滑出的浮层面板。

## 基础用法

抽屉从屏幕边缘滑入，覆盖内容。

<script setup>
import { ref } from 'vue';

const drawer = ref(false);
const customW = ref(false);
const left = ref(false);
const top = ref(false);
const bottom = ref(false);


</script>

<ImDrawer v-model="drawer" placement="right">
    <ImCard title="Demo" borderless>
    <template #header-action>
      <ImButton @click="drawer = false" variant="text" shape="circle" size="48">
        <ImIcon name="close" size="20" />
      </ImButton>
    </template>
      <p>Text ...</p>
      <p>Text ...</p>
      <p>Text ...</p>
    </ImCard>
  </ImDrawer>
  <ImButton @click="drawer = true">Right</ImButton>

```vue
<template>
  <ImDrawer v-model="drawer">
    <ImCard title="Demo" borderless>
      <template #header-action>
        <ImButton
          @click="drawer = false"
          variant="text"
          shape="circle"
          size="48">
          <ImIcon name="close" size="20" />
        </ImButton>
      </template>
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

## 抽屉方向

通过设置 `placement` 属性来改变抽屉的方向。支持 `left`、`right`、`top`、`bottom`

<ImButton @click="left = true">Left</ImButton>
<ImButton @click="top = true">top</ImButton>
<ImButton @click="bottom = true">bottom</ImButton>

<ImDrawer v-model="left" placement="left">
    <ImCard title="Demo" borderless>
      <p>Text ...</p>
      <p>Text ...</p>
      <p>Text ...</p>
    </ImCard>
  </ImDrawer>

  <ImDrawer v-model="top" placement="top">
    <ImCard title="Demo" borderless>
      <p>Text ...</p>
      <p>Text ...</p>
      <p>Text ...</p>
    </ImCard>
  </ImDrawer>

  <ImDrawer v-model="bottom" placement="bottom">
    <ImCard title="Demo" borderless>
      <p>Text ...</p>
      <p>Text ...</p>
      <p>Text ...</p>
    </ImCard>
  </ImDrawer>

## 自定义抽屉宽度

设置一个 `size` 属性来自定义抽屉的宽度。`50%`

<ImDrawer v-model="customW" size="50%">
    <ImCard title="Demo" borderless>
      <p>Text ...</p>
      <p>Text ...</p>
      <p>Text ...</p>
    </ImCard>
  </ImDrawer>
  <ImButton @click="customW = true">custom Width</ImButton>
