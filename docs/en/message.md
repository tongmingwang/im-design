# Message Component

Provides timely feedback to users.

## Basic Usage

Import the `useImMessage` method which internally supports `info`, `success`, `error`, and `warning` methods.

<script setup>
import { useImMessage } from 'im-design'

const { info, error, success, warning } = useImMessage()
</script>

<ImButton @click="info('This is an info message!')">Show Info</ImButton>

```vue
<template>
  <ImButton @click="info('This is an info message!')">Show Info</ImButton>
</template>
<script setup>
import { useImMessage } from 'im-design';

const { info } = useImMessage();
</script>
```

## Other Types

<ImButton @click="error('This is an error message!')" color="error">Show Error</ImButton>
<ImButton @click="success('This is a success message!')" color="success">Show Success</ImButton>
<ImButton @click="warning('This is a warning message!')" color="warning">Show Warning</ImButton>

## APIs