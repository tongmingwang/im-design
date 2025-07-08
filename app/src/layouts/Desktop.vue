<template>
  <div class="desktop app_scroll">
    <header class="header">
      <div class="header_left">
        <img
          src="../assets/im-logo.svg"
          class="logo"
          @click="$router.push('/')" />
        <div class="title_logo">Im design</div>
        <ImTag color="primary">1.2.5</ImTag>
      </div>

      <nav class="nav">
        <AppSearch style="margin-right: 24px">
          <template #default="{ setState }">
            <ImButton
              variant="tonal"
              shape="round"
              @click="() => setState(true)"
              >搜索组件、文档等
              <ImIcon name="search" style="margin-left: 8px" />
            </ImButton>
          </template>
        </AppSearch>
        <ImButton variant="text" @click="$router.push('/')">{{
          $t('Index')
        }}</ImButton>
        <ImButton variant="text" @click="$router.push('/guide/start')">{{
          $t('Start')
        }}</ImButton>
        <ImButton variant="text" @click="$router.push('/base/button')">{{
          $t('Components')
        }}</ImButton>
        <ImDivider vertical />
        <div class="icons">
          <LangBase />
          <ThemeSwitch />
          <ImButton variant="text" size="48" shape="circle">
            <svg
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4590"
              width="24"
              fill="currentColor"
              height="24">
              <path
                d="M512 85.333333C276.266667 85.333333 85.333333 276.266667 85.333333 512a426.410667 426.410667 0 0 0 291.754667 404.821333c21.333333 3.712 29.312-9.088 29.312-20.309333 0-10.112-0.554667-43.690667-0.554667-79.445333-107.178667 19.754667-134.912-26.112-143.445333-50.133334-4.821333-12.288-25.6-50.133333-43.733333-60.288-14.933333-7.978667-36.266667-27.733333-0.554667-28.245333 33.621333-0.554667 57.6 30.933333 65.621333 43.733333 38.4 64.512 99.754667 46.378667 124.245334 35.2 3.754667-27.733333 14.933333-46.378667 27.221333-57.045333-94.933333-10.666667-194.133333-47.488-194.133333-210.688 0-46.421333 16.512-84.778667 43.733333-114.688-4.266667-10.666667-19.2-54.4 4.266667-113.066667 0 0 35.712-11.178667 117.333333 43.776a395.946667 395.946667 0 0 1 106.666667-14.421333c36.266667 0 72.533333 4.778667 106.666666 14.378667 81.578667-55.466667 117.333333-43.690667 117.333334-43.690667 23.466667 58.666667 8.533333 102.4 4.266666 113.066667 27.178667 29.866667 43.733333 67.712 43.733334 114.645333 0 163.754667-99.712 200.021333-194.645334 210.688 15.445333 13.312 28.8 38.912 28.8 78.933333 0 57.045333-0.554667 102.912-0.554666 117.333334 0 11.178667 8.021333 24.490667 29.354666 20.224A427.349333 427.349333 0 0 0 938.666667 512c0-235.733333-190.933333-426.666667-426.666667-426.666667z"
                p-id="4591"></path>
            </svg>
          </ImButton>
          <ImButton variant="text" size="48" shape="circle">
            <svg
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="8348"
              width="24"
              height="24">
              <path
                d="M512 1024C229.2224 1024 0 794.7776 0 512S229.2224 0 512 0s512 229.2224 512 512-229.2224 512-512 512z m259.1488-568.8832H480.4096a25.2928 25.2928 0 0 0-25.2928 25.2928l-0.0256 63.2064c0 13.952 11.3152 25.2928 25.2672 25.2928h177.024c13.9776 0 25.2928 11.3152 25.2928 25.2672v12.6464a75.8528 75.8528 0 0 1-75.8528 75.8528H366.592a25.2928 25.2928 0 0 1-25.2672-25.2928v-240.1792a75.8528 75.8528 0 0 1 75.8272-75.8528h353.9456a25.2928 25.2928 0 0 0 25.2672-25.2928l0.0768-63.2064a25.2928 25.2928 0 0 0-25.2672-25.2928H417.152a189.6192 189.6192 0 0 0-189.6192 189.6448v353.9456c0 13.9776 11.3152 25.2928 25.2928 25.2928h372.9408a170.6496 170.6496 0 0 0 170.6496-170.6496v-145.408a25.2928 25.2928 0 0 0-25.2928-25.2672z"
                fill="#C71D23"
                p-id="8349"></path>
            </svg>
          </ImButton>
        </div>
      </nav>
    </header>
    <main class="main" v-loading="load">
      <div class="menu" v-if="$route.name !== 'Index'" v-show="!load">
        <AppMenu />
      </div>
      <div class="content">
        <AppView />
      </div>
    </main>
    <BackTop />
  </div>
</template>

<script setup lang="ts">
import BackTop from '../components/BackTop.vue';
import AppMenu from '../components/AppMenu.vue';
import AppSearch from '../components/AppSearch.vue';
import LangBase from './base/LangBase.vue';
import ThemeSwitch from './base/ThemeSwitch.vue';
import AppView from './base/AppView.vue';
import { ref, onMounted } from 'vue';
const load = ref(true);

onMounted(() => {
  setTimeout(() => {
    load.value = false;
  }, 200);
});
</script>

<style scoped lang="scss">
.desktop {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-y: auto;
  background-color: var(--im-bg-content-color);

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: var(--app-header-height);
    min-height: var(--app-header-height);
    padding: 0;
    margin: 0;
    border-bottom: 1px solid var(--im-gray-color-4);
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    background-color: var(--im-bg-content-color);

    .nav {
      display: flex;
      align-items: center;
      height: 100%;
      gap: 8px;
      background-color: var(--im-bg-content-color);
    }
    .im-menu {
      border-bottom: 0;
      height: 100%;
    }

    .icons {
      display: flex;
      align-items: center;
      gap: 0;
      padding: 0 20px 0 0;
    }
  }

  .header_left {
    display: flex;
    align-items: center;
    gap: 16px;
    height: 100%;
    background-color: var(--im-bg-content-color);
    padding: 0 16px 0 20px;
  }
  .logo {
    width: 48px;
    cursor: pointer;
  }

  .title_logo {
    display: flex;
    align-items: center;
    font-size: 16px;
    color: var(--im-gray-color-10);
  }

  .main {
    flex: 1;
    display: flex;
    position: relative;
  }
  .menu {
    width: 20%;
    max-width: 400px;
    min-width: 200px;
    padding: 8px;
    border-right: 1px solid var(--im-gray-color-4);
    position: sticky;
    top: var(--app-header-height);
    height: calc(100vh - var(--app-header-height));
    overflow-y: auto;
  }
  .content {
    flex: 1;
    background-color: var(--im-bg-content-color);
  }
}
</style>
