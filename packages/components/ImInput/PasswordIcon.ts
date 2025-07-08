import { defineComponent, h } from 'vue';
import ImIcon from '../ImIcon';
import './styles/pwd-icon.scss';

export default defineComponent({
  name: 'PasswordIcon',
  components: { ImIcon },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['change'],
  setup(props, { emit, slots, attrs }) {
    return () =>
      h(
        'div',
        {
          class: 'im-input__password-icon',
          onClick: () => emit('change', !props.show),
        },
        props.show
          ? h(ImIcon, { name: 'eye', size: '16px' })
          : h(ImIcon, { name: 'eye-close', size: '16px' })
      );
  },
});
