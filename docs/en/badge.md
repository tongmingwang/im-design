# Badge Component

Numeric or status markers on buttons and icons.

## Basic Usage

Can be used to display the number of new messages.

The value can be a Number or String.

<style scoped>
  .demo {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
</style>

<div class="demo">
  <ImBadge :value="25">
    <ImButton>comments</ImButton>
  </ImBadge>
  <ImBadge :value="4" color="error">
    <ImButton>comments</ImButton>
  </ImBadge>
  <ImBadge :value="0" color="success">
    <ImButton>comments</ImButton>
  </ImBadge>
  <ImBadge :value="99" color="primary">
    <ImButton>comments</ImButton>
  </ImBadge>
  <ImBadge :value="99" color="warning">
    <ImButton>comments</ImButton>
  </ImBadge>
</div>

```vue
<template>
  <div class="demo">
    <ImBadge :value="25">
      <ImButton>comments</ImButton>
    </ImBadge>
    <ImBadge :value="4" color="error">
      <ImButton>comments</ImButton>
    </ImBadge>
    <ImBadge :value="0" color="success">
      <ImButton>comments</ImButton>
    </ImBadge>
    <ImBadge :value="99" color="primary">
      <ImButton>comments</ImButton>
    </ImBadge>
    <ImBadge :value="99" color="warning">
      <ImButton>comments</ImButton>
    </ImBadge>
  </div>
</template>
```

## Other Features

Set the `dot` property to display a small red dot.
You can use slots to customize the badge content.

<div class="demo">
  <ImBadge value="Hot">
    <ImButton>comments</ImButton>
  </ImBadge>
  <ImBadge value="Hot" color="error">
    <ImButton>comments</ImButton>
  </ImBadge>
  <ImBadge value="Hot" color="success">
    <ImButton>comments</ImButton>
  </ImBadge>
  <ImBadge dot color="primary">
    <ImButton>comments</ImButton>
  </ImBadge>
  <ImBadge dot size="8" color="warning">
    <ImButton>comments</ImButton>
  </ImBadge>
</div>

```vue
<template>
  <div class="demo">
    <ImBadge value="Hot">
      <ImButton>comments</ImButton>
    </ImBadge>
    <ImBadge value="Hot" color="error">
      <ImButton>comments</ImButton>
    </ImBadge>
    <ImBadge value="Hot" color="success">
      <ImButton>comments</ImButton>
    </ImBadge>
    <ImBadge dot color="primary">
      <ImButton>comments</ImButton>
    </ImBadge>
    <ImBadge dot size="8" color="warning">
      <ImButton>comments</ImButton>
    </ImBadge>
  </div>
</template>
```

## APIs