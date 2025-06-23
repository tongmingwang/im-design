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

// dialog 对话框动画

export const dialogFadeIn = async (
  el: HTMLElement,
  trigger?: HTMLElement | null
) => {
  let arr: Keyframe[] | PropertyIndexedKeyframes | null = [];
  let transformOrigin = 'center';
  const rect = trigger?.getBoundingClientRect() || null;
  const { width, height } = getScreeWH();
  const cRect = el.getBoundingClientRect();
  if (rect) {
    const x = ((rect.left - cRect.left) / cRect.width) * 100;
    const y = ((rect.top - cRect.top) / cRect.height) * 100;
    transformOrigin = `${x}% ${y}%`;
  } else {
    const x = ((width * 0.5 - cRect.left) / cRect.width) * 100;
    const y = ((height - cRect.top) / cRect.height) * 100;
    transformOrigin = `${x}% ${y}%`;
  }
  arr = [
    {
      opacity: 0,
      offset: 0,
      transformOrigin: transformOrigin,
      transform: 'scale(0) ',
    },
    {
      opacity: 0,
      offset: 0.33,
      transformOrigin: transformOrigin,
      transform: 'scale(0.66) ',
    },
    {
      opacity: 1,
      transformOrigin: transformOrigin,
      transform: 'scale(1)',
    },
  ];
  el?.animate(arr, animationOption);
};
export const dialogFadeOut = async (
  el: HTMLElement,
  trigger?: HTMLElement | null
) => {
  let arr: Keyframe[] | PropertyIndexedKeyframes | null = [];
  let transformOrigin = 'center';
  const rect = trigger?.getBoundingClientRect() || null;
  const { width, height } = getScreeWH();
  const cRect = el.getBoundingClientRect();
  let x: string | number = '50%',
    y: string | number = '50%';

  if (rect) {
    x = ((rect.left + rect.width * 0.5 - cRect.left) / cRect.width) * 100;
    y = ((rect.top + rect.height * 0.5 - cRect.top) / cRect.height) * 100;
    transformOrigin = `${x}% ${y}%`;
  } else {
    x = ((width * 0.5 - cRect.left) / cRect.width) * 100;
    y = ((height - cRect.top) / cRect.height) * 100;
    transformOrigin = `${x}% ${y}%`;
  }
  arr = [
    {
      opacity: 1,
      transformOrigin: transformOrigin,
      transform: 'scale(1)',
      offset: 0,
    },
    {
      opacity: 0.66,
      transformOrigin: transformOrigin,
      transform: 'scale(0.88)',
      offset: 0.33,
    },
    {
      opacity: 0.1,
      transformOrigin: transformOrigin,
      transform: 'scale(0.66)',
      offset: 0.66,
    },
    {
      opacity: 0,
      transformOrigin: transformOrigin,
      transform: 'scale(0.33)',
      offset: 1,
    },
  ];
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
