# DatePicker Component

Used when selecting a specific date.

<script setup lang="ts">
import { ref, watch } from 'vue';

const selectedDate = ref('');
const timeValue = ref('');
</script>

## Basic Usage

Use v-model to bind the date value, defaults to empty string.

<ImDatePicker v-model="selectedDate" />

```vue
<template>
  <ImDatePicker v-model="selectedDate" />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
const selectedDate = ref('');
</script>
```

## Clearable

Set clearable to true to allow clearing the selected date.
<ImDatePicker clearable v-model="selectedDate" />

```vue
<template>
  <ImDatePicker clearable v-model="selectedDate" />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
const selectedDate = ref('');
</script>
```

## Time Selection

Set showTime to true to enable both date and time selection.

<ImDatePicker :showTime="true" format="YYYY-MM-DD HH:mm:ss" v-model="timeValue" />

```vue
<template>
  <ImDatePicker showTime format="YYYY-MM-DD HH:mm:ss" v-model="timeValue" />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
const timeValue = ref('');
</script>
```

## APIs