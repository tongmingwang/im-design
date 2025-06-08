import RippleTask from '@/utils/rippleTask';
// 创建涟漪元素并添加到DOM中
async function createRipple(event: any, task: RippleTask, el: HTMLElement) {
  // 缓存DOM查询和样式计算
  const computedStyle = window.getComputedStyle(el);
  const rect = el.getBoundingClientRect();

  // 创建涟漪容器
  const rippleContainer = document.createElement('div');
  rippleContainer.className = 'im-ripple';
  // 添加到任务队列中执行动画
  task.add(rippleContainer);
  // 创建涟漪元素
  const ripple = document.createElement('div');
  ripple.className = 'im-ripple__item';

  // 计算涟漪位置和大小
  const clientX = event.clientX || (event.touches && event.touches[0].clientX);
  const clientY = event.clientY || (event.touches && event.touches[0].clientY);
  const size = Math.max(rect.width, rect.height);
  const x = clientX - rect.left - size / 2;
  const y = clientY - rect.top - size / 2;
  const isD = rect.width - rect.height <= 5;

  // 设置涟漪样式（使用CSS变量提高性能）
  Object.assign(ripple.style, {
    'background-color': computedStyle.color,
    width: `${size}px`,
    height: `${size}px`,
    left: `${x}px`,
    top: `${y}px`,
    opacity: '0.15',
    transform: isD ? 'scale(1)' : 'scale(0.25)',
    'will-change': 'transform,opacity', // 提示浏览器优化动画
  });
  ripple.setAttribute('data-time', Date.now() + '');

  rippleContainer.appendChild(ripple);
  el.appendChild(rippleContainer);
  // 临时修改定位（如果需要）
  const originalPosition = computedStyle.position;
  if (originalPosition === 'static') {
    el.style.position = 'relative';
    el.dataset.originalPosition = originalPosition; // 使用dataset代替setAttribute
  }

  // 强制重绘，确保初始状态被应用
  ripple.getBoundingClientRect();
  // 触发动画
  ripple.style.transform = 'scale(2.8)';
  ripple.style.opacity = '0.33';
}
// 水波纹指令
export const ripple = {
  mounted(el: HTMLElement, binding: any) {
    // @ts-ignore
    el.IM_RIPPLE_VALUE = binding.value;
    // 创建涟漪任务队列
    const tempTask: RippleTask = new RippleTask();
    const handleDown = (e: MouseEvent) => {
      // @ts-ignore
      if (!el.IM_RIPPLE_VALUE) return;
      createRipple(e, tempTask, el);
    };
    const handleUp = () => {
      tempTask.remove();
    };
    const addListeners = () => {
      el.addEventListener('mousedown', handleDown, { passive: true });
      window.addEventListener('mouseup', handleUp, { passive: true });
    };
    const removeListeners = () => {
      el.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
    };

    addListeners();
    // 在组件卸载时移除事件监听器
    // @ts-ignore
    el._rippleListeners = { remove: removeListeners };
  },

  beforeUnmount(el: HTMLElement) {
    // @ts-ignore
    el._rippleListeners?.remove();
  },
  updated(el: HTMLElement, bind: any) {
    // @ts-ignore
    el.IM_RIPPLE_VALUE = bind.value;
  },
};
