export const useAnimation = (placement: string) => {
  const transformValue = placement.toLowerCase().includes('bottom')
    ? 'translateY(-10px)'
    : 'translateY(10px)';
  // 用这个来开始进入动画
  function onEnter(el: any, done: () => void) {
    el.style.transform = transformValue;
    el.style.opacity = '0';
    el.style.pointerEvents = 'none';

    el.getBoundingClientRect();
    // 调用回调函数 done 表示过渡结束
    // 如果与 CSS 结合使用，则这个回调是可选参数
    el.style.transform = 'translateY(0px)';
    el.style.opacity = '1';
    el.style.pointerEvents = 'auto';
    done();
  }

  // 在离开过渡开始时调用
  // 用这个来开始离开动画
  async function onLeave(el: any, done: () => void): Promise<void> {
    // 调用回调函数 done 表示过渡结束
    // 如果与 CSS 结合使用，则这个回调是可选参数
    el.style.transform = transformValue;
    el.style.opacity = '0';
    el.getBoundingClientRect();
    el.style.pointerEvents = 'none';
    const leaveHandle = () => {
      done();
      if (el) {
        el.style.transform = 'translateY(0px)';
        el.style.pointerEvents = 'auto';
      }
      el.removeEventListener('transitionend', leaveHandle);
    };
    el.addEventListener('transitionend', leaveHandle, { passive: true });
  }

  return {
    onEnter,
    onLeave,
  };
};
