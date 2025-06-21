<script setup>
import DefaultTheme from 'vitepress/theme';
import { ref } from 'vue';
const { Layout } = DefaultTheme;
const show = ref(false);

console.log(
  '%cWelcome to Im Design',
  'color: #646cff; font-size: 20px; font-weight: bold'
);
</script>

<template>
  <Layout>
    <!-- <template #sidebar-nav-after> 菜单最后部分</template> -->
    <!-- <template #sidebar-nav-before> 菜单最前部分</template> -->
    <!-- <template #doc-after>
      <ImButton
        width="100%"
        @click="show = true"
        size="48"
        color="primary"
        class="mt-24">
        联系作者
      </ImButton>
      <ImDialog v-model="show">
        <ImCard title="添加微信" borderless> </ImCard>
      </ImDialog>
    </template> -->
    <!-- <template #doc-footer-before> 页脚最前部分</template>
    <template #doc-footer-after> 页脚最后部分</template> -->
    <!-- <template #nav-bar-content-before> </template> -->
    <!-- <template #nav-bar-content-after> 导航栏最后部分</template> -->
    <Content />
  </Layout>
</template>

<style scoped lang="scss">
.mt-24 {
  margin-top: 24px;
}
</style>
