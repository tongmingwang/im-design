<script setup lang="ts">
import CodeView from '@app/src/components/CodeView.vue';
import { ref, watch } from 'vue';
const subActiveList = ref<Array<string | number>>([]);
const active = ref('1');

watch(
  () => active.value,
  (val) => {
    if (['2-1', '2-2'].includes(val)) {
      subActiveList.value = ['2'];
    } else {
      subActiveList.value = [];
    }
  }
);
const apiList = [
  {
    name: 'modelValue',
    type: 'string',
    default: '-',
    description: '激活的菜单项',
    otherValue: '-',
  },
  {
    name: 'color',
    type: 'string',
    default: '-',
    description: '菜单颜色',
    otherValue: 'primary, success, warning,error',
  },
  {
    name: 'align',
    type: 'string',
    default: 'left',
    description: '对齐方式',
    otherValue: 'center, right',
  },
  {
    name: 'subActiveList',
    type: 'Array<string | number>',
    default: '[]',
    description: '子菜单激活列表',
    otherValue: '-',
  },
  {
    name: 'vertical',
    type: 'boolean',
    default: 'false',
    description: '垂直菜单',
    otherValue: '-',
  },
];

const code = `
<template>
  <ImMenu v-model="active" :subActiveList="subActiveList">
    <ImMenuItem name="1">Home</ImMenuItem>
    <ImSubMenu name="2">
      <template #label>Orders</template>
      <ImMenuItem name="2-1">Order Page1</ImMenuItem>
      <ImMenuItem name="2-2">Order Page2</ImMenuItem>
    </ImSubMenu>
    <ImMenuItem name="3">About Us</ImMenuItem>
  </ImMenu>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
const subActiveList = ref<Array<string | number>>([]);
const active = ref('1');

watch(
  () => active.value,
  (val) => {
    if (['2-1', '2-2'].includes(val)) {
      subActiveList.value = ['2'];
    } else {
      subActiveList.value = [];
    }
  }
);
<\/script>
`;
</script>

<template>
  <PageWrapper title="Menu 菜单" desc="为网站提供导航功能的菜单">
    <PageCard title="基础用法" desc="设置 v-model 可以让菜单选中项高亮。">
      <CodeTemp>
        <div class="demo">
          <ImMenu v-model="active" :subActiveList="subActiveList">
            <ImMenuItem name="1">Home</ImMenuItem>
            <ImSubMenu name="2">
              <template #label>Orders</template>
              <ImMenuItem name="2-1">Order Page1</ImMenuItem>
              <ImMenuItem name="2-2">Order Page2</ImMenuItem>
            </ImSubMenu>
            <ImMenuItem name="3">About Us</ImMenuItem>
          </ImMenu>
        </div>
        <template #code>
          <CodeView :code="code" lang="html" />
        </template>
      </CodeTemp>
    </PageCard>

    <PageCard title="依赖的组件">
      <template #desc>
        <div>ImMenu</div>
        <div>ImMenuItem</div>
        <div>ImSubMenu</div>
      </template>
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
