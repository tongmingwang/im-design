// 节流函数
export const throttle = (fn: (e: Event) => void, delay: number) => {
  let timer: any = null;
  return function (...args: Array<any>) {
    if (timer) return;
    timer = setTimeout(() => {
      // @ts-ignore
      fn.apply(this, args);
      timer = null;
    }, delay);
  };
};

// 防抖函数
export const debounce = (fn: (e: Event) => void, delay: number) => {
  let timer: any = null;
  return function (...args: Array<any>) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      // @ts-ignore
      fn.apply(this, args);
    }, delay);
  };
};
