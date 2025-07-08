<template>
  <div class="app_anchor" v-if="!appStore.isMobile">
    <ImAnchor :data="data" target=".app_scroll" />
  </div>
</template>

<script setup lang="ts">
import ImAnchor from '@/components/ImAnchor/ImAnchor.vue';
import { ref, onMounted } from 'vue';
import { useAppStore } from '@app/src/store/useApp';
const appStore = useAppStore();

const data = ref([]);

onMounted(() => {
  const arr = Array.from(
    document.querySelector('.app_scroll')?.querySelectorAll('.im-title') || []
  );
  if (arr.length) {
    const res: any = [];
    arr.forEach((item) => {
      const title = item.textContent;
      const id = 'App-' + Math.random().toString(36).slice(2); // 生成随机id，防止重复
      item.setAttribute('id', id);
      if (title) {
        const obj: any = {};
        obj.text = title;
        obj.id = id;
        res.push(obj);
      }
    });
    data.value = res;
  }
});
</script>

<style scoped>
.app_anchor {
  --top: calc(var(--app-header-height) + 36px);
  width: 200px;
  height: calc(100vh - var(--top));
  position: fixed;
  top: var(--top);
  right: 16px;
}
</style>
