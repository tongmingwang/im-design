<script setup lang="ts">
import CodeView from '@app/src/components/CodeView.vue';
import { ref } from 'vue';
const value = ref(1);
const arr = new Array(3).fill(0).map((_, index) => ({
  value: index,
  label: '选项' + index,
}));
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
    name: 'vertical',
    type: 'boolean',
    default: 'false',
    description: '是否垂直排列，默认为水平排列。',
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
    name: 'variant',
    type: "'button' | ''",
    default: "''",
    description: '按钮样式，默认为空字符串。',
    otherValue: '-',
  },
];

const code = `
<template>
  <ImRadioGroup v-model="value">
    <ImRadio
      v-for="item in arr"
      :key="item.value"
      :label="item.label"
      :value="item.value" />
  </ImRadioGroup>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref(1);
const arr = new Array(3).fill(0).map((_, index) => ({
  value: index,
  label: '选项' + index,
}));
<\/script>
`;
</script>

<template>
  <PageWrapper title="Radio 单选框" desc="在一组备选项中进行单选">
    <PageCard
      title="基础用法"
      desc="单选框不应该有太多的可选项， 如果你有很多的可选项你应该使用选择框而不是单选框。">
      <CodeTemp>
        <div>
          <ImRadioGroup v-model="value">
            <ImRadio
              v-for="item in arr"
              :key="item.value"
              :label="item.label"
              :value="item.value" />
          </ImRadioGroup>
        </div>
        <template #code>
          <CodeView :code="code" lang="html" />
        </template>
      </CodeTemp>
    </PageCard>

    <PageCard title="依赖的组件">
      <template #desc>
        <div>ImRadioGroup</div>
        <div>ImRadio</div>
      </template>
    </PageCard>

    <PageCard title="Api" desc="Props属性：">
      <ComponentApi :data="apiList" />
    </PageCard>
  </PageWrapper>
</template>
