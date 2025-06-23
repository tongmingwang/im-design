import { ImPlaceType } from '../../types';
type __VLS_Props = {
    placement?: ImPlaceType;
    offset?: number;
    zIndex?: number;
    arrow?: boolean;
    scrollClose?: boolean;
    modelValue?: boolean;
    trigger?: 'click' | 'hover';
    content?: string;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
        content?(_: {}): any;
    };
    refs: {
        triggerRef: HTMLSpanElement;
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
    content: string;
    placement: ImPlaceType;
    arrow: boolean;
    scrollClose: boolean;
    trigger: "click" | "hover";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    triggerRef: HTMLSpanElement;
}, HTMLSpanElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
