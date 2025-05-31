<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import './styles/custom.css'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
</script>

<template>
  <Layout>
    <!-- 首页定制 -->
    <template #home-hero-before>
      <div class="home-banner">
        <img src="/public/logo.svg" alt="Logo" class="home-logo">
      </div>
    </template>

    <template #home-hero-after>
      <div class="features" v-if="frontmatter.features">
        <div v-for="(feature, index) in frontmatter.features" :key="index" class="feature">
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.details }}</p>
        </div>
      </div>
    </template>

    <!-- 全局页脚 -->
    <template #layout-bottom>
      <footer class="footer">
        <p>© 2023 Im Design. All rights reserved.</p>
      </footer>
    </template>
  </Layout>
</template>

<style scoped>
  .home-banner {
    text-align: center;
    margin-bottom: 2rem;
  }

  .home-logo {
    height: 120px;
    width: auto;
  }

  .features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
  }

  .feature {
    padding: 1rem;
    border-radius: 8px;
    background: var(--vp-c-bg-soft);
  }

  .footer {
    text-align: center;
    padding: 2rem;
    margin-top: 2rem;
    border-top: 1px solid var(--vp-c-divider);
  }
</style>