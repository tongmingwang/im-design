export interface FormItemProps {
  label?: string;
  prop: string;
  rules?: any[];
  labelWidth?: string;
  labelPosition?: 'left' | 'right' | 'top';
  showMessage?: boolean;
}

export interface FormProps {
  modelValue: Record<string, any>;
  rules?: Record<string, any>;
  labelWidth?: string;
  labelPosition?: 'left' | 'right' | 'top';
  showMessage?: boolean;
}

// 校验规则的类型定义。
export interface ruleItem {
  message?: string;
  trigger?: 'blur' | 'change';
  validator?: (value: any) => Promise<string | undefined>;
  max?: number;
  min?: number;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
}
