export default class RippleTask {
  #task: Array<any>;
  constructor() {
    this.#task = [];
  }

  add(el: HTMLElement) {
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
        ripple.style.opacity = '0'; // 淡出效果
        ripple.style.transition = 'opacity 0.13s ease-out';
        setTimeout(() => {
          el.remove();
        }, 150);
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
