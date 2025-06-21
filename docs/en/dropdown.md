# Dropdown Component

When there are too many action commands on a page, this component can organize action elements.

## Basic Usage

Default dropdown menu appears on hover.

<script setup>
import { ref } from 'vue'

const selected = ref('1')
const list = [
  'Romance of the Three Kingdoms',
  'Water Margin',
  'Journey to the West',
  'Dream of the Red Chamber',
]
</script>

<ImDropdown>
  <ImButton color="primary">Hover Me</ImButton>
  <template #content>
    <ImList>
      <ImListItem :value="item" v-for="item in list">{{ item }}</ImListItem>
    </ImList>
  </template>
</ImDropdown>

```vue
<template>
  <ImDropdown>
    <ImButton>Hover Me</ImButton>
    <template #content>
      <ImList>
        <ImListItem :value="item" v-for="item in list">{{ item }}</ImListItem>
      </ImList>
    </template>
  </ImDropdown>
</template>

<script setup>
import { ref } from 'vue';

const selected = ref('1');
const list = ['Romance of the Three Kingdoms', 'Water Margin', 'Journey to the West', 'Dream of the Red Chamber'];
</script>
```

## Trigger Method

Set the `trigger` property to define dropdown behavior, default is `hover`.

<ImDropdown style="margin-right:8px">
  <ImButton>Hover Trigger</ImButton>
  <template #content>
    <ImList>
      <ImListItem :value="item" v-for="item in list">{{ item }}</ImListItem>
    </ImList>
  </template>
</ImDropdown>

<ImDropdown trigger="click">
  <ImButton>Click Trigger</ImButton>
  <template #content>
    <ImList>
      <ImListItem :value="item" v-for="item in list">{{ item }}</ImListItem>
    </ImList>
  </template>
</ImDropdown>

## Placement

Set the `placement` property to control dropdown position. Default is `bottom-left`.

<ImRow gutter="8">
  <ImDropdown placement="top-left">
    <ImButton color="primary">top-left</ImButton>
    <template #content>
      <ImList>
        <ImListItem :value="item" v-for="item in list">{{ item }}</ImListItem>
      </ImList>
    </template>
  </ImDropdown>
  <ImDropdown placement="top">
    <ImButton color="primary">top</ImButton>
    <template #content>
      <ImList>
        <ImListItem :value="item" v-for="item in list">{{ item }}</ImListItem>
      </ImList>
    </template>
  </ImDropdown>
  <ImDropdown placement="top-right">
    <ImButton color="primary">top-right</ImButton>
    <template #content>
      <ImList>
        <ImListItem :value="item" v-for="item in list">{{ item }}</ImListItem>
      </ImList>
    </template>
  </ImDropdown>
</ImRow>
<br />
<ImRow gutter="8">
  <ImDropdown placement="bottom-left">
    <ImButton color="primary">bottom-left</ImButton>
    <template #content>
      <ImList>
        <ImListItem :value="String(item)" v-for="item in 3"
          >Menu Item Index {{ item }}</ImListItem
        >
      </ImList>
    </template>
  </ImDropdown>
  <ImDropdown placement="bottom">
    <ImButton color="primary">bottom</ImButton>
    <template #content>
      <ImList>
        <ImListItem :value="String(item)" v-for="item in 3"
          >Menu Item Index {{ item }}</ImListItem
        >
      </ImList>
    </template>
  </ImDropdown>
  <ImDropdown placement="bottom-right">
    <ImButton color="primary">bottom-right</ImButton>
    <template #content>
      <ImList>
        <ImListItem :value="String(item)" v-for="item in 3"
          >Menu Item Index {{ item }}</ImListItem
        >
      </ImList>
    </template>
  </ImDropdown>
</ImRow>

## Selection Support

Dropdown supports selection mode by setting v-model and corresponding value.

<ImDropdown>
  <ImButton width="120px">Selection {{ selected }}</ImButton>
  <template #content>
    <ImList v-model="selected">
      <ImListItem :value="String(item)" v-for="item in 3"
        >Menu Item Index {{ item }}</ImListItem
      >
    </ImList>
  </template>
</ImDropdown>

```vue
<template>
  <ImDropdown>
    <ImButton width="120px">Selection {{ selected }}</ImButton>
    <template #content>
      <ImList v-model="selected">
        <ImListItem :value="String(item)" v-for="item in 3"
          >Menu Item Index {{ item }}</ImListItem
        >
      </ImList>
    </template>
  </ImDropdown>
</template>
<script setup>
import { ref } from 'vue';

const selected = ref('1');
</script>
```

## Arrow

Control arrow visibility with the `arrow` property. Default is true.

<ImDropdown arrow style="margin-right:8px;">
  <ImButton color="primary">With Arrow</ImButton>
  <template #content>
    <ImList>
      <ImListItem :value="item" v-for="item in list">{{ item }}</ImListItem>
    </ImList>
  </template>
</ImDropdown>

<ImDropdown :arrow="false">
  <ImButton color="primary">No Arrow</ImButton>
  <template #content>
    <ImList>
      <ImListItem :value="item" v-for="item in list">{{ item }}</ImListItem>
    </ImList>
  </template>
</ImDropdown>

```vue
<template>
  <ImDropdown arrow style="margin-right:8px;">
    <ImButton color="primary">With Arrow</ImButton>
    <template #content>
      <ImList>
        <ImListItem :value="item" v-for="item in list">{{ item }}</ImListItem>
      </ImList>
    </template>
  </ImDropdown>

  <ImDropdown :arrow="false">
    <ImButton color="primary">No Arrow</ImButton>
    <template #content>
      <ImList>
        <ImListItem :value="item" v-for="item in list">{{ item }}</ImListItem>
      </ImList>
    </template>
  </ImDropdown>
</template>
```

## Scroll Close

Set `scrollClose` property to true to enable closing on scroll.

<ImDropdown trigger="click" scrollClose>
  <ImButton color="primary">Try It</ImButton>
  <template #content>
    <ImList>
      <ImListItem :value="item" v-for="item in list">{{ item }}</ImListItem>
    </ImList>
  </template>
</ImDropdown>

```vue
<template>
  <ImDropdown trigger="click" scrollClose>
    <ImButton color="primary">Try It</ImButton>
    <template #content>
      <ImList>
        <ImListItem :value="item" v-for="item in list">{{ item }}</ImListItem>
      </ImList>
    </template>
  </ImDropdown>
</template>
```

## APIs