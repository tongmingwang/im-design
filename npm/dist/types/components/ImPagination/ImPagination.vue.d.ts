import { ImPaginationProps } from './types';
declare const _default: import('vue').DefineComponent<ImPaginationProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (pageData: {
        pageNumber: number;
        pageSize: number;
    }) => any;
}, string, import('vue').PublicProps, Readonly<ImPaginationProps> & Readonly<{
    onChange?: ((pageData: {
        pageNumber: number;
        pageSize: number;
    }) => any) | undefined;
}>, {
    size: number | string;
    total: number;
    pageSize: number;
    pageSizeItems: number[];
    pageNumber: number;
    layout: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
