export interface RadioGroupProps {
  modelValue?: string | number | null;
  disabled?: boolean;
  readonly?: boolean;
  size?: number | string;
  vertical?: boolean;
  variant?: 'button' | '';
}

export interface RadioProps {
  value: string | number;
  label?: string;
  disabled?: boolean;
  readonly?: boolean;
}
