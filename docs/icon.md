# Icons

The icon component is an SVG-based icon library that needs to be introduced on demand to avoid excessive project size.

## Usage

<script setup>
import { ImIconSearch,ImIconClose }  from 'im-design'
</script>
<ImIconSearch width='18' height="18" />
<ImIconClose />

```vue
<template>
  <ImIconSearch width="18" height="18" />
  <ImIconClose />
</template>

<script setup>
import { ImIconSearch, ImIconClose } from 'im-design';
</script>
```
