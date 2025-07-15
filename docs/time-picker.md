# TimePicker 时间选择

时间选择器，用于选择时间。

## 基本用法

<ImTimePicker   />

```vue
<template>
  <ImTimePicker />
</template>
```

## 支持清除

设置 `clearable` 属性，可以显示清除按钮。

<ImTimePicker  clearable />

```vue
<template>
  <ImTimePicker clearable />
</template>
```

## 禁用

设置 `disabled` 属性，可以禁用时间选择器。

<ImTimePicker  disabled />

```vue
<template>
  <ImTimePicker disabled />
</template>
```
## API


| 字段名         | 类型                           | 描述                                                                 |
|----------------|--------------------------------|----------------------------------------------------------------------|
| size           | string                         | 大小                                                                 |
| disabled       | boolean                        | 是否禁用，默认为false                                              |
| readonly       | boolean                        | 是否只读，默认为false                                              |
| placeholder    | string                         | 占位符文本                                                         |
| clearable      | boolean                        | 是否可清除内容，默认为false                                        |
| modelValue     | string                         | 绑定的值                                                           |
| placement      | ImPlaceType                    | 弹出位置类型                                                       |
| arrow          | boolean                        | 是否显示箭头，默认为true                                           |
| offset         | number                         | 箭头偏移量                                                         |
