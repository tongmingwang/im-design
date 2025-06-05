import ImBreadcrumbC from './ImBreadcrumb.vue';
import ImBreadcrumbItemC from './ImBreadcrumbItem.vue';
import { withInstall } from '@/utils/install';

export const ImBreadcrumb = withInstall('ImBreadcrumb', ImBreadcrumbC);
export const ImBreadcrumbItem = withInstall('ImBreadcrumb', ImBreadcrumbItemC);
