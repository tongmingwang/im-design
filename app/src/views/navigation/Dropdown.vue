<script setup lang="ts">
import CodeView from '@app/src/components/CodeView.vue';
const list = ['三国演义', '水浒传', '西游记', '红楼梦'];
const apiList = [
  {
    name: 'modelValue',
    type: 'boolean',
    default: 'false',
    description: '是否显示下拉菜单，默认为 false',
    otherValue: '-',
  },
  {
    name: 'trigger',
    type: 'click | hover',
    default: 'hover',
    description: '触发下拉菜单的方式，默认为 hover',
    otherValue: 'click',
  },
  {
    name: 'placement',
    type: 'string',
    default: 'bottom-left',
    description: '下拉菜单的位置，默认为 bottom-left',
    otherValue:
      'top-left | top-right | bottom-left | bottom-right | left-top | left-bottom | right-top | right-bottom',
  },
  {
    name: 'zIndex',
    type: 'number',
    default: '1000',
    description: '下拉菜单的 z-index，默认为 1000',
    otherValue: '-',
  },
  {
    name: 'arrow',
    type: 'boolean',
    default: 'false',
    description: '是否显示下拉菜单的箭头，默认为 false',
    otherValue: '-',
  },
  {
    name: 'offset',
    type: 'number',
    default: '8',
    description: '下拉菜单的偏移量，默认为 8',
    otherValue: '-',
  },
  {
    name: 'scrollClose',
    type: 'boolean',
    default: 'false',
    description: '是否在滚动时关闭下拉菜单，默认为 false',
    otherValue: '-',
  },
];

const code = `
<template>
  <ImDropdown>
    <ImButton>鼠标移入试试</ImButton>
    <template #content>
      <ImList>
        <ImListItem :value="item" v-for="item in list">{{
          item
        }}</ImListItem>
      </ImList>
    </template>
  </ImDropdown>
</template>

<script setup lang="ts">
const list = ['三国演义', '水浒传', '西游记', '红楼梦'];
<\/script>
`;
</script>

<template>
  <PageWrapper
    title="Dropdown 下拉菜单"
    desc="页面上的操作命令过多时，用此组件可以收纳操作元素。">
    <PageCard title="基础用法" desc="默认下拉菜单，鼠标移入则显示下拉菜单。">
      <CodeTemp>
        <ImDropdown>
          <ImButton>鼠标移入试试</ImButton>
          <template #content>
            <ImList>
              <ImListItem :value="item" v-for="item in list">{{
                item
              }}</ImListItem>
            </ImList>
          </template>
        </ImDropdown>
        <template #code>
          <CodeView :code="code" lang="html" />
        </template>
      </CodeTemp>
    </PageCard>

    <PageCard title="依赖组件">
      <template #desc>
        <div>ImList</div>
        <div>ImListItem</div>
      </template>
    </PageCard>

    <PageCard title="Api" desc="ImDropdown Props属性：">
      <ComponentApi :data="apiList" />
    </PageCard>
  </PageWrapper>
</template>
