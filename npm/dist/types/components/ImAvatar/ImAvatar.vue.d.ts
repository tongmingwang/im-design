type __VLS_Props = {
    size?: number | string;
    src?: string;
    alt?: string;
    title?: string;
    crossOrigin?: string;
    fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
    srcset?: string;
    loading?: 'eager' | 'lazy';
    shape?: 'circle' | 'square';
    color?: string;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLSpanElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    error: (event: Event) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onError?: ((event: Event) => any) | undefined;
}>, {
    title: string;
    loading: "eager" | "lazy";
    size: number | string;
    color: string;
    shape: "circle" | "square";
    src: string;
    alt: string;
    crossOrigin: string;
    fit: "fill" | "contain" | "cover" | "none" | "scale-down";
    srcset: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLSpanElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
