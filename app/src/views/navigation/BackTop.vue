<script setup lang="ts">
import CodeView from '@app/src/components/CodeView.vue';
function gatTarget() {
  return document.querySelector('#scroll_id');
}
const apiList = [
  {
    name: 'getTarget',
    type: 'function',
    default: '() => HTMLElement | Window',
    description: '获取滚动容器，默认为 window',
    otherValue: '-',
  },
  {
    name: 'visibleHeight',
    type: 'number',
    default: '200',
    description: '可视区域高度，默认为 200',
    otherValue: '-',
  },
  {
    name: 'zIndex',
    type: 'number',
    default: '1000',
    description: '滚动容器 zIndex，默认为 1000',
    otherValue: '-',
  },
  {
    name: 'right',
    type: 'string',
    default: '20px',
    description: '滚动容器右侧距离，默认为 20px',
    otherValue: '-',
  },
  {
    name: 'bottom',
    type: 'string',
    default: '20px',
    description: '滚动容器底部距离，默认为 20px',
    otherValue: '-',
  },
];

const code = `
<template>
  <ImBackTop :getTarget="gatTarget" right="20vh" bottom="8vh">
    <ImButton color="primary" shape="circle" size="68">
      <ImIcon name="vertical-align-top" size="40"></ImIcon>
    </ImButton>
  </ImBackTop>
  <div
    style="height: 100px; overflow-y: auto; width: 100%"
    id="scroll_id">
    <div class="inner" style="height: 800px">BackTop1</div>
  </div>
</template>

<script setup lang="ts">
function gatTarget() {
  return document.querySelector('#scroll_id');
}
<\/script>
`;
</script>

<template>
  <PageWrapper
    title="BackTop 回到顶部"
    desc="页面内容很长时，滚动到一定距离后可以显示回到顶部按钮，点击后可以回到顶部。">
    <PageCard
      title="基础用法"
      desc="使用 getTarget 属性指定滚动容器，默认为 window">
      <CodeTemp>
        <ImBackTop :getTarget="gatTarget" right="20vh" bottom="8vh">
          <ImButton color="primary" shape="circle" size="68">
            <ImIcon name="vertical-align-top" size="40"></ImIcon>
          </ImButton>
        </ImBackTop>
        <div
          style="height: 100px; overflow-y: auto; width: 100%"
          id="scroll_id">
          <div class="inner" style="height: 800px">BackTop1</div>
        </div>
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

<style></style>
