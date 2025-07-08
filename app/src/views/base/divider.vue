<script setup lang="ts">
import CodeView from '@app/src/components/CodeView.vue';
const apiList = [
  {
    name: 'vertical',
    type: 'boolean',
    default: 'false',
    description: '是否垂直方向展示，默认为水平方向',
    otherValue: '-',
  },
  {
    name: 'color',
    type: 'string',
    default: 'flex-start',
    description: '颜色，默认为灰色',
    otherValue: '-',
  },
  {
    name: 'size',
    type: 'string|number',
    default: '1px',
    description: '分割线大小，默认为1px',
    otherValue: '-',
  },
  {
    name: 'margin',
    type: 'string|number',
    default: '1px',
    description: '分割线两侧的间距',
    otherValue: '-',
  },
  {
    name: 'textLeftWidth',
    type: 'string|number',
    default: '0',
    description: '文字左侧宽度，默认为0',
    otherValue: '-',
  },
  {
    name: 'textRightWidth',
    type: 'string|number',
    default: '0',
    description: '文字右侧宽度，默认为0',
    otherValue: '-',
  },
];
</script>

<template>
  <PageWrapper title="Divider 分割线" desc="区隔内容的分割线。">
    <PageCard title="基础使用" desc="段落分割，并设置标题">
      <CodeTemp>
        <div style="width: 100%">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
          merninisti licere mihi ista probare, quae sunt a te dicta? Refert
          tamen, quo modo.
          <ImDivider>Text</ImDivider>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
          merninisti licere mihi ista probare, quae sunt a te dicta? Refert
          tamen, quo modo.
        </div>

        <template #code>
          <CodeView
            code="
  <template>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
      quo modo.
      <ImDivider>Text</ImDivider>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
      nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert
      tamen, quo modo.
  </template>
        " />
        </template>
      </CodeTemp>
    </PageCard>

    <PageCard
      title="标题位置"
      desc="设置textLeftWidth textRightWidth 来设置分割线区域，实现文本偏移">
      <CodeTemp>
        <div style="width: 100%">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
          merninisti licere mihi ista probare, quae sunt a te dicta? Refert
          tamen, quo modo.
          <ImDivider textLeftWidth="50px">Text</ImDivider>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
          merninisti licere mihi ista probare, quae sunt a te dicta? Refert
          tamen, quo modo.
        </div>

        <template #code>
          <CodeView
            lang="html"
            code="
        <template>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
            merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
            quo modo.
            <ImDivider textLeftWidth='50px'>Text</ImDivider>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert
            tamen, quo modo.
        </template>
        " />
        </template>
      </CodeTemp>
    </PageCard>

    <PageCard title="纵向分割" desc="设置vertical为true，可以实现纵向分割">
      <CodeTemp>
        <div style="width: 100%">Hello <ImDivider vertical /> World</div>

        <template #code>
          <CodeView
            code="
        Hello <ImDivider vertical /> World
        " />
        </template>
      </CodeTemp>
    </PageCard>

    <PageCard title="Api" desc="ImDivider基础props属性">
      <ComponentApi :data="apiList" />
    </PageCard>
  </PageWrapper>
</template>

<style lang="scss" scoped></style>
