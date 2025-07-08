export interface InputPropsType {
  modelValue?: string | number | any;
  disabled?: boolean;
  readonly?: boolean;
  placeholder?: string;
  type?: string;
  name?: string;
  id?: string;
  maxlength?: number;
  minlength?: number;
  max?: number;
  min?: number;
  step?: number;
  pattern?: string;
  required?: boolean;
  autocomplete?: string;
  autofocus?: boolean;
  tabindex?: number;
  precision?: number;

  size?: number | string;
  prefix?: string;
  suffix?: string;
  clearable?: boolean;
  passwordEye?: boolean;
  showWordCount?: boolean;
  prepend?: string;
  append?: string;
}
