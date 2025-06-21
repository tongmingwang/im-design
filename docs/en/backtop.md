# BackTop Component

When page content is very long, a back-to-top button can be displayed after scrolling a certain distance. Clicking it will return to the top.

<ImAlert title="Tips" variant="outlined">Note that the scroll element is found via method, not by passing a string</ImAlert>

## Basic Usage

Use the `getTarget` property to specify the scroll container (default is `window`).

<div>
    <ImBackTop :getTarget="gatTarget" right="20vh" bottom="8vh">
      <ImButton color="primary" shape="circle" size="68">
        <ImIcon name="vertical-align-top" size="40"></ImIcon>
      </ImButton>
    </ImBackTop>
      <div class="demo" id="scroll_id">
        <div class="inner">BackTop1</div>
      </div>
  </div>

```vue
<template>
  <div>
    <ImBackTop :getTarget="gatTarget" right="20vh" bottom="8vh">
      <ImButton color="primary" shape="circle" size="68">
        <ImIcon name="vertical-align-top" size="40"></ImIcon>
      </ImButton>
    </ImBackTop>
    <div class="demo" id="scroll_id">
      <div class="inner">BackTop1</div>
    </div>
  </div>
</template>

<script setup>
function gatTarget() {
  return document.querySelector('#scroll_id');
}
</script>
```

<script setup>
function gatTarget() {
  return document.querySelector('#scroll_id');
}
</script>

<style scoped>
.demo {
  height: 200px;
  flex: 1;
  overflow-y: auto;
  border-radius: 4px;
  background-color: var(--im-primary-color-6);
}

.inner {
  height: 1500px;
  padding: 20px;
}
</style>

## APIs