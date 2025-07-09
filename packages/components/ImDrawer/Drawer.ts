import { defineComponent, h } from 'vue';
import './style.scss';

export const Header = defineComponent({
  name: 'ImDrawerHeader',
  props: {
    title: String,
  },
  setup(props, { slots, attrs }) {
    return () => {
      const title = slots.default?.() || props.title || '';
      return h(
        'header',
        {
          ...attrs,
          class: 'im-drawer__header',
        },
        title
      );
    };
  },
});

export const Body = defineComponent({
  name: 'ImDrawerBody',
  setup(_, { slots, attrs }) {
    return () =>
      h('div', { ...attrs, class: 'im-drawer__body' }, slots.default?.());
  },
});
export const Footer = defineComponent({
  name: 'ImDrawerFooter',
  props: {
    align: {
      type: String,
      default: 'flex-start',
    },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h(
        'footer',
        {
          ...attrs,
          class: 'im-drawer__footer',
          style: 'justify-content:' + props.align,
        },
        slots.default?.()
      );
  },
});
