import { type App, type DefineComponent } from 'vue';
import ImButton from './ImButton.vue';
import { type ButtonProps } from './ButtonProp';

ImButton.install = (app: App) => {
  app.component('ImButton', ImButton);
};

export default ImButton;
export { ImButton, type ButtonProps };
