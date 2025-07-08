import { ImPlaceType } from '../../types/index.ts';
type __VLS_Props = {
    visible: boolean;
    zIndex?: number | '';
    placement?: ImPlaceType;
    offset?: number;
    getTriggerContainer?: () => HTMLElement | null;
    customClass?: string;
    arrow?: boolean;
    scrollClose?: boolean;
    role?: 'tooltip' | 'dropdown' | '';
};
/**
 * 更新位置函数
 *
 * 异步更新触发容器的位置，并根据触发容器的位置和定位方式，调整图层的位置
 */
declare function updatePosition(): Promise<void>;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {
        layerRef: HTMLDivElement;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {
    $el: import('vue').Ref<HTMLElement | null, HTMLElement | null>;
    updatePosition: typeof updatePosition;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    close: (...args: any[]) => void;
    mouseenter: (...args: any[]) => void;
    mouseleave: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClose?: ((...args: any[]) => any) | undefined;
    onMouseenter?: ((...args: any[]) => any) | undefined;
    onMouseleave?: ((...args: any[]) => any) | undefined;
}>, {
    offset: number;
    zIndex: number | "";
    customClass: string;
    visible: boolean;
    placement: ImPlaceType;
    getTriggerContainer: () => HTMLElement | null;
    arrow: boolean;
    scrollClose: boolean;
    role: "tooltip" | "dropdown" | "";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    layerRef: HTMLDivElement;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
