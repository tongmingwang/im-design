// .vitepress/theme/index.js
import Im from 'im-design';
import 'im-design/dist/index.css';
import DefaultTheme from 'vitepress/theme';

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.use(Im);
  },
};
