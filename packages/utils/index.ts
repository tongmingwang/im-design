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
