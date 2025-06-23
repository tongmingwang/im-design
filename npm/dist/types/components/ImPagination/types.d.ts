export interface ImPaginationProps {
    total: number;
    size?: number | string;
    pageSize: number;
    pageSizeItems?: number[];
    pageNumber: number;
    layout?: string;
}
