import ImIcon from './ImIcon.vue';
import { type App } from 'vue';

ImIcon.install = function (Vue: App) {
  Vue.component('ImIcon', ImIcon);
};

export default ImIcon;
