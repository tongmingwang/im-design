# Avatar 头像

用来代表用户或事物，支持图片、图标或字符展示。

### 基础用法

使用插槽

<ImAvatar>User</ImAvatar>
<ImAvatar>
<ImIcon name="user" />
</ImAvatar>

```vue
<template>
  <ImAvatar>User</ImAvatar>
  <ImAvatar>
    <ImIcon name="user" />
  </ImAvatar>
</template>
```

### 图片方式

使用图片链接方式加载头像

<ImAvatar src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
<ImAvatar src="https://avatars.githubusercontent.com/u/63175225?v=4" />

```vue
<template>
  <ImAvatar
    src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
  <ImAvatar src="https://avatars.githubusercontent.com/u/63175225?v=4" />
</template>
```

### 形状

通过设置 `shape`属性为 `square` `circle` 修改形状

<ImAvatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
<ImAvatar src="https://avatars.githubusercontent.com/u/63175225?v=4" />
<ImAvatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" shape="square" />
<ImAvatar src="https://avatars.githubusercontent.com/u/63175225?v=4" shape="square" />

```vue
<template>
  <ImAvatar
    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
  <ImAvatar src="https://avatars.githubusercontent.com/u/63175225?v=4" />
  <ImAvatar
    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    shape="square" />
  <ImAvatar
    src="https://avatars.githubusercontent.com/u/63175225?v=4"
    shape="square" />
</template>
```

## API



| 字段名      | 类型                          | 描述                                                                 |
|-------------|-------------------------------|----------------------------------------------------------------------|
| size        | number \| string              | 图片大小                                                           |
| src         | string                        | 图片源地址                                                         |
| alt         | string                        | 替代文本                                                           |
| title       | string                        | 标题文本                                                           |
| crossOrigin | string                        | 跨域属性                                                           |
| fit         | 'fill' \| 'contain' \| 'cover' \| 'none' \| 'scale-down' | 图片适应方式，默认为'fill'             |
| srcset      | string                        | 多分辨率图片源                                                     |
| loading     | 'eager' \| 'lazy'             | 加载策略，默认为'eager'                                            |
| shape       | 'circle' \| 'square'          | 形状，默认为'square'                                               |
| color       | string                        | 图片颜色                                                           |
