import Menu from './ImMenu.vue';
import MenuItem from './ImMenuItem.vue';
import { withInstall } from '@/utils/install';
import SubMenu from './ImSubMenu.vue';

export const ImMenu = withInstall('ImMenu', Menu);
export const ImMenuItem = withInstall('ImMenuItem', MenuItem);
export const ImSubMenu = withInstall('ImSubMenu', SubMenu);
