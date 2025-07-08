<script setup lang="ts">
import CodeView from '@app/src/components/CodeView.vue';
import { ref } from 'vue';
const textarea = ref('Hello World!');
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
    name: 'maxlength',
    type: 'number',
    default: '-',
    description: '最大长度',
    otherValue: '-',
  },
  {
    name: 'minlength',
    type: 'number',
    default: '-',
    description: '最小长度',
    otherValue: '-',
  },
  {
    name: 'rows',
    type: 'number',
    default: '2',
    description:
      '行数，默认为 2。当设置了 autoSize 为 true 时，rows 属性将失效。',
    otherValue: '-',
  },
  {
    name: 'autoSize',
    type: 'boolean',
    default: 'false',
    description:
      '是否自动调整高度，设置为 true 时，会根据内容自适应高度。当设置了 autoSize 为 true 时，rows 属性将失效。',
    otherValue: '-',
  },
];

const code = `
<template>
  <ImTextarea v-model="textarea"></ImTextarea>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref('');
<\/script>
`;
</script>

<template>
  <PageWrapper
    title="Textarea 文本域"
    desc="多行文本输入框，用于输入较长的文本内容。">
    <PageCard title="基础用法" desc="通过设置 v-model 绑定输入框的值">
      <CodeTemp>
        <ImTextarea v-model="textarea"></ImTextarea>
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
