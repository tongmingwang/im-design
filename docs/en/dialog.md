# Dialog Component

Displays information while preserving the current page state and handles related operations.

## Basic Usage

Dialog pops up from the bottom and centers by default.

<script setup>
import { ref } from 'vue'

const open = ref(false)
const open2 = ref(false)
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
  <ImCard title="Dialog Title">
    <div>Text...</div>
    <div>Text...</div>
    <div>Text...</div>
  </ImCard>
  <footer style="padding:8px;;display:flex;gap:8px;justify-content:flex-end">
    <ImButton @click="open = false">Cancel</ImButton>
    <ImButton @click="open = false">Confirm</ImButton>
  </footer>
</ImDialog>
<ImButton @click="open = true">Open Dialog</ImButton>

```vue
<template>
  <ImDialog v-model="open">
    <ImCard title="Dialog Title">
      <div>Text...</div>
      <div>Text...</div>
      <div>Text...</div>
    </ImCard>
    <footer>
      <ImButton @click="open = false">Cancel</ImButton>
      <ImButton @click="open = false">Confirm</ImButton>
    </footer>
  </ImDialog>
  <ImButton @click="open = true">Open Dialog</ImButton>
</template>
```

## Trigger Element

Requires passing a `getTarget` function that returns the trigger element.

<ImDialog v-model="open2" :getTarget="getTarget">
  <ImCard title="Dialog">
    <div class="demo">
      <div>Text...</div>
      <div>Text...</div>
      <div>Text...</div>
    </div>
  </ImCard>
</ImDialog>
<ImButton @click="open2 = true" id="trigger-id">Open Dialog</ImButton>

```vue
<template>
  <ImDialog v-model="open2" :getTarget="getTarget">
    <ImCard title="Dialog">
      <div class="demo">
        <div>Text...</div>
        <div>Text...</div>
        <div>Text...</div>
      </div>
    </ImCard>
  </ImDialog>
  <ImButton @click="open2 = true" id="trigger-id">Open Dialog</ImButton>
</template>

<script setup>
const open2 = ref(false);
const getTarget = () => {
  return document.getElementById('trigger-id');
};
</script>
```

## Fullscreen Dialog

Use the fullscreen property to make the dialog content area fullscreen.

<ImDialog v-model="fullShow" fullscreen>
  <ImCard title="Dialog Title" borderless>
    <template #header-action>
      <ImButton
        size="48"
        shape="circle"
        variant="text"
        @click="fullShow = false">
        <ImIcon name="close" size="22" />
      </ImButton>
    </template>
    <div style="height: 100%;" class="demo">
      <div>Text...</div>
      <div>Text...</div>
      <div>Text...</div>
    </div>
  </ImCard>
</ImDialog>
<ImButton @click="fullShow = true">Open Fullscreen Dialog</ImButton>

```vue
<template>
  <ImDialog v-model="fullShow" fullscreen>
    <ImCard title="Dialog Title" borderless>
      <template #header-action>
        <ImButton
          size="48"
          shape="circle"
          variant="text"
          @click="fullShow = false">
          <ImIcon name="close" size="22" />
        </ImButton>
      </template>
      <div style="height: 100%;" class="demo">
        <div>Text...</div>
        <div>Text...</div>
        <div>Text...</div>
      </div>
    </ImCard>
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