<script setup lang="ts">
import CodeView from '@app/src/components/CodeView.vue';
const apiList = [
  {
    name: 'target',
    type: 'HTMLElement | string | null',

    default: '-',
    description: '目标滚动元素',
    otherValue: '-',
  },
  {
    name: 'offset',
    type: 'number',
    default: '-',
    description: '锚点偏移量',
    otherValue: '-',
  },

  {
    name: 'data',
    type: 'Array<AnchorData>',
    default: '-',
    description: '锚点数据',
  },
];
const list = [
  {
    id: 'Im_demo1',
    text: '英雄所见略同',
  },
  {
    id: 'Im_demo2',
    text: '大新闻',
  },
  {
    id: 'Im_demo3',
    text: '新闻2',
  },
  {
    id: 'Im_demo4',
    text: '新闻3',
  },
  {
    id: 'Im_demo5',
    text: '新闻4',
  },
  {
    id: 'Im_demo6',
    text: '新闻5',
  },
];
const code = `
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
    text: '英雄所见略同',
  },
  {
    id: 'Im_demo2',
    text: '大新闻',
  },
  {
    id: 'Im_demo3',
    text: '新闻2',
  },
  {
    id: 'Im_demo4',
    text: '新闻3',
  },
  {
    id: 'Im_demo5',
    text: '新闻4',
  },
  {
    id: 'Im_demo6',
    text: '新闻5',
  },
]);
<\/script>
`;
</script>

<template>
  <PageWrapper title="Typography 排版" desc="文本统一样式">
    <PageCard title="Title标题" desc="ImTitle 设置标题基础样式">
      <CodeTemp>
        <div class="demo-container" id="anchor_im_id">
          <section class="demo" v-for="item in list" :id="item.id">
            {{ item.text }}
          </section>
        </div>
        <div class="anchor">
          <ImAnchor :data="list" target="#anchor_im_id" />
        </div>
        <template #code>
          <CodeView :code="code" />
        </template>
      </CodeTemp>
    </PageCard>

    <PageCard title="Api" desc="Props 属性：">
      <ComponentApi :data="apiList" />
    </PageCard>
  </PageWrapper>
</template>

<style lang="scss" scoped>
.demo-container {
  overflow-y: auto;
  height: 200px;
  width: 200px;
  .demo {
    margin-bottom: 20px;
    height: 200px;
    background-color: var(--im-primary-color-3);
  }
}
</style>
