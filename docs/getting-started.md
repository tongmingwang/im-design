# 快速开始

ImDesign 提供了一套丰富的 UI 组件，帮助开发者快速搭建美观、高效的应用程序。

<script setup>
import { ref } from 'vue'
</script>

## 安装

### 使用 npm 安装

```bash
npm install im-design --save
```

### 使用 cnpm 安装

```bash
cnpm install im-design --save
```

### 使用 yarn 安装

```bash
yarn add im-design
```

### 使用 pnpm 安装

```bash
pnpm add im-design
```

## 项目引入

<ImAlert color="primary" variant="outlined" title="提示">
  全局引入和按需引入两种方式均可使用，具体选择哪种方式取决于项目需求。
</ImAlert>

### 全局引入

全局引入 ImDesign 组件库，并设置全局配置。例如：`size: '36'`，`zIndex: 1000` 。

```js
// main.js
import { createApp } from 'vue';
import App from './App.vue';
// 组件和指令的引入方式相同。
import ImDesign, { ImDirective } from 'im-design';
import 'im-design/dist/index.css';

const app = createApp(App);
app.use(ImDesign, { size: '36', zIndex: 1000 });
app.use(ImDirective);
app.mount('#app');
```

### 按需引入

```js
// main.js
import { createApp } from 'vue';
import App from './App.vue';
import { ImButton } from 'im-design';
import 'im-design/dist/index.css';

const app = createApp(App);
app.component(ImButton.name, ImButton);
app.mount('#app');
```

## 示例

<ImAlert color="primary" variant="outlined" title="提示">
在单文件组件中使用 ImDesign 组件，例如：ImButton组件。
</ImAlert>

```vue
<template>
  <div class="demo-container">
    <im-button type="primary" @click="handleClick">
      Click {{ count }}
    </im-button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0);
const handleClick = () => {
  count.value++;
};
</script>
```
