export const search: any = {
  provider: 'local',
  options: {
    locales: {
      '/': {
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
      '/en': {
        translations: {
          button: {
            buttonText: 'Search xxx',
            buttonAriaLabel: 'Search documentation',
          },
          modal: {
            noResultsText: 'No results found',
            resetButtonTitle: 'Clear search',
            footer: {
              selectText: 'Select xxx',
              navigateText: 'Navigate',
              closeText: 'Close',
            },
          },
        },
      },
    },
  },
};
