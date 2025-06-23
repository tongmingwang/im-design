import Card from './ImCard.vue';
import { withInstall } from '@/utils/install';
import { CardBody, CardFooter, CardHeader } from './CardLayout.ts';

const ImCardBody = withInstall('ImCardBody', CardBody);
const ImCardFooter = withInstall('ImCardBody', CardFooter);
const ImCardHeader = withInstall('ImCardBody', CardHeader);

export default withInstall('ImCard', Card);

export { ImCardBody, ImCardFooter, ImCardHeader };
