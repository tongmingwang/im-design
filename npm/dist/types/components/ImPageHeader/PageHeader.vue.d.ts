type __VLS_Props = {
    title?: string;
    subTitle?: string;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        back?(_: {}): any;
        title?(_: {}): any;
        subTitle?(_: {}): any;
        content?(_: {}): any;
        action?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    back: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onBack?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
