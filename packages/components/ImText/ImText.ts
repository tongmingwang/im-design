import { defineComponent, h } from 'vue';
import './style.scss';

export const Text = defineComponent({
  name: 'ImText',
  props: {
    color: {
      type: String,
      default: '',
    },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h(
        'p',
        { ...attrs, class: ['im-text', `im-text--${props.color}`] },
        slots.default ? slots.default() : ''
      );
  },
});

export const Link = defineComponent({
  name: 'ImLink',
  setup(_, { slots, attrs }) {
    return () =>
      h(
        'a',
        { ...attrs, class: ['im-link'] },
        slots.default ? slots.default() : ''
      );
  },
});
