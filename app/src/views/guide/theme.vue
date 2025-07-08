<template>
  <PageWrapper
    title="全局主题设置"
    desc="ImDesign 采用css变量方式实现主题变量，你可以在任何需要的地方修改它">
    <PageCard
      title="默认主题变量"
      desc="目前默认主题是浅色主题，内置暗黑主题，你可以修改主题">
      <CodeView
        language="css"
        code="
      :root {
        --im-primary-color-1: #e3f2fd;
        --im-primary-color-2: #bbdefb;
        --im-primary-color-3: #90caf9;
        --im-primary-color-4: #64b5f6;
        --im-primary-color-5: #42a5f5;
        --im-primary-color-6: #2196f3;
        --im-primary-color-7: #1e88e5;
        --im-primary-color-8: #1976d2; // 主
        --im-primary-color-9: #1565c0;
        --im-primary-color-10: #0d47a1;

        --im-success-color-1: #e8f5e9;
        --im-success-color-2: #c8e6c9;
        --im-success-color-3: #a5d6a7;
        --im-success-color-4: #81c784;
        --im-success-color-5: #66bb6a;
        --im-success-color-6: #4caf50;
        --im-success-color-7: #43a047;
        --im-success-color-8: #388e3c;
        --im-success-color-9: #2e7d32;
        --im-success-color-10: #1b5e20;

        --im-warning-color-1: #fff8e1;
        --im-warning-color-2: #ffecb3;
        --im-warning-color-3: #ffe082;
        --im-warning-color-4: #ffd54f;
        --im-warning-color-5: #ffca28;
        --im-warning-color-6: #ffc107;
        --im-warning-color-7: #ffb300;
        --im-warning-color-8: #ffa000;
        --im-warning-color-9: #ff8f00;
        --im-warning-color-10: #ff6f00;

        --im-error-color-1: #ffebee;
        --im-error-color-2: #ffcdd2;
        --im-error-color-3: #ef9a9a;
        --im-error-color-4: #e57373;
        --im-error-color-5: #ef5350;
        --im-error-color-6: #f44336;
        --im-error-color-7: #e53935;
        --im-error-color-8: #d32f2f;
        --im-error-color-9: #c62828;
        --im-error-color-10: #b71c1c;

        --im-gray-color-1: #ffffff;
        --im-gray-color-2: #fafafa;
        --im-gray-color-3: #f5f5f5;
        --im-gray-color-4: #e3e3e3;
        --im-gray-color-5: #d9d9d9;
        --im-gray-color-6: #bfbfbf;
        --im-gray-color-7: #8c8c8c;
        --im-gray-color-8: #595959;
        --im-gray-color-9: #434343;
        --im-gray-color-10: #262626;
        --im-gray-color-11: #1f1f1f;
        --im-gray-color-12: #141414;

        --im-border-color: #d9d9d9;
        --im-shadow-color: rgba(0, 0, 0, 0.15);

        --im-radius: 4px;

        --im-rgb-color-1: rgba(0, 0, 0, 0.05);
        --im-rgb-color-2: rgba(0, 0, 0, 0.15);
        --im-rgb-color-3: rgba(0, 0, 0, 0.25);
        --im-rgb-color-4: rgba(0, 0, 0, 0.5);
        --im-rgb-color-5: rgba(0, 0, 0, 0.7);
        --im-rgb-color-6: rgba(0, 0, 0, 0.85);
        --im-rgb-color-7: rgba(0, 0, 0, 0.9);
        --im-rgb-color-8: rgba(0, 0, 0, 0.95);
        --im-rgb-color-9: rgba(0, 0, 0, 0.98);

        --im-bg-content-color: #ffffff;
        --im-bg-container-color: #f5f5f5;
        --im-bg-dialog-color: rgba(0, 0, 0, 0.33);
        --im-scrollbar-color: rgba(0, 0, 0, 0.2);
        --im-scrollbar-hover-color: rgba(0, 0, 0, 0.35);
        --im-scrollbar-track-color: rgba(0, 0, 0, 0.06);
        --im-bg-loading-color: rgba(0, 0, 0, 0.5);
      }
      "></CodeView>
    </PageCard>
    <PageCard
      title="暗黑主题变量"
      desc="可以修改html或者body的属性或者类名实现">
      <CodeView
        language="typescript"
        code="
      html[data-theme='dark'],
      html.dark,
      body[data-theme='dark'],
      body.dark {
        // 主色系 (暗黑模式)
        --im-primary-color-1: #0b1c2d;
        --im-primary-color-2: #112b48;
        --im-primary-color-3: #113155;
        --im-primary-color-4: #153e6b;
        --im-primary-color-5: #1a4b81;
        --im-primary-color-6: #1e5997;
        --im-primary-color-7: #2367ad;
        --im-primary-color-8: #2775c3;
        --im-primary-color-9: #2c83d9;
        --im-primary-color-10: #3091ef;

        // 辅助色系 (暗黑模式)
        --im-success-color-1: #0a1e0b;
        --im-success-color-2: #0d2e0f;
        --im-success-color-3: #113e13;
        --im-success-color-4: #154e17;
        --im-success-color-5: #1a5e1b;
        --im-success-color-6: #1e6e1f;
        --im-success-color-7: #237e23;
        --im-success-color-8: #278e27;
        --im-success-color-9: #2c9e2b;
        --im-success-color-10: #30ae2f;

        // 警告色系 (暗黑模式)
        --im-warning-color-1: #2a1e0a;
        --im-warning-color-2: #3f2c0d;
        --im-warning-color-3: #553a11;
        --im-warning-color-4: #6b4815;
        --im-warning-color-5: #81561a;
        --im-warning-color-6: #97641e;
        --im-warning-color-7: #ad7223;
        --im-warning-color-8: #c38027;
        --im-warning-color-9: #d98e2c;
        --im-warning-color-10: #ef9c30;

        // 错误色系 (暗黑模式)
        --im-error-color-1: #2a0a0a;
        --im-error-color-2: #3f0d0d;
        --im-error-color-3: #551111;
        --im-error-color-4: #6b1515;
        --im-error-color-5: #811a1a;
        --im-error-color-6: #971e1e;
        --im-error-color-7: #ad2323;
        --im-error-color-8: #c32727;
        --im-error-color-9: #d92c2c;
        --im-error-color-10: #ef3030;

        // 中性色系 (暗黑模式)
        --im-gray-color-1: #141414; // 最暗背景
        --im-gray-color-2: #1f1f1f; // 次级背景
        --im-gray-color-3: #262626; // 三级背景
        --im-gray-color-4: #434343; // 四级背景
        --im-gray-color-5: #595959; // 边框/分割线
        --im-gray-color-6: #8c8c8c; // 次要文本
        --im-gray-color-7: #bfbfbf; // 常规文本
        --im-gray-color-8: #d9d9d9; // 标题文本
        --im-gray-color-9: #f0f0f0; // 强调文本
        --im-gray-color-10: #f5f5f5; // 最亮文本
        --im-gray-color-11: #fafafa; // 特殊强调
        --im-gray-color-12: #ffffff; // 纯白元素

        // 其他
        --im-border-color: #6b6b6b;
        // rgb
        --im-rgb-color-1: rgba(255, 255, 255, 0.05);
        --im-rgb-color-2: rgba(255, 255, 255, 0.15);
        --im-rgb-color-3: rgba(255, 255, 255, 0.25);
        --im-rgb-color-4: rgba(255, 255, 255, 0.5);
        --im-rgb-color-5: rgba(255, 255, 255, 0.7);
        --im-rgb-color-6: rgba(255, 255, 255, 0.85);
        --im-rgb-color-7: rgba(255, 255, 255, 0.9);
        --im-rgb-color-8: rgba(255, 255, 255, 0.95);
        --im-rgb-color-9: rgba(255, 255, 255, 0.98);

        // 背景色
        --im-bg-content-color: #212830;
        --im-bg-container-color: #151b23;
        --im-bg-dialog-color: rgba(255, 255, 255, 0.33);

        // 滚动条颜色
        --im-scrollbar-color: rgba(255, 255, 255, 0.35);
        --im-scrollbar-hover-color: rgba(255, 255, 255, 0.6);
        --im-scrollbar-track-color: rgba(255, 255, 255, 0.06);

        // loading 背景
        --im-bg-loading-color: rgba(255, 255, 255, 0.48);
      }
      "></CodeView>
    </PageCard>
  </PageWrapper>
</template>

<script setup lang="ts">
import CodeView from '@app/src/components/CodeView.vue';
</script>

<style scoped lang="scss"></style>
