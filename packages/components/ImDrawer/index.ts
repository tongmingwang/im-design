import Drawer from './ImDrawer.vue';
import { withInstall } from '@/utils/install';
import { Header, Body, Footer } from './Drawer';

export const ImDrawer = withInstall('ImDrawer', Drawer);
export const ImDrawerHeader = withInstall('ImDrawerHeader', Header);
export const ImDrawerBody = withInstall('ImDrawerBody', Body);
export const ImDrawerFooter = withInstall('ImDrawerFooter', Footer);
