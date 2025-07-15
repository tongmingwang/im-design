# Switch

表示两种相互对立的状态间的切换，多用于触发「开/关」。

## 基础用法

使用 v-model 绑定布尔值，可以实现开关效果。

<script setup>
import { ref } from 'vue'

const checked = ref(false)
</script>

<ImSwitch v-model="checked" />
{{checked ? '开' : '关'}}

```vue
<template>
  <ImSwitch v-model="checked" />
  {{ checked ? '开' : '关' }}
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
</script>
```

## 尺寸

设置 `size` 属性可以控制开关的大小。

<ImSwitch size="18" />
<ImSwitch size="14" />
<ImSwitch size="12" />

```vue
<template>
  <ImSwitch size="18" />
  <ImSwitch size="14" />
  <ImSwitch size="12" />
</template>
```

## 文字描述

 <ImSwitch activeText="Y" inactiveText="N" />

```vue
<template>
  <ImSwitch activeText="Y" inactiveText="N" />
</template>
```

## 自定义颜色

 <ImSwitch activeColor="#13ce66" inactiveColor="#ff4949" />

```vue
<template>
  <ImSwitch activeColor="#13ce66" inactiveColor="#ff4949" />
</template>
```

## 自定义图标

<ImSwitch>
  <template v-slot:action="{ checked }">
    <ImIcon :name="checked ? 'check' : 'close'" size="16px" />
  </template>
</ImSwitch>

```vue
<template>
  <ImSwitch>
    <template v-slot:action="{ checked }">
      <ImIcon :name="checked ? 'check' : 'close'" size="16px" />
    </template>
  </ImSwitch>
</template>
```

## 禁用状态

<ImSwitch disabled />

```vue
<template>
  <ImSwitch disabled />
</template>
```

## API



| 字段名        | 类型                  | 描述                                                                 |
|---------------|-----------------------|----------------------------------------------------------------------|
| modelValue    | boolean               | 绑定的值，默认为false                                              |
| disabled      | boolean               | 是否禁用，默认为false                                              |
| readonly      | boolean               | 是否只读，默认为false                                              |
| size          | string                | 开关大小，默认为'16px'                                             |
| activeColor   | string                | 激活状态下的颜色，默认为'var(--im-primary-color-8)'                |
| inactiveColor | string                | 非激活状态下的颜色，默认为'var(--im-gray-color-7)'                 |
| activeValue   | any                   | 激活状态下的值，默认为true                                         |
| inactiveValue | any                   | 非激活状态下的值，默认为false                                      |
| borderColor   | string                | 边框颜色，默认为'var(--im-gray-color-7)'                           |
