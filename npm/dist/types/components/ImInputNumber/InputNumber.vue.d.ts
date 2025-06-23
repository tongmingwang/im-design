import { InputPropsType } from '../../types/input-props-type';
interface PropsType extends InputPropsType {
    controlRight?: boolean;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        prefix?(_: {}): any;
        suffix?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement & HTMLInputElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<PropsType, {
    $el: import('vue').Ref<HTMLInputElement | null, HTMLInputElement | null>;
    focus: () => void | undefined;
    blur: () => void | undefined;
    getInput: () => any;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    blur: () => any;
    change: (value: string | number) => any;
    focus: () => any;
    clear: () => any;
    "update:modelValue": (value: string | number) => any;
}, string, import('vue').PublicProps, Readonly<PropsType> & Readonly<{
    onBlur?: (() => any) | undefined;
    onChange?: ((value: string | number) => any) | undefined;
    onFocus?: (() => any) | undefined;
    onClear?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement & HTMLInputElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
