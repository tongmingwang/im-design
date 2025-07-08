export declare const throttle: <T extends unknown[]>(fn: (...args: T) => void, delay: number) => ((...args: T) => void);
export declare const debounce: <T extends unknown[]>(fn: (...args: T) => void, delay: number) => ((...args: T) => void);
export declare const isInRange: (x: number, y: number, node: HTMLElement | null) => boolean;
export declare const getSizeValue: (value: string | number) => string;
export declare const isNumberValue: (val: any) => boolean;
export declare function formatTime(h: number, m: number, s: number): string;
