export const ripple = {
  // 及他自己的所有子节点都挂载完成后调用
  mounted(el: HTMLElement, binding: any) {
    const init = function () {
      // 判断浏览器是否支持按下或者鼠标按下事件
      el.addEventListener('mousedown', createRipple, {
        passive: true,
      });
      el.addEventListener('mouseup', hideRipple, {});
    };
    init();
    /**
     * 创建涟漪效果
     * @param {HTMLElement} el - 触发涟漪效果的元素
     * @param {MouseEvent|TouchEvent} event - 触发事件
     */
    async function createRipple(event: any) {
      // 缓存DOM查询和样式计算
      const computedStyle = window.getComputedStyle(el);
      const rect = el.getBoundingClientRect();

      // 临时修改定位（如果需要）
      const originalPosition = computedStyle.position;
      if (originalPosition === 'static') {
        el.style.position = 'relative';
        el.dataset.originalPosition = originalPosition; // 使用dataset代替setAttribute
      }

      // 创建涟漪容器
      const rippleContainer = document.createElement('div');
      rippleContainer.className = 'im-ripple';

      // 创建涟漪元素
      const ripple = document.createElement('div');
      ripple.className = 'im-ripple__item';

      // 计算涟漪位置和大小
      const clientX =
        event.clientX || (event.touches && event.touches[0].clientX);
      const clientY =
        event.clientY || (event.touches && event.touches[0].clientY);
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
        opacity: 0.3,
        transform: isD ? 'scale(1)' : 'scale(0.5)',
        'will-change': 'transform', // 提示浏览器优化动画
      });

      rippleContainer.appendChild(ripple);
      el.appendChild(rippleContainer);

      // 强制重绘，确保初始状态被应用
      ripple.getBoundingClientRect();

      // 触发动画
      ripple.style.transform = 'scale(3)';

      // 动画结束后移除元素
      ripple.addEventListener(
        'transitionend',
        () => {
          ripple.style.opacity = '0'; // 淡出效果
          setTimeout(() => rippleContainer.remove(), 500); // 延迟移除，确保淡出效果完成

          // 恢复原始定位（如果需要）
          // if (el.dataset.originalPosition) {
          //   el.style.position = el.dataset.originalPosition;
          //   delete el.dataset.originalPosition;
          // }
        },
        { once: true }
      );
    }

    function hideRipple() {
      console.log('hideRipple');
    }
  },
  // 在绑定元素的父组件
  // 及他自己的所有子节点都更新后调用
  updated(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件卸载前调用
};
