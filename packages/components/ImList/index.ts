import List from './ImList.vue';
import Item from './ImListItem.vue';
import { withInstall } from '@/utils/install';

const ImList = withInstall('ImList', List);
const ImListItem = withInstall('ImListItem', Item);

export { ImList, ImListItem };
