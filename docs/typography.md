# Typography 排版

文本的基本格式。

## 基础用法

<ImTitle level="1">标题</ImTitle>
<ImTitle level="2">标题</ImTitle>
<ImTitle level="3">标题</ImTitle>
<ImTitle level="4">标题</ImTitle>
<ImTitle level="5">标题</ImTitle>
<ImTitle level="6">标题</ImTitle>

```vue
<ImTitle level="1">标题</ImTitle>
<ImTitle level="2">标题</ImTitle>
<ImTitle level="3">标题</ImTitle>
<ImTitle level="4">标题</ImTitle>
<ImTitle level="5">标题</ImTitle>
<ImTitle level="6">标题</ImTitle>
```

## 文本样式

<ImText >文本</ImText>
<ImText color="primary">文本</ImText>
<ImText color="error">文本</ImText>
<ImText color="success">文本</ImText>
<ImText color="warning">文本</ImText>

```vue
<ImText>文本</ImText>
<ImText color="primary">文本</ImText>
<ImText color="error">文本</ImText>
<ImText color="success">文本</ImText>
<ImText color="warning">文本</ImText>
```

## 链接样式

<ImLink href="#">链接文本</ImLink>

```vue
<ImLink href="#">链接文本</ImLink>
```

## API

### ImTitle

| 属性  | 说明     | 类型                                   | 默认值 |
| ----- | -------- | -------------------------------------- | ------ |
| level | 标题等级 | `1` \| `2` \| `3` \| `4` \| `5` \| `6` | `1`    |

### ImText

| 属性  | 说明     | 类型                                           | 默认值 |
| ----- | -------- | ---------------------------------------------- | ------ |
| color | 文本颜色 | `primary` \| `error` \| `success` \| `warning` | -      |

### ImLink

| 属性 | 说明     | 类型   | 默认值 |
| ---- | -------- | ------ | ------ |
| href | 链接地址 | string | -      |
