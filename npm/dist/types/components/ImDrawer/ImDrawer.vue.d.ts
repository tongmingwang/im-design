import { DrawerProps } from './DrawerProps';
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
declare const __VLS_component: import('vue').DefineComponent<DrawerProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    close: () => any;
    "update:modelValue": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<DrawerProps> & Readonly<{
    onClose?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}>, {
    mask: boolean;
    size: string | number;
    placement: "left" | "right" | "top" | "bottom";
    modelValue: boolean;
    closeOnClickMask: boolean;
    closeOnEscape: boolean;
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
