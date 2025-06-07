// .vitepress/theme/index.js
import Im from '../../../npm/dist/im-design';
// import 'im-design/dist/index.css';
import '../../../npm/dist/index.css';
import DefaultTheme from 'vitepress/theme';
import Layout from './Layout.vue';

export default {
  extends: DefaultTheme,
  layout: Layout,
  enhanceApp({ app, router, siteData }) {
    app.use(Im);
  },
};
