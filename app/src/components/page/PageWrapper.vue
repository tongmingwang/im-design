<template>
  <div class="page_wrapper" :class="[appStore.isMobile ? 'is--mobile' : '']">
    <div class="inner">
      <ImTitle>{{ props.title }}</ImTitle>
      <slot name="desc">
        <ImText>{{ props.desc }}</ImText>
      </slot>
      <div class="content">
        <slot></slot>
      </div>
    </div>
    <AppAnchor />
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@app/src/store/useApp';
import AppAnchor from './AppAnchor.vue';
const props = defineProps<{
  title: string;
  desc: string;
}>();

const appStore = useAppStore();
</script>

<style scoped lang="scss">
.page_wrapper {
  padding: 0 220px 16px 16px;
  background-color: var(--im-bg-content-color);
  display: flex;
  height: 100%;
  flex-direction: column;

  &.is--mobile {
    padding-right: 16px;
  }

  .inner {
    max-width: 860px;
    width: 100%;
    min-width: 300px;
    margin: 0 auto;
  }

  .content {
    margin: 16px 0;
    border-radius: 4px;
  }
}
</style>
