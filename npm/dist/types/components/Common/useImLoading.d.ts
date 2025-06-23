interface LoadingOption {
    loadingText?: string;
    size?: number | string;
    zIndex?: number;
}
export declare const useImLoading: () => {
    show(option?: LoadingOption): void;
    hide(): void;
};
export {};
