# Textarea

A multi-line text input field for entering longer text content.

## Basic Usage

Bind the input field's value by setting v-model

<script setup lang="ts"> 
import { ref, watch } from 'vue';
 const textarea = ref('Hello World!'); 
 const textarea2 = ref(`This is a very long text used to test the auto-height feature of the textarea. This is a very long text used to test the auto-height feature of the textarea.`);
</script>

<ImTextarea v-model="textarea"></ImTextarea>

```vue
<template>
  <ImTextarea v-model="textarea"></ImTextarea>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const textarea = ref('Hello World!');
</script>
```

## Disabled Textarea

Disable the textarea by setting the `disabled` property

<ImTextarea v-model="textarea" disabled></ImTextarea>

```vue
<template>
  <ImTextarea v-model="textarea" disabled></ImTextarea>
</template>
```

## Read-only Textarea

Make the textarea read-only by setting the `readonly` property

<ImTextarea v-model="textarea" readonly></ImTextarea>

```vue
<template>
  <ImTextarea v-model="textarea" readonly></ImTextarea>
</template>
```

## Set Rows

Control the number of rows in the textarea by setting the rows property. If not set, it defaults to 2 rows.

<ImTextarea :rows="5"></ImTextarea>

```vue
<template>
  <ImTextarea :rows="5"></ImTextarea>
</template>
```

## Auto-sizing Height

By setting the `autoSize` property to true, the height of the textarea will automatically adjust to its content.

<ImTextarea v-model="textarea2" autoSize></ImTextarea>

```vue
<template>
  <ImTextarea v-model="textarea2" autoSize></ImTextarea>
</template>
```

## Limit Input Length

Set the `maxlength` property to limit the input length of the textarea.

<ImTextarea maxlength="10" placeholder="Maximum 10 characters"></ImTextarea>

```vue
<template>
  <ImTextarea maxlength="10" placeholder="Maximum 10 characters"></ImTextarea>
</template>
```
