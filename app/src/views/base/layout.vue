<script setup lang="ts">
import CodeView from '@app/src/components/CodeView.vue';
const apiList = [
  {
    name: 'gutter',
    type: 'number',
    default: '0',
    description: '间距',
    otherValue: '-',
  },
  {
    name: 'align',
    type: 'string',
    default: 'flex-start',
    description: '对齐方式',
    otherValue: 'flex-start | flex-end | center ',
  },
];

const colApi = [
  {
    name: 'span',
    type: 'number',
    default: '4',
    description: '栅格占据的列数',
    otherValue: '-',
  },
];

const code = ` 
        <ImRow :gutter="8" style="width: 100%">
          <ImCol span="8"><div class="demo" style="height: 200px"></div></ImCol>
          <ImCol span="4"><div class="demo"></div></ImCol>
          <ImCol span="4"><div class="demo"></div></ImCol>
          <ImCol span="8"><div class="demo" style="height: 200px"></div></ImCol>
        </ImRow>
        <ImRow>
          <ImCol span="24"
            ><div class="demo" style="height: 200px"></div
          ></ImCol>
        </ImRow>
        `;
</script>

<template>
  <PageWrapper title="Layout 布局" desc="支持row 和 col配合使用">
    <PageCard title="基础用法" desc="ImIcon 支持 size name color等属性设置">
      <CodeTemp>
        <ImRow :gutter="8" style="width: 100%">
          <ImCol span="8"><div class="demo" style="height: 200px"></div></ImCol>
          <ImCol span="4"><div class="demo"></div></ImCol>
          <ImCol span="4"><div class="demo"></div></ImCol>
          <ImCol span="8"><div class="demo" style="height: 200px"></div></ImCol>
        </ImRow>
        <ImRow>
          <ImCol span="24"
            ><div class="demo" style="height: 200px"></div
          ></ImCol>
        </ImRow>
        <template #code>
          <CodeView :code="code" lang="html" />
        </template>
      </CodeTemp>
    </PageCard>

    <PageCard title="Api" desc="ImRow 组件提供了以下属性：">
      <ComponentApi :data="apiList" />
    </PageCard>

    <PageCard title="ImCol Api" desc="ImCol 组件提供了以下属性：">
      <ComponentApi :data="colApi" />
    </PageCard>
  </PageWrapper>
</template>

<style lang="scss" scoped>
.im-row {
  width: 100%;
}

.demo {
  background-color: var(--im-rgb-color-1);
  height: 80px;
  border-radius: 8px;
}
</style>
