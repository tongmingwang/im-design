export interface DrawerProps {
  modelValue?: boolean;
  mask?: boolean;
  closeOnClickMask?: boolean;
  zIndex?: number;
  size?: string | number;
  placement?: 'left' | 'right' | 'top' | 'bottom';
  // 支持按下 ESC 键关闭抽屉
  closeOnEscape?: boolean;
}
