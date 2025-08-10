const rippleTime = 300;
const easing = 'ease-out';

const circleStart = 'scale(0.25)';
const start = 'scale(0.5,0.6)';

class RippleTask {
  #task: Array<any>;

  constructor() {
    this.#task = [];
  }

  async add(el: HTMLElement) {
    this.#task.push(el);
  }
  remove() {
    try {
      const list = [...this.#task];
      this.#task = [];
      list.forEach((item) => {
        this.run(item);
      });
    } catch (error) {
      console.error(error);
    }
  }

  async run(el: HTMLElement) {
    try {
      const ripple: HTMLElement | null = el.firstChild as HTMLElement;
      if (!ripple) return;
      let now = Date.now();
      let old = ripple.getAttribute('data-time');
      const dpx = rippleTime - (now - (Number(old) || 0));

      // 判断是否还在动画内
      if (dpx > 0) {
        await new Promise(async (resolve) => {
          ripple.style.opacity = '0.08'; // 淡出效果
          await new Promise((res) => requestAnimationFrame(res));
          setTimeout(() => {
            resolve(null);
          }, dpx);
        });
      }
      ripple.style.opacity = '0';
      setTimeout(() => {
        el && el?.remove();
      }, rippleTime);
    } catch (error) {
      console.log(error);
    }
  }
}

const getCircleRadius = (x: number, y: number) => {
  return Math.sqrt(x ** 2 + y ** 2);
};

const ATTR_KEY = 'data-ripple';
const RIPPLE_CONTAINER_STYLE =
  'position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden;pointer-events:none;margin:0;padding:0;z-index:0;border-radius:inherit;';

// Cache for computed styles to avoid repeated calculations
const styleCache = new WeakMap<HTMLElement, CSSStyleDeclaration>();

// Predefined ripple styles that don't change
const RIPPLE_BASE_STYLE: Partial<CSSStyleDeclaration> = {
  position: 'absolute',
  borderRadius: '50%',
  transition: `all ${rippleTime}ms ${easing} 0ms`,
  willChange: 'transform,opacity',
  pointerEvents: 'none',
};

function createRipple(event: MouseEvent, task: RippleTask, el: HTMLElement) {
  // Use cached styles if available
  let computedStyle = styleCache.get(el);
  if (!computedStyle) {
    computedStyle = window.getComputedStyle(el);
    styleCache.set(el, computedStyle);
  }

  const rect = el.getBoundingClientRect();
  const rippleContainer = document.createElement('div');
  rippleContainer.style.cssText = RIPPLE_CONTAINER_STYLE;
  task.add(rippleContainer);

  const ripple = document.createElement('div');

  // Apply base styles
  Object.assign(ripple.style, RIPPLE_BASE_STYLE);

  // Calculate ripple dimensions
  const clientX = event.clientX;
  const clientY = event.clientY;

  const isC = Math.abs(rect.width - rect.height) < 2;
  let x = 0,
    y = 0,
    radius = 0;
  if (isC) {
    const max = Math.max(rect.width, rect.height) * 0.5;
    radius = getCircleRadius(max, max) * 2;
    x = max - radius * 0.5;
    y = max - radius * 0.5;
  } else {
    const xLeft = clientX - rect.left;
    const yTop = clientY - rect.top;
    const xLen = Math.max(xLeft, rect.width - xLeft);
    const yLen = Math.max(yTop, rect.height - yTop);
    radius = getCircleRadius(xLen, yLen) * 2;
    const dpx = radius / 2;
    x = xLeft - dpx;
    y = yTop - dpx;
  }

  // Set dynamic styles
  ripple.style.backgroundColor = computedStyle.color || '';
  ripple.style.width = `${radius}px`;
  ripple.style.height = `${radius}px`;
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  ripple.style.opacity = '0.25';
  ripple.style.transform = isC ? circleStart : start;
  ripple.dataset.time = Date.now().toString();

  rippleContainer.appendChild(ripple);
  el.appendChild(rippleContainer);

  // Handle positioning only if needed
  const originalPosition = computedStyle.position;
  if (originalPosition === 'static') {
    el.style.position = 'relative';
    el.dataset.originalPosition = originalPosition;
  }

  // Trigger animation in the next frame
  requestAnimationFrame(() => {
    ripple.style.transform = 'scale(1)';
  });
}

function updateElAttr(el: HTMLElement, binding: any) {
  const value = binding.value ? 'on' : 'off';
  if (el.getAttribute(ATTR_KEY) !== value) {
    el.setAttribute(ATTR_KEY, value);
  }
}

function getIsRipple(el: HTMLElement) {
  return el.getAttribute(ATTR_KEY) === 'on';
}

export const ripple = {
  mounted(el: HTMLElement, binding: any) {
    updateElAttr(el, binding);

    const task = new RippleTask();
    let isMouseDown = false;

    const handleDown = (e: MouseEvent) => {
      if (!getIsRipple(el) || isMouseDown) return;
      isMouseDown = true;
      createRipple(e, task, el);
    };

    const handleUp = () => {
      if (!isMouseDown) return;
      isMouseDown = false;
      task.remove();
    };

    const addListeners = () => {
      el.addEventListener('mousedown', handleDown, { passive: true });
      window.addEventListener('mouseup', handleUp, {
        passive: true,
        capture: true,
      });
    };

    const removeListeners = () => {
      el.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp, { capture: true });
      styleCache.delete(el); // Clean up cache
    };

    addListeners();

    // Store references for cleanup
    // @ts-ignore
    el._ripple = {
      task,
      removeListeners: removeListeners,
    };
  },

  beforeUnmount(el: HTMLElement) {
    // @ts-ignore
    if (el._ripple) {
      // @ts-ignore
      el._ripple.removeListeners();
    }
  },

  updated(el: HTMLElement, binding: any) {
    updateElAttr(el, binding);
  },
};
