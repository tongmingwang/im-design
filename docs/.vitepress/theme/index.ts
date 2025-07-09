// .vitepress/theme/index.js
import Im, { ImDirective } from 'im-design';
import 'im-design/dist/index.css';
import DefaultTheme from 'vitepress/theme';
import './styles/custom.css';
import Layout from './Layout.vue';
import Api from './Api.vue';

export default {
  ...DefaultTheme,
  Layout: Layout,
  enhanceApp({ app, router, siteData }) {
    app.use(Im);
    app.use(ImDirective);
    app.component('Api', Api);
  },
};
