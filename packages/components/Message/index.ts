import MsgComponent from './Message.vue';
import { createApp, type App } from 'vue';
import { type MessageItem } from './types';

// 创建一个Message类 , 用来创建Vue应用实例，并挂载到body上。
class Message {
  app: App | null;
  container: HTMLElement | null;
  addMsgToList: null | ((msgItem: MessageItem) => void);
  constructor() {
    this.app = null;
    this.container = null;
    this.addMsgToList = null;
  }
  // 创建一个Vue应用实例
  createApp() {
    // 判断当前是否是浏览器环境
    if (typeof window !== 'undefined' && window) {
      this.container = document.createElement('div');
      this.container.classList.add('im-message-container');
      document.body.appendChild(this.container);
      const _this = this;
      this.app = createApp(MsgComponent, {
        callback: () => {
          // 等待动画结束后，删除消息组件
          _this.destroy();
        },
        add: (fn: (item: MessageItem) => void) => {
          _this.addMsgToList = fn;
        },
      });
      this.app.mount(this.container);
    } else {
      throw new Error('只能在浏览器环境下使用');
    }
  }

  destroy() {
    this.app?.unmount();
    this.container?.remove();
    this.app = null;
    this.container = null;
  }
  addMsg(option: MessageItem) {
    if (!this.app) {
      this.createApp();
    }
    if (!this.addMsgToList) return console.error('addMsgToList is null');

    this.addMsgToList({
      msg: option.msg,
      id: Math.random().toString().slice(2) + '_' + Date.now(),
      duration: option.duration || 3000,
      color: option?.color || 'primary',
    });
  }
  info(msg: string, duration?: number) {
    this.addMsg({
      color: 'primary',
      msg,
      duration,
      id: '',
    });
  }
  success(msg: string, duration?: number) {
    this.addMsg({
      color: 'success',
      msg,
      duration,
      id: '',
    });
  }
  warning(msg: string, duration?: number) {
    this.addMsg({
      color: 'warning',
      msg,
      duration,
      id: '',
    });
  }
  error(msg: string, duration?: number) {
    this.addMsg({
      color: 'error',
      msg,
      duration,
      id: '',
    });
  }
}
// 全局使用一个实例，防止多次创建。
let instance: Message | null = null;

export const useImMessage = () => {
  if (!instance) {
    instance = new Message();
  }
  return {
    info: (msg: string, duration = 3000) => {
      instance?.info(msg, duration);
    },
    primary: (msg: string, duration = 3000) => {
      instance?.info(msg, duration);
    },
    success: (msg: string, duration = 3000) => {
      instance?.success(msg, duration);
    },
    warning: (msg: string, duration = 3000) => {
      instance?.warning(msg, duration);
    },
    error: (msg: string, duration = 3000) => {
      instance?.error(msg, duration);
    },
  };
};
