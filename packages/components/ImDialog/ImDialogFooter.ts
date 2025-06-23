import { defineComponent, h } from 'vue';
import './styles/footer.scss';
export default defineComponent({
  name: 'ImDialogFooter',
  props: {
    divider: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots }) {
    return () => {
      const footer = slots?.default?.() || null;
      return footer
        ? h(
            'footer',
            {
              class: `im-dialog__footer ${
                props.divider ? 'im-dialog__footer_border' : ''
              }`,
            },
            footer
          )
        : null;
    };
  },
});
