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
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/button' },
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Theme', link: '/theme' },
          { text: 'Getting Started', link: '/getting-started' },
        ],
        // collapsible: true,
      },
      {
        text: 'Base Components',
        items: [
          { text: 'Button', link: '/button' },
          { text: 'Icons', link: '/icon' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tongmingwang/im-design.git' },
    ],
  },
});
