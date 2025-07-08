# Alert 警告提示

警告提示组件，用于展现需要用户关注的信息。

<script setup>
const colors = ['success', 'warning', 'primary', 'error'];
</script>


```vue
<template>
  <button @click="count++">点击 {{ count }} 次</button>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<style>
button {
  background: #42b983;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
}
</style>
```

## 演示

### 基础用法

默认提供四种主题颜色。

<ExampleDemo>
  <ImAlert title="Alert" v-for="item in colors" :color="item">这是警告提示内容</ImAlert>
</ExampleDemo>

### 可关闭的警告提示

添加 `closable` 属性使警告提示可关闭。

<ExampleDemo>
  <ImAlert title="可关闭警告" closable>点击右侧关闭按钮可关闭此提示</ImAlert>
</ExampleDemo>

### 变体样式

提供 outlined 和 tonal 两种变体样式。

#### Outlined 样式

<ExampleDemo>
  <ImAlert title="Outlined" v-for="item in colors" :color="item" variant="outlined">带边框的警告提示</ImAlert>
</ExampleDemo>

#### Tonal 样式

<ExampleDemo>
  <ImAlert title="Tonal" v-for="item in colors" :color="item" variant="tonal">柔和色调的警告提示</ImAlert>
</ExampleDemo>

### 无标题样式

不设置 `title` 属性时不显示标题。

<ExampleDemo>
  <ImAlert v-for="item in colors" :color="item">无标题警告提示</ImAlert>
</ExampleDemo>

### 自定义图标

通过插槽自定义图标。

<ExampleDemo>
  <ImAlert title="自定义图标" color="primary">
    <template #icon><ImIcon name="bell" size="24" /></template> 
    使用铃铛图标作为警告提示图标
  </ImAlert>
</ExampleDemo>

## API

### Props

| 属性名   | 说明       | 类型    | 默认值    | 可选值                                   |
| -------- | ---------- | ------- | --------- | ---------------------------------------- |
| color    | 主题颜色   | string  | 'primary' | 'success', 'warning', 'primary', 'error' |
| title    | 标题文本   | string  | -         | -                                        |
| closable | 是否可关闭 | boolean | false     | true/false                               |
| variant  | 变体样式   | string  | 'default' | 'outlined', 'tonal'                      |

### Slots

| 插槽名  | 说明         |
| ------- | ------------ |
| default | 警告提示内容 |
| icon    | 自定义图标   |

## 示例代码

### 基础用法

```vue
<template>
  <ImAlert title="提示标题" color="primary">这是警告提示内容</ImAlert>
</template>
```
