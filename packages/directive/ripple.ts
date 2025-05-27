export const ripple = {
  // 及他自己的所有子节点都挂载完成后调用
  mounted(el: HTMLElement, binding: any) {
    console.log(el, binding);
    const init = function () {
      // 初始化需要处理事件
      // 判断浏览器是否支持按下或者鼠标按下事件

      el.addEventListener('mousedown', () => {
        console.log('down');
      });

      // 处理样式
    };
    init();
  },
  // 在绑定元素的父组件
  // 及他自己的所有子节点都更新后调用
  updated(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件卸载前调用
};
