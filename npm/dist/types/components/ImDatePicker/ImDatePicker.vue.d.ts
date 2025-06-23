import { ImPlaceType } from '../../types';
type __VLS_Props = {
    modelValue?: string;
    disabled?: boolean;
    readonly?: boolean;
    clearable?: boolean;
    placeholder?: string;
    format?: string;
    zIndex?: number;
    placement?: ImPlaceType;
    showTime?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: string) => any;
    "update:modelValue": (value: string) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onChange?: ((value: string) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    zIndex: number;
    disabled: boolean;
    modelValue: string;
    readonly: boolean;
    placeholder: string;
    clearable: boolean;
    showTime: boolean;
    format: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    triggerRef: HTMLDivElement;
    contentRef: HTMLDivElement;
}, HTMLDivElement>;
export default _default;
