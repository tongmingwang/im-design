export interface DialogProps {
  modelValue: boolean;
  closeOnClickMask?: boolean;
  width?: string;
  height?: string;
  fullscreen?: boolean;
  closeOnEscape?: boolean;
  mask?: boolean;
  zIndex?: number;
  top?: string | number;
  getTarget?: () => HTMLElement | null;
  draggable?: boolean;
}
