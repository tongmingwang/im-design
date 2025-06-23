import ImCollapse from './ImCollapse.vue';
import { withInstall } from '@/utils/install';
import ImCollapseItem from './ImCollapseItem.vue';

const ImCollapseItemWithInstall = withInstall('ImCollapseItem', ImCollapseItem);
export { ImCollapseItemWithInstall as ImCollapseItem };

export default withInstall('ImCollapse', ImCollapse);
