import { DefineComponent } from 'vue';
import { ButtonProps } from './ButtonProp';
type ImButton = DefineComponent<ButtonProps, {
    click: () => void;
}>;
export { type ImButton };
