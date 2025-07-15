export interface FormItemProps {
  // 表单项的属性
  label?: string;
  // 表单项的属性名，对应 modelValue 中的字段
  prop: string;
  // 校验规则
  rules?: any[];
  // label 宽度
  labelWidth?: string;
  // label 位置
  labelPosition?: 'left' | 'right' | 'top';
  // 是否显示校验信息
  showMessage?: boolean;
  // 是否必填
  required?: boolean;
  // 显示icon
  showIcon?: boolean;
}

export interface FormProps {
  // 表单数据模型
  modelValue: Record<string, any>;
  // 校验规则
  rules?: Record<string, any>;
  // label 宽度
  labelWidth?: string | number;
  // label 位置
  labelPosition?: 'left' | 'right' | 'top';
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

// 验证
export interface FormValidateResult {
  status: boolean;
  result: Record<string, any>;
  message: Record<string, any>;
}
