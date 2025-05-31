import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'ImDesign',
  lastUpdated: true,
  description:
    '一个基于 Vue3 的组件库，旨在通过提供丰富的组件和灵活的配置来帮助开发者快速构建高质量的前端应用。',
  base: '/im-design/',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: 'Im Design',
    logo: '/logo.svg',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present TongMing Wang. All rights reserved.',
    },
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
          { text: 'Divider 分割线', link: '/divider' },
        ],
      },
      {
        text: '导航组件',
        items: [
          {
            text: 'Anchor 锚点',
            link: '/anchor',
          },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tongmingwang/im-design.git' },
    ],
  },
});
