import { createApp } from 'vue';
import App from './App.vue';
import ImDesign from 'im-design';
import 'im-design/dist/index.css';
import './assets/app.scss';
import router from './router';
import { createPinia } from 'pinia';
import i18n from './i18n';
import PageUi from './components/page';

createApp(App)
  .use(ImDesign)
  .use(router)
  .use(createPinia())
  .use(PageUi)
  .use(i18n)
  .mount('#root');
