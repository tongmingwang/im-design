# Anchor 锚点

锚点（Anchor）是指在网页中用于定位到页面内特定位置的链接。通过锚点，用户可以快速跳转到页面的不同部分，提高用户体验和导航效率。

## 使用

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
    background-color:rgb(154, 154, 154);
    padding:8px;
  }

  .demo {
    height: 200px;
    width: 100%;
    background-color:rgb(122, 121, 121);
    margin-bottom: 24px;
    padding: 8px;
    border-radius: 8px;
  }
</style>
