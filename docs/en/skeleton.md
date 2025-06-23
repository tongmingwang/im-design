# Skeleton Screen

Skeleton Screen is a placeholder graphic displayed during page loading to enhance user experience. It is typically a semi-transparent rectangular frame that replaces the actual content loading process.

## Why Use Skeleton Screen?

1. **Improve User Satisfaction**: Displaying a static framework while content is loading lets users know what to expect, reducing anxiety.
2. **Optimize Visual Effects**: Provides a consistent visual style during waiting periods.
3. **Enhance Performance**: For complex or image-heavy pages, skeleton screens help quickly display the basic page structure.

## Basic Usage

Basic skeleton component with customizable styles.

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

## Active State

Skeleton can be set to active state while content is loading.

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

## Combined Usage

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

## Note

When nesting components, set the `loading` property on child components to control the display effect.

## API

## ImSkeleton Props

| Property | Description                                  | Type                                     | Default |
| -------- | -------------------------------------------- | ---------------------------------------- | ------- |
| loading  | Whether to show skeleton                     | boolean                                  | false   |
| animated | Whether to show animation                    | boolean                                  | true    |
| rows     | Number of skeleton rows                      | number                                   | 3       |
| rowWidth | Row width, can be array for different widths | number \| string \| (number \| string)[] | '100%'  |

## ImSkeletonLine Props

| Property | Description | Type             | Default |
| -------- | ----------- | ---------------- | ------- |
| size     | Line height | number \| string | '16px'  |

## ImSkeletonImage Props

| Property | Description                          | Type             | Default  |
| -------- | ------------------------------------ | ---------------- | -------- |
| size     | Image size                           | number \| string | '48px'   |
| shape    | Image shape, options: circle, square | string           | 'square' |

## ImSkeletonAvatar Props

| Property | Description                           | Type             | Default  |
| -------- | ------------------------------------- | ---------------- | -------- |
| size     | Avatar size                           | number \| string | '32px'   |
| shape    | Avatar shape, options: circle, square | string           | 'circle' |
