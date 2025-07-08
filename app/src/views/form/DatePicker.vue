<script setup lang="ts">
import CodeView from '@app/src/components/CodeView.vue';
import { ref } from 'vue';
const selectedDate = ref('');
const apiList = [
  {
    name: 'modelValue',
    type: 'string | number',
    default: '-',
    description: '绑定值',
    otherValue: '-',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: '是否禁用',
    otherValue: '-',
  },
  {
    name: 'readonly',
    type: 'boolean',
    default: 'false',
    description: '是否只读',
    otherValue: '-',
  },
  {
    name: 'clearable',
    type: 'boolean',
    default: 'false',
    description: '是否显示清除按钮，默认为 false。',
    otherValue: '-',
  },
  {
    name: 'size',
    type: 'string',
    default: '36px',
    description: 'checkbox 的尺寸，默认为 36px。',
    otherValue: '-',
  },
  {
    name: 'format',
    type: 'string',
    default: 'YYYY-MM-DD',
    description: '日期格式化，默认为 YYYY-MM-DD',
    otherValue: '-',
  },
  {
    name: 'zIndex',
    type: 'number',
    default: '1000',
    description: '弹出面板的 z-index，默认为 1000。',
    otherValue: '-',
  },
  {
    name: 'placement',
    type: 'string',
    default: 'bottom-left',
    description: '弹出面板的定位，默认为 bottom-left。',
    otherValue:
      'top-left | top-right | bottom-left | bottom-right | left-top | left-bottom | right-top | right-bottom',
  },
  {
    name: 'showTime',
    type: 'boolean',
    default: 'false',
    description: '是否显示时间选择器，默认为 false。',
    otherValue: '-',
  },
  {
    name: 'disabledDate',
    type: 'Function',
    default: '-',
    description:
      '禁用日期，默认为空函数。该函数的参数为当前日期对象，返回值为 true 表示禁用此日期。',
    otherValue: '-',
  },
];

const code = `
<template>
   <ImDatePicker v-model="selectedDate" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const selectedDate = ref('');
<\/script>
`;
</script>

<template>
  <PageWrapper title="DatePicker 日期选择器" desc="需要选择某一日期时使用">
    <PageCard title="基础用法" desc="使用 v-model 绑定日期值，默认为空字符串。">
      <CodeTemp>
        <div>
          <ImDatePicker v-model="selectedDate" />
        </div>
        <template #code>
          <CodeView :code="code" lang="html" />
        </template>
      </CodeTemp>
    </PageCard>

    <PageCard title="Api" desc="Props属性：">
      <ComponentApi :data="apiList" />
    </PageCard>
  </PageWrapper>
</template>
