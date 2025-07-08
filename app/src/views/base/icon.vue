<script setup lang="ts">
import CodeView from '@app/src/components/CodeView.vue';
import iconData from '@app/src/utils/iconfont.json';
const apiList = [
  {
    name: 'name',
    type: 'string',
    default: '-',
    description: '图标名称，对应iconfont中的图标名',
    otherValue: '-',
  },
  {
    name: 'size',
    type: 'string | number',
    default: '16px',
    description: '图标大小，默认为16px',
    otherValue: '-',
  },

  {
    name: 'color',
    type: 'string',
    default: 'currentColor',
    description: '图标颜色，默认为当前文字颜色',
    otherValue: '-',
  },
];

const code = ` 
        <ImIcon name="plus" />
        <ImIcon name="up" />
        <ImIcon name="edit" />
        `;

console.log(iconData);
</script>

<template>
  <PageWrapper title="Icon 图标" desc="将系统图标统一封装调用">
    <PageCard title="基础用法" desc="ImIcon 支持 size name color等属性设置">
      <CodeTemp>
        <ImIcon name="plus" />
        <ImIcon name="up" />
        <ImIcon name="edit" />
        <template #code>
          <CodeView :code="code" />
        </template>
      </CodeTemp>
    </PageCard>
    <PageCard title="所有图标">
      <template #desc>
        ImDesign系统内置{{ iconData.glyphs.length }} 个图标方便使用,大小19kb左右
      </template>
      <ul class="icon_view">
        <li v-for="item in iconData.glyphs" class="item">
          <ImIcon :name="item.font_class" size="32" />
        </li>
      </ul>
    </PageCard>

    <PageCard title="Api" desc="ImIcon Props 属性">
      <ComponentApi :data="apiList" />
    </PageCard>
  </PageWrapper>
</template>

<style lang="scss" scoped>
.icon_view {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 48px 0;
  .item {
    width: 48px;
    height: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    &:hover {
      background-color: var(--im-rgb-color-1);
    }
  }
}
</style>
