import { token } from '@/utils/constance';
import { ref, inject } from 'vue';
import { type ImDesignOptions } from '@/types';
export const useToken = () => {
  const injectData = inject(token) as ImDesignOptions;
  const sizeToken = ref(Number(injectData?.size || 36));
  const zIndexToken = ref(injectData?.zIndex || 1000);
  return { sizeToken, zIndexToken };
};
