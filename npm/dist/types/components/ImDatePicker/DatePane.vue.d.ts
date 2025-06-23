type __VLS_Props = {
    date?: string;
    isRange?: boolean;
    visible?: boolean;
    showTime?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (date: Date) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onChange?: ((date: Date) => any) | undefined;
}>, {
    date: string;
    visible: boolean;
    isRange: boolean;
    showTime: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
