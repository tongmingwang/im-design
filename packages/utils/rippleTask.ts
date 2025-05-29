export default class RippleTask {
  #task: Array<any>;
  constructor() {
    this.#task = [];
  }

  async add(el: HTMLElement) {
    this.#task.push(el);
  }
  remove() {
    try {
      const el: HTMLElement = this.#task.shift();
      el && this.run(el);
    } catch (error) {
      console.error(error);
    }
  }

  async run(el: HTMLElement) {
    try {
      const ripple: HTMLElement | null = el.querySelector('.im-ripple__item');
      if (!ripple) return;
      let now = Date.now();
      let old = ripple.getAttribute('data-time');
      const dpx = now - Number(old) || 0;

      if (dpx) {
        await new Promise((resolve) => {
          ripple.style.opacity = '0.15';
          const delay = 320 - dpx; // 延迟时间，根据距离计算

          setTimeout(
            () => {
              resolve(null);
            },
            delay > 0 ? delay : 0
          );
        });
      }
      ripple.style.opacity = '0'; // 淡出效果
      ripple.style.transition = 'all 50ms ';

      setTimeout(() => {
        el && el?.remove();
      }, 50);
    } catch (error) {
      console.log(error);
    }
  }
}
