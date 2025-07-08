type __VLS_Props = {
    modelValue?: string | number;
    options?: Array<{
        label: string | number;
        value: string | number;
        disabled?: boolean | undefined;
    }>;
    width?: string | number;
    size?: string | number;
    placeholder?: string;
    clearable?: boolean;
    zIndex?: number;
    multiple?: boolean;
    disabled?: boolean;
    maxTag?: number;
    arrow?: boolean;
    offset?: number;
    scrollClose?: boolean;
    emptyText?: string;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        downIcon?(_: {}): any;
        clearIcon?(_: {}): any;
    };
    refs: {
        triggerRef: HTMLDivElement;
        listRef: HTMLUListElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    offset: number;
    width: string | number;
    arrow: boolean;
    scrollClose: boolean;
    disabled: boolean;
    modelValue: string | number;
    placeholder: string;
    clearable: boolean;
    multiple: boolean;
    options: Array<{
        label: string | number;
        value: string | number;
        disabled?: boolean | undefined;
    }>;
    maxTag: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    triggerRef: HTMLDivElement;
    listRef: HTMLUListElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
