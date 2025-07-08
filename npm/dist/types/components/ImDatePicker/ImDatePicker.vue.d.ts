import { ImPlaceType } from '../../types';
type __VLS_Props = {
    modelValue?: string;
    disabled?: boolean;
    readonly?: boolean;
    clearable?: boolean;
    placeholder?: string;
    format?: string;
    zIndex?: number;
    placement?: ImPlaceType;
    showTime?: boolean;
    disabledDate?: (date?: Date) => boolean;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        footer?(_: {}): any;
    };
    refs: {
        triggerRef: ({
            $: import('vue').ComponentInternalInstance;
            $data: {};
            $props: {
                readonly size?: string | undefined;
                readonly disabled?: boolean | undefined;
                readonly readonly?: boolean | undefined;
                readonly placeholder?: string | undefined;
                readonly clearable?: boolean | undefined;
                readonly value?: string | undefined;
                readonly show?: boolean | undefined;
                readonly showIcon?: boolean | undefined;
                readonly onClear?: ((...args: any[]) => any) | undefined;
                readonly onChange?: ((...args: any[]) => any) | undefined;
            } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            } & {
                triggerRef: HTMLDivElement;
            };
            $slots: Readonly<{
                [name: string]: import('vue').Slot<any> | undefined;
            }>;
            $root: import('vue').ComponentPublicInstance | null;
            $parent: import('vue').ComponentPublicInstance | null;
            $host: Element | null;
            $emit: ((event: "clear", ...args: any[]) => void) & ((event: "change", ...args: any[]) => void);
            $el: HTMLDivElement;
            $options: import('vue').ComponentOptionsBase<Readonly<{
                size?: string;
                disabled?: boolean;
                readonly?: boolean;
                placeholder?: string;
                clearable?: boolean;
                value?: string;
                show?: boolean;
                showIcon?: boolean;
            }> & Readonly<{
                onClear?: ((...args: any[]) => any) | undefined;
                onChange?: ((...args: any[]) => any) | undefined;
            }>, {
                $el: import('vue').Ref<HTMLDivElement | undefined, HTMLDivElement | undefined>;
            }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
                clear: (...args: any[]) => void;
                change: (...args: any[]) => void;
            }, string, {
                size: string;
                show: boolean;
                disabled: boolean;
                readonly: boolean;
                placeholder: string;
                clearable: boolean;
                value: string;
                showIcon: boolean;
            }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: typeof import('vue').nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
        } & Readonly<{
            size: string;
            show: boolean;
            disabled: boolean;
            readonly: boolean;
            placeholder: string;
            clearable: boolean;
            value: string;
            showIcon: boolean;
        }> & Omit<Readonly<{
            size?: string;
            disabled?: boolean;
            readonly?: boolean;
            placeholder?: string;
            clearable?: boolean;
            value?: string;
            show?: boolean;
            showIcon?: boolean;
        }> & Readonly<{
            onClear?: ((...args: any[]) => any) | undefined;
            onChange?: ((...args: any[]) => any) | undefined;
        }>, "$el" | ("size" | "show" | "disabled" | "readonly" | "placeholder" | "clearable" | "value" | "showIcon")> & import('vue').ShallowUnwrapRef<{
            $el: import('vue').Ref<HTMLDivElement | undefined, HTMLDivElement | undefined>;
        }> & {} & import('vue').ComponentCustomProperties & {} & {
            $slots: {
                prefix?(_: {}): any;
                suffix?(_: {}): any;
            };
        }) | null;
        contentRef: ({
            $: import('vue').ComponentInternalInstance;
            $data: {};
            $props: {
                readonly visible: boolean;
                readonly zIndex?: number | "" | undefined;
                readonly placement?: ImPlaceType | undefined;
                readonly offset?: number | undefined;
                readonly getTriggerContainer?: (() => HTMLElement | null) | undefined;
                readonly customClass?: string | undefined;
                readonly arrow?: boolean | undefined;
                readonly scrollClose?: boolean | undefined;
                readonly role?: "tooltip" | "dropdown" | "" | undefined;
                readonly onClose?: ((...args: any[]) => any) | undefined;
                readonly onMouseenter?: ((...args: any[]) => any) | undefined;
                readonly onMouseleave?: ((...args: any[]) => any) | undefined;
            } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            } & {
                layerRef: HTMLDivElement;
            };
            $slots: Readonly<{
                [name: string]: import('vue').Slot<any> | undefined;
            }>;
            $root: import('vue').ComponentPublicInstance | null;
            $parent: import('vue').ComponentPublicInstance | null;
            $host: Element | null;
            $emit: ((event: "close", ...args: any[]) => void) & ((event: "mouseenter", ...args: any[]) => void) & ((event: "mouseleave", ...args: any[]) => void);
            $el: any;
            $options: import('vue').ComponentOptionsBase<Readonly<{
                visible: boolean;
                zIndex?: number | "";
                placement?: ImPlaceType;
                offset?: number;
                getTriggerContainer?: () => HTMLElement | null;
                customClass?: string;
                arrow?: boolean;
                scrollClose?: boolean;
                role?: "tooltip" | "dropdown" | "";
            }> & Readonly<{
                onClose?: ((...args: any[]) => any) | undefined;
                onMouseenter?: ((...args: any[]) => any) | undefined;
                onMouseleave?: ((...args: any[]) => any) | undefined;
            }>, {
                $el: import('vue').Ref<HTMLElement | null, HTMLElement | null>;
                updatePosition: () => Promise<void>;
            }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
                close: (...args: any[]) => void;
                mouseenter: (...args: any[]) => void;
                mouseleave: (...args: any[]) => void;
            }, string, {
                offset: number;
                zIndex: number | "";
                customClass: string;
                visible: boolean;
                placement: ImPlaceType;
                getTriggerContainer: () => HTMLElement | null;
                arrow: boolean;
                scrollClose: boolean;
                role: "tooltip" | "dropdown" | "";
            }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: typeof import('vue').nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
        } & Readonly<{
            offset: number;
            zIndex: number | "";
            customClass: string;
            visible: boolean;
            placement: ImPlaceType;
            getTriggerContainer: () => HTMLElement | null;
            arrow: boolean;
            scrollClose: boolean;
            role: "tooltip" | "dropdown" | "";
        }> & Omit<Readonly<{
            visible: boolean;
            zIndex?: number | "";
            placement?: ImPlaceType;
            offset?: number;
            getTriggerContainer?: () => HTMLElement | null;
            customClass?: string;
            arrow?: boolean;
            scrollClose?: boolean;
            role?: "tooltip" | "dropdown" | "";
        }> & Readonly<{
            onClose?: ((...args: any[]) => any) | undefined;
            onMouseenter?: ((...args: any[]) => any) | undefined;
            onMouseleave?: ((...args: any[]) => any) | undefined;
        }>, "$el" | "updatePosition" | ("offset" | "zIndex" | "customClass" | "visible" | "placement" | "getTriggerContainer" | "arrow" | "scrollClose" | "role")> & import('vue').ShallowUnwrapRef<{
            $el: import('vue').Ref<HTMLElement | null, HTMLElement | null>;
            updatePosition: () => Promise<void>;
        }> & {} & import('vue').ComponentCustomProperties & {} & {
            $slots: {
                default?(_: {}): any;
            };
        }) | null;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: string) => any;
    "update:modelValue": (value: string) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onChange?: ((value: string) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    zIndex: number;
    disabled: boolean;
    modelValue: string;
    readonly: boolean;
    placeholder: string;
    clearable: boolean;
    showTime: boolean;
    disabledDate: (date?: Date) => boolean;
    format: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    triggerRef: ({
        $: import('vue').ComponentInternalInstance;
        $data: {};
        $props: {
            readonly size?: string | undefined;
            readonly disabled?: boolean | undefined;
            readonly readonly?: boolean | undefined;
            readonly placeholder?: string | undefined;
            readonly clearable?: boolean | undefined;
            readonly value?: string | undefined;
            readonly show?: boolean | undefined;
            readonly showIcon?: boolean | undefined;
            readonly onClear?: ((...args: any[]) => any) | undefined;
            readonly onChange?: ((...args: any[]) => any) | undefined;
        } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        } & {
            triggerRef: HTMLDivElement;
        };
        $slots: Readonly<{
            [name: string]: import('vue').Slot<any> | undefined;
        }>;
        $root: import('vue').ComponentPublicInstance | null;
        $parent: import('vue').ComponentPublicInstance | null;
        $host: Element | null;
        $emit: ((event: "clear", ...args: any[]) => void) & ((event: "change", ...args: any[]) => void);
        $el: HTMLDivElement;
        $options: import('vue').ComponentOptionsBase<Readonly<{
            size?: string;
            disabled?: boolean;
            readonly?: boolean;
            placeholder?: string;
            clearable?: boolean;
            value?: string;
            show?: boolean;
            showIcon?: boolean;
        }> & Readonly<{
            onClear?: ((...args: any[]) => any) | undefined;
            onChange?: ((...args: any[]) => any) | undefined;
        }>, {
            $el: import('vue').Ref<HTMLDivElement | undefined, HTMLDivElement | undefined>;
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            clear: (...args: any[]) => void;
            change: (...args: any[]) => void;
        }, string, {
            size: string;
            show: boolean;
            disabled: boolean;
            readonly: boolean;
            placeholder: string;
            clearable: boolean;
            value: string;
            showIcon: boolean;
        }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
            renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import('vue').nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
    } & Readonly<{
        size: string;
        show: boolean;
        disabled: boolean;
        readonly: boolean;
        placeholder: string;
        clearable: boolean;
        value: string;
        showIcon: boolean;
    }> & Omit<Readonly<{
        size?: string;
        disabled?: boolean;
        readonly?: boolean;
        placeholder?: string;
        clearable?: boolean;
        value?: string;
        show?: boolean;
        showIcon?: boolean;
    }> & Readonly<{
        onClear?: ((...args: any[]) => any) | undefined;
        onChange?: ((...args: any[]) => any) | undefined;
    }>, "$el" | ("size" | "show" | "disabled" | "readonly" | "placeholder" | "clearable" | "value" | "showIcon")> & import('vue').ShallowUnwrapRef<{
        $el: import('vue').Ref<HTMLDivElement | undefined, HTMLDivElement | undefined>;
    }> & {} & import('vue').ComponentCustomProperties & {} & {
        $slots: {
            prefix?(_: {}): any;
            suffix?(_: {}): any;
        };
    }) | null;
    contentRef: ({
        $: import('vue').ComponentInternalInstance;
        $data: {};
        $props: {
            readonly visible: boolean;
            readonly zIndex?: number | "" | undefined;
            readonly placement?: ImPlaceType | undefined;
            readonly offset?: number | undefined;
            readonly getTriggerContainer?: (() => HTMLElement | null) | undefined;
            readonly customClass?: string | undefined;
            readonly arrow?: boolean | undefined;
            readonly scrollClose?: boolean | undefined;
            readonly role?: "tooltip" | "dropdown" | "" | undefined;
            readonly onClose?: ((...args: any[]) => any) | undefined;
            readonly onMouseenter?: ((...args: any[]) => any) | undefined;
            readonly onMouseleave?: ((...args: any[]) => any) | undefined;
        } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        } & {
            layerRef: HTMLDivElement;
        };
        $slots: Readonly<{
            [name: string]: import('vue').Slot<any> | undefined;
        }>;
        $root: import('vue').ComponentPublicInstance | null;
        $parent: import('vue').ComponentPublicInstance | null;
        $host: Element | null;
        $emit: ((event: "close", ...args: any[]) => void) & ((event: "mouseenter", ...args: any[]) => void) & ((event: "mouseleave", ...args: any[]) => void);
        $el: any;
        $options: import('vue').ComponentOptionsBase<Readonly<{
            visible: boolean;
            zIndex?: number | "";
            placement?: ImPlaceType;
            offset?: number;
            getTriggerContainer?: () => HTMLElement | null;
            customClass?: string;
            arrow?: boolean;
            scrollClose?: boolean;
            role?: "tooltip" | "dropdown" | "";
        }> & Readonly<{
            onClose?: ((...args: any[]) => any) | undefined;
            onMouseenter?: ((...args: any[]) => any) | undefined;
            onMouseleave?: ((...args: any[]) => any) | undefined;
        }>, {
            $el: import('vue').Ref<HTMLElement | null, HTMLElement | null>;
            updatePosition: () => Promise<void>;
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            close: (...args: any[]) => void;
            mouseenter: (...args: any[]) => void;
            mouseleave: (...args: any[]) => void;
        }, string, {
            offset: number;
            zIndex: number | "";
            customClass: string;
            visible: boolean;
            placement: ImPlaceType;
            getTriggerContainer: () => HTMLElement | null;
            arrow: boolean;
            scrollClose: boolean;
            role: "tooltip" | "dropdown" | "";
        }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
            renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import('vue').nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
    } & Readonly<{
        offset: number;
        zIndex: number | "";
        customClass: string;
        visible: boolean;
        placement: ImPlaceType;
        getTriggerContainer: () => HTMLElement | null;
        arrow: boolean;
        scrollClose: boolean;
        role: "tooltip" | "dropdown" | "";
    }> & Omit<Readonly<{
        visible: boolean;
        zIndex?: number | "";
        placement?: ImPlaceType;
        offset?: number;
        getTriggerContainer?: () => HTMLElement | null;
        customClass?: string;
        arrow?: boolean;
        scrollClose?: boolean;
        role?: "tooltip" | "dropdown" | "";
    }> & Readonly<{
        onClose?: ((...args: any[]) => any) | undefined;
        onMouseenter?: ((...args: any[]) => any) | undefined;
        onMouseleave?: ((...args: any[]) => any) | undefined;
    }>, "$el" | "updatePosition" | ("offset" | "zIndex" | "customClass" | "visible" | "placement" | "getTriggerContainer" | "arrow" | "scrollClose" | "role")> & import('vue').ShallowUnwrapRef<{
        $el: import('vue').Ref<HTMLElement | null, HTMLElement | null>;
        updatePosition: () => Promise<void>;
    }> & {} & import('vue').ComponentCustomProperties & {} & {
        $slots: {
            default?(_: {}): any;
        };
    }) | null;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
