<template>
  <div class="app_menu">
    <ImMenu vertical v-model="active" style="--im-menu-width: 100%">
      <template v-for="item in menus">
        <div class="title">{{ $t(item.text) }}</div>
        <ImMenuItem
          v-for="o in item.items"
          :name="o.link"
          @click="() => router.push(o.link)"
          >{{ $t(o.text) }}</ImMenuItem
        >
      </template>
    </ImMenu>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import { ref, watch, shallowRef } from 'vue';
import { sideMenuMap } from '@app/src/router';
const router = useRouter();
const route = useRoute();
const active = ref(route.path);
const menus = shallowRef<Array<any>>([]);
watch(
  () => route.path,
  (val) => {
    active.value = val;
  }
);

function initMenu() {
  const res = [];
  const index = ['Guide', 'Base', 'Navigation', 'Form', 'Data', 'Feedback'];
  for (const map of sideMenuMap) {
    const itemIndex = index.findIndex((v) => v === map[0]);

    res[itemIndex] = {
      text: map[0],
      items: map[1].map((item: { name: string; path: string }) => {
        return { text: item.name, link: item.path };
      }),
    };
  }
  menus.value = res;
  console.log(res, 'res');
}

initMenu();
</script>

<style scoped lang="scss">
.app_menu {
  width: 100%;
  height: 100%;
  .im-menu {
    width: 100%;
  }
}

.title {
  font-size: 20px;
  color: var(--im-gray-color-10);
  padding: 8px 0px;
  margin: 8px 0;
}
</style>
