import { defineComponent, h } from 'vue';
import './title.scss';

export default defineComponent({
  name: 'ImTitle',
  props: {
    text: {
      type: String,
      default: '',
    },
    level: {
      type: [Number, String],
      default: '1',
    },
  },
  setup(props, { slots, attrs }) {
    return () => {
      const Tag = [1, 2, 3, 4, 5, 6].includes(Number(props.level))
        ? `h${props.level}`
        : 'h1';
      const title = slots.default?.() || props.text || '';
      return h(
        Tag,
        { ...attrs, class: ['im-title', `im-title--${Tag}`] },
        title
      );
    };
  },
});
