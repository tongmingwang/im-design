export declare const removeAnimate: (el: HTMLElement | null, option?: GetAnimationsOptions) => boolean;
export declare const waitForAnimate: (el: HTMLElement | null, option?: GetAnimationsOptions) => Promise<boolean>;
export declare const getScreeWH: () => {
    width: number;
    height: number;
};
/**
 * 判断是否锁定滚动条
 */
export declare const isLockScroll: () => boolean;
export declare const updateLockScroller: () => Promise<void>;
export declare function isMobile(): boolean;
