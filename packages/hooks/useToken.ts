import { token } from '@/utils/constance';
import { ref, inject } from 'vue';
import { type ImDesignOptions } from '@/types';
export const useToken = (
  propSize?: ImDesignOptions['size'],
  propIndex?: ImDesignOptions['zIndex']
) => {
  const injectData = inject(token) as ImDesignOptions;
  const sizeToken = ref(Number(propSize || injectData.size || 36));
  const zIndexToken = ref(propIndex || injectData.zIndex || 1000);
  return { sizeToken, zIndexToken };
};
