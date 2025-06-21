# Anchor Component

An anchor is a link used to navigate to specific positions within a webpage.

Anchors allow users to quickly jump to different sections of a page, improving user experience and navigation efficiency.

## Usage

Simply pass an anchor list, and the component will automatically generate corresponding navigation.

<div class="flex">
    <div class="demo-container" id="anchor_im_id">
      <section class="demo" v-for="item in list" :id="item.id">
        {{ item.text }}
      </section>
    </div>
    <div class="anchor">
      <ImAnchor :data="list" target="#anchor_im_id" />
    </div>
  </div>

```vue
<template>
  <div class="flex">
    <div class="demo-container" id="anchor_im_id">
      <section class="demo" v-for="item in list" :id="item.id">
        {{ item.text }}
      </section>
    </div>
    <div class="anchor">
      <ImAnchor :data="list" target="#anchor_im_id" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const list = ref([
  {
    id: 'Im_demo1',
    text: 'Great minds think alike',
  },
  {
    id: 'Im_demo2',
    text: 'Breaking news',
  },
  {
    id: 'Im_demo3',
    text: 'News 2',
  },
  {
    id: 'Im_demo4',
    text: 'News 3',
  },
  {
    id: 'Im_demo5',
    text: 'News 4',
  },
  {
    id: 'Im_demo6',
    text: 'News 5',
  },
]);
</script>
```

## Props

<ImAlert color="primary" title="Note" variant="tonal">
  The target property is important. If you want your anchor to scroll with a specific container, you need to set this property, otherwise the anchor won't work properly.
</ImAlert>

The default scroll area is window. If you want to customize the scroll area, you can specify it through the `target` property. Accepts a selector string or a DOM element.

<script setup>
import { ref } from 'vue'
const list = ref([
  {
    id: 'Im_demo1',
    text: 'Great minds think alike'
  },
  {
    id: 'Im_demo2',
    text: 'Breaking news'
  },
  {
    id: 'Im_demo3',
    text: 'News 2'
  },
  {
    id: 'Im_demo4',
    text: 'News 3'
  },
  {
    id: 'Im_demo5',
    text: 'News 4'
  },
  {
    id: 'Im_demo6',
    text: 'News 5'
  },
])
</script>

<style scoped lang="scss">
  .demo-container {
    height: 300px;
    width: 100%;
    overflow: auto;
  }
  .flex {
    display: flex;
    gap: 20px;
  }

  .anchor {
    width: 240px;
  }

  .demo {
    height: 400px;
    width: 100%;
    background-color:var(--im-primary-color-7);
    margin-bottom: 24px;
    border-radius: 8px;
    color: var(--im-gray-color-1);
  }
</style>

## APIs