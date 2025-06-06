import { type App } from 'vue';
import { type ImDesignOptions } from '@/types';
// 引入token
import { token } from '@/utils/constance';
// 引入指令
import { ripple } from '@/directive/ripple';
// 引入全局变量
import '@/styles/variables.scss';
import '@/styles/global.scss';
// 组件
import ImButton from './ImButton';
import { ImCol, ImRow } from './ImLayout';
import ImInput from './ImInput';
import ImIcon from './ImIcon';
import ImDivider from './ImDivider';
import ImAnchor from './ImAnchor';
import ImAlert from './ImAlert';
import { ImBreadcrumb, ImBreadcrumbItem } from './ImBreadcrumb';
import ImDropdown from './ImDropdown';
import { ImList, ImListItem } from './ImList';
import ImAvatar from './ImAvatar';
import ImMask from './ImMask';
import ImDrawer from './ImDrawer';
import ImCard from './ImCard';
import { useImMessage } from './Message';
// 定义组件列表
const list = [
  ImButton,
  ImCol,
  ImRow,
  ImInput,
  ImIcon,
  ImDivider,
  ImAnchor,
  ImAlert,
  ImBreadcrumb,
  ImBreadcrumbItem,
  ImDropdown,
  ImList,
  ImListItem,
  ImAvatar,
  ImMask,
  ImDrawer,
  ImCard,
];

const install = (app: App, option?: ImDesignOptions) => {
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
};

export {
  ImButton,
  ImCol,
  ImRow,
  ImInput,
  ImIcon,
  ImDivider,
  ImAnchor,
  ImAlert,
  ImBreadcrumb,
  ImBreadcrumbItem,
  ImDropdown,
  ImList,
  ImListItem,
  ImAvatar,
  ImMask,
  ImDrawer,
  ImCard,
  useImMessage,
};
// 导出插件安装函数
export default {
  install,
};

export * from './ImButton/types';
