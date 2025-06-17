# PageHeader

页头组件，用于显示页面的标题、副标题和操作区域。

## 完整用法


 <ImPageHeader title="Order" subTitle="编辑订单信息">
  <template #action>
    <ImButton>导出</ImButton>
    <ImButton color="primary">保存</ImButton>
  </template>
  <template #content>
    <ImTag color="primary">Hot</ImTag>
  </template>
</ImPageHeader>

```vue
<template>
<ImPageHeader title="Order" subTitle="编辑订单信息">
  <template #action>
    <ImButton>导出</ImButton>
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

## APIS