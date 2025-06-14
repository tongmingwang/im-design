# Anchor 锚点

锚点（Anchor）是指在网页中用于定位到页面内特定位置的链接。通过锚点，用户可以快速跳转到页面的不同部分，提高用户体验和导航效率。

## 使用

`ImAnchor` 组件是一个展示内容的区域，意味着你可以随意放置在不同的区域，但是为了更好的使用体验，我们推荐将锚点放置在右侧。

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
```

## Props

<ImAlert color="primary" title="注意" variant="tonal">
  target 属性是比较重要的，如果你的锚点要和某个容器一起滚动，你需要设置这个属性，否则锚点将不会正常工作。
</ImAlert>

默认滚动区域是 window，如果你想自定义滚动区域，你可以通过 `target` 属性来指定。接收一个选择器字符串。或者传入一个 DOM 元素。

<script setup>
import { ref } from 'vue'
const list = ref([
  {
    id: 'Im_demo1',
    text: '测试1'
  },
  {
    id: 'Im_demo2',
    text: '测试2'
  },
])
</script>

<style scoped lang="scss">
  .demo-container {
    height: 200px;
    width: 100%;
    overflow: auto;
    border-radius: 8px;
  }
  .flex {
    display: flex;
    gap: 20px;
  }

  .anchor {
    width: 200px;
    background-color:var(--im-gray-color-6);
    padding:8px;
    border-radius: 8px;
  }

  .demo {
    height: 200px;
    width: 100%;
    background-color:var(--im-primary-color-7);
    margin-bottom: 24px;
    padding: 8px;
    border-radius: 8px;
    color: var(--im-gray-color-1);
  }
</style>

## APIS
