# Switch

Represents a toggle between two mutually exclusive states, often used to trigger "on/off".

## Basic Usage

Use v-model to bind a boolean value, enabling the switch effect.

{{checked ? 'On' : 'Off'}}

<script setup>
import { ref } from 'vue';

const checked = ref(false);
</script>

<ImSwitch v-model="checked" />

```vue
<template>
  <ImSwitch v-model="checked" />
  {{ checked ? 'On' : 'Off' }}
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
</script>
```

## Size

Set the size attribute to control the size of the switch.

<ImSwitch size="18" />
  <ImSwitch size="14" />
  <ImSwitch size="12" />

```vue
<template>
  <ImSwitch size="18" />
  <ImSwitch size="14" />
  <ImSwitch size="12" />
</template>
```

## Text Description

Use the `text` attribute to add text descriptions for better readability.

<ImSwitch activeText="Y" inactiveText="N" />

```vue
<template>
  <ImSwitch activeText="Y" inactiveText="N" />
</template>
```

## Custom Colors

<ImSwitch activeColor="#13ce66" inactiveColor="#ff4949" />

```vue
<template>
  <ImSwitch activeColor="#13ce66" inactiveColor="#ff4949" />
</template>
```

## Custom Icons

<ImSwitch>
    <template v-slot:action="{ checked }">
      <ImIcon :name="checked ? 'check' : 'close'" size="16px" />
    </template>
  </ImSwitch>
  
```vue
<template>
  <ImSwitch>
    <template v-slot:action="{ checked }">
      <ImIcon :name="checked ? 'check' : 'close'" size="16px" />
    </template>
  </ImSwitch>
</template>
```

## Disabled State

<ImSwitch disabled />
```vue
<template>
  <ImSwitch disabled />
</template>
```
