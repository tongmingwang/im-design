# Button 按钮

按钮组件用于触发一个操作，如提交表单。

## 基础用法

使用 `color` `variant` 属性组合来定义按钮色彩。

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

## 圆形按钮

`shape` 为 `circle` 的按钮组合

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

## 矩形按钮

`shape` 为 `square` 的按钮组合

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

## 大圆角按钮

`shape` 为 `round` 的按钮组合
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

## 宽度铺满

使用 `width` 属性来定义按钮的宽度。接受一个字符串，如何 `100px`。

  <section>
    <im-button width="100%" :color="item" v-ripple="true" v-for="(item, index) in colors" :key="index">{{
      item.toUpperCase() }}</im-button>
  </section>

```vue
<template>
  <ImButton width="100%" color="primary" shape="square">Button</ImButton>
</template>
```

## 禁用状态

使用 `disabled` 属性来定义按钮是否禁用。接受一个 `Boolean` 值。

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

## 加载状态

可以使用 `loading` 属性来定义按钮是否处于加载状态。接受一个 `Boolean` 值。

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

## 调整尺寸

支持数字类型的 n 多尺寸，默认大小为 `36`。你可以设置 `size` 属性来定义按钮的大小。

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

## 自定义颜色

采用 css 变量自定义颜色,直接在按钮组件上覆盖掉默认的颜色变量即可

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

### ImButton 属性

| 属性名   | 说明             | 类型                        | 默认值    | 必填 |
| -------- | ---------------- | --------------------------- | --------- | ---- |
| color    | 按钮颜色主题     | string                      | 'default' | 否   |
| variant  | 按钮变体样式     | 'text'\|'outlined'\|'tonal' | -         | 否   |
| shape    | 按钮形状         | 'circle'\|'square'\|'round' | -         | 否   |
| size     | 按钮尺寸(px)     | number                      | 36        | 否   |
| width    | 按钮宽度         | string                      | -         | 否   |
| loading  | 是否显示加载状态 | boolean                     | false     | 否   |
| disabled | 是否禁用按钮     | boolean                     | false     | 否   |
| ripple   | 是否启用涟漪效果 | boolean                     | true      | 否   |

### ImButton 事件

| 事件名 | 说明           | 回调参数                |
| ------ | -------------- | ----------------------- |
| click  | 点击按钮时触发 | (e: MouseEvent) => void |

### ImButton 插槽

| 插槽名  | 说明             |
| ------- | ---------------- |
| default | 按钮内容区域     |
| loading | 加载状态时的内容 |

### 颜色变量 (CSS Variables)

| 变量名               | 说明     |
| -------------------- | -------- |
| --im-primary-color-7 | 主色亮色 |
| --im-primary-color-8 | 主色     |
| --im-primary-color-9 | 主色暗色 |
| --im-gray-color-1    | 文字颜色 |
