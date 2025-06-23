import Panes from './ImPanes.vue';
import Pane from './ImPane.vue';
import { withInstall } from '@/utils/install';

export const ImPanes = withInstall('ImPanes', Panes);
export const ImPane = withInstall('ImPane', Pane);
