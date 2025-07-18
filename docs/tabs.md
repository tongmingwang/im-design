# Tabs 标签页

分隔内容上有关联但属于不同类别的数据集合。

<script setup lang="ts">
import { ref } from 'vue';
const value = ref('1');
const arr = new Array(3).fill(0).map((_, index) => ({
  value: index.toString(),
  label: `Tab Index ${index}`,
}));
</script>

## 基础用法

基础的、简洁的标签页。

<ImTabs v-model="value">
  <ImTab v-for="item in arr" :name="item.value" :label="item.label" />
</ImTabs>
<ImPanes v-model="value">
  <ImPane v-for="item in arr" :name="item.value"
    >
       <div>This is a Panes Components, This Index is {{ item.label }}</div>
       <img
          src="https://tongmingwang.github.io/im-design/logo.svg"
          style="height:200px;" />
    </ImPane>
</ImPanes>

```vue
<template>
  <ImTabs v-model="value">
    <ImTab v-for="item in arr" :name="item.value" :label="item.label" />
  </ImTabs>
  <ImPanes v-model="value">
    <ImPane v-for="item in arr" :name="item.value">
      <div>This is a Panes Components, This Index is {{ item.label }}</div>
      <img
        src="https://tongmingwang.github.io/im-design/logo.svg"
        style="height:200px;" />
    </ImPane>
  </ImPanes>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref('1');
const arr = new Array(3).fill(0).map((_, index) => ({
  value: index.toString(),
  label: `Tab Index ${index}`,
}));
</script>
```

## card 包裹

<ImCard>
<ImTabs v-model="value">
  <ImTab v-for="item in arr" :name="item.value" :label="item.label" />
</ImTabs>
<ImPanes v-model="value">
  <ImPane v-for="item in arr" :name="item.value"
    >
       <div>This Index is {{ item.label }}</div>
       <img src="https://tongmingwang.github.io/im-design/logo.svg" style="height:200px;" />
    </ImPane>
</ImPanes>
</ImCard>

```vue
<template>
  <ImCard>
    <ImTabs v-model="value">
      <ImTab v-for="item in arr" :name="item.value" :label="item.label" />
    </ImTabs>
    <ImPanes v-model="value">
      <ImPane v-for="item in arr" :name="item.value">
        <div>This Index is {{ item.label }}</div>
        <img
          src="https://tongmingwang.github.io/im-design/logo.svg"
          style="height:200px;" />
      </ImPane>
    </ImPanes>
  </ImCard>
</template>
```

## 阴影

<ImCard shadow="always" borderless>
    <ImTabs v-model="value">
      <ImTab v-for="item in arr" :name="item.value" :label="item.label" />
    </ImTabs>
    <ImPanes v-model="value">
      <ImPane v-for="item in arr" :name="item.value">
        <div>This Index is {{ item.label }}</div>
        <img
          src="https://tongmingwang.github.io/im-design/logo.svg"
          style="height:200px;" />
      </ImPane>
    </ImPanes>
  </ImCard>

```vue
<template>
  <ImCard shadow="always" borderless>
    <ImTabs v-model="value">
      <ImTab v-for="item in arr" :name="item.value" :label="item.label" />
    </ImTabs>
    <ImPanes v-model="value">
      <ImPane v-for="item in arr" :name="item.value">
        <div>This Index is {{ item.label }}</div>
        <img
          src="https://tongmingwang.github.io/im-design/logo.svg"
          style="height:200px;" />
      </ImPane>
    </ImPanes>
  </ImCard>
</template>
```

## 色彩

设置 `color` 为 `primary`色彩的标签页和内容。

<ImTabs v-model="value" color="primary">
  <ImTab v-for="item in arr" :name="item.value" :label="item.label" />
</ImTabs>
<ImPanes v-model="value">
  <ImPane v-for="item in arr" :name="item.value"
    >
       <div>This is a Panes Components, This Index is {{ item.label }}</div>
    </ImPane>
