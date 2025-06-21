# Avatar Component

Used to represent users or objects, supporting images, icons, or text display.

## Basic Usage

Using slots

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

## Image Mode

Load avatar using image URL

<ImAvatar src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
<ImAvatar src="https://avatars.githubusercontent.com/u/63175225?v=4" />

```vue
<template>
  <ImAvatar
    src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
  <ImAvatar src="https://avatars.githubusercontent.com/u/63175225?v=4" />
</template>
```

## Shapes

Modify shape by setting `shape` property to `square` or `circle`

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

## APIs