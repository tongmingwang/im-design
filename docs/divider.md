# Divider 分割线

区隔内容的分割线。

## 基础使用

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a
te dicta? Refert tamen, quo modo.
<ImDivider>Text</ImDivider>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a
te dicta? Refert tamen, quo modo.

```vue
<template>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti
  licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
  <ImDivider>Text</ImDivider>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti
  licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
</template>
```

## 设置文本位置

可以使用 `textLeftWidth` `textRightWidth` 来设置分割线区域，实现文本偏移

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a
te dicta? Refert tamen, quo modo.
<ImDivider textLeftWidth="50px">Text</ImDivider>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a
te dicta? Refert tamen, quo modo.

```vue
<template>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti
  licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
  <ImDivider textLeftWidth="50px">Text</ImDivider>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti
  licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
</template>
```

## 纵向分割

Hello <ImDivider vertical /> World

```vue
<template>Hello <ImDivider vertical /> World</template>
```

## API

```ts
interface DividerProps {
  vertical?: boolean; // 是否垂直方向展示，默认为水平方向
  color?: string; // 分割线颜色，默认为灰色
  size?: number | string; // 分割线大小，默认为1px
  margin?: number | string; // 分割线两侧的间距，默认为 8px
  className?: string; // 自定义类名
  textLeftWidth?: string | number; // 文字左侧宽度，默认为0
  textRightWidth?: string | number; // 文字右侧宽度，默认为0
}
```
