# Skeleton 骨架屏

骨架屏（Skeleton Screen）是一种在页面加载时显示的占位图形，用于提升用户体验。它通常是一个半透明的矩形框，用来代替实际内容的加载过程。

### 为什么需要骨架屏？

1. **提高用户满意度**：当内容还在加载中时，显示一个静态的框架可以让用户知道接下来会发生什么，从而减少用户的焦虑感。
2. **优化视觉效果**：骨架屏可以提供一个一致的视觉风格，使得用户在等待过程中不会感到混乱或困惑。
3. **改善性能表现**：对于一些复杂的页面或者图片较多的页面，骨架屏可以帮助快速展示页面的基本结构，从而提高首屏渲染速度。

### 基础用法

基础骨架屏组件，可以自定义骨架样式。

<ImSkeleton>
  <ImSkeletonLine />
  <ImSkeletonLine />
  <ImSkeletonLine />
</ImSkeleton>

```vue
<template>
  <ImSkeleton>
    <ImSkeletonLine />
    <ImSkeletonLine />
    <ImSkeletonLine />
  </ImSkeleton>
</template>
```

### 激活状态

骨架屏可以设置为激活状态，在内容加载完成前显示。

<ImSkeleton loading>
   <ImSkeleton loading>
        <ImSkeletonLine />
        <ImSkeletonLine />
        <ImSkeletonLine />
      </ImSkeleton>
</ImSkeleton>

```vue
<template>
  <ImSkeleton loading>
    <ImSkeletonLine />
    <ImSkeletonLine />
    <ImSkeletonLine />
  </ImSkeleton>
</template>
```

### 组合使用

<ImSkeleton loading>
  <ImRow gutter="16">
    <ImSkeleton loading>
      <ImSkeletonImage size="80"></ImSkeletonImage>
    </ImSkeleton>
    <ImCol span="22">
      <ImSkeleton loading>
        <ImSkeletonLine />
        <ImSkeletonLine />
        <ImSkeletonLine />
      </ImSkeleton>
    </ImCol>
  </ImRow>
  <ImRow gutter="16">
    <ImSkeletonAvatar size="48" loading />
    <ImSkeletonAvatar size="48" loading />
    <ImSkeletonAvatar size="48" loading />
  </ImRow>
  <ImSkeletonLine />
  <ImSkeletonLine />
  <ImSkeletonLine />
  <ImSkeletonLine />
  <ImSkeletonLine />
</ImSkeleton>

```vue
<template>
  <ImSkeleton loading>
    <ImRow gutter="16">
      <ImSkeleton loading>
        <ImSkeletonImage size="80"></ImSkeletonImage>
      </ImSkeleton>
      <ImCol span="22">
        <ImSkeleton loading>
          <ImSkeletonLine />
          <ImSkeletonLine />
          <ImSkeletonLine />
        </ImSkeleton>
      </ImCol>
    </ImRow>
    <ImRow gutter="16">
      <ImSkeletonAvatar size="48" loading />
      <ImSkeletonAvatar size="48" loading />
      <ImSkeletonAvatar size="48" loading />
    </ImRow>
    <ImSkeletonLine />
    <ImSkeletonLine />
    <ImSkeletonLine />
    <ImSkeletonLine />
    <ImSkeletonLine />
  </ImSkeleton>
</template>
```

### 注意

如果嵌套组合，需要在子组件上也设置`loading`属性。便于控制骨架屏加载的显示效果。

### API

#### ImSkeleton Props

| 参数    | 说明           | 类型    | 默认值 |
| ------- | -------------- | ------- | ------ |
| loading | 是否显示骨架屏 | boolean | false  |

#### ImSkeletonLine Props

| 参数 | 说明     | 类型             | 默认值 |
| ---- | -------- | ---------------- | ------ |
| size | 线条高度 | number \| string | '16px' |

#### ImSkeletonImage Props

| 参数    | 说明                             | 类型             | 默认值   |
| ------- | -------------------------------- | ---------------- | -------- |
| size    | 图片尺寸                         | number \| string | '48px'   |
| shape   | 图片形状，可选值：circle, square | string           | 'square' |
| loading | 是否显示加载效果                 | boolean          | false    |

#### ImSkeletonAvatar Props

| 参数    | 说明                             | 类型             | 默认值   |
| ------- | -------------------------------- | ---------------- | -------- |
| size    | 头像尺寸                         | number \| string | '32px'   |
| shape   | 头像形状，可选值：circle, square | string           | 'circle' |
| loading | 是否显示加载效果                 | boolean          | false    |
