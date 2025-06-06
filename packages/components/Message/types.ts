export interface MessageItem {
  id: number | string;
  msg: string;
  duration?: number;
  color?: 'primary' | 'error' | 'warning' | 'success';
}
