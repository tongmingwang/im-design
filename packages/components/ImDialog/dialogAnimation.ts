import { waitForAnimate, removeAnimate, getScreeWH } from '@/utils/dom';
const time = 320;

export const useDialogAnimation = (props: any) => {
  const enterFN = async (el: any, done: () => void) => {
    removeAnimate(el);
    await new Promise((resolve) => requestAnimationFrame(resolve));
    const { height, width } = getScreeWH();
    if (props.fullscreen) {
      el.style.setProperty('transform-origin', 'center bottom');
      el.animate(
        [{ transform: `translateY(100%)` }, { transform: 'translateY(0)' }],
        {
          duration: 300,
          easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
        }
      );
    } else {
      const target = props.getTarget?.() || null;
      let x, y;
      const cRect = el.getBoundingClientRect();
      const rect = target ? target.getBoundingClientRect() : null;
      if (rect) {
        x = ((rect.left + rect.width * 0.5 - cRect.left) / cRect.width) * 100;
        y = ((rect.top + rect.height * 0.5 - cRect.top) / cRect.height) * 100;
      } else {
        x = ((width * 0.5 - cRect.left) / cRect.width) * 100;
        y = ((height - cRect.top) / cRect.height) * 100;
      }
      el.style.setProperty('transform-origin', `${x}% ${y}%`);
      el.animate(
        [
          { transform: 'scale(0)', opacity: 0, offset: 0 },
          { transform: 'scale(0.66)', opacity: 0.25, offset: 0.33 },
          { transform: 'scale(1)', opacity: 1, offset: 1 },
        ],
        {
          duration: time,
          easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
        }
      );
    }
    // 计算位置
    done();
  };

  const leaveFN = (el: any, done: () => void) => {
    if (props.fullscreen) {
      el.animate(
        [{ transform: 'translateY(0)' }, { transform: `translateY(100%)` }],
        {
          duration: 300,
          easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
        }
      );
    } else {
      el.animate(
        [
          { transform: 'scale(1)', opacity: 1, offset: 0 },
          { transform: 'scale(0.66)', opacity: 0.05, offset: 0.66 },
          { transform: 'scale(0)', opacity: 0, offset: 1 },
        ],
        {
          duration: time,
          easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
        }
      );
    }
    waitForAnimate(el).finally(done);
  };
  return {
    enterFN,
    leaveFN,
  };
};
