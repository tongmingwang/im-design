<template>
  <canvas id="rain" class="canvas" />
  <div class="home">
    <div class="main">
      <div>
        <img
          src="../assets/im-logo.svg"
          alt="im-design logo"
          style="width: 240px; height: 240px" />
      </div>
      <h1 class="title">{{ $t('Home.Title') }}</h1>
      <ImText>{{ $t('Home.SubTitle') }}</ImText>
      <div class="btns">
        <ImButton @click="updateTheme">{{ $t('Home.Theme') }}</ImButton>
        <ImButton color="primary">{{ $t('Home.Start') }}</ImButton>
      </div>
      <CodeView
        code="npm i im-design"
        lang="bash"
        isDark
        style="width: 100%; margin: 24px 0" />
      <ImButton
        color="primary"
        variant="outlined"
        size="48"
        width="100%"
        @click="suppoer = true"
        >{{ $t('Home.Sponsor') }}</ImButton
      >
    </div>
    <footer class="footer">
      <div>Released under the MIT License.</div>
      <div>© 2025 im-design</div>
    </footer>

    <ImDialog v-model="suppoer">
      <ImDialogHeader> 赞助作者 </ImDialogHeader>
      <ImDialogBody> 赞助作者，让im-design更好！ </ImDialogBody>
    </ImDialog>
  </div>
</template>

<script setup lang="ts">
import CodeView from '../components/CodeView.vue';
import { onMounted, ref } from 'vue';
import { ranCanvas } from '../utils/canvas';
import { useAppStore } from '../store/useApp';

const store = useAppStore();

const suppoer = ref(false);
onMounted(() => {
  const canvas = document.querySelector('#rain') as HTMLCanvasElement;
  canvas && ranCanvas(canvas);
});

function updateTheme() {
  store.setTheme(store.theme === 'dark' ? 'light' : 'dark');
}
</script>

<style scoped lang="scss">
.canvas {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  overflow: hidden;
  background: linear-gradient(
    45deg,
    var(--im-bg-content-color),
    var(--im-bg-content-color),
    var(--im-bg-container-color)
  );
}
.home {
  display: flex;
  flex-direction: column;
  font-size: 16px;
  width: 100%;
  position: relative;
  backdrop-filter: blur(5px);
}

.main {
  text-align: center;
  position: relative;
  z-index: 1;
  height: calc(100vh - var(--app-header-height));
  min-height: 800px;
  max-width: 100%;
  padding: 20px;
  width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: 28px;
  margin: 16px 0;
  line-height: 32px;
  color: var(--im-gry-color-10);
}

.btns {
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: center;
  margin: 16px 0;
}

.footer {
  text-align: center;
  padding: 16px;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--im-gray-color-8);
  border-top: 1px solid var(--im-gray-color-4);
}
</style>
