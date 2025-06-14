# 快速开始

ImDesign 是一个基于 Vue3 和 TypeScript 开发的 UI 组件库，旨在提供一套高质量的、易于使用的 Vue UI 组件。

ImDesign 的目标是帮助开发者快速构建美观、高效的应用程序界面。

## 安装

```bash
# 使用 npm
npm install im-design --save

# 使用 yarn
yarn add im-design

# 使用 pnpm
pnpm add im-design
```

## 使用

全局引入 (推荐用于小型项目)
<ImAlert color="primary" title="提示" variant="outlined">
全局引入 ImDesign 组件库，并设置全局配置。例如：`size: '36'`，`zIndex: 1000` 。
</ImAlert>

```js
// main.js
import { createApp } from 'vue';
import App from './App.vue';
import ImDesign from 'im-design';
import 'im-design/dist/index.css';

const app = createApp(App);
app.use(ImDesign, { size: '36', zIndex: 1000 });
app.mount('#app');
```

按需引入 (推荐用于大型项目)

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

## 组件使用示例

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

<style></style>
```
