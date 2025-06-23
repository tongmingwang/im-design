export declare const useBem: (name: string) => {
    b: () => string;
    e: (element: string) => string;
    m: (modifier: string) => string;
    is: (name: string, state: boolean) => string;
};
