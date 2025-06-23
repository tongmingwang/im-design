import { defineComponent, h } from 'vue';
import './styles/body.scss';
export default defineComponent({
  name: 'ImDialogBody',
  props: {
    content: String,
  },
  setup(props, { slots }) {
    return () => {
      return h(
        'main',
        { class: 'im-dialog__body' },
        slots.default?.() || props.content
      );
    };
  },
});
