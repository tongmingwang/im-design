type __VLS_Props = {
    disabled?: boolean;
    vertical?: boolean;
    color?: 'primary' | 'success' | 'warning' | 'error' | '';
    name: string | number;
    label?: string | number;
    subActives?: Array<string | number>;
    activeName?: string | number;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
        content?(_: {}): any;
    };
    refs: {
        triggerRef: HTMLLIElement;
        contentRef: HTMLDivElement;
    };
    rootEl: HTMLLIElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    label: string | number;
    name: string | number;
    color: "primary" | "success" | "warning" | "error" | "";
    disabled: boolean;
    vertical: boolean;
    subActives: Array<string | number>;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    triggerRef: HTMLLIElement;
    contentRef: HTMLDivElement;
}, HTMLLIElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
