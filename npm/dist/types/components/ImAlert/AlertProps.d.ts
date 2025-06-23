export interface AlertProps {
    message?: string;
    color?: 'success' | 'error' | 'warning' | 'primary';
    variant?: 'tonal' | 'outlined';
    title?: string;
    showIcon?: boolean;
    closable?: boolean;
}
