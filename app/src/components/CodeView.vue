<template>
  <div class="code_view">
    <div v-html="renderCode" class="code"></div>
    <div class="copy">
      <ImIcon
        :name="copyOk ? 'check' : 'file-copy'"
        size="20"
        color="#fff"
        @click="onClickCopy" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { codeToHtml, createHighlighter } from 'shiki';
import { copyText } from '@app/src/utils/utils';

const props = defineProps<{ code: string; lang?: string; isDark?: boolean }>();
const renderCode = ref('');
const copyOk = ref(false);

// import { useAppStore } from '../store/useApp';
// const store = useAppStore();

// 自动高亮code_html 中的代码块
watch(() => props.code, setCodeHeight, { immediate: true });

async function setCodeHeight() {
  const highlighter = await createHighlighter({
    themes: ['one-dark-pro'],
    langs: ['bash', 'javascript', 'css', 'typescript', 'html'],
  });
  renderCode.value = await highlighter.codeToHtml(props.code, {
    lang: props.lang || 'html',
    theme: 'one-dark-pro',
  });
}

const onClickCopy = () => {
  copyOk.value = true;
  copyText(props.code.replace(/&nbsp;/g, ' '));
  setTimeout(() => {
    copyOk.value = false;
  }, 1000);
};
</script>

<style scoped lang="scss">
.code_view {
  border-radius: 8px;
  overflow: auto;
  padding: 0;
  width: 100%;
  position: relative;

  .code {
    overflow: auto;
    flex: 1;
    text-align: left;
  }
  .copy {
    position: absolute;
    top: 8px;
    right: 8px;
  }
}
</style>

<style>
pre {
  padding: 8px 16px !important;
  height: 100%;
  margin: 0;
  min-height: 54px;
  overflow: auto;
}
</style>
