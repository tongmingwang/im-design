import Skeleton from './ImSkeleton.vue';
import { Avatar, Line, Image } from './Skeleton';
import { withInstall } from '@/utils/install';

export const ImSkeleton = withInstall('ImSkeleton', Skeleton);
export const ImSkeletonAvatar = withInstall('ImSkeletonAvatar', Avatar);
export const ImSkeletonLine = withInstall('ImSkeletonLine', Line);
export const ImSkeletonImage = withInstall('ImSkeletonImage', Image);
