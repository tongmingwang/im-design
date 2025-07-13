export interface AnchorData {
  id: string;
  text: string;
}

export interface AnchorProps {
  // 锚点数据
  data?: Array<AnchorData>;

  // 锚点偏移量
  offset?: number;

  // 目标滚动元素
  target?: HTMLElement | string | null;

  label?: string;
}
