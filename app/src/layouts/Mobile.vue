<template>
  <div class="mobile app_scroll">
    <header class="header">
      <div class="header_left">
        <ImButton size="48" shape="circle" variant="text" @click="open = true">
          <ImIcon name="menu" size="24" />
        </ImButton>
        <div>
          <img
            src="../assets/im-logo.svg"
            alt=""
            class="logo"
            @click="$router.push('/')" />
        </div>
      </div>
      <div class="header_right">
        <LangBase />
        <AppSearch>
          <template #default="{ setState }">
            <ImButton
              size="48"
              shape="circle"
              variant="text"
              @click="() => setState(true)">
              <ImIcon name="search" size="24" />
            </ImButton>
          </template>
        </AppSearch>

        <ImInnerLayer
          :visible="openHNav"
          @close="openHNav = false"
          placement="right">
          <ImButton
            size="48"
            shape="circle"
            variant="text"
            @click="openHNav = true">
            <ImIcon name="align-right" size="24" />
          </ImButton>
          <template #content>
            <div class="header_menu" @click.capture="openHNav = false">
              <ImList>
                <ImListItem>首页</ImListItem>
                <ImListItem>快速开始</ImListItem>
                <ImListItem>组件文档</ImListItem>
                <ImListItem>github</ImListItem>
                <ImListItem>gitee</ImListItem>
              </ImList>
            </div>
          </template>
        </ImInnerLayer>
      </div>
    </header>
    <main class="main">
      <AppView />
    </main>
    <BackTop />
    <ImDrawer size="300px" v-model="open" placement="left">
      <AppMenu @click.capture="open = false" />
    </ImDrawer>
  </div>
</template>

<script setup lang="ts">
import BackTop from '../components/BackTop.vue';
import AppView from './base/AppView.vue';
import { ref } from 'vue';
import AppMenu from '../components/AppMenu.vue';
import AppSearch from '../components/AppSearch.vue';
import { ImInnerLayer } from 'im-design';
import LangBase from './base/LangBase.vue';
const open = ref(false);
const openHNav = ref(false);
</script>

<style scoped lang="scss">
.mobile {
  height: 100%;
  width: 100%;
  overflow-y: auto;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: var(--app-header-height);
    min-height: var(--app-header-height);
    padding: 0 8px;
    background: var(--im-bg-content-color);
    border-bottom: 1px solid var(--im-gray-color-5);
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    text-wrap: nowrap;
  }

  .header_right {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    overflow: visible;
  }
  .header_left {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .main {
    background-color: var(--im-bg-content-color);
  }

  .logo {
    width: 32px;
  }
}

.header_menu {
  width: 280px;
  padding: 8px 0;
}
</style>
