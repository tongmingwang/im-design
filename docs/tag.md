# Tag 标签

用于标记和选择。

## 基础用法

由 color 属性定义颜色 支持的颜色有：success/info/warning/danger。

通过传递 color 属性来定义 tag 的样式。

<ImRow gutter="8">
    <ImTag>Goods!</ImTag>
    <ImTag color="primary">Goods!</ImTag>
    <ImTag color="error">Goods!</ImTag>
    <ImTag color="success">Goods!</ImTag>
    <ImTag color="warning">Goods!</ImTag>
  </ImRow>

```vue
<template>
  <ImRow gutter="8">
    <ImTag>Goods!</ImTag>
    <ImTag color="primary">Goods!</ImTag>
    <ImTag color="error">Goods!</ImTag>
    <ImTag color="success">Goods!</ImTag>
    <ImTag color="warning">Goods!</ImTag>
  </ImRow>
</template>
```

## 可移除标签

设置 closeable 属性可以定义一个可移除的标签。触发 close 事件，或者使用 v-model 双向绑定变量控制显示隐藏。

<ImRow gutter="8">
    <ImTag closeable>Goods!</ImTag>
    <ImTag closeable color="primary">Goods!</ImTag>
    <ImTag closeable color="error">Goods!</ImTag>
    <ImTag closeable color="success">Goods!</ImTag>
    <ImTag closeable color="warning">Goods!</ImTag>
  </ImRow>
  
## APIS
