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
</script>

<style scoped>

  .demo-buttons {
    display: flex;
    gap: 8px;
  }
</style>


## 基础用法

基本抽屉组件，默认从右侧滑出。

 <ImDrawer v-model="drawer" title="基础抽屉">
    <p>抽屉内容区域</p>
    <p>可以放置表单、列表等任何内容</p>
  </ImDrawer>
  <ImButton @click="drawer = true">打开抽屉</ImButton>


```vue
<template>
  <ImDrawer v-model="drawer" title="基础抽屉">
    <p>抽屉内容区域</p>
    <p>可以放置表单、列表等任何内容</p>
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

  <ImDrawer v-model="left" placement="left" title="左侧抽屉">
    <p>左侧抽屉内容</p>
  </ImDrawer>

  <ImDrawer v-model="top" placement="top" title="顶部抽屉">
    <p>顶部抽屉内容</p>
  </ImDrawer>

  <ImDrawer v-model="bottom" placement="bottom" title="底部抽屉">
    <p>底部抽屉内容</p>
  </ImDrawer>

```vue
<template>
  <div class="demo-buttons">
    <ImButton @click="left = true">左侧</ImButton>
    <ImButton @click="top = true">顶部</ImButton>
    <ImButton @click="bottom = true">底部</ImButton>
  </div>

  <ImDrawer v-model="left" placement="left" title="左侧抽屉">
    <p>左侧抽屉内容</p>
  </ImDrawer>

  <ImDrawer v-model="top" placement="top" title="顶部抽屉">
    <p>顶部抽屉内容</p>
  </ImDrawer>

  <ImDrawer v-model="bottom" placement="bottom" title="底部抽屉">
    <p>底部抽屉内容</p>
  </ImDrawer>
</template>

```

## 自定义尺寸

通过 `size` 属性自定义抽屉大小，支持百分比或具体像素值：

<ImDrawer v-model="customSize" size="50%" title="半宽抽屉">
    <p>宽度设置为50%的抽屉</p>
  </ImDrawer>
  <ImButton @click="customSize = true">打开半宽抽屉</ImButton>

```vue
<template>
  <ImDrawer v-model="customSize" size="50%" title="半宽抽屉">
    <p>宽度设置为50%的抽屉</p>
  </ImDrawer>
  <ImButton @click="customSize = true">打开半宽抽屉</ImButton>
</template>
```

## 关闭行为控制

<ImDrawer
    v-model="open"
    :close-on-click-mask="false"
    title="需确认关闭的抽屉">
<p>点击遮罩不会关闭抽屉</p>
<ImButton @click="open = false">点击关闭</ImButton>
</ImDrawer>
<ImButton @click="open = true">打开抽屉</ImButton>

```vue
<template>
  <ImDrawer
    v-model="open"
    :close-on-click-mask="false"
    title="需确认关闭的抽屉">
    <p>点击遮罩不会关闭抽屉</p>
    <ImButton @click="open = false">点击关闭</ImButton>
  </ImDrawer>
  <ImButton @click="open = true">打开抽屉</ImButton>
</template>
```

## API

### ImDrawer Props

| 属性名           | 说明                                 | 类型          | 默认值  | 必填 |
| ---------------- | ------------------------------------ | ------------- | ------- | ---- |
| modelValue       | 控制抽屉显示/隐藏                    | boolean       | false   | 是   |
| placement        | 抽屉方向，可选 left/right/top/bottom | string        | 'right' | 否   |
| size             | 抽屉尺寸，支持百分比或像素值         | string/number | '378px' | 否   |
| mask             | 是否显示遮罩层                       | boolean       | true    | 否   |
| closeOnClickMask | 点击遮罩是否关闭抽屉                 | boolean       | true    | 否   |
| zIndex           | 设置抽屉的 z-index                   | number/string | -       | 否   |

### ImDrawer Events

| 事件名            | 说明                   | 回调参数                 |
| ----------------- | ---------------------- | ------------------------ |
| update:modelValue | 抽屉显示状态变化时触发 | (value: boolean) => void |

### ImDrawer Slots

| 插槽名  | 说明         |
| ------- | ------------ |
| default | 抽屉内容区域 |
