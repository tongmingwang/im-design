<script setup lang="ts">
import ImButton from '@/components/ImButton/ImButton.vue';
import CodeView from '@app/src/components/CodeView.vue';
const apiList = [
  {
    name: 'size',
    type: 'string | number',
    default: '36',
    description: '按钮大小',
    otherValue: '-',
  },
  {
    name: 'shape',
    type: 'string',
    default: 'square',
    description: '按钮形状',
    otherValue: 'circle',
  },

  {
    name: 'open',
    type: 'boolean',
    default: 'false',
    description: '是否显示浮动按钮内容',
    otherValue: '-',
  },
  {
    name: 'right',
    type: 'string | number',
    default: '20px',
    description: '距离右侧的距离',
    otherValue: '-',
  },
  {
    name: 'bottom',
    type: 'string | number',
    default: '20px',
    description: '距离底部的距离',
    otherValue: '-',
  },
];

const code = ` 
        <ImFloatButton shape="circle">
          <template #default="{ open }">
            <ImButton shape="circle" variant="text">
              <ImIcon :name="open ? 'close' : 'up'" size="18"></ImIcon>
            </ImButton>
          </template>
          <template #content>
            <ImButton shape="circle" variant="tonal" color="primary"
              >按钮1</ImButton
            >
            <ImButton shape="circle" variant="tonal" color="primary"
              >按钮2</ImButton
            >
          </template>
        </ImFloatButton>`;
</script>

<template>
  <PageWrapper
    title="FloatButton 浮动按钮"
    desc="用于固定于某一区域，方便快捷操作">
    <PageCard
      title="基础用法"
      desc="ImFloatButton 支持 size shape right bottom open等属性设置">
      <CodeTemp>
        <ImFloatButton shape="circle">
          <template #default="{ open }">
            <ImButton shape="circle" variant="text">
              <ImIcon :name="open ? 'close' : 'up'" size="18"></ImIcon>
            </ImButton>
          </template>
          <template #content>
            <ImButton shape="circle" variant="tonal" color="primary"
              >按钮1</ImButton
            >
            <ImButton shape="circle" variant="tonal" color="primary"
              >按钮2</ImButton
            >
          </template>
        </ImFloatButton>
        请在右下角浮动按钮，点击可以收起和展开内容。
        <template #code>
          <CodeView :code="code" />
        </template>
      </CodeTemp>
    </PageCard>

    <PageCard title="Api" desc="Button 组件提供了以下属性：">
      <ComponentApi :data="apiList" />
    </PageCard>
  </PageWrapper>
</template>
