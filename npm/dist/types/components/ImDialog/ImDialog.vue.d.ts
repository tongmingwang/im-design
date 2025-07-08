type __VLS_Props = {
    modelValue: boolean;
    closeOnClickMask?: boolean;
    width?: string;
    height?: string;
    fullscreen?: boolean;
    closeOnEscape?: boolean;
    mask?: boolean;
    zIndex?: number;
    top?: string | number;
    getTarget?: () => HTMLElement | null;
    draggable?: boolean;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {
        dialogRef: HTMLDivElement;
        contentRef: HTMLDivElement;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}>, {
    height: string;
    mask: boolean;
    width: string;
    zIndex: number;
    fullscreen: boolean;
    getTarget: () => HTMLElement | null;
    modelValue: boolean;
    draggable: boolean;
    closeOnClickMask: boolean;
    closeOnEscape: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    dialogRef: HTMLDivElement;
    contentRef: HTMLDivElement;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
