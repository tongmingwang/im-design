# InputNumber Component

Numeric input field that accepts values within a specified range via mouse or keyboard.

## Basic Usage

<script setup lang="ts">
import { ref } from 'vue';
const value = ref('');
const input = ref(null);
</script>

Two-way binding of input value using `v-model`.

<ImInputNumber v-model="value" placeholder="Basic usage" />

```vue
<template>
  <ImInputNumber v-model="value" placeholder="Basic usage" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref('');
</script>
```

## Step Control

Set `step` property to control increment/decrement steps.

<ImInputNumber v-model="value" step="10" placeholder="Step control" />

```vue
<template>
  <ImInputNumber v-model="value" step="10" placeholder="Step control" />
</template>
```

## Prefix & Suffix

<ImInputNumber
    v-model="value"
    placeholder="Value"
    prefix="Total:"
    suffix="B" />

Using slots for custom prefix/suffix:

<ImInputNumber v-model="value" placeholder="Value">
    <template #prefix>Total:</template>
    <template #suffix>B</template>
</ImInputNumber>

```vue
<template>
  <ImInputNumber
    v-model="value"
    placeholder="Value"
    prefix="Total:"
    suffix="B" />
  <ImInputNumber v-model="value" placeholder="Value">
    <template #prefix>Total:</template>
    <template #suffix>B</template>
  </ImInputNumber>
</template>
```

## Right-side Controls

Set `controlRight` to show increment/decrement buttons on the right.

<ImInputNumber v-model="value" controlRight placeholder="Right controls" />

```vue
<template>
  <ImInputNumber v-model="value" controlRight placeholder="Right controls" />
</template>
```

## Decimal Precision

Set `precision` to control decimal places.

<ImInputNumber
    v-model="value"
    :precision="2"
    :step="0.01"
    placeholder="Decimals" />

```vue
<template>
  <ImInputNumber
    v-model="value"
    :precision="2"
    :step="0.01"
    placeholder="Decimals" />
</template>
```

## Disabled

Set `disabled` to disable the input.

<ImInputNumber disabled clearable v-model="value" />

```vue
<template>
  <ImInputNumber disabled clearable v-model="value" />
</template>
```

## Readonly

Set `readonly` to make the input read-only.

<ImInputNumber readonly v-model="value" />

```vue
<template>
  <ImInputNumber readonly v-model="value" />
</template>
```

## Min/Max Values

Set `max` and `min` to define value boundaries.

<ImInputNumber v-model="value" :max="100" :min="0" placeholder="Min/Max" />

```vue
<template>
  <ImInputNumber
    v-model="value"
    :max="100"
    :min="0"
    placeholder="Min/Max" />
</template>
```

## Clearable

Set `clearable` to show a clear button.

<ImInputNumber clearable v-model="value" />

```vue
<template>
  <ImInputNumber clearable v-model="value" />
</template>
```

## Size

Set `size` to control input dimensions (e.g. 48).

<ImInputNumber size="48" v-model="value" />

```vue
<template>
  <ImInputNumber size="48" v-model="value" />
</template>
```

## APIs