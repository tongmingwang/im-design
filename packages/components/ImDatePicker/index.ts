import type { App } from 'vue';
import ImDatePicker from './ImDatePicker.vue';

ImDatePicker.install = (app: App) => {
  app.component('ImDatePicker', ImDatePicker);
};

export default ImDatePicker;
