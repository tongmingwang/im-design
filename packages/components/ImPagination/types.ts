export interface ImPaginationProps {
  // 总数
  total: number;
  // 每个按钮大小
  size?: number | string;
  // 每页显示条数
  pageSize: number;
  // 每页显示条数选项
  pageSizeItems?: number[];
  // 当前页码
  pageNumber: number;
  // 布局，默认为'prev, pager, next, jumper', 其中prev表示上一页，next表示下一页，pager表示页码列表，jumper表示跳转按钮。
  layout?: string;
}
