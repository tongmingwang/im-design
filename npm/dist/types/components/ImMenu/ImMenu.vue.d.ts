type __VLS_Props = {
    modelValue: string | number;
    subActives?: Array<string | number>;
    disabled?: boolean;
    vertical?: boolean;
    color?: 'primary' | 'success' | 'warning' | 'error' | '';
    align?: 'left' | 'center' | 'right';
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    color: "primary" | "success" | "warning" | "error" | "";
    disabled: boolean;
    modelValue: string | number;
    vertical: boolean;
    subActives: Array<string | number>;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLUListElement>;
export default _default;
