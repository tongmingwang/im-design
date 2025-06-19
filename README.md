<div style="text-align:center">
<img src="https://tongmingwang.github.io/im-design/logo.svg">
</div>

# Im Design

ImDesign - A Vue.js 3 UI Component Library.

Ingeniously crafted, the ultimate experience. Enterprise-level component library solution

(匠心打造，极致体验。企业级组件库解决方案)

## Getting Started

Alright, for you to get started if you are looking for making ImDesign better you should keep reading. For developers that uses ImDesign to develop your website you should go ahead visit Getting Started.

好了，如果你想让 ImDesign 变得更好，那就继续阅读吧。对于使用 ImDesign 开发网站的开发者，你应该继续阅读“入门”。

## Buttons

![Buttons](https://tongmingwang.github.io/im-design/button.png)

## DatePicker

![DatePicker](https://tongmingwang.github.io/im-design/date-picker.png)

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

### Import all components

```javascript
// main.js
import { createApp } from 'vue';
import App from './App.vue';
import ImDesign from 'im-design';
import 'im-design/dist/index.css';

const app = createApp(App);
app.use(ImDesign, { size: '36', zIndex: 1000 });
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

[https://tongmingwang.github.io/im-design/](https://tongmingwang.github.io/im-design/)

## License

MIT © [im-design](https://tongmingwang.github.io/im-design/)
