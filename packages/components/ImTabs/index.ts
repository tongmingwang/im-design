import Tabs from './ImTabs.vue';
import Tab from './ImTab.vue';
import { withInstall } from '@/utils/install';

export const ImTabs = withInstall('ImTabs', Tabs);
export const ImTab = withInstall('ImTabPane', Tab);
