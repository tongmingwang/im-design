<script setup lang="ts">
import CodeView from '@app/src/components/CodeView.vue';
const apiList = [
  {
    name: 'color',
    type: 'string',
    default: 'default',
    description: '按钮颜色',
    otherValue: ['primary', 'error', 'success', 'warning'],
  },
  {
    name: 'variant',
    type: 'string',
    default: 'filled',
    description: '按钮样式类型',
    otherValue: ['outlined', 'tonal', 'text'],
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: '禁用状态',
  },
  {
    name: 'loading',
    type: 'boolean',
    default: 'false',
    description: '加载中状态',
  },
  {
    name: 'width',
    type: 'string | number',
    default: 'auto',
    description: '按钮宽度，支持百分比和像素值',
  },
  {
    name: 'size',
    type: 'string',
    default: '36',
    description: '按钮大小',
    otherValue: ['number', 'string'],
  },
];
</script>

<template>
  <PageWrapper title="Button 按钮" desc="Button 是一个操作节点，点击后有反馈">
    <PageCard title="基础用法" desc="设置color和variant属性完成按钮形态">
      <CodeTemp>
        <ImRow :gutter="8">
          <ImButton>Default</ImButton>
          <ImButton color="primary">Primary</ImButton>
          <ImButton color="error">Error</ImButton>
          <ImButton color="success">Success</ImButton>
          <ImButton color="warning">Warning</ImButton>
        </ImRow>

        <ImRow :gutter="8">
          <ImButton variant="outlined">Default</ImButton>
          <ImButton variant="outlined" color="primary">Primary</ImButton>
          <ImButton variant="outlined" color="error">Error</ImButton>
          <ImButton variant="outlined" color="success">Success</ImButton>
          <ImButton variant="outlined" color="warning">Warning</ImButton>
        </ImRow>

        <ImRow :gutter="8">
          <ImButton variant="tonal">Default</ImButton>
          <ImButton variant="tonal" color="primary">Primary</ImButton>
          <ImButton variant="tonal" color="error">Error</ImButton>
          <ImButton variant="tonal" color="success">Success</ImButton>
          <ImButton variant="tonal" color="warning">Warning</ImButton>
        </ImRow>

        <ImRow :gutter="8">
          <ImButton variant="text">Default</ImButton>
          <ImButton variant="text" color="primary">Primary</ImButton>
          <ImButton variant="text" color="error">Error</ImButton>
          <ImButton variant="text" color="success">Success</ImButton>
          <ImButton variant="text" color="warning">Warning</ImButton>
        </ImRow>
        <template #code>
          <CodeView
            code='
          <template>
            <ImRow :gutter="8">
              <ImButton>Default</ImButton>
              <ImButton color="primary">Primary</ImButton>
              <ImButton color="error">Error</ImButton>
              <ImButton color="success">Success</ImButton>
              <ImButton color="warning">Warning</ImButton>
            </ImRow>

            <ImRow :gutter="8">
              <ImButton variant="outlined">Default</ImButton>
              <ImButton variant="outlined" color="primary">Primary</ImButton>
              <ImButton variant="outlined" color="error">Error</ImButton>
              <ImButton variant="outlined" color="success">Success</ImButton>
              <ImButton variant="outlined" color="warning">Warning</ImButton>
            </ImRow>

            <ImRow :gutter="8">
              <ImButton variant="tonal">Default</ImButton>
              <ImButton variant="tonal" color="primary">Primary</ImButton>
              <ImButton variant="tonal" color="error">Error</ImButton>
              <ImButton variant="tonal" color="success">Success</ImButton>
              <ImButton variant="tonal" color="warning">Warning</ImButton>
            </ImRow>

            <ImRow :gutter="8">
              <ImButton variant="text">Default</ImButton>
              <ImButton variant="text" color="primary">Primary</ImButton>
              <ImButton variant="text" color="error">Error</ImButton>
              <ImButton variant="text" color="success">Success</ImButton>
              <ImButton variant="text" color="warning">Warning</ImButton>
            </ImRow>
        </template>
          ' />
        </template>
      </CodeTemp>
    </PageCard>
    <PageCard
      title="禁用状态"
      desc="通过设置 disabled 属性来禁用按钮，禁用的按钮不可点击">
      <CodeTemp>
        <ImButton disabled>Default</ImButton>
        <ImButton color="primary" disabled>Primary</ImButton>
        <ImButton color="error" disabled>Error</ImButton>
        <ImButton color="success" disabled>Success</ImButton>
        <ImButton color="warning" disabled>Warning</ImButton>
        <template #code>
          <CodeView
            code='
    <template>
        <ImButton disabled>Default</ImButton>
        <ImButton color="primary" disabled>Primary</ImButton>
        <ImButton color="error" disabled>Error</ImButton>
        <ImButton color="success" disabled>Success</ImButton>
        <ImButton color="warning" disabled>Warning</ImButton>
    </template>
          ' />
        </template>
      </CodeTemp>
    </PageCard>

    <PageCard title="加载中" desc="设置 loading属性即可">
      <CodeTemp>
        <ImButton loading>Loading</ImButton>
        <ImButton color="primary" loading>Loading</ImButton>

        <template #code>
          <CodeView
            code="
          <template>
            <ImButton loading>Loading</ImButton>
            <ImButton color='primary' loading>Loading</ImButton>
          </template>
          " />
        </template>
      </CodeTemp>
    </PageCard>
    <PageCard
      title="shape 形状"
      desc="通过设置 shape 属性来改变按钮的形状，默认为圆形（circle）。">
      <CodeTemp>
        <ImButton shape="circle">Circle</ImButton>
        <ImButton shape="square">Square</ImButton>
        <template #code>
          <CodeView
            code="
            <ImButton shape='circle'>Circle</ImButton>
            <ImButton shape='square'>Square</ImButton>
            " />
        </template>
      </CodeTemp>
    </PageCard>

    <PageCard
      title="size 大小"
      desc="通过设置 size 属性来改变按钮的大小，默认为 36">
      <CodeTemp>
        <ImButton size="28">28</ImButton>
        <ImButton size="36">36</ImButton>
        <ImButton size="48">48</ImButton>
        <template #code>
          <CodeView
            code="
            <ImButton size='28'>28</ImButton>
            <ImButton size='36'>36</ImButton>
            <ImButton size='48'>48</ImButton>
            " />
        </template>
      </CodeTemp>
    </PageCard>
    <PageCard
      title="自定义宽度"
      desc="通过设置 width 属性来改变按钮的宽度，默认为 auto">
      <CodeTemp>
        <ImButton width="100%">100%</ImButton>
        <ImButton width="100%" color="primary">100%</ImButton>
        <ImButton width="100%" color="error">100%</ImButton>
        <ImButton width="100%" color="success">100%</ImButton>
        <ImButton width="100%" color="warning">100%</ImButton>
        <template #code>
          <CodeView
            code="
            <template>
              <ImButton width='100%'>100%</ImButton>
              <ImButton width='100%' color='primary'>100%</ImButton>
              <ImButton width='100%' color='error'>100%</ImButton>
              <ImButton width='100%' color='success'>100%</ImButton>
              <ImButton width='100%' color='warning'>100%</ImButton>
            </template>
            " />
        </template>
      </CodeTemp>
    </PageCard>

    <PageCard title="Api" desc="Button 组件提供了以下属性：">
      <ComponentApi :data="apiList" />
    </PageCard>
  </PageWrapper>
</template>
