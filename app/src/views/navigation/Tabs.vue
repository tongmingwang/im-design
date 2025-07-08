<script setup lang="ts">
import CodeView from '@app/src/components/CodeView.vue';
import { ref } from 'vue';
const value = ref('1');
const arr = new Array(3).fill(0).map((_, index) => ({
  value: index.toString(),
  label: `Tab Index ${index}`,
}));
const apiList = [
  {
    name: 'modelValue',
    type: 'string',
    default: '-',
    description: '激活的面板索引',
    otherValue: '-',
  },
  {
    name: 'color',
    type: 'string',
    default: '-',
    description: '面板颜色',
    otherValue: 'primary, success, warning,error',
  },
  {
    name: 'align',
    type: 'string',
    default: 'left',
    description: '对齐方式',
    otherValue: 'center, right',
  },
];

const code = `
<template>
  <ImTabs v-model="value">
    <ImTab v-for="item in arr" :name="item.value" :label="item.label" />
  </ImTabs>
  <ImPanes v-model="value">
    <ImPane v-for="item in arr" :name="item.value">
        This is a Panes Components, This Index is {{ item.label }}
    </ImPane>
  </ImPanes>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref('1');
const arr = new Array(3).fill(0).map((_, index) => ({
  value: index.toString(),
  label: index,
}));
<\/script>
`;
</script>

<template>
  <PageWrapper
    title="Tabs 标签页"
    desc="分隔内容上有关联但属于不同类别的数据集合。">
    <PageCard title="基础用法" desc="需要搭配ImPanes组件使用">
      <CodeTemp>
        <ImTabs v-model="value">
          <ImTab v-for="item in arr" :name="item.value" :label="item.label" />
        </ImTabs>
        <ImPanes v-model="value">
          <ImPane v-for="item in arr" :name="item.value">
            This is a Panes Components, This Index is {{ item.label }}
          </ImPane>
        </ImPanes>
        <template #code>
          <CodeView :code="code" />
        </template>
      </CodeTemp>
    </PageCard>

    <PageCard title="依赖的组件">
      <template #desc>
        <div>ImPanes</div>
        <div>ImPane</div>
      </template>
    </PageCard>

    <PageCard title="Api" desc="Props属性：">
      <ComponentApi :data="apiList" />
    </PageCard>
  </PageWrapper>
</template>
