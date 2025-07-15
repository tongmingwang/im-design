<script setup>
import { ImButtonGroup } from 'im-design';
import DefaultTheme from 'vitepress/theme';
import { ref } from 'vue';
const { Layout } = DefaultTheme;
const show = ref(false);

console.log(
  '%cIm Design',
  'color: #388e3c; font-size: 60px; font-weight: bold;font-family: "PingFang SC", "Microsoft YaHei", sans-serif; text-shadow: 2px 2px #388e3c; background: -webkit-linear-gradient(left, #388e3c, #388e3c); -webkit-background-clip: text; -webkit-text-fill '
);

function gatTarget() {
  return document.documentElement;
}
</script>

<template>
  <Layout>
    <!-- <template #sidebar-nav-after> 菜单最后部分</template> -->
    <!-- <template #sidebar-nav-before> 菜单最前部分</template> -->
    <!-- <template #doc-after>
      <ImBackTop :getTarget="gatTarget" right="8vw" bottom="8vh">
        <ImButton color="primary" shape="circle" size="48">
          <ImIcon name="vertical-align-top" size="24"></ImIcon>
        </ImButton>
      </ImBackTop>
    </template> -->
    <!-- <template #doc-footer-before> 页脚最前部分</template>
    <template #doc-footer-after> 页脚最后部分</template> -->
    <!-- <template #nav-bar-content-before> </template> -->
    <!-- <template #nav-bar-content-after>
      <ImButton shape="circle" variant="text" style="margin-left: 8px">
        <ImIcon name="setting" size="24" />
      </ImButton>
    </template> -->
    <Content />
  </Layout>
</template>

<style scoped lang="scss"></style>
