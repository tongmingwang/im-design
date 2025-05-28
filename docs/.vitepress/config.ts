import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'ImDesign',
  lastUpdated: true,
  description: 'A Vue 3 UI library for building high-quality web interfaces.',
  base: '/im-design/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: 'Im Design',
    logo: '/logo.svg',
    // carbonAds: {
    //   code: 'https://github.com/tongmingwang/im-design.git',
    //   placement: 'Hello',
    // },
    search: {
      provider: 'local',
      options: {
        // translations: {
        //   button: {
        //     buttonText: '搜索文档',
        //     buttonAriaLabel: '搜索文档',
        //   },
        //   modal: {
        //     noResultsText: '无法找到相关结果',
        //     resetButtonTitle: '清除查询条件',
        //     footer: {
        //       selectText: '选择',
        //       navigateText: '切换',
        //       closeKeyAriaLabel: '关闭',
        //       closeText: '关闭',
        //     },
        //   },
        // },
      },
    },
    nav: [
      { text: '指南', link: '/getting-started' },
      { text: '组件文档', link: '/button' },
    ],

    sidebar: [
      {
        text: '指南',
        items: [
          { text: '快速开始', link: '/getting-started' },
          { text: '全局主题', link: '/theme' },
        ],
      },
      {
        text: '通用组件',
        items: [
          { text: 'Button 按钮', link: '/button' },
          { text: 'Icon 图标', link: '/icon' },
          { text: 'Layout 布局', link: '/layout' },
          { text: 'Color 色彩', link: '/color' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tongmingwang/im-design.git' },
    ],
  },
});
