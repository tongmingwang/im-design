// Top navigation
const nav = [
  { text: 'Home', link: '/en/' },
  { text: 'Quick Start', link: '/en/getting-started' },
  { text: 'Components', link: '/en/button' },
  { text: 'Theme', link: '/en/theme' },
];

// Sidebar
const sidebar = [
  {
    text: 'Guide',
    items: [
      { text: 'Quick Start', link: '/en/getting-started' },
      { text: 'Design Principles', link: '/en/design' },
      { text: 'Theme', link: '/en/theme' },
    ],
  },
  {
    text: 'General Components',
    items: [
      { text: 'Button', link: '/en/button' },
      { text: 'Icon', link: '/en/icon' },
      { text: 'Layout', link: '/en/layout' },
      { text: 'Color', link: '/en/color' },
      { text: 'Divider', link: '/en/divider' },
    ],
  },
  {
    text: 'Navigation Components',
    items: [
      { text: 'Anchor', link: '/en/anchor' },
      { text: 'Breadcrumb', link: '/en/breadcrumb' },
      { text: 'Dropdown', link: '/en/dropdown' },
      { text: 'Pagination', link: '/en/pagination' },
      { text: 'BackTop', link: '/en/backtop' },
      { text: 'Tabs', link: '/en/tabs' },
      { text: 'Menu', link: '/en/menu' },
      { text: 'Page Header', link: '/en/page-header' },
    ],
  },
  {
    text: 'Form Components',
    items: [
      { text: 'Input', link: '/en/input' },
      { text: 'Input Number', link: '/en/input-number' },
      { text: 'Select', link: '/en/select' },
      { text: 'Checkbox', link: '/en/checkbox' },
      { text: 'Radio', link: '/en/radio' },
      { text: 'Date Picker', link: '/en/date-picker' },
    ],
  },
  {
    text: 'Feedback Components',
    items: [
      { text: 'Alert', link: '/en/alert' },
      { text: 'Drawer', link: '/en/drawer' },
      { text: 'Message', link: '/en/message' },
      { text: 'Dialog', link: '/en/dialog' },
      { text: 'Loading', link: '/en/loading' },
      { text: 'Popover', link: '/en/popover' },
      { text: 'Tooltip', link: '/en/tooltip' },
    ],
  },
  {
    text: 'Data Display',
    items: [
      { text: 'List', link: '/en/list' },
      { text: 'Avatar', link: '/en/avatar' },
      { text: 'Card', link: '/en/card' },
      { text: 'Tag', link: '/en/tag' },
      { text: 'Badge', link: '/en/badge' },
      { text: 'Collapse', link: '/en/collapse' },
      { text: 'Table', link: '/en/table' },
      { text: 'Empty', link: '/en/empty' },
    ],
  },
];

const SITE_TITLE = 'Im Design';
const SITE_DESCRIPTION =
  'Carefully crafted Vue3 component library for ultimate experience';
const REPO_LINK = 'https://github.com/tongmingwang/im-design';
const BASE_PATH = '/im-design/';

export default {
  nav,
  sidebar,
  // Footer
  footer: {
    message: 'Released under the MIT License',
    copyright: `Copyright © 2019-${new Date().getFullYear()} TongmingWang`,
  },
  // Edit link
  editLink: {
    pattern: `${REPO_LINK}/edit/main/docs/:path`,
    text: 'Edit this page on GitHub',
  },

  // Last updated
  lastUpdated: {
    text: 'Last Updated',
    formatOptions: {
      dateStyle: 'short',
      timeStyle: 'medium',
    },
  },

  // Head config
  head: [
    ['link', { rel: 'icon', href: `${BASE_PATH}favicon.ico` }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
    ['meta', { property: 'og:title', content: SITE_TITLE }],
    ['meta', { property: 'og:description', content: SITE_DESCRIPTION }],
    ['meta', { property: 'og:url', content: `${REPO_LINK}${BASE_PATH}` }],
  ],

  search: {
    provider: 'local',
    options: {
      translations: {
        button: {
          buttonText: 'Search',
          buttonAriaLabel: 'Search',
        },
        modal: {
          noResultsText: 'No results found',
          resetButtonTitle: 'Reset search',
          footer: {
            selectText: 'Select',
            navigateText: 'Navigate',
            closeText: 'Close',
          },
        },
      },
    },
  },
};
