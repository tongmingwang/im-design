import { type App } from 'vue';
import ImInput from './ImInput.vue';

ImInput.install = (app: App) => {
  app.component('ImInput', ImInput);
};

export default ImInput;
export { ImInput };
