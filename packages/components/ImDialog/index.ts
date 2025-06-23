import Dialog from './ImDialog.vue';
import { withInstall } from '@/utils/install';
import footer from './ImDialogFooter.ts';
import Header from './ImDialogHeader.ts';
import body from './ImDialogBody.ts';

export default withInstall('ImDialog', Dialog);

export const ImDialogFooter = withInstall('ImDialogFooter', footer);
export const ImDialogHeader = withInstall('ImDialogHeader', Header);
export const ImDialogBody = withInstall('ImDialogBody', body);
