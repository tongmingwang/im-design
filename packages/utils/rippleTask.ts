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

  run(el: HTMLElement) {
    try {
      if (el.getAttribute('data-remove') === 'on') {
        const ripple: HTMLElement | null = el.querySelector('.im-ripple__item');
        if (!ripple) return;

        ripple.style.opacity = '0.1'; // 淡出效果
        ripple.style.transition = 'all 100ms';
        ripple.getBoundingClientRect(); // 触发重绘，以便应用过渡效果
        setTimeout(() => {
          el.remove();
        }, 100);
      } else {
        setTimeout(() => {
          this.run(el);
        }, 30);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
