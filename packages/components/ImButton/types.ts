import type { DefineComponent } from 'vue';
import type { ButtonProps } from './ButtonProp';
type ImButton = DefineComponent<
  ButtonProps,
  {
    click: () => void;
  }
>;
export { type ImButton };
