type __VLS_Props = {
    date?: Date;
    yearLimit?: [number, number];
    month?: number[];
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (data: {
        year?: number | string;
        month?: string | number;
    }) => any;
    close: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onChange?: ((data: {
        year?: number | string;
        month?: string | number;
    }) => any) | undefined;
    onClose?: (() => any) | undefined;
}>, {
    date: Date;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    wrapRef: HTMLDivElement;
}, HTMLDivElement>;
export default _default;
