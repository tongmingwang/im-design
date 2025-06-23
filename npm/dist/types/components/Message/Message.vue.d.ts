import { MessageItem } from './types';
/**
 * 实现逻辑：
 * 定义一个组件，支持添加每一条消息，消息添加后，会在页面上显示，并且在一定时间后自动消失。
 */
type __VLS_Props = {
    callback: () => void;
    add: (fn: (item: MessageItem) => void) => void;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {
    addMsg: (item: MessageItem) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
