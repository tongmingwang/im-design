import { defineConfig } from 'vitepress';
import { nav, sidebar } from './menu';
// 基础配置常量
const SITE_TITLE = 'Im Design';
const SITE_DESCRIPTION = '🎉 匠心打造，极致体验的 Vue3 组件库';
const REPO_LINK = 'https://github.com/tongmingwang/im-design';
const BASE_PATH = '/im-design/'; // 部署到不同服务需要不同设置 github: /im-design/

export default defineConfig({
  // 基础元数据
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  lang: 'zh-CN', // 使用标准语言代码
  base: BASE_PATH,

  // 头部配置
  head: [
    ['link', { rel: 'icon', href: `${BASE_PATH}logo.svg` }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
    ['meta', { property: 'og:title', content: SITE_TITLE }],
    ['meta', { property: 'og:description', content: SITE_DESCRIPTION }],
    ['meta', { property: 'og:url', content: `${REPO_LINK}${BASE_PATH}` }],
  ],

  sitemap: {
    hostname: 'https://tongmingwang.github.io/im-design',
    lastmodDateOnly: false,
  },

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
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '暂无相关结果',
            resetButtonTitle: '清空搜索',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },
    // 国际化配置
    i18nRouting: false,

    // 社交链接
    socialLinks: [
      { icon: 'github', link: REPO_LINK },
      {
        icon: 'codesandbox',
        link: 'https://codesandbox.io/p/github/tongmingwang/im-design-template/main?file=%2Fsrc%2Fcomponents%2FHelloWorld.vue&import=true&workspaceId=ws_A8qgrA7LwQ5K5hwJWrbySH',
      },
    ],

    // 编辑链接
    editLink: {
      pattern: `${REPO_LINK}/edit/main/docs/:path`,
      text: '在 GitHub 上编辑此页',
    },

    // 页脚
    footer: {
      message: '基于 MIT 协议发布',
      copyright: `版权所有 © 2025-${new Date().getFullYear()} im-design`,
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

    // 大纲配置
    outline: {
      level: 'deep',
      label: '本页目录',
    },
  },
  // Markdown 配置
  markdown: {
    lineNumbers: true,
  },
});
