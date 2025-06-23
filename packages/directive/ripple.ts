import RippleTask from '@/utils/rippleTask';
const attrKey = 'data-ripple';
// 创建涟漪元素并添加到DOM中
async function createRipple(event: any, task: RippleTask, el: HTMLElement) {
  const computedStyle = window.getComputedStyle(el);
  const rect = el.getBoundingClientRect();

  const rippleContainer = document.createElement('div');
  rippleContainer.style =
    'position: absolute; top: 0; left: 0; right: 0; bottom: 0; overflow: hidden; pointer-events: none;margin: 0; padding: 0; z-index: 0;border-radius: inherit;';
  task.add(rippleContainer);
  const ripple = document.createElement('div');
  ripple.style.setProperty('position', 'absolute');
  ripple.style.setProperty('border-radius', '50%');
  ripple.style.setProperty('transition', 'all 300ms ease-out');
  ripple.style.setProperty('will-change', 'transform,opacity');
  ripple.style.setProperty('pointer-events', 'none'); // 防止涟漪干扰鼠标事件

  const clientX = event.clientX;
  const clientY = event.clientY;
  const xLeft = clientX - rect.left;
  const yTop = clientY - rect.top;

  const xLen = Math.max(xLeft, rect.width - xLeft);
  const yLen = Math.max(yTop, rect.height - yTop);
  // 计算涟漪半径
  const radius = Math.sqrt(xLen ** 2 + yLen ** 2) * 2;

  // 计算中点位置
  const x = clientX - rect.left - radius / 2;
  const y = clientY - rect.top - radius / 2;

  // 设置涟漪样式（使用CSS变量提高性能）
  Object.assign(ripple.style, {
    'background-color': computedStyle.color,
    width: `${radius}px`,
    height: `${radius}px`,
    left: `${x}px`,
    top: `${y}px`,
    opacity: '0.08',
    transform: 'scale(0.33)',
  });
  ripple.setAttribute('data-time', Date.now() + '');

  rippleContainer.appendChild(ripple);
  el.appendChild(rippleContainer);
  const originalPosition = computedStyle.position;
  if (originalPosition === 'static') {
    el.style.position = 'relative';
    el.dataset.originalPosition = originalPosition;
  }

  ripple.getBoundingClientRect();
  ripple.style.transform = 'scale(1.1)';
  ripple.style.opacity = '0.33';
}

function updateElAttr(el: HTMLElement, binding: any) {
  binding.value
    ? el.setAttribute(attrKey, 'on')
    : el.setAttribute(attrKey, 'off');
}
function getIsRipple(el: HTMLElement) {
  return el.getAttribute(attrKey) === 'on';
}
// 水波纹指令
export const ripple = {
  mounted(el: HTMLElement, binding: any) {
    updateElAttr(el, binding);
    // 创建涟漪任务队列
    const tempTask: RippleTask = new RippleTask();
    const handleDown = (e: Event) => {
      if (!getIsRipple(el)) return;
      createRipple(e, tempTask, el);
    };
    const handleUp = () => {
      tempTask.remove();
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
    };

    addListeners();
    // 在组件卸载时移除事件监听器
    // @ts-ignore
    el._rippleListeners = { remove: removeListeners };
  },

  beforeUnmount(el: HTMLElement) {
    // @ts-ignore
    el._rippleListeners?.remove?.();
  },
  updated(el: HTMLElement, binding: any) {
    updateElAttr(el, binding);
  },
};
