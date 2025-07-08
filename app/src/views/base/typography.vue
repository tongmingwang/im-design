<script setup lang="ts">
import CodeView from '@app/src/components/CodeView.vue';
const apiList = [
  {
    name: 'level',
    type: 'number',

    default: '1',
    description: '标题等级',

    otherValue: '可选值 1-6',
  },
];
</script>

<template>
  <PageWrapper title="Typography 排版" desc="文本统一样式">
    <PageCard title="Title标题" desc="ImTitle 设置标题基础样式">
      <CodeTemp>
        <div>
          <ImTitle>H1</ImTitle>
          <ImTitle level="2">H2</ImTitle>
          <ImTitle level="3">H3</ImTitle>
          <ImTitle level="4">H4</ImTitle>
          <ImTitle level="5">H5</ImTitle>
          <ImTitle level="6">H6</ImTitle>
        </div>
        <template #code>
          <CodeView
            lang="html"
            code='
          <ImTitle>H1</ImTitle>
          <ImTitle level="2">H2</ImTitle>
          <ImTitle level="3">H3</ImTitle>
          <ImTitle level="4">H4</ImTitle>
          <ImTitle level="5">H5</ImTitle>
          <ImTitle level="6">H6</ImTitle>
          ' />
        </template>
      </CodeTemp>
    </PageCard>

    <PageCard title="Text文本" desc="ImText 设置文本基础样式">
      <CodeTemp>
        <div>
          <ImText>This is a Text</ImText>
        </div>
        <template #code>
          <CodeView
            lang="html"
            code="
          <ImText>This is a Text</ImText>
          " />
        </template>
      </CodeTemp>
    </PageCard>

    <PageCard
      title="Link 超链接"
      desc="ImLink 设置超链接基础样式,a 标签属性一致">
      <CodeTemp>
        <div>
          <ImLink>Link</ImLink>
        </div>
        <template #code>
          <CodeView
            lang="html"
            code="
          <ImLink>Link</ImLink>
          " />
        </template>
      </CodeTemp>
    </PageCard>

    <PageCard title="Api" desc="ImTitle Props属性：">
      <ComponentApi :data="apiList" />
    </PageCard>
  </PageWrapper>
</template>
