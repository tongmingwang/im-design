<script setup lang="ts">
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
    name: 'color',
    type: 'string',
    default: '-',
    description: '色彩',
    otherValue: 'primary, error, success, warning',
  },

  {
    name: 'vertical',
    type: 'boolean',
    default: 'false',
    description: '垂直布局',
  },
];
</script>

<template>
  <PageWrapper
    title="ButtonGroup 按钮组"
    desc="以按钮组的方式出现，常用于多项类似操作。">
    <PageCard title="基础用法" desc="ImButton 支持 color size 等属性">
      <CodeTemp>
        <ImButtonGroup>
          <ImButton>Prev</ImButton>
          <ImButton>Next</ImButton>
        </ImButtonGroup>
        <template #code>
          <CodeView
            code="
            <template>
              <ImButtonGroup>
                <ImButton>Prev</ImButton>
                <ImButton>Next</ImButton>
              </ImButtonGroup>
            </template>
          " />
        </template>
      </CodeTemp>
    </PageCard>

    <PageCard title="颜色" desc="设置color属性即可">
      <CodeTemp>
        <ImButtonGroup color="primary">
          <ImButton>Prev</ImButton>
          <ImButton>Next</ImButton>
        </ImButtonGroup>
        <template #code>
          <CodeView
            code="
            <template>
              <ImButtonGroup color='primary'>
                <ImButton>Prev</ImButton>
                <ImButton>Next</ImButton>
              </ImButtonGroup>
            </template>
          " />
        </template>
      </CodeTemp>
    </PageCard>

    <PageCard title="垂直布局" desc="设置vertical属性即可">
      <CodeTemp>
        <ImButtonGroup color="primary" vertical>
          <ImButton>Prev</ImButton>
          <ImButton>Next</ImButton>
        </ImButtonGroup>
        <template #code>
          <CodeView
            code="
            <template>
              <ImButtonGroup color='primary' vertical>
                <ImButton>Prev</ImButton>
                <ImButton>Next</ImButton>
              </ImButtonGroup>
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
