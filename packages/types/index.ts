export type ImDesignOptions = {
  size?: number | string;
  zIndex?: number;
};

// 位置
export type ImPlaceType =
  | 'top'
  | 'top-left'
  | 'top-right'
  | 'bottom'
  | 'bottom-left'
  | 'bottom-right'
  | 'left'
  | 'right'
  | 'left-top'
  | 'left-bottom'
  | 'right-top'
  | 'right-bottom';

export type LoadingOption = {
  loading: boolean;
  loadingText?: string;
  size?: number | string;
  zIndex?: number;
};
