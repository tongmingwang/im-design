import { isNumber } from './types';

// 节流函数
export const throttle = <T extends unknown[]>(
  fn: (...args: T) => void,
  delay: number
): ((...args: T) => void) => {
  let timer: any;
  return function (this: unknown, ...args: T) {
    if (timer) return;
    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null;
    }, delay);
  };
};

// 防抖函数
export const debounce = <T extends unknown[]>(
  fn: (...args: T) => void,
  delay: number
): ((...args: T) => void) => {
  let timer: any;
  return function (this: unknown, ...args: T) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

// 判断一个节点是否在x,y坐标范围内
export const isInRange = (
  x: number,
  y: number,
  node: HTMLElement | null
): boolean => {
  if (!node) return false;
  const rect = node.getBoundingClientRect();

  return (
    x >= rect.left &&
    x <= rect.left + rect.width &&
    y >= rect.top &&
    y <= rect.top + rect.height
  );
};

// 判断一个数据是否是百分比字符串还是数字还是带有单位字符串
const suffixes = ['%', 'px', 'em', 'rem', 'vh', 'vw', 'vmin', 'vmax'];
export const getSizeValue = (value: string | number): string => {
  if (typeof value === 'number') return `${value}px`;
  const str = String(value);
  // 判断% px em rem vh vw vmin vmax 等单位字符串
  return value
    ? suffixes.some((suffix) => {
        return str.includes(suffix);
      })
      ? str
      : `${value}px`
    : '';
};

// 判断是不是一个有效的数字
export const isNumberValue = (val: any) => {
  return (
    val !== undefined && val !== null && !Number.isNaN(val) && isNumber(val)
  );
};
