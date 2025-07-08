# PageHeader

页头组件，用于显示页面的标题、副标题和操作区域。

## 完整用法

 <ImPageHeader title="Order" subTitle="编辑">
  <template #action>
    <ImButton color="primary">保存</ImButton>
  </template>
  <template #content>
    <ImTag color="primary">Hot</ImTag>
  </template>
</ImPageHeader>

```vue
<template>
  <ImPageHeader title="Order" subTitle="编辑">
    <template #action>
      <ImButton color="primary">保存</ImButton>
    </template>
    <template #content>
      <ImTag color="primary">Hot</ImTag>
    </template>
  </ImPageHeader>
</template>
```

## 简易用法

<ImPageHeader title="Order" subTitle="编辑订单信息"></ImPageHeader>

```vue
<template>
  <ImPageHeader title="Order" subTitle="编辑订单信息"></ImPageHeader>
</template>
```

## API

### ImPageHeader 属性

| 属性名   | 说明         | 类型    | 默认值 | 必填 |
| -------- | ------------ | ------- | ------ | ---- |
| title    | 主标题文本   | string  | -      | 是   |
| subTitle | 副标题文本   | string  | -      | 否   |
| icon     | 标题前图标   | string  | -      | 否   |
| back     | 显示返回按钮 | boolean | false  | 否   |

### ImPageHeader 事件

| 事件名 | 说明               | 回调参数           |
| ------ | ------------------ | ------------------ |
| back   | 点击返回按钮时触发 | (e: Event) => void |

### ImPageHeader 插槽

| 插槽名   | 说明         |
| -------- | ------------ |
| title    | 标题         |
| action   | 操作按钮区域 |
| content  | 附加内容区域 |
| subTitle | 子标题       |