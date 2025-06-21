# Quick Start

ImDesign provides a rich set of UI components to help developers quickly build beautiful and efficient applications.

<script setup>
import { ref } from 'vue'
</script>

## Installation

### Install using npm

```bash
npm install im-design --save
```

### Install using cnpm

```bash
cnpm install im-design --save
```

### Install using yarn

```bash
yarn add im-design
```

### Install using pnpm

```bash
pnpm add im-design
```

## Project Integration

<ImAlert color="primary" variant="outlined" title="Note">
  Both global and on-demand imports are supported. The choice depends on project requirements.
</ImAlert>

### Global Import

Import ImDesign components globally and set global configurations like `size: '36'` and `zIndex: 1000`.

```js
// main.js
import { createApp } from 'vue';
import App from './App.vue';
// Components and directives are imported the same way
import ImDesign, { ImDirective } from 'im-design';
import 'im-design/dist/index.css';

const app = createApp(App);
app.use(ImDesign, { size: '36', zIndex: 1000 });
app.use(ImDirective);
app.mount('#app');
```

### On-Demand Import

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

## Example

<ImAlert color="primary" variant="outlined" title="Note">
Using ImDesign components in single-file components, for example the ImButton component.
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