type __VLS_Props = {
    modelValue: boolean | Array<string>;
    value?: string | number;
    disabled?: boolean;
    readonly?: boolean;
    label?: string;
    indeterminate?: boolean;
    checked?: boolean;
    tabindex?: number;
    size?: string | number;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLLabelElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    label: string;
    size: string | number;
    disabled: boolean;
    modelValue: boolean | Array<string>;
    value: string | number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLLabelElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
