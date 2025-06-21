# Radio Component

Single selection among a set of options.

<script setup lang="ts">
import { ref } from 'vue';
const value = ref(1);
const arr = new Array(3).fill(0).map((_, index) => ({
  value: index,
  label: `Option ${index}`,
}));
</script>

## Basic Usage

Radio groups should have few options. For many options, consider using a select component instead.

<ImRadioGroup v-model="value">
  <ImRadio
    v-for="item in arr"
    :key="item.value"
    :label="item.label"
    :value="item.value"></ImRadio>
</ImRadioGroup>
    
```vue
<template>
  <ImRadioGroup v-model="value">
    <ImRadio
      v-for="item in arr"
      :key="item.value"
      :label="item.label"
      :value="item.value"></ImRadio>
  </ImRadioGroup>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref(1);
const arr = new Array(3).fill(0).map((_, index) => ({
  value: index,
  label: `Option ${index}`,
}));
</script>
```

## Vertical Layout

Set `vertical` to `true` for vertical radio button arrangement.

<ImRadioGroup v-model="value" vertical>
  <ImRadio
    v-for="item in arr"
    :key="item.value"
    :label="item.label"
    :value="item.value"></ImRadio>
</ImRadioGroup>

```vue
<template>
  <ImRadioGroup v-model="value" vertical>
    <ImRadio
      v-for="item in arr"
      :key="item.value"
      :label="item.label"
      :value="item.value"></ImRadio>
  </ImRadioGroup>
</template>
```

## Button Style

Set `variant="button"` for button-style radio options.

<ImRadioGroup v-model="value" variant="button">
  <ImRadio
    v-for="item in arr"
    :key="item.value"
    :label="item.label"
    :value="item.value"></ImRadio>
</ImRadioGroup>

```vue
<template>
  <ImRadioGroup v-model="value" variant="button">
    <ImRadio
      v-for="item in arr"
      :key="item.value"
      :label="item.label"
      :value="item.value"></ImRadio>
  </ImRadioGroup>
</template>
```

## Vertical Button Style

<ImRadioGroup v-model="value" vertical variant="button">
  <ImRadio
    v-for="item in arr"
    :key="item.value"
    :label="item.label"
    :value="item.value" />
</ImRadioGroup>

## Size Control

Set `size` property to control radio component dimensions.

<ImRadioGroup v-model="value" size="48">
  <ImRadio
    v-for="item in arr"
    :key="item.value"
    :label="item.label"
    :value="item.value"></ImRadio>
</ImRadioGroup>

<ImRadioGroup v-model="value" size="48" variant="button">
  <ImRadio
    v-for="item in arr"
    :key="item.value"
    :label="item.label"
    :value="item.value"></ImRadio>
</ImRadioGroup>

```vue
<template>
  <ImRadioGroup v-model="value" size="48">
    <ImRadio
      v-for="item in arr"
      :key="item.value"
      :label="item.label"
      :value="item.value"></ImRadio>
  </ImRadioGroup>

  <ImRadioGroup v-model="value" size="48" variant="button">
    <ImRadio
      v-for="item in arr"
      :key="item.value"
      :label="item.label"
      :value="item.value"></ImRadio>
  </ImRadioGroup>
</template>
```

## Disabled State