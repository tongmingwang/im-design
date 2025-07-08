export interface SwitchPropsType {
  // 是否选中状态
  modelValue: boolean;
  // 是否禁用状态
  disabled?: boolean;
  // 是否只读状态
  readonly?: boolean;
  // 尺寸大小
  size?: string | number;
  // 激活颜色
  activeColor?: string;
  // 非激活颜色
  inactiveColor?: string;
  // 激活文本
  activeText?: string;
  // 非激活文本
  inactiveText?: string;
  // 边框颜色
  borderColor?: string;

  // name
  name?: string;
}
