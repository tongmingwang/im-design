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

const colors = [10, 9, 8, 6, 5, 4, 3, 2, 1];
const colors2 = [12, 11, 9, 8, 7, 6, 5, 4, 3, 2, 1];
</script>

<template>
  <PageWrapper
    title="Color 色彩"
    desc="为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。">
    <PageCard title="主色" desc="默认的主题色是明亮、友好的蓝色。">
      <div class="color_wrapper">
        <div
          class="item_main item"
          :style="{ '--color': 'var(--im-primary-color-7)' }"></div>
        <section class="item_wrapper">
          <div
            v-for="item in colors"
            class="item"
            :style="{ '--color': `var(--im-primary-color-${item})` }"></div>
        </section>
      </div>
    </PageCard>

    <PageCard
      title="成功色"
      desc="成功色用于表示操作成功，例如提交表单、上传文件等。">
      <div class="color_wrapper">
        <div
          class="item_main item"
          :style="{ '--color': 'var(--im-success-color-7)' }"></div>
        <section class="item_wrapper">
          <div
            v-for="item in colors"
            class="item"
            :style="{ '--color': `var(--im-success-color-${item})` }"></div>
        </section>
      </div>
    </PageCard>

    <PageCard
      title="警告色"
      desc="警告色用于表示操作警告，例如表单验证不通过、上传文件过大等。">
      <div class="color_wrapper">
        <div
          class="item_main item"
          :style="{ '--color': 'var(--im-warning-color-7)' }"></div>
        <section class="item_wrapper">
          <div
            v-for="item in colors"
            class="item"
            :style="{ '--color': `var(--im-warning-color-${item})` }"></div>
        </section>
      </div>
    </PageCard>

    <PageCard
      title="错误色"
      desc="错误色用于表示操作失败，例如表单验证不通过、上传文件过大等。">
      <div class="color_wrapper">
        <div
          class="item_main item"
          :style="{ '--color': 'var(--im-error-color-7)' }"></div>
        <section class="item_wrapper">
          <div
            v-for="item in colors"
            class="item"
            :style="{ '--color': `var(--im-error-color-${item})` }"></div>
        </section>
      </div>
    </PageCard>

    <PageCard title="中性色" desc="中性色用于文本、背景和边框颜色。">
      <div class="color_wrapper gray">
        <div
          class="item_main item"
          :style="{ '--color': 'var(--im-gray-color-10)' }"></div>
        <section class="item_wrapper">
          <div
            v-for="item in colors2"
            class="item"
            :style="{ '--color': `var(--im-gray-color-${item})` }"></div>
        </section>
      </div>
    </PageCard>
  </PageWrapper>
</template>

<style lang="scss" scoped>
.color_wrapper {
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 24px;
  width: 100%;

  .item {
    flex: 1;
    height: 50px;
    background-color: var(--color);
  }
  .item_main {
    height: 100px;
  }
  .item_wrapper {
    display: flex;
  }
}
.gray {
  border: 1px solid rgb(227, 226, 226);
}
</style>
