import { defineComponent, h } from 'vue';
import './styles/header.scss';

export default defineComponent({
  name: 'ImDialogHeader',
  props: {
    title: String,
    divider: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots }) {
    return () => {
      const action = slots?.action?.() || null;
      const title = slots?.default?.() || props.title;
      return title || action
        ? h(
            'header',
            {
              class: `im-dialog__header ${
                props.divider ? 'im-dialog__header-border' : ''
              }`,
            },
            [
              h('div', { class: 'im-dialog-header__title' }, title),
              action
                ? h('div', { class: 'im-dialog-header__action' }, action)
                : null,
            ]
          )
        : null;
    };
  },
});
