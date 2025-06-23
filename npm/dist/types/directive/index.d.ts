import { App } from 'vue';
import { ripple } from './ripple';
import { loading } from './loading';
declare const _default: {
    install: (app: App) => void;
    ripple: {
        mounted(el: HTMLElement, binding: any): void;
        beforeUnmount(el: HTMLElement): void;
        updated(el: HTMLElement, binding: any): void;
    };
    loading: {
        mounted(el: HTMLElement, binding: any): any;
        beforeUnmount(el: HTMLElement): void;
        updated(el: HTMLElement, bind: any): void | Promise<void>;
    };
};
export default _default;
export { ripple, loading };
