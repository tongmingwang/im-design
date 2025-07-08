export interface MenuProps {
  modelValue?: string | number;
  subActiveList?: Array<string | number>;
  disabled?: boolean;
  vertical?: boolean;
  color?: 'primary' | 'success' | 'warning' | 'error' | '';
  align?: 'left' | 'center' | 'right';
}

export interface MenuProvide {
  isActive: (name: string | number) => boolean;
  setActiveName: (name: string | number) => void;
  isSubActive: (name: string | number) => boolean;
  isVertical: () => boolean;
}

export interface MenuItemProps {
  name?: string | number;
  disabled?: boolean;
  label?: string | number;
}
