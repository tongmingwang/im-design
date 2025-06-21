# Input Component

Basic form input field wrapper that accepts text input via mouse or keyboard.

## Basic Usage

<script setup lang="ts">
import { ref } from 'vue';
const value = ref('');
const input = ref(null);
</script>

Two-way binding of input value using `v-model`.

<ImInput v-model="value" placeholder="Basic usage" />

```vue
<template>
  <ImInput v-model="value" placeholder="Basic usage" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref('');
</script>
```

## Prefix & Suffix

Add prefix or suffix icons to the input field.

<ImInput v-model="value" placeholder="Basic usage" prefix="https" suffix=".com" />

Using slots:
<ImInput v-model="value" placeholder="Basic usage">
  <template #prefix>https</template>
  <template #suffix>.com</template>
</ImInput>

```vue
<template>
  <ImInput
    v-model="value"
    placeholder="Basic usage"
    prefix="https"
    suffix=".com" />

  <ImInput v-model="value" placeholder="Basic usage">
    <template #prefix>https</template>
    <template #suffix>.com</template>
  </ImInput>
</template>
```

## Prepend & Append

Set `prepend` and `append` properties to add content before and after the input field.

<ImInput prepend="Prepend" clearable append="Append" v-model="value" />

Using slots:
<ImInput v-model="value" placeholder="Basic usage">
  <template #prepend>https</template>
  <template #append>.com</template>
</ImInput>

```vue
<template>
  <ImInput prepend="Prepend" clearable append="Append" v-model="value" />
  <ImInput v-model="value" placeholder="Basic usage">
    <template #prepend>https</template>
    <template #append>.com</template>
  </ImInput>
</template>
```

## Disabled

Set `disabled` property to disable the input field.

<ImInput disabled clearable v-model="value" />

```vue
<template>
  <ImInput disabled clearable v-model="value" />
</template>
```

## Clearable

Set `clearable` property to show a clear button that empties the input field when clicked.

<ImInput clearable v-model="value" />

```vue
<template>
  <ImInput clearable v-model="value" />
</template>
```

## Password

Set type to `password` to hide input content.

<ImInput type="password" v-model="value" />

```vue
<template>
  <ImInput type="password" v-model="value" />
</template>
```

## Size

Set `size` property to control input field size (e.g., 48).

<ImInput size="48" v-model="value" />

```vue
<template>
  <ImInput size="48" v-model="value" />
</template>
```

## APIs