import { type App } from 'vue';
import { type ImDesignOptions } from '@/types';
import { token } from '@/utils/constance';
import ImButton from './ImButton';
import { ripple } from '@/directive/ripple';
import '@/styles/global.scss';

// 定义组件列表
const list = [ImButton];

export { ImButton };
// 导出所有类型
export * from './ImButton/ButtonProp';
// 导出插件安装函数
export default {
  install(app: App, option?: ImDesignOptions) {
    app.provide(token, {
      size: option?.size || 36,
      zIndex: option?.zIndex || 1000,
    });
    app.directive('ripple', ripple);
    list.forEach((com) => {
      if (com.name) {
        app.component(com.name, com);
      } else {
        console.warn(`组件${com}缺少name属性`);
      }
    });
  },
};