</ImPanes>

设置 `color` 为 `error`色彩的标签页和内容。
<ImTabs v-model="value" color="error">
<ImTab v-for="item in arr" :name="item.value" :label="item.label" />
</ImTabs>
<ImPanes v-model="value">
<ImPane v-for="item in arr" :name="item.value"
    >

<div>This is a Panes Components, This Index is {{ item.label }}</div>
</ImPane>
</ImPanes>

设置 `color` 为 `success`色彩的标签页和内容。
<ImTabs v-model="value" color="success">
<ImTab v-for="item in arr" :name="item.value" :label="item.label" />
</ImTabs>
<ImPanes v-model="value">
<ImPane v-for="item in arr" :name="item.value"
    >

<div>This is a Panes Components, This Index is {{ item.label }}</div>
</ImPane>
</ImPanes>

设置 `color` 为 `warning`色彩的标签页和内容。
<ImTabs v-model="value" color="warning">
<ImTab v-for="item in arr" :name="item.value" :label="item.label" />
</ImTabs>
<ImPanes v-model="value">
<ImPane v-for="item in arr" :name="item.value"
    >

<div>This is a Panes Components, This Index is {{ item.label }}</div>
</ImPane>
</ImPanes>

## 对齐方式

支持三种对齐方式：左对齐、右对齐和居中对齐。

### 左对齐

设置 `align` 为 `left`

<ImTabs v-model="value" color="primary" align="left">
<ImTab v-for="item in arr" :name="item.value" :label="item.label" />
</ImTabs>
<ImPanes v-model="value">
  <ImPane v-for="item in arr" :name="item.value"
    >
       <div>This is a Panes Components, This Index is {{ item.label }}</div>
    </ImPane>
</ImPanes>

### 右对齐

设置 `align` 为 `right`
<ImTabs v-model="value" color="primary" align="right">
<ImTab v-for="item in arr" :name="item.value" :label="item.label" />
</ImTabs>
<ImPanes v-model="value">
<ImPane v-for="item in arr" :name="item.value"
    >

<div>This is a Panes Components, This Index is {{ item.label }}</div>
</ImPane>
</ImPanes>

### 居中对齐

设置 `align` 为 `center`

<ImTabs v-model="value" color="primary" align="center">
<ImTab v-for="item in arr" :name="item.value" :label="item.label" />
</ImTabs>
<ImPanes v-model="value">
  <ImPane v-for="item in arr" :name="item.value"
    >
  <div>This is a Panes Components</div>
    </ImPane>
</ImPanes>

## API

### ImTabs Props

| 字段名     | 类型             | 描述                                                                 |
|------------|------------------|----------------------------------------------------------------------|
| modelValue | string           | 绑定的值                                                             |
| color      | string           | 标签页和内容的颜色，默认为'default'                                   |
| align      | string           | 对齐方式，默认为'left'，可选值包括'left', 'right', 'center'            |

### ImTab Props

| 字段名     | 类型   | 描述                                                                 |
|------------|--------|----------------------------------------------------------------------|
| name       | string | 标签页的名称，对应 ImPanes 中的 ImPane 的 name 值                    |
| label      | string | 标签页显示的文本                                                     |

### ImPanes Props

| 字段名     | 类型             | 描述                                                                 |
|------------|------------------|----------------------------------------------------------------------|
| modelValue | string           | 绑定的值                                                             |

### ImPane Props

| 字段名 | 类型   | 描述                                                                 |
|--------|--------|----------------------------------------------------------------------|
| name   | string | 与 ImTabs 中对应的 ImTab 的 name 值相对应的值                         |

## 注意事项

- 请确保 `ImTabs` 和 `ImPanes` 的 `modelValue` 是同步的。
- `ImTab` 的 `name` 需要与 `ImPane` 的 `name` 相匹配。
