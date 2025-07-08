import { computed, provide, inject } from 'vue';
import type { SkeletonProps } from './types';
const key = Symbol('skeletonProvider');

export const useProvider = (props: SkeletonProps) => {
  provide(key, {
    loading: () => props.loading,
  });
};

export const useInject = () => {
  const o = inject(key, { loading: () => false });
  const loading = computed(() => o?.loading?.());
  return {
    loading,
  };
};
