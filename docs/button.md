# Button 按钮

按钮是用来触发操作的组件，点击按钮会执行相应的业务逻辑。

## 基础用法

使用 `color` `shape` `variant` 属性来定义按钮形状和色彩。

<style>
 .im-button {
  margin-right: 8px;
  margin-bottom: 8px;
 }

</style>

<script setup>
import { ImIconSearch } from 'im-design'

</script>

<div>
  <im-button color="default">Default</im-button>
  <im-button color="success">Success</im-button>
  <im-button color="warning">Warning</im-button>
  <im-button color="error">Error</im-button>
  <im-button color="primary">Primary</im-button>
</div>
<div>
  <im-button variant="outlined" color="default">Default</im-button>
  <im-button variant="outlined" color="success">Success</im-button>
  <im-button variant="outlined" color="warning">Warning</im-button>
  <im-button variant="outlined" color="error">Error</im-button>
  <im-button variant="outlined" color="primary">Primary</im-button>
</div>
<div>
  <im-button variant="tonal" color="default">Default</im-button>
  <im-button variant="tonal" color="success">Success</im-button>
  <im-button variant="tonal" color="warning">Warning</im-button>
  <im-button variant="tonal" color="error">Error</im-button>
  <im-button variant="tonal" color="primary">Primary</im-button>
</div>
<div>
  <im-button variant="text" color="default">Default</im-button>
  <im-button variant="text" color="success">Success</im-button>
  <im-button variant="text" color="warning">Warning</im-button>
  <im-button variant="text" color="error">Error</im-button>
  <im-button variant="text" color="primary">Primary</im-button>
</div>
<div>
 <im-button shape="round" color="default">Default</im-button>
  <im-button shape="round" color="success">Success</im-button>
  <im-button shape="round" color="warning">Warning</im-button>
  <im-button shape="round" color="error">Error</im-button>
  <im-button shape="round" color="primary">Primary</im-button>
</div>
<div>
 <im-button shape="square" color="default"><ImIconSearch width="18" height="18" /></im-button>
  <im-button shape="square" color="success"><ImIconSearch width="18" height="18" /></im-button>
  <im-button shape="square" color="warning"><ImIconSearch width="18" height="18" /></im-button>
  <im-button shape="square" color="error"><ImIconSearch width="18" height="18" /></im-button>
  <im-button shape="square" color="primary"><ImIconSearch width="18" height="18" /></im-button>
</div>

<div>
 <im-button shape="circle" color="default"><ImIconSearch width="18" height="18" /></im-button>
  <im-button shape="circle" color="success"><ImIconSearch width="18" height="18" /></im-button>
  <im-button shape="circle" color="warning"><ImIconSearch width="18" height="18" /></im-button>
  <im-button shape="circle" color="error"><ImIconSearch width="18" height="18" /></im-button>
  <im-button shape="circle" color="primary"><ImIconSearch width="18" height="18" /></im-button>
</div>

```html
<div>
  <im-button color="default">Default</im-button>
  <im-button color="success">Success</im-button>
  <im-button color="warning">Warning</im-button>
  <im-button color="error">Error</im-button>
  <im-button color="primary">Primary</im-button>
</div>
<div>
  <im-button variant="outlined" color="default">Default</im-button>
  <im-button variant="outlined" color="success">Success</im-button>
  <im-button variant="outlined" color="warning">Warning</im-button>
  <im-button variant="outlined" color="error">Error</im-button>
  <im-button variant="outlined" color="primary">Primary</im-button>
</div>
<div>
  <im-button variant="tonal" color="default">Default</im-button>
  <im-button variant="tonal" color="success">Success</im-button>
  <im-button variant="tonal" color="warning">Warning</im-button>
  <im-button variant="tonal" color="error">Error</im-button>
  <im-button variant="tonal" color="primary">Primary</im-button>
</div>
<div>
  <im-button variant="text" color="default">Default</im-button>
  <im-button variant="text" color="success">Success</im-button>
  <im-button variant="text" color="warning">Warning</im-button>
  <im-button variant="text" color="error">Error</im-button>
  <im-button variant="text" color="primary">Primary</im-button>
</div>
<div>
  <im-button shape="round" color="default">Default</im-button>
  <im-button shape="round" color="success">Success</im-button>
  <im-button shape="round" color="warning">Warning</im-button>
  <im-button shape="round" color="error">Error</im-button>
  <im-button shape="round" color="primary">Primary</im-button>
</div>
<div>
  <im-button shape="square" color="default"
    ><ImIconSearch width="18" height="18"
  /></im-button>
  <im-button shape="square" color="success"
    ><ImIconSearch width="18" height="18"
  /></im-button>
  <im-button shape="square" color="warning"
    ><ImIconSearch width="18" height="18"
  /></im-button>
  <im-button shape="square" color="error"
    ><ImIconSearch width="18" height="18"
  /></im-button>
  <im-button shape="square" color="primary"
    ><ImIconSearch width="18" height="18"
  /></im-button>
</div>

<div>
  <im-button shape="circle" color="default"
    ><ImIconSearch width="18" height="18"
  /></im-button>
  <im-button shape="circle" color="success"
    ><ImIconSearch width="18" height="18"
  /></im-button>
  <im-button shape="circle" color="warning"
    ><ImIconSearch width="18" height="18"
  /></im-button>
  <im-button shape="circle" color="error"
    ><ImIconSearch width="18" height="18"
  /></im-button>
  <im-button shape="circle" color="primary"
    ><ImIconSearch width="18" height="18"
  /></im-button>
</div>
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

```html
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

## 调整尺寸

支持数字类型的 n 多尺寸，默认大小为 `36`。你可以设置 `size` 属性来定义按钮的大小。

<div>
    <im-button color="primary" size="24">Mini</im-button>
    <im-button color="primary" size="32">Small</im-button>
    <im-button color="primary" size="36">Default</im-button>
    <im-button color="primary" size="48">Large</im-button>
    <im-button color="primary" size="60">Extra Large</im-button>
</div>

```html
<div>
  <im-button color="primary" size="24">Mini</im-button>
  <im-button color="primary" size="32">Small</im-button>
  <im-button color="primary" size="36">Default</im-button>
  <im-button color="primary" size="48">Large</im-button>
  <im-button color="primary" size="60">Extra Large</im-button>
</div>
```

## 自定义颜色

采用 css 变量自定义颜色,直接在按钮组件上覆盖掉默认的颜色变量即可

<div>
    <im-button color="primary" style="--im-gray-color-1: #fff;--im-primary-color-7: #262626;--im-primary-color-8: #000;">Custom</im-button>
    <im-button color="primary" style="--im-gray-color-1: #fff;--im-primary-color-7:rgb(150, 14, 100);--im-primary-color-8: rgb(125, 8, 82);">Custom</im-button>
</div>

```html
<div>
  <im-button
    color="primary"
    style="--im-gray-color-1: #fff;--im-primary-color-7: #262626;--im-primary-color-8: #000;"
    >Custom</im-button
  >
  <im-button
    color="primary"
    style="--im-gray-color-1: #fff;--im-primary-color-7:rgb(150, 14, 100);--im-primary-color-8: rgb(125, 8, 82);"
    >Custom</im-button
  >
</div>
```
