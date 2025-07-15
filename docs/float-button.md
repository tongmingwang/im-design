# FloatButton 悬浮按钮

将操作按钮浮动地固定在角落，用于方便用户快速触发某些操作。

## 基本用法

查看右下角案例

<ImFloatButton shape="circle">
  <template #default="{open}">
  <ImButton shape="circle" variant="text">
    <ImIcon :name="open ? 'close' : 'up'" />
  </ImButton>
  </template>
  <template #content>
    <ImButton shape="circle">按钮</ImButton>
    <ImButton shape="circle">按钮</ImButton>
    <ImButton shape="circle">按钮</ImButton>
  </template>
</ImFloatButton>

```vue
<template>
  <ImFloatButton shape="circle">
    <template #default="{ open }">
      <ImButton shape="circle" variant="text">
        <ImIcon :name="open ? 'close' : 'up'" />
      </ImButton>
    </template>
    <template #content>
      <ImButton shape="circle">按钮</ImButton>
      <ImButton shape="circle">按钮</ImButton>
      <ImButton shape="circle">按钮</ImButton>
    </template>
  </ImFloatButton>
</template>
```

## API

### slots

| 名称      | 说明                           |
| --------- | ------------------------------ |
| `default` | 悬浮按钮触发器,回调状态 `open` |
| `content` | 悬浮按钮内容，默认为空。       |
