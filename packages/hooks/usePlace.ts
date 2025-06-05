import { watch, type Ref } from 'vue';
import { type ImPlaceType } from '@/types';

// 计算节点位置信息
export const usePlace = (
  visible: Ref,
  triggerRef: Ref | null,
  contentRef: Ref | null,
  place: ImPlaceType = 'bottomLeft'
) => {
  watch(
    () => visible.value,
    () => {
      if (!visible.value) {
        return;
      }
      updatePlace();
    }
  );

  async function updatePlace() {
    await new Promise((resolve) => requestAnimationFrame(resolve));
    const trig: HTMLElement = triggerRef?.value; // 触发器元素
    const cont: HTMLElement | null = contentRef?.value; // 内容元素
    if (!trig || !cont) return;
    const triggerRect = trig.getBoundingClientRect(); // 触发器元素的位置信息
    const contentRect = cont.getBoundingClientRect(); // 内容元素的位置信息
    const dpx = 4;

    switch (place) {
      case 'bottom':
        cont.style.setProperty('top', `${triggerRect.bottom + dpx}px`);
        cont.style.setProperty(
          'left',
          `${
            triggerRect.left + triggerRect.width / 2 - contentRect.width / 2
          }px`
        );

        break;
      case 'bottomRight':
        cont.style.setProperty('top', `${triggerRect.bottom + dpx}px`);
        cont.style.setProperty(
          'left',
          `${triggerRect.left + triggerRect.width - contentRect.width}px`
        );
        break;
      case 'top':
        cont.style.setProperty(
          'top',
          `${triggerRect.top - contentRect.height - dpx}px`
        );
        cont.style.setProperty(
          'left',
          `${
            triggerRect.left + triggerRect.width / 2 - contentRect.width / 2
          }px`
        );
        break;
      case 'topRight':
        cont.style.setProperty(
          'top',
          `${triggerRect.top - contentRect.height - dpx}px`
        );
        cont.style.setProperty(
          'left',
          `${triggerRect.right - contentRect.width}px`
        );
        break;
      case 'topLeft':
        cont.style.setProperty(
          'top',
          `${triggerRect.top - contentRect.height - dpx}px`
        );
        cont.style.setProperty('left', `${triggerRect.left}px`);
        break;

      default: // bottomLeft
        cont.style.setProperty('top', `${triggerRect.bottom + dpx}px`);
        cont.style.setProperty('left', `${triggerRect.left}px`);
        break;
    }
  }
};
