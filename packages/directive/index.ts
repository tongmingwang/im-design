import type { App } from 'vue';
import { ripple } from './ripple';
import { loading } from './loading';

const install = function (app: App) {
  if (app && app.directive) {
    app.directive('ripple', ripple);
    app.directive('loading', loading);
  } else {
    console.log('请在Vue3中使用');
  }
};

export default {
  install,
  ripple,
  loading,
};

export { ripple, loading };
