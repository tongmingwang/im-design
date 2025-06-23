import { AlertProps } from './AlertProps';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        icon?(_: {}): any;
        title?(_: {}): any;
        default?(_: {}): any;
        close?(_: {}): any;
    };
    refs: {
        alertRef: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<AlertProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    close: () => any;
}, string, import('vue').PublicProps, Readonly<AlertProps> & Readonly<{
    onClose?: (() => any) | undefined;
}>, {
    title: string;
    message: string;
    color: "success" | "error" | "warning" | "primary";
    showIcon: boolean;
    closable: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    alertRef: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
