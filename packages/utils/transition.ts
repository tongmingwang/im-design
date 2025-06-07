export const fadeApi = () => {
  return {
    onEnter: (el: any, done: () => void) => {
      el.style.opacity = 0;
      el.style.transition = 'opacity 200ms ease';
      el.getBoundingClientRect(); // force reflow
      el.style.opacity = 1;
      done();
    },
    onLeave: async (el: any, done: () => void) => {
      el.style.opacity = 0;
      el.style.transition = 'opacity 200ms ease';
      await new Promise((resolve) => requestAnimationFrame(resolve));
      const handle = () => {
        done();
        if (el) {
          el.removeEventListener('transitionend', handle);
        }
      };
      el.addEventListener('transitionend', handle);
    },
  };
};

export const slidTo = (placement = 'right') => {
  let start = '';
  let end = '';

  switch (placement) {
    case 'left':
      start = 'translateX(-100%)';
      end = 'translateX(-100%)';
      break;
    case 'right':
      start = 'translateX(100%)';
      end = 'translateX(100%)';
      break;
    case 'top':
      start = 'translateY(-100%)';
      end = 'translateY(-100%)';
      break;
    case 'bottom':
      start = 'translateY(100%)';
      end = 'translateY(100%)';
      break;
    default:
      start = 'translateX(100%)';
      end = 'translateX(100%)';
      break;
  }

  return {
    onEnter: (el: any, done: () => void) => {
      el.style.transform = start;
      el.style.transition = 'transform 200ms ease, opacity 200ms ease';
      el.style.opacity = '0';
      el.getBoundingClientRect(); // force reflow

      el.style.transform = 'translateX(0)';
      el.style.opacity = '1';
      done();
    },
    onLeave: async (el: any, done: () => void) => {
      el.style.transform = end;
      el.style.opacity = '0';
      el.style.transition = 'transform 200ms ease, opacity 200ms ease';
      // 等待动画完成
      await new Promise((resolve) => requestAnimationFrame(resolve));
      const handle = () => {
        done();
        if (el) {
          el.removeEventListener('transitionend', handle);
        }
      };
      el.addEventListener('transitionend', handle, { passive: true });
    },
  };
};
