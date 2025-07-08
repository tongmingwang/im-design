<template>
  <PageWrapper
    title="快速开始"
    desc="ImDesign致力于提供给程序员愉悦的开发体验。">
    <PageCard
      title="安装"
      desc="你可以使用 npm pnpm yarn cnpm 等包管理工具安装im-design组件库">
      <div class="dark_view">
        <ImTabs v-model="packageVal">
          <ImTab name="npm">npm</ImTab>
          <ImTab name="cnpm">cnpm</ImTab>
          <ImTab name="yarn">yarn</ImTab>
          <ImTab name="pnpm">pnpm</ImTab>
        </ImTabs>
        <ImPanes v-model="packageVal">
          <ImPane name="npm">
            <CodeView language="bash" code="npm install im-design"></CodeView>
          </ImPane>
          <ImPane name="cnpm">
            <CodeView language="bash" code="cnpm install im-design"></CodeView>
          </ImPane>
          <ImPane name="yarn">
            <CodeView language="bash" code="yarn add im-design"></CodeView>
          </ImPane>
          <ImPane name="pnpm">
            <CodeView language="bash" code="pnpm install im-design"></CodeView>
          </ImPane>
        </ImPanes>
      </div>
    </PageCard>
    <PageCard
      title="全局引入"
      desc="你可以在项目中通过import的方式引入组件库，或者在main.ts文件中全局注册。">
      <div class="dark_view">
        <CodeView
          language="typescript"
          code="
      import { createApp } from 'vue';
      import ImDesign from 'im-design';
      import 'im-design/dist/index.css';
      import App from './App.vue';
      const app = createApp(App);
      app.use(ImDesign);
      app.mount('#app');
      "></CodeView>
      </div>
    </PageCard>

    <PageCard
      title="按需引入"
      desc="你可以在项目中通过import的方式引入组件库，或者在main.ts文件中全局注册。">
      <div class="dark_view">
        <CodeView
          language="typescript"
          code="
      import { createApp } from 'vue';
      import { Button } from 'im-design';
      import 'im-design/dist/index.css';
      import App from './App.vue';
      const app = createApp(App);
      app.use(Button);
      app.mount('#app');
        "></CodeView>
      </div>
    </PageCard>

    <PageCard
      title="SFC使用"
      desc="你可以在项目中通过import的方式引入组件库，或者在main.ts文件中全局注册。">
      <div class="dark_view">
        <CodeView
          language="html"
          code="
        <template>
          <ImButton>按钮</ImButton>
        </template>
        <script setup>
          import { ImButton } from 'im-design';
        </script>
          ">
        </CodeView>
      </div>
    </PageCard>
  </PageWrapper>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CodeView from '@app/src/components/CodeView.vue';

const packageVal = ref('npm');
</script>

<style scoped lang="scss">
.dark_view {
  padding: 8px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  overflow: hidden;

  .im-tabs {
    margin: 0;
  }

  .im-pane {
    padding: 8px 0 0 0;
  }
}
</style>
