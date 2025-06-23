import { createApp } from 'vue';
import ImLoading from '@/components/Common/ImLoading.vue';

interface LoadingOption {
  loadingText?: string;
  size?: number | string;
  zIndex?: number;
}

class LoadingService {
  #instance: any;
  constructor() {
    this.#instance = null;
  }

  setLoading(bol: boolean, option?: LoadingOption) {
    bol ? this.createLoading(option) : this.closeLoading();
  }
  createLoading(option: LoadingOption = {}) {
    this.closeLoading();
    this.#instance = createApp(ImLoading, {
      ...option,
      loading: true,
      fullscreen: true,
    });
    const node = document.createElement('div');
    node.setAttribute('class', 'im-loading-container');

    document.body.appendChild(node);
    this.#instance.mount(node);
  }

  closeLoading() {
    if (this.#instance) {
      this.#instance.unmount();
      this.#instance._container &&
        document.body.removeChild(this.#instance._container);
    }
  }
}

export const useImLoading = () => {
  const loadingService = new LoadingService();
  return {
    show(option?: LoadingOption) {
      loadingService.setLoading(true, option);
    },
    hide() {
      loadingService.setLoading(false);
    },
  };
};
