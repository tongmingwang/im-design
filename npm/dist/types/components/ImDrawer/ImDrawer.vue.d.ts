type __VLS_Props = {
    modelValue: boolean;
    mask?: boolean;
    closeOnClickMask?: boolean;
    placement?: 'left' | 'right' | 'top' | 'bottom';
    size?: string | number;
    zIndex?: string | number;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {
        containerRef: HTMLDivElement;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}>, {
    size: string | number;
    mask: boolean;
    zIndex: string | number;
    modelValue: boolean;
    placement: "left" | "right" | "top" | "bottom";
    closeOnClickMask: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    containerRef: HTMLDivElement;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
