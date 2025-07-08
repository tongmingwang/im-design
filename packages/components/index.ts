import { type App } from 'vue';
import { type ImDesignOptions } from '@/types';
import { token } from '@/utils/constance';
// 引入指令
import ImDirective from '@/directive';
import '@/styles/variables.scss';
import '@/styles/global.scss';

import { useImMessage } from './Message';
import { useImLoading } from './Common/useImLoading';
import ImLayer from './Common/ImLayer.vue';
import ImInnerLayer from './Common/InnerLayer.vue';

import { ImButton, ImButtonGroup, ImFloatButton } from './ImButton';
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
import ImCard, { ImCardBody, ImCardFooter, ImCardHeader } from './ImCard';
import ImDialog, {
  ImDialogFooter,
  ImDialogHeader,
  ImDialogBody,
} from './ImDialog';
import ImPagination from './ImPagination';
import ImSelect from './ImSelect';
import ImTag from './ImTag';
import ImTooltip from './ImTooltip';
import ImPopover from './ImPopover';
import ImBadge from './ImBadge';
import ImBackTop from './ImBackTop';
import ImCollapse, { ImCollapseItem } from './ImCollapse';
import ImInputNumber from './ImInputNumber';
import ImCheckbox from './ImCheckbox';
import ImTable from './ImTable';
import ImEmpty from './ImEmpty';
import { ImRadioGroup, ImRadio } from './ImRadioGroup';
import { ImTabs, ImTab } from './ImTabs';
import { ImPanes, ImPane } from './ImPanes';
import ImPageHeader from './ImPageHeader';
import { ImMenuItem, ImMenu, ImSubMenu, ImMenuTitle } from './ImMenu';
import { ImDatePicker, ImTimePicker, ImDateRangePicker } from './ImDatePicker';
import {
  ImSkeleton,
  ImSkeletonAvatar,
  ImSkeletonLine,
  ImSkeletonImage,
} from './ImSkeleton';
import ImTextarea from './ImTextarea';
import ImSwitch from './ImSwitch';
import ImUpload from './ImUpload';
import ImTitle from './ImTitle';
import { ImText, ImLink } from './ImText';

const list = [
  ImButton,
  ImButtonGroup,
  ImFloatButton,
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
  ImCardBody,
  ImCardFooter,
  ImCardHeader,
  ImDialog,
  ImDialogFooter,
  ImDialogHeader,
  ImDialogBody,
  ImPagination,
  ImSelect,
  ImTag,
  ImTooltip,
  ImPopover,
  ImBadge,
  ImBackTop,
  ImCollapse,
  ImCollapseItem,
  ImInputNumber,
  ImCheckbox,
  ImTable,
  ImEmpty,
  ImRadioGroup,
  ImRadio,
  ImTabs,
  ImTab,
  ImPanes,
  ImPane,
  ImPageHeader,
  ImMenuItem,
  ImMenu,
  ImSubMenu,
  ImMenuTitle,
  ImDatePicker,
  ImTimePicker,
  ImDateRangePicker,
  ImSkeleton,
  ImSkeletonAvatar,
  ImSkeletonLine,
  ImSkeletonImage,
  ImTextarea,
  ImSwitch,
  ImUpload,
  ImTitle,
  ImText,
  ImLink,
];

const install = (app: App, option?: ImDesignOptions) => {
  app.provide(token, {
    size: option?.size || 36,
    zIndex: option?.zIndex || 1000,
  });

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
  ImButtonGroup,
  ImFloatButton,
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
  ImCardBody,
  ImCardFooter,
  ImCardHeader,
  useImMessage,
  ImDialog,
  ImDialogFooter,
  ImDialogHeader,
  ImDialogBody,
  ImPagination,
  ImSelect,
  ImTag,
  ImTooltip,
  ImPopover,
  useImLoading,
  ImBadge,
  ImBackTop,
  ImCollapse,
  ImCollapseItem,
  ImInputNumber,
  ImCheckbox,
  ImTable,
  ImEmpty,
  ImRadioGroup,
  ImRadio,
  ImTabs,
  ImTab,
  ImPanes,
  ImPane,
  ImPageHeader,
  ImMenuItem,
  ImMenu,
  ImSubMenu,
  ImMenuTitle,
  ImDatePicker,
  ImTimePicker,
  ImDateRangePicker,
  ImDirective,
  ImSkeleton,
  ImSkeletonAvatar,
  ImSkeletonLine,
  ImSkeletonImage,
  ImTextarea,
  ImSwitch,
  ImUpload,
  ImTitle,
  ImText,
  ImLink,
  ImLayer,
  ImInnerLayer,
};

export default {
  install,
};
