# Get Started

ImDesign is a Vue 3.x component library

## Installation

```bash
# 使用 npm
npm install im-design --save

# 使用 yarn
yarn add im-design

# 使用 pnpm
pnpm add im-design
```

## Usages

Global introduction (recommended for small and medium projects)

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

Introduce on demand (recommended for large projects)

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

## Component example

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
