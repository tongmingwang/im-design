# Badge 徽章

按钮和图标上的数字或状态标记。

## 基础使用

可以用来展示新消息的数量。

数量值可接受 Number 或 String。

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

## 其他

设置 `dot` 属性可以展示一个小红点。
可以使用插槽自定义徽章的内容。

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

## APIS
