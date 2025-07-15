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

### Props

| 属性名         | 说明                                   |
| -------------- | -------------------------------------- |
| textLeftWidth  | 文本左侧偏移量，仅在非垂直分割线时有效 |
| textRightWidth | 文本右侧偏移量，仅在非垂直分割线时有效 |
| vertical       | 是否为垂直分割线                       |
| margin         | 分割线间距                             |
| size           | 分割线大小                             |
| color          | 分割线颜色                             |
