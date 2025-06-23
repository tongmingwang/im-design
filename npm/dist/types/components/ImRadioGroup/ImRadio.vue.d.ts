type __VLS_Props = {
    modelValue: string | number;
    value: string | number;
    disabled?: boolean;
    readonly?: boolean;
    size?: string | number;
    label?: string | number;
    variant?: 'button';
    vertical?: boolean;
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
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: string | number) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onChange?: ((value: string | number) => any) | undefined;
}>, {
    modelValue: string | number;
    value: string | number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLLabelElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
