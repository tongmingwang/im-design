<script setup lang="ts">
import CodeView from '@app/src/components/CodeView.vue';
import { ref } from 'vue';
const active = ref('3');
const change = (val: string) => {
  console.log(val);
};
const apiList = [
  {
    name: 'modelValue',
    type: 'string',
    default: '-',
    description: '当前高亮的值',
    otherValue: '-',
  },
  {
    name: 'separator',
    type: 'string',
    default: '/',
    description: '分隔符，默认为斜杠 /',
    otherValue: '-',
  },
];

const itemAPi = [
  {
    name: 'value',
    type: 'string | number',
    default: '-',
    description: '面包屑的值，用于判断当前高亮的值',
    otherValue: '-',
  },
];

const code = `
<template>
  <ImBreadcrumb v-model="active" @change="change">
    <ImBreadcrumbItem value="1">首页</ImBreadcrumbItem>
    <ImBreadcrumbItem value="2">组件</ImBreadcrumbItem>
    <ImBreadcrumbItem value="3">面包屑</ImBreadcrumbItem>
  </ImBreadcrumb>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const active = ref('3');
const change = (val: string) => {
  console.log(val);
};
<\/script>
`;
</script>

<template>
  <PageWrapper
    title="Breadcrumb 面包屑"
    desc="显示当前页面在系统层级结构中的位置，并能向上返回。 我相信你们公司肯定用自定义，所以这里就很简单的方式">
    <PageCard
      title="基础用法"
      desc="面包屑组件通过 ImBreadcrumb 和 ImBreadcrumbItem 组合使用，可以方便的生成面包屑导航。">
      <CodeTemp>
        <ImBreadcrumb v-model="active" @change="change">
          <ImBreadcrumbItem value="1">首页</ImBreadcrumbItem>
          <ImBreadcrumbItem value="2">组件</ImBreadcrumbItem>
          <ImBreadcrumbItem value="3">面包屑</ImBreadcrumbItem>
        </ImBreadcrumb>
        <template #code>
          <CodeView :code="code" lang="html" />
        </template>
      </CodeTemp>
    </PageCard>

    <PageCard title="依赖组件" desc="ImBreadcrumb,ImBreadcrumbItem">
      <template #desc>
        <div>ImBreadcrumb</div>
        <div>ImBreadcrumbItem</div>
      </template>
    </PageCard>

    <PageCard title="Api" desc="ImBreadcrumb Props属性：">
      <ComponentApi :data="apiList" />
    </PageCard>

    <PageCard title="ImBreadcrumbItem" desc="ImBreadcrumbItem Props属性：">
      <ComponentApi :data="itemAPi" />
    </PageCard>
  </PageWrapper>
</template>
