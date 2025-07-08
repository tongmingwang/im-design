import { ImPlaceType } from '../../types';
type __VLS_Props = {
    modelValue?: boolean;
    trigger?: 'click' | 'hover' | 'contextmenu';
    placement?: ImPlaceType;
    zIndex?: number;
    arrow?: boolean;
    offset?: number;
    scrollClose?: boolean;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
        content?(_: {}): any;
    };
    refs: {
        dropdownRef: HTMLSpanElement;
    };
    rootEl: HTMLSpanElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    offset: number;
    zIndex: number;
    placement: ImPlaceType;
    arrow: boolean;
    scrollClose: boolean;
    modelValue: boolean;
    trigger: "click" | "hover" | "contextmenu";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    dropdownRef: HTMLSpanElement;
}, HTMLSpanElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
