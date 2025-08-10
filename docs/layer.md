# Layer 浮层

所有下拉组件都基于 Layer 浮层组件。该组件作为基础能力，提供浮层定位、样式定制等功能。

## 基本用法

需要手动控制显示隐藏，通过 `visible` 控制显示状态。

<script setup lang="ts">
import { ref } from 'vue';
import { ImLayer } from 'im-design';

const visible = ref(false);
const getTriggerContainer = () => document.querySelector('.trigger');
</script>

<ImButton class="trigger" @click="visible = !visible">显示</ImButton>

<ImLayer :visible="visible" :getTriggerContainer="getTriggerContainer">
  <div>显示的内容</div>
  <div>完全自定义</div>
</ImLayer>

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { ImLayer } from 'im-design';

const visible = ref(false);
const getTriggerContainer = () => document.querySelector('.trigger');
</script>
<template>
  <ImButton class="trigger" @click="visible = !visible">显示</ImButton>
  <ImLayer :visible="visible" :getTriggerContainer="getTriggerContainer">
    <div>显示的内容</div>
    <div>完全自定义</div>
  </ImLayer>
</template>
```

## API

### Props

```js
props:{
  // 是否显示浮层
  visible: boolean;
  // 层级，默认为空字符串，则自动计算层级
  zIndex?: number | '';
  // 位置，默认为 bottom-left
  placement?: ImPlaceType;
  // 偏移量，默认为 0
  offset?: number; // 偏移量
  // 触发层显示的容器
  getTriggerContainer?: () => HTMLElement | null;
  // 自定义类名
  customClass?: string;
  // 是否显示箭头
  arrow?: boolean;
  // 滚动隐藏
  scrollClose?: boolean;
   // 角色，默认为空字符串
  role?: 'tooltip' | 'dropdown' | '';
}
```

### Events

提供的事件，你只需要监听对应的事件控制显示隐藏即可

```js
const emit = defineEmits(['close', 'mouseenter', 'mouseleave']);
```
