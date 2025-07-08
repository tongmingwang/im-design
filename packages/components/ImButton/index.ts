import Btn from './ImButton.vue';
import { withInstall } from '@/utils/install';
import Group from './ButtonGroup.vue';
import FloatButton from './FloatButton.vue';

export const ImButton = withInstall('ImButton', Btn);
export const ImButtonGroup = withInstall('ImButtonGroup', Group);
export const ImFloatButton = withInstall('ImFloatButton', FloatButton);
