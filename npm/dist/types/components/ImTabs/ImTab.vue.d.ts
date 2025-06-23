type __VLS_Props = {
    name: string | number | undefined;
    label?: string;
    modelValue?: string;
    disabled?: boolean;
    color?: string;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLLIElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (name: string | number) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onChange?: ((name: string | number) => any) | undefined;
}>, {
    label: string;
    name: string | number | undefined;
    color: string;
    disabled: boolean;
    modelValue: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLLIElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
