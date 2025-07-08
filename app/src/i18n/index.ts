import { createI18n } from 'vue-i18n';
import zhCN from './lang/zh-CN.json';
import enUS from './lang/en-US.json';

const lang = localStorage.getItem('lang') || 'zh-CN';
const i18n = createI18n({
  locale: lang,
  fallbackLocale: 'en-US',
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS,
  },
});

export default i18n;
