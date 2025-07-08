import { defineComponent, h } from 'vue';
import './card.scss';

export const CardBody = defineComponent({
  name: 'ImCardBody',
  props: {
    content: String,
  },
  setup(props, { slots, attrs }) {
    return () =>
      h(
        'div',
        { ...attrs, class: 'im-card__body' },
        slots?.default?.() || props.content || ''
      );
  },
});

export const CardFooter = defineComponent({
  name: 'ImCardFooter',
  props: {
    align: {
      type: String,
      default: 'left',
      validator: (value: string) => ['left', 'center', 'right'].includes(value),
    },
    divider: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots, attrs }) {
    const classNames = ['im-card__footer'];
    if (props.align) classNames.push(`im-card__footer--${props.align}`);
    if (props.divider) classNames.push('im-card__footer--divider');
    return () =>
      h(
        'div',
        {
          ...attrs,
          class: classNames.join(' '),
        },
        slots?.default?.()
      );
  },
});

export const CardHeader = defineComponent({
  name: 'ImCardHeader',
  props: {
    title: String,
    divider: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots, attrs }) {
    const actions = slots?.actions?.() || null;
    const classNames = ['im-card__header'];
    if (props.divider) classNames.push('im-card__header--divider');
    return () =>
      h('div', { ...attrs, class: classNames }, [
        h(
          'div',
          { class: 'im-card__title' },
          slots?.default?.() || props.title || ''
        ),
        actions
          ? h('div', { class: 'im-card__header--actions' }, actions)
          : null,
      ]);
  },
});
