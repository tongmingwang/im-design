<script setup lang="ts">
import CodeView from '@app/src/components/CodeView.vue';
</script>

<template>
  <PageWrapper
    title="介绍 - ImDesign"
    desc="ImDesign 匠心打造，极致体验，持续集成组件体验，优化性能，优化交互效率">
    <PageCard
      title="为什么选择 ImDesign"
      desc="ImDesign 是一个功能强大的 Vue 组件框架，从底层开始构建，易学易用。我们的 UI 组件集合可在您的应用程序中保持一致的风格，并提供足够的自定义选项以满足任何使用情况">
    </PageCard>

    <PageCard
      title="免费使用"
      desc="ImDesign 是一个开源项目，根据 MIT licensed ImDesign 的源代码可在 GitHub 上获取，开发人员可根据自己的选择进行修改并为其开发做出贡献。">
    </PageCard>

    <PageCard
      title="最佳实践1"
      desc="所有素材都是一个组件，一个功能由多个素材拼凑合成。实现最大颗粒度复用；例如一个卡片使用如何部分组成">
      <CodeView
        language="javascript"
        code="
        <template>
          <ImCard>
            <ImCardHeader>Title</ImCardHeader>
            <ImCardBody>Content</ImCardBody>
            <ImCardFooter>Footer</ImCardFooter>
          </ImCard>
        </template>
          ">
      </CodeView>
    </PageCard>

    <PageCard
      title="最佳实践2"
      desc="布局滚动条很容易影响到对话框，显示闪烁。推荐你的布局滚动可以是body以内进行设置 overflow: auto;这样布局就不会出现闪烁了。">
      <CodeView
        language="javascript"
        code="
        <template>
          <body class='scroll'>
            // content...
          </body>

          <style>
            .scroll {
              overflow: auto;
            }
          </style>
        </template>
          ">
      </CodeView>
    </PageCard>
  </PageWrapper>
</template>
