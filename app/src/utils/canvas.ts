// 雨滴类
class Drop {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  z: number;
  len: number;
  speed: number;
  opacity: number;
  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = 0;
    this.y = 0;
    this.z = 0; // 深度值，影响下落速度和长度
    this.len = 0;
    this.speed = 0;
    this.opacity = 0;

    this.reset();
  }

  reset() {
    this.x = Math.random() * this.canvas.width;
    this.y = Math.random() * -this.canvas.height;
    this.z = Math.random() * 0.5 + 0.3; // 深度值，影响下落速度和长度
    this.len = this.z * 20;
    this.speed = this.z * 10;
    this.opacity = this.z * 0.7;
  }

  update() {
    this.y += this.speed;
    if (this.y > this.canvas.height) {
      this.reset();
    }
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(this.x, this.y + this.len);
    this.ctx.strokeStyle = `rgba(var(--im-primary-color-7),var(--im-error-color-8), var(--im-success-color-8), ${this.opacity})`;
    this.ctx.lineWidth = this.z * 2;
    this.ctx.stroke();
  }
}

export const ranCanvas = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // 设置canvas大小为窗口大小
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // 雨滴数组
  const drops: Array<Drop> = [];
  const dropCount = 500; // 雨滴数量

  // 初始化雨滴
  for (let i = 0; i < dropCount; i++) {
    drops.push(new Drop(canvas, ctx));
  }
  // 动画循环
  function animate() {
    ctx?.clearRect(0, 0, canvas.width, canvas.height);
    // 更新和绘制所有雨滴
    drops.forEach((drop) => {
      drop.update();
      drop.draw();
    });

    requestAnimationFrame(animate);
  }
  animate();

  // 处理窗口大小变化
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
};
