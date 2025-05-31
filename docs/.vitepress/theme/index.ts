// .vitepress/theme/index.js
import Im from 'im-design';
import 'im-design/dist/index.css';
import DefaultTheme from 'vitepress/theme';
import Layout from './Layout.vue';

export default {
  extends: DefaultTheme,
  layout: Layout,
  enhanceApp({ app, router, siteData }) {
    app.use(Im);
  },
};
