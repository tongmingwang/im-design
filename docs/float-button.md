## FloatButton 悬浮按钮

将操作按钮浮动地固定在角落，用于方便用户快速触发某些操作。

## 基本用法

<ImFloatButton shape="circle">
  <template #default="{open}">
  <ImButton shape="circle">{{open ? 'close' : 'open' }}</ImButton>
  </template>
  <template #content>
    <ImButton shape="circle">按钮</ImButton>
    <ImButton shape="circle">按钮</ImButton>
    <ImButton shape="circle">按钮</ImButton>
  </template>
</ImFloatButton>
