# Dialog Component

Displays information while preserving the current page state and handles related operations.

## Basic Usage

Dialog pops up from the bottom and centers by default.

<script setup>
import { ref } from 'vue'

const open = ref(false)
const trigger = ref(false)
const fullShow = ref(false)
const parent = ref(false)
const child = ref(false)
const getTarget = () => {
  return document.getElementById('trigger-id')
}
</script>

<style scoped>
.demo {
  padding: 24px;
  border-radius: 4px;
  margin-bottom: 14px;
  background-color: var(--im-primary-color-2);
}
</style>

<ImDialog v-model="open">
    <ImDialogHeader>Dialog Title</ImDialogHeader>
    <ImDialogBody
      >Let Google help apps determine location. This means sending anonymous
      location data to Google, even when no apps are running.</ImDialogBody
    >
    <ImDialogFooter>
      <ImButton @click="open = false">Cancel</ImButton>
      <ImButton @click="open = false" color="primary">Confirm</ImButton>
    </ImDialogFooter>
  </ImDialog>
  <ImButton @click="open = true">Open Dialog</ImButton>

```vue
<template>
  <ImDialog v-model="open">
    <ImDialogHeader>Dialog Title</ImDialogHeader>
    <ImDialogBody
      >Let Google help apps determine location. This means sending anonymous
      location data to Google, even when no apps are running.</ImDialogBody
    >
    <ImDialogFooter>
      <ImButton @click="open = false">Cancel</ImButton>
      <ImButton @click="open = false" color="primary">Confirm</ImButton>
    </ImDialogFooter>
  </ImDialog>
  <ImButton @click="open = true">Open Dialog</ImButton>
</template>
```

## Trigger Element

Requires passing a `getTarget` function that returns the trigger element.

<ImDialog v-model="trigger" :getTarget="getTarget">
    <ImDialogHeader>Dialog Title</ImDialogHeader>
    <ImDialogBody>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</ImDialogBody>
    <ImDialogFooter >
      <ImButton @click="trigger = false" >Cancel</ImButton>
      <ImButton @click="trigger = false"  color="primary">Confirm</ImButton>
    </ImDialogFooter>
  </ImDialog>
  <ImButton @click="trigger = true" color="primary" variant="outlined" id="trigger-id">Open Dialog</ImButton>

```vue
<template>
  <ImDialog v-model="trigger" :getTarget="getTarget">
    <ImDialogHeader>Dialog Title</ImDialogHeader>
    <ImDialogBody
      >Let Google help apps determine location. This means sending anonymous
      location data to Google, even when no apps are running.</ImDialogBody
    >
    <ImDialogFooter>
      <ImButton @click="trigger = false">Cancel</ImButton>
      <ImButton @click="trigger = false" color="primary">Confirm</ImButton>
    </ImDialogFooter>
  </ImDialog>
  <ImButton
    @click="trigger = true"
    color="primary"
    variant="outlined"
    id="trigger-id"
    >Open Dialog</ImButton
  >
</template>

<script setup>
const trigger = ref(false);
const getTarget = () => {
  return document.getElementById('trigger-id');
};
</script>
```

## Fullscreen Dialog

Use the fullscreen property to make the dialog content area fullscreen.

<ImDialog v-model="fullShow" fullscreen>
  <ImDialogHeader>Dialog Title</ImDialogHeader>
  <ImDialogBody>
    <ImCheckbox size="48">
    Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
    </ImCheckbox>
    <ImCheckbox size="48">
    Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
    </ImCheckbox>
    <ImCheckbox size="48">
    Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
    </ImCheckbox>
    <ImCheckbox size="48">
    Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
    </ImCheckbox>
  </ImDialogBody>
  <ImDialogFooter>
    <ImButton @click="fullShow = false">Cancel</ImButton>
    <ImButton @click="fullShow = false" color="primary">Confirm</ImButton>
  </ImDialogFooter>
</ImDialog>
<ImButton @click="fullShow = true">Open Fullscreen Dialog</ImButton>

```vue
<template>
  <ImDialog v-model="fullShow" fullscreen>
    <ImDialogHeader>Dialog Title</ImDialogHeader>
    <ImDialogBody>
      <ImCheckbox size="48">
        Let Google help apps determine location. This means sending anonymous
        location data to Google, even when no apps are running.
      </ImCheckbox>
      <ImCheckbox size="48">
        Let Google help apps determine location. This means sending anonymous
        location data to Google, even when no apps are running.
      </ImCheckbox>
      <ImCheckbox size="48">
        Let Google help apps determine location. This means sending anonymous
        location data to Google, even when no apps are running.
      </ImCheckbox>
      <ImCheckbox size="48">
        Let Google help apps determine location. This means sending anonymous
        location data to Google, even when no apps are running.
      </ImCheckbox>
    </ImDialogBody>
    <ImDialogFooter>
      <ImButton @click="fullShow = false">Cancel</ImButton>
      <ImButton @click="fullShow = false" color="primary">Confirm</ImButton>
    </ImDialogFooter>
  </ImDialog>
  <ImButton @click="fullShow = true">Open Fullscreen Dialog</ImButton>
</template>
```

## Nested Usage

<ImDialog v-model="parent">
  <ImCard title="Parent Dialog">
    <div class="demo">Content area</div>
    <ImButton @click="child = true">Open Child Dialog</ImButton>
  </ImCard>
  <ImDialog v-model="child">
    <ImCard title="Child Dialog"> 
      <div class="demo">Content area</div>
      <div class="demo">Content area</div>
    </ImCard>
  </ImDialog>
</ImDialog>
<ImButton @click="parent = true">Open Parent Dialog</ImButton>

```vue
<template>
  <ImDialog v-model="parent">
    <ImCard title="Parent Dialog">
      <div class="demo">Content area</div>
      <ImButton @click="child = true">Open Child Dialog</ImButton>
    </ImCard>
    <ImDialog v-model="child">
      <ImCard title="Child Dialog">
        <div class="demo">Content area</div>
        <div class="demo">Content area</div>
      </ImCard>
    </ImDialog>
  </ImDialog>
  <ImButton @click="parent = true">Open Parent Dialog</ImButton>
</template>
```

## APIs
