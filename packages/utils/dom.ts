// 取消动画
export const removeAnimate = (
  el: HTMLElement | null,
  option?: GetAnimationsOptions
): boolean => {
  if (!el || !el.getAnimations) return false;
  el.getAnimations(option).forEach((animation) => animation.cancel());
  return true;
};

// 等待动画完成
export const waitForAnimate = async (
  el: HTMLElement | null,
  option?: GetAnimationsOptions
): Promise<boolean> => {
  if (!el || !el.getAnimations) return false;
  try {
    await Promise.all(
      el.getAnimations(option).map((animation: Animation) => animation.finished)
    );
    return true;
  } catch (error: unknown) {
    return false;
  }
};

// 获取屏幕宽高
export const getScreeWH = () => {
  return {
    width:
      window?.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth,
    height:
      window?.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight,
  };
};

/**
 * 判断是否锁定滚动条
 */

export const isLockScroll = () => {
  if (!document) return false;
  return (
    document.body.style.overflow === 'hidden' ||
    document.body.classList.contains('im-lock-scroll')
  );
};

// 更新锁定滚动条状态
export const updateLockScroller = async () => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 0));
    if (!document) return Promise.resolve();
    const els = Array.from(document.querySelectorAll('.is-im-lock-scroll'));

    if (els.length) {
      !isLockScroll()
        ? document.documentElement.classList.add('im-lock-scroll')
        : '';
    } else {
      document.documentElement.classList.remove('im-lock-scroll');
    }
  } catch (error) {}
};

// 判断是不是移动端
export function isMobile() {
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const isSmallScreen = window.innerWidth <= 768;
  return isTouch && isSmallScreen;
}
