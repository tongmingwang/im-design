import { defineComponent, h } from 'vue';
import ImIcon from '../ImIcon';
import './style.scss';
import { useInject } from './useProvider';

// 段落骨架线
export const Line = defineComponent({
  name: 'ImSkeletonLine',
  props: {
    rows: {
      type: Number,
      default: 1,
    },
  },
  setup(props) {
    const { loading } = useInject();
    return () => {
      const arr = new Array(Number(props.rows) || 0).fill(0);
      const classNames = [
        'im-skeleton__line',
        loading.value ? 'im-skeleton__loading' : '',
      ].join(' ');

      return arr?.map((_) => h('div', { class: classNames }, ''));
    };
  },
});

// 头像骨架线
export const Avatar = defineComponent({
  name: 'ImSkeletonAvatar',
  props: {
    size: {
      type: [Number, String],
      default: '40',
    },
    shape: {
      type: String,
      default: 'circle',
      validator: (val: string) => ['circle', 'square'].includes(val),
    },
  },
  setup(props) {
    const { loading } = useInject();
    return () =>
      h(
        'div',
        {
          class: [
            'im-skeleton__avatar',
            loading.value ? 'im-skeleton__loading' : '',
            `im-skeleton__avatar--${props.shape}`,
          ],
          style: `--im-skeleton-size:${Number(props.size) || 40}px`,
        },
        ''
      );
  },
});

// 图片骨架线
export const Image = defineComponent({
  name: 'ImSkeletonImage',
  components: {
    ImIcon,
  },
  props: {
    size: {
      type: [Number, String],
      default: '40',
    },
    shape: {
      type: String,
      default: 'circle',
      validator: (val: string) => ['circle', 'square'].includes(val),
    },
  },
  setup(props) {
    const { loading } = useInject();
    return () =>
      h(
        'div',
        {
          class: [
            'im-skeleton__image',
            loading.value ? 'im-skeleton__loading' : '',
            `im-skeleton__avatar--${props.shape}`,
          ],
          style: `--im-skeleton-size:${Number(props.size) || 40}px`,
        },
        [h(ImIcon, { name: 'image', size: '100%' })]
      );
  },
});
