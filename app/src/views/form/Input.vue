<script setup lang="ts">
import CodeView from '@app/src/components/CodeView.vue';
import { ref } from 'vue';
const value = ref('');
const apiList = [
  {
    name: 'modelValue',
    type: 'string | number | any',
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
    name: 'placeholder',
    type: 'string',
    default: '-',
    description: '占位符',
    otherValue: '-',
  },
  {
    name: 'type',
    type: 'string',
    default: 'text',
    description: '输入框类型',
    otherValue: '-',
  },
  {
    name: 'name',
    type: 'string',
    default: '-',
    description: '表单域标识',
    otherValue: '-',
  },
  {
    name: 'id',
    type: 'string',
    default: '-',
    description: '表单域标识',
    otherValue: '-',
  },
  {
    name: 'maxlength',
    type: 'number',
    default: '-',
    description: '最大输入长度',
    otherValue: '-',
  },
  {
    name: 'minlength',
    type: 'number',
    default: '-',
    description: '最小输入长度',
    otherValue: '-',
  },
  {
    name: 'max',
    type: 'number',
    default: '-',
    description: '最大值',
    otherValue: '-',
  },
  {
    name: 'min',
    type: 'number',
    default: '-',
    description: '最小值',
    otherValue: '-',
  },
  {
    name: 'step',
    type: 'number',
    default: '-',
    description: '步长',
    otherValue: '-',
  },
  {
    name: 'pattern',
    type: 'string',
    default: '-',
    description: '正则校验规则',
    otherValue: '-',
  },
  {
    name: 'required',
    type: 'boolean',
    default: '-',
    description: '是否必填',
    otherValue: '-',
  },
  {
    name: 'autocomplete',
    type: 'string',
    default: '-',
    description: '自动完成',
    otherValue: '-',
  },
  {
    name: 'autofocus',
    type: 'boolean',
    default: '-',
    description: '自动聚焦',
    otherValue: '-',
  },
  {
    name: 'tabindex',
    type: 'number',
    default: '-',
    description: '标签顺序',
    otherValue: '-',
  },
  {
    name: 'precision',
    type: 'number',
    default: '-',
    description: '-',
    otherValue: '-',
  },
  {
    name: 'size',
    type: 'number | string',
    default: '36px',
    description: '输入框大小',
    otherValue: '-',
  },
  {
    name: 'prefix',
    type: 'number | string | slot',
    default: '-',
    description: '前缀',
    otherValue: '-',
  },
  {
    name: 'suffix',
    type: 'number | string | slot',
    default: '-',
    description: '后缀',
    otherValue: '-',
  },
  {
    name: 'clearable',
    type: 'boolean',
    default: '-',
    description: '是否可清除',
    otherValue: '-',
  },
  {
    name: 'passwordEye',
    type: 'boolean',
    default: '-',
    description: '是否显示密码图标',
    otherValue: '-',
  },
  {
    name: 'showWordCount',
    type: 'boolean',
    default: '-',
    description: '是否显示字数统计',
    otherValue: '-',
  },
  {
    name: 'prepend',
    type: 'string | slot',
    default: '-',
    description: '前置内容',
    otherValue: '-',
  },
  {
    name: 'append',
    type: 'string | slot',
    default: '-',
    description: '后置内容',
    otherValue: '-',
  },
];

const code = `
<template>
  <ImInput
    v-model="value"
    placeholder="输入域名"
    prefix="Https"
    suffix=".com" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref('');
<\/script>
`;
</script>

<template>
  <PageWrapper title="Input 输入框" desc="用于处理用户录入数据">
    <PageCard title="基础用法" desc="通过 v-model 双向绑定输入框的值。">
      <CodeTemp>
        <ImInput
          v-model="value"
          placeholder="输入域名"
          prefix="Https"
          suffix=".com" />
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
