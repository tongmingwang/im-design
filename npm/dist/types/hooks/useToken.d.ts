import { ImDesignOptions } from '../types';
export declare const useToken: (propSize?: ImDesignOptions["size"], propIndex?: ImDesignOptions["zIndex"]) => {
    sizeToken: import('vue').Ref<number, number>;
    zIndexToken: import('vue').Ref<number, number>;
};
