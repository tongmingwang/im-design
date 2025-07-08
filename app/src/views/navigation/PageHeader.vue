<script setup lang="ts">
import CodeView from '@app/src/components/CodeView.vue';

const apiList = [
  {
    name: 'title',
    type: 'string',
    default: '-',
    description: '页标题',
    otherValue: '-',
  },
  {
    name: 'subTitle',
    type: 'string',
    default: '-',
    description: '副标题',
    otherValue: '-',
  },
  {
    name: 'back',
    type: 'event',
    default: '-',
    description: '返回按钮事件',
    otherValue: '-',
  },
];

const code = `
<template>
  <ImPageHeader title="Order" subTitle="编辑">
    <template #action>
      <ImButton color="primary">保存</ImButton>
    </template>
    <template #content>
      <ImTag color="primary">Hot</ImTag>
    </template>
  </ImPageHeader>
</template>

`;
</script>

<template>
  <PageWrapper
    title="PageHeader 页头"
    desc="页头组件，用于显示页面的标题、副标题和操作区域。">
    <PageCard title="基础用法" desc="配合插槽和属性方式">
      <CodeTemp>
        <div class="demo">
          <ImPageHeader title="Order" subTitle="编辑">
            <template #action>
              <ImButton color="primary">保存</ImButton>
            </template>
            <template #content>
              <ImTag color="primary">Hot</ImTag>
            </template>
          </ImPageHeader>
        </div>
        <template #code>
          <CodeView :code="code" />
        </template>
      </CodeTemp>
    </PageCard>

    <PageCard title="Api" desc="Props属性：">
      <ComponentApi :data="apiList" />
    </PageCard>
  </PageWrapper>
</template>

<style lang="scss" scoped>
.demo {
  width: 100%;
  height: 200px;
}
</style>
