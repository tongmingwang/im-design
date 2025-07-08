import { getScreeWH } from './dom';

const animationOption: number | KeyframeAnimationOptions = {
  duration: 200,
  delay: 0,
  easing: 'ease-out',
};

function getTransformByEl(
  el: HTMLElement,
  placement: 'left' | 'right' | 'top' | 'bottom' = 'right'
) {
  const rect = el?.getBoundingClientRect() || {}; // force reflow
  const width = rect?.width || 0;
  const height = rect?.height || 0;

  switch (placement) {
    case 'left':
      return width ? `translateX(-${width}px)` : `translateX(-100%)`;
    case 'right':
      return width ? `translateX(${width}px)` : `translateX(100%)`;
    case 'top':
      return height ? `translateY(-${height}px)` : `translateY(-100%)`;
    case 'bottom':
      return height ? `translateY(${height}px)` : `translateY(100%)`;
    default:
      return width ? `translateX(${width}px)` : `translateX(100%)`;
  }
}

export const rightToLeft = async (el: HTMLElement, isEnter: boolean = true) => {
  let transform = getTransformByEl(el, 'right');
  let arr: Keyframe[] | PropertyIndexedKeyframes | null = [];
  if (isEnter) {
    arr = [
      { transform: transform, opacity: 0 },
      { transform: `translateX(0)`, opacity: 1 },
    ];
  } else {
    arr = [
      { transform: `translateX(0)`, opacity: 1 },
      { transform: transform, opacity: 0 },
    ];
  }
  el?.animate(arr, animationOption);
};
export const leftToRight = async (el: HTMLElement, isEnter: boolean = true) => {
  let transform = getTransformByEl(el, 'left');
  let arr: Keyframe[] | PropertyIndexedKeyframes | null = [];
  if (isEnter) {
    arr = [
      { transform: transform, opacity: 0 },
      { transform: `translateX(0)`, opacity: 1 },
    ];
  } else {
    arr = [
      { transform: `translateX(0)`, opacity: 1 },
      { transform: transform, opacity: 0 },
    ];
  }
  el?.animate(arr, animationOption);
};

export const topToBottom = async (el: HTMLElement, isEnter: boolean = true) => {
  let transform = getTransformByEl(el, 'top');
  let arr: Keyframe[] | PropertyIndexedKeyframes | null = [];
  if (isEnter) {
    arr = [
      { transform: transform, opacity: 0 },
      { transform: `translateY(0)`, opacity: 1 },
    ];
  } else {
    arr = [
      { transform: `translateY(0)`, opacity: 1 },
      { transform: transform, opacity: 0 },
    ];
  }
  el?.animate(arr, animationOption);
};
export const bottomToTop = async (el: HTMLElement, isEnter: boolean = true) => {
  let transform = getTransformByEl(el, 'bottom');
  let arr: Keyframe[] | PropertyIndexedKeyframes | null = [];
  if (isEnter) {
    arr = [
      { transform: transform, opacity: 0 },
      { transform: `translateY(0)`, opacity: 1 },
    ];
  } else {
    arr = [
      { transform: `translateY(0)`, opacity: 1 },
      { transform: transform, opacity: 0 },
    ];
  }
  el?.animate(arr, animationOption);
};

export const elToFade = (el: HTMLElement, isEnter: boolean = true) => {
  if (!el || !el.animate) return;
  if (isEnter) {
    el.animate([{ opacity: 0 }, { opacity: 1 }], animationOption);
  } else {
    el.animate([{ opacity: 1 }, { opacity: 0 }], animationOption);
  }
};

export const elFullscreenBottomIn = (
  el: HTMLElement,
  isEnter: boolean = true
) => {
  if (!el || !el.animate) {
    return console.log('elFullscreenBottomIn');
  }
  const { height } = getScreeWH();
  if (isEnter) {
    el.animate(
      [
        { transform: `translateY(${height}px)`, opacity: 0 },
        { transform: 'translateY(0)', opacity: 1 },
      ],
      animationOption
    );
  } else {
    el.animate(
      [
        { transform: 'translateY(0)', opacity: 1 },
        { transform: `translateY(${height}px)`, opacity: 0 },
      ],
      animationOption
    );
  }
};
