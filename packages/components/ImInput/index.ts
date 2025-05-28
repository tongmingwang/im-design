import { type App, type DefineComponent } from 'vue';
import ImInput from './ImInput.vue';
import { type InputProps } from './InputProps';

ImInput.install = (app: App) => {
  app.component('ImInput', ImInput);
};

export default ImInput as DefineComponent<InputProps>;
export { ImInput, type InputProps };
