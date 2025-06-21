# Select Component

Dropdown selector for choosing one option from a set.

## Basic Usage

Basic implementation.

<script setup>
import { ref } from 'vue'
const val = ref('')
const options = new Array(4).fill().map((_, index) => ({ value: `${index}`, label: `Item ${index} ` }))
</script>

<ImSelect :options="options" v-model="val" />

```vue
<template>
  <ImSelect :options="options" v-model="val" />
</template>

<script setup>
import { ref } from 'vue';
const val = ref('');
const options = new Array(4)
  .fill()
  .map((_, index) => ({ value: `${index}`, label: `Item ${index} ` }));
</script>
```

## Width Setting

Set width using CSS values or numbers (default unit px).

<ImSelect :options="options" v-model="val" width="300" placeholder="Try selecting" />

## Size Setting

Set `size` as a number (default is 36).
<ImSelect :options="options" v-model="val" size="40" />

## Multiple Selection

Set `multiple` to true for multi-select mode.

<ImSelect :options="options" v-model="val" multiple placeholder="Try multi-select" />

Set `maxTag` to control maximum displayed tags (default 1).

<ImSelect :options="options" v-model="val" multiple maxTag="2" width="280" />

## Disabled State

Set `disabled` to true to disable the selector.

<ImSelect :options="options" v-model="val" disabled />

## Clear Selection

Set `clearable` to true to enable selection clearing.

<ImSelect :options="options" v-model="val" clearable />

## Hide Arrow

Set `arrow` to false to hide the dropdown arrow.

<ImSelect :options="options" v-model="val" :arrow="false" />

## Scroll Close

Set `scrollClose` to true to enable closing on scroll.

<ImSelect :options="options" v-model="val" scrollClose />

## APIs