type __VLS_Props = {
    label?: string;
    modelValue?: string;
    color?: 'primary' | 'error' | 'success' | 'warning' | '';
    align?: 'center' | 'right' | 'left';
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: string) => any;
    "update:modelValue": (value: string) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onChange?: ((value: string) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    label: string;
    color: "primary" | "error" | "success" | "warning" | "";
    align: "center" | "right" | "left";
    modelValue: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    tabRef: HTMLUListElement;
}, HTMLUListElement>;
export default _default;
