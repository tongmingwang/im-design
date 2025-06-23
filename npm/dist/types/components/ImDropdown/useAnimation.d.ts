export declare const useAnimation: (placement: string) => {
    onEnter: (el: any, done: () => void) => void;
    onLeave: (el: any, done: () => void) => Promise<void>;
};
