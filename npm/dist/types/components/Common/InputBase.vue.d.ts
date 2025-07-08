import { InputPropsType } from '../../types/input-props-type';
interface PropsType extends InputPropsType {
    isAppend?: boolean;
    isPrepend?: boolean;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        prefix?(_: {}): any;
        suffix?(_: {}): any;
    };
    refs: {
        inputRef: HTMLInputElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<PropsType, {
    $el: import('vue').Ref<HTMLInputElement | null, HTMLInputElement | null>;
    focus: () => void | undefined;
    blur: () => void | undefined;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    clear: () => any;
    blur: (value: Event) => any;
    change: (value: string) => any;
    focus: (value: Event) => any;
    "update:modelValue": (value: string) => any;
}, string, import('vue').PublicProps, Readonly<PropsType> & Readonly<{
    onClear?: (() => any) | undefined;
    onBlur?: ((value: Event) => any) | undefined;
    onChange?: ((value: string) => any) | undefined;
    onFocus?: ((value: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    inputRef: HTMLInputElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
