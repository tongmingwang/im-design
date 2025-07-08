export interface TabsProps {
  modelValue: string | number;
  color?: 'primary' | 'success' | 'warning' | 'danger' | 'default';
  align?: 'center' | 'right' | 'left';
}

export interface TabProps {
  label?: string;
  name: string | number;
  color?: 'primary' | 'success' | 'warning' | 'danger' | 'default';
  disabled?: boolean;
}
