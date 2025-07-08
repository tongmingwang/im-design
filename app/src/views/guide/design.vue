<template>
  <PageWrapper
    title="设计理念"
    desc="ImDesign 匠心打造，极致体验，目的是让项目体验起来更加打动用户">
    <PageCard
      title="设计原则"
      desc="ImDesign 设计理念：单一原则、可扩展性、可维护性、可定制性、追求动效、极致体验。">
    </PageCard>

    <PageCard
      title="单一原则"
      desc="单一原则指的是一个组件只做一件事，并且把它做好。">
    </PageCard>

    <PageCard
      title="可扩展性"
      desc="可扩展性指的是组件可以很容易地被扩展或修改以适应不同的需求。例如：通过使用插槽（slots）和属性（props），开发者可以在不改变原有代码的情况下向组件添加新的功能或样式。">
    </PageCard>
    <PageCard
      title="可维护性"
      desc="可维护性指的是组件的代码易于理解、修改和维护。例如：遵循一致的命名规范、编写清晰的注释以及保持组件的大小适中可以帮助提高其可维护性。"></PageCard>

    <PageCard
      title="可定制性"
      desc="可定制性指的是组件可以很容易地被修改以适应不同的需求。例如：通过使用插槽（slots）和属性（props），开发者可以在不改变原有代码的情况下向组件添加新的功能或样式。"></PageCard>

    <PageCard
      title="追求动效"
      desc="追求动效指的是组件可以很容易地被扩展或修改以适应不同的需求。例如：通过使用插槽（slots）和属性（props），开发者可以在不改变原有代码的情况下向组件添加新的功能或样式。"></PageCard>

    <PageCard
      title="极致体验"
      desc="极致体验指的是在满足基本功能的同时，尽可能地提供最佳的用户交互体验。例如：考虑到用户的使用习惯和心理预期，优化组件的行为和表现，使其更加符合直觉且易于操作。"></PageCard>
  </PageWrapper>
</template>

<script setup lang="ts">
import CodeView from '@app/src/components/CodeView.vue';
import PageCard from '@app/src/components/page/PageCard.vue';
</script>

<style scoped lang="scss"></style>
