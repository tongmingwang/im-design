import { defineConfig } from 'vitepress';
import { nav, sidebar } from './menu';
import { search } from './search';

// 基础配置常量
const SITE_TITLE = 'Im Design';
const SITE_DESCRIPTION = '匠心打造，极致体验的 Vue3 组件库';
const REPO_LINK = 'https://github.com/tongmingwang/im-design';
const BASE_PATH = '/im-design/';

export default defineConfig({
  // 基础元数据
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  lang: 'zh-CN', // 使用标准语言代码
  base: BASE_PATH,

  // 头部配置
  head: [
    ['link', { rel: 'icon', href: `${BASE_PATH}favicon.ico` }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
    ['meta', { property: 'og:title', content: SITE_TITLE }],
    ['meta', { property: 'og:description', content: SITE_DESCRIPTION }],
    ['meta', { property: 'og:url', content: `${REPO_LINK}${BASE_PATH}` }],
  ],

  // 主题配置
  themeConfig: {
    logo: {
      src: '/logo.svg',
      alt: `${SITE_TITLE} Logo`,
    },

    // 导航与侧边栏
    nav,
    sidebar,

    // 搜索功能
    search,

    // 国际化配置
    i18nRouting: true,

    // 社交链接
    socialLinks: [{ icon: 'github', link: REPO_LINK }],

    // 编辑链接
    editLink: {
      pattern: `${REPO_LINK}/edit/main/docs/:path`,
      text: '在 GitHub 上编辑此页',
    },

    // 页脚
    footer: {
      message: '基于 MIT 协议发布',
      copyright: `版权所有 © 2019-${new Date().getFullYear()} TongmingWang`,
    },

    // 文档页脚
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    // 最后更新时间
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    // 返回顶部按钮
    returnToTop: true,

    // 大纲配置
    outline: {
      level: 'deep',

      label: '本页目录',
    },
  },

  // 多语言配置
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/',
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        // 英文版覆盖配置
        docFooter: {
          prev: 'Previous',
          next: 'Next',
        },
        lastUpdated: {
          text: 'Last Updated',
        },
        outline: {
          label: 'On this page',
        },
      },
    },
  },

  // 构建输出配置
  build: {
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue', 'vue-router'],
        },
      },
    },
  },

  // 开发服务器配置
  server: {
    port: 5173,
    host: '0.0.0.0',
  },

  // Markdown 配置
  markdown: {
    lineNumbers: true,
    config: (md) => {
      // 添加 markdown-it 插件
    },
  },
});
