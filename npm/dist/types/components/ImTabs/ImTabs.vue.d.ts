import { TabsProps } from './types';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {
        tabRef: HTMLUListElement;
    };
    rootEl: HTMLUListElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<TabsProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: string) => any;
    "update:modelValue": (value: string) => any;
}, string, import('vue').PublicProps, Readonly<TabsProps> & Readonly<{
    onChange?: ((value: string) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    color: "primary" | "success" | "warning" | "danger" | "default";
    align: "center" | "right" | "left";
    modelValue: string | number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    tabRef: HTMLUListElement;
}, HTMLUListElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
