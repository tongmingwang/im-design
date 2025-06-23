import { createApp } from 'vue';
import ImLoading from '@/components/Common/ImLoading.vue';

function createLoading(el: HTMLElement, loadingText?: string) {
  closeLoading(el);
  const app = createApp(ImLoading, {
    loading: true,
    fullScreen: false,
    loadingText,
    onCallback: (setLoading: (bol: boolean) => void) => {
      // @ts-ignore
      el.IM_LOADING_UPDATE = setLoading;
    },
  });
  const node = document.createElement('div');
  // 获取元素的样式
  const style = window.getComputedStyle(el);

  if (style.overflow !== 'hidden') {
    el.dataset.overflow = style.overflow;
    el.style.overflow = 'hidden';
  }

  if (style.position === 'static') {
    el.dataset.position = style.position;
    el.style.position = 'relative';
  }
  el.appendChild(node);
  app.mount(node);
  // @ts-ignore
  el.IM_LOADING_INSTANCE = app;
}

async function closeLoading(el: HTMLElement) {
  // @ts-ignore
  const app = el?.IM_LOADING_INSTANCE;
  if (app) {
    try {
      // @ts-ignore
      const updateLoading = el.IM_LOADING_UPDATE;
      if (updateLoading) {
        updateLoading?.(false);
        await new Promise((resolve) => setTimeout(resolve, 300));
      }
      app.unmount();
      app._container.remove();
      // @ts-ignore
      el.IM_LOADING_INSTANCE = null;
      if (el.dataset.overflow) {
        el.style.overflow = el.dataset.overflow;
        delete el.dataset.overflow;
      }
      if (el.dataset.position) {
        el.style.position = el.dataset.position;
        delete el.dataset.position;
      }
    } catch (error) {
      console.error(error);
    }
  }
}

// 加载动画指令
export const loading = {
  mounted(el: HTMLElement, binding: any) {
    if (typeof binding.value === 'boolean') {
      return binding.value && createLoading(el);
    }
    if (binding.value?.loading) {
      createLoading(el, binding.value?.loadingText);
    }
  },

  beforeUnmount(el: HTMLElement) {
    closeLoading(el);
  },
  updated(el: HTMLElement, bind: any) {
    if (typeof bind.value === 'boolean') {
      return bind.value ? createLoading(el) : closeLoading(el);
    }
    if (bind.value?.loading) {
      createLoading(el, bind.value?.loadingText);
    } else {
      closeLoading(el);
    }
  },
};
