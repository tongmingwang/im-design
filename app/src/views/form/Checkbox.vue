<script setup lang="ts">
import CodeView from '@app/src/components/CodeView.vue';
import { ref, computed, watch } from 'vue';

const checkedList: any = ref([]);
const isCheckAll = ref(false);
const indeterminate = computed(
  () =>
    checkedList.value.length > 0 &&
    list.length > checkedList.value.length &&
    !isCheckAll.value
);
const list = ['1', '2', '3'];

watch(
  () => checkedList.value,
  (val) => {
    isCheckAll.value = val.length === list.length;
  }
);
const onCheckAll = () => {
  if (isCheckAll.value) {
    checkedList.value = list;
  } else {
    checkedList.value = [];
  }
};
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
    name: 'label',
    type: 'string',
    default: '-',
    description: '占位符',
    otherValue: '-',
  },
  {
    name: 'indeterminate',
    type: 'boolean',
    default: 'false',
    description: '半选择状态',
    otherValue: '-',
  },
  {
    name: 'checked',
    type: 'boolean',
    default: 'false',
    description: '是否选中',
    otherValue: '-',
  },
  {
    name: 'size',
    type: 'string',
    default: '36px',
    description: 'checkbox 的尺寸，默认为 36px。',
    otherValue: '-',
  },
];

const code = `
<template>
  <ImCheckbox
    v-model="isCheckAll"
    :indeterminate="indeterminate"
    label="全选"
    @change="onCheckAll" />
  <div>{{ checkedList }}</div>
  <ImCheckbox :value="item" v-model="checkedList" v-for="item in list"
    >选项 {{ item }}</ImCheckbox
  >
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';

const checkedList: any = ref([]);
const isCheckAll = ref(false);
const indeterminate = computed(
  () =>
    checkedList.value.length > 0 &&
    list.length > checkedList.value.length &&
    !isCheckAll.value
);
const list = ['1', '2', '3'];

watch(
  () => checkedList.value,
  (val) => {
    isCheckAll.value = val.length === list.length;
  }
);
const onCheckAll = () => {
  if (isCheckAll.value) {
    checkedList.value = list;
  } else {
    checkedList.value = [];
  }
};
<\/script>
`;
</script>

<template>
  <PageWrapper
    title="Select 选择器"
    desc="下拉选择器，用于从一组选项中选择一个。">
    <PageCard title="基础用法" desc="通过设置 v-model 绑定输入框的值">
      <CodeTemp>
        <div>
          <ImCheckbox
            v-model="isCheckAll"
            :indeterminate="indeterminate"
            label="全选"
            @change="onCheckAll" />
          <div>{{ checkedList }}</div>
          <ImCheckbox :value="item" v-model="checkedList" v-for="item in list"
            >选项 {{ item }}</ImCheckbox
          >
        </div>
        <template #code>
          <CodeView :code="code" />
        </template>
      </CodeTemp>
    </PageCard>
    <ImAlert style="margin-top: 16px" variant="outlined">
      多选情况下，每一个 ImCheckbox 必须传入 value 属性，以及 v-model必须是数组
    </ImAlert>
    <PageCard title="Api" desc="Props属性：">
      <ComponentApi :data="apiList" />
    </PageCard>
  </PageWrapper>
</template>
