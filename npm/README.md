![ImDesign](https://tongmingwang.github.io/im-design/logo.svg)

# Im Design

A Vue.js 3 UI Component Library.(Vue.js 3 UI 组件库。)

Ingeniously crafted, the ultimate experience. Enterprise-level component library solution

(匠心打造，极致体验。企业级组件库解决方案)

## Getting Started

Alright, for you to get started if you are looking for making ImDesign better you should keep reading. For developers that uses ImDesign to develop your website you should go ahead visit Getting Started.

（好了，如果你想让 ImDesign 变得更好，那就继续阅读吧。对于使用 ImDesign 开发网站的开发者，你应该继续阅读“入门”。）

## Buttons

![Buttons](https://tongmingwang.github.io/im-design/button.png)

## DatePicker

![DatePicker](https://tongmingwang.github.io/im-design/date-picker.png)

## DateTimePicker

![DateTimePicker](https://tongmingwang.github.io/im-design/date-time-picker.png)

## Installation

```bash
# 使用 npm
npm install im-design --save

# 使用 yarn
yarn add im-design

# 使用 pnpm
pnpm add im-design
```

## Usage

Support auxiliary import and full import methods

(支持辅助导入和全部导入方式)

### Import all components

```javascript
// main.js
import { createApp } from 'vue';
import App from './App.vue';
import ImDesign, { ImDirective } from 'im-design';
import 'im-design/dist/index.css';

const app = createApp(App);
app.use(ImDesign, { size: '36', zIndex: 1000 });
app.use(ImDirective);
app.mount('#app');
```

### Import specific component

```javascript
// main.js
import { createApp } from 'vue';
import App from './App.vue';
import { ImButton } from 'im-design';
import 'im-design/dist/index.css';

const app = createApp(App);
app.component(ImButton.name, ImButton);
app.mount('#app');
```

## Component example

```js
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

## Docs

[Click here to view the documentation.点击这里查看文档。](https://tongmingwang.github.io/im-design/)

## License

MIT © [im-design](https://tongmingwang.github.io/im-design/)
