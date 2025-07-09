# 最佳实践

目前组件一些弹层都是通过插入到 html 中实现的，和 body 层级一致，所以希望你的 body 是可以滚动的，这样才不会影响页面布局。
html 是不能滚动的。

## 布局方案

为了我们的对话框不影响到页面布局，我们的布局应该是这样的：

```html
<html lang="en">
  <head> </head>
  <script src="xxx"></script>
  <body>
    <div id="app"></div>
    <!-- 对话框插入规则 -->
    <div id="modal"></div>
  </body>
</html>
```

这个时候你的样式应该是这样的：

```css
html {
  height: 100%;
  overflow: hidden;
  width: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  height: 100%;
  overflow: auto;
  width: 100%;
  padding: 0;
  margin: 0;
}
```

通过以上方法可以实现对话框不影响到页面布局。

## 组件引入方式

一般情况下，组件不会全部引入，而是按需引入。

但是我们的库是很小的，因此没有必要按需引入，直接全部引入即可。

## 组件是最小单元

在设计组件的时候，我们应该尽可能的让我们的组件是最小单元。

比如 card 组件

```vue
<template>
  <ImCard>
    <ImCardHeader>Title</ImCardHeader>
    <ImCardBody>Content</ImCardBody>
    <ImCardFooter>Footer</ImCardFooter>
  </ImCard>
</template>
```

效果
<ImCard>
<ImCardHeader>Title</ImCardHeader>
<ImCardBody>Content</ImCardBody>
<ImCardFooter>Footer</ImCardFooter>
</ImCard>

组件拆分：头部、内容、底部。还有一个包裹组件。一起组装起来。那么其他组件也是如此。达到最小单元。
