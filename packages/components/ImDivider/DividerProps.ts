export interface DividerProps {
  vertical?: boolean; // 是否垂直方向展示，默认为水平方向
  color?: string; // 分割线颜色，默认为灰色
  size?: number | string; // 分割线大小，默认为1px
  margin?: number | string; // 分割线两侧的间距，默认为 8px
  className?: string; // 自定义类名
  textLeftWidth?: string | number; // 文字左侧宽度，默认为0
  textRightWidth?: string | number; // 文字右侧宽度，默认为0
}
