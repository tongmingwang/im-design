// css类名定义统一使用 bem设计规范
export const useBem = (name: string) => {
  const baseName = 'im-' + name; // 前缀

  return {
    b: () => baseName,
    e: (element: string) => `${baseName}__${element}`,
    m: (modifier: string) => `${baseName}--${modifier}`,
    is: (name: string, state: boolean) => (state ? `is-${name}` : ''),
  };
};
