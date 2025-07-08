<template>
  <div class="code_temp">
    <ImTabs v-model="active" class="tab_wrapper">
      <ImTab name="preview">
        <span>Preview</span>
      </ImTab>
      <ImTab name="code">
        <span>Code</span>
      </ImTab>
    </ImTabs>
    <ImPanes v-model="active" class="code_view">
      <ImPane name="preview" class="item preview">
        <slot />
      </ImPane>
      <ImPane name="code" class="item" style="padding-top: 8px">
        <slot name="code" />
      </ImPane>
    </ImPanes>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const active = ref('preview');
</script>

<style scoped lang="scss">
.code_temp {
  border-radius: 8px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.25);
  padding: 16px;

  .im-tabs {
    margin: 0;
  }

  .im-tab {
    display: flex;
    gap: 8px;
  }
  .code_view {
    padding: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: var(--im-bg-content-color);
    .preview {
      padding: 16px;
    }
  }

  .item {
    padding: 16px 0 0 0;
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }
}
</style>
