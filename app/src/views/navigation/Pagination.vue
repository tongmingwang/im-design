<script setup lang="ts">
import CodeView from '@app/src/components/CodeView.vue';
import { ref } from 'vue';

const pageNumber = ref(10);
const pageSize = ref(10);
const onChange = (data: any) => {
  pageNumber.value = data.pageNumber;
  pageSize.value = data.pageSize;
};
const apiList = [
  {
    name: 'pageSize',
    type: 'number',
    default: '10',

    description: '每页显示的条数，默认为 10',
    otherValue: '-',
  },
  {
    name: 'pageNumber',
    type: 'number',
    default: '1',
    description: '当前页码，默认为 1',
    otherValue: '-',
  },
  {
    name: 'total',
    type: 'number',
    default: '0',
    description: '总数，默认为 0',
    otherValue: '-',
  },
  {
    name: 'pageSizeItems',
    type: 'array',
    default: '[10, 20, 30, 40]',
    description: '每页显示的条数选项，默认为 [10, 20, 30, 40]',
    otherValue: '-',
  },
  {
    name: 'layout',
    type: 'string',
    default: 'prev,pager,next,sizes,total',
    description: '布局，默认全部展示，可选值：prev,pager,next,sizes,total',
    otherValue: '-',
  },
];

const code = `
<template>
  <ImPagination
    :total="200"
    layout="prev,next,pager"
    :pageNumber="pageNumber"
    :pageSize="pageSize"
    @change="onChange" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const pageNumber = ref(10);
const pageSize = ref(10);
const onChange = (data) => {
  pageNumber.value = data.pageNumber;
  pageSize.value = data.pageSize;
};
<\/script>
`;
</script>

<template>
  <PageWrapper
    title="Pagination 分页"
    desc="分页器用于分隔长列表，每次只加载一个页面。">
    <PageCard title="基础用法" desc="一般的分页器">
      <CodeTemp>
        <ImPagination
          :total="200"
          layout="prev,next,pager"
          :pageNumber="pageNumber"
          :pageSize="pageSize"
          @change="onChange" />
        <template #code>
          <CodeView :code="code" lang="html" />
        </template>
      </CodeTemp>
    </PageCard>

    <PageCard title="Api" desc="ImPagination Props属性：">
      <ComponentApi :data="apiList" />
    </PageCard>
  </PageWrapper>
</template>
