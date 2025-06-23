export interface ButtonProps {
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    color?: 'primary' | 'info' | 'error' | 'success' | 'warning' | 'default';
    size?: string | number;
    shape?: 'circle' | 'round' | 'square';
    loading?: boolean;
    text?: string;
    variant?: 'text' | 'tonal' | 'outlined';
    tabindex?: number;
    width?: string;
}
