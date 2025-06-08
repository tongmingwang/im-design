import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Im Design',
  lastUpdated: true,
  description:
    '一个基于 Vue3 的组件库，旨在通过提供丰富的组件和灵活的配置来帮助开发者快速构建高质量的前端应用。',
  base: '/im-design/',
  head: [['link', { rel: 'icon', href: '/im-design/favicon.ico' }]],
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
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeKeyAriaLabel: '关闭',
              closeText: '关闭',
            },
          },
        },
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
          {
            text: 'Breadcrumb 面包屑',
            link: '/breadcrumb',
          },
          {
            text: 'Dropdown 下拉菜单',
            link: '/dropdown',
          },
          {
            text: 'Pagination 分页',
            link: '/pagination',
          },
        ],
      },
      {
        text: 'Form表单组件',
        items: [
          {
            text: 'Input 输入框',
            link: '/input',
          },
          { text: 'Select 选择器', link: '/select' },
        ],
      },
      {
        text: '反馈组件',
        items: [
          { text: 'Alert 警告提示', link: '/alert' },
          { text: 'Drawer 抽屉', link: '/drawer' },
          { text: 'Message 消息提示', link: '/message' },
          { text: 'Dialog 对话框', link: '/dialog' },
        ],
      },
      {
        text: '数据展示',
        items: [
          { text: 'List 列表', link: '/list' },
          { text: 'Card 卡片', link: '/card' },
          { text: 'Avatar 头像', link: '/avatar' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tongmingwang/im-design.git' },
    ],
  },
});
