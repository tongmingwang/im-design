import { defineComponent, h, ref, watch, onMounted } from 'vue';
import './style.scss';
import { useToken } from '@/hooks/useToken';

export default defineComponent({
  name: 'ImTextarea',
  props: {
    modelValue: String,
    placeholder: String,
    rows: {
      type: Number,
      default: 2,
      validator: (val: number) => val >= 1,
    },
    maxlength: Number,
    minlength: Number,
    autoSize: Boolean,
    disabled: Boolean,
    readonly: Boolean,
  },
  emits: ['update:modelValue', 'change', 'focus', 'blur'],
  setup(props, { emit, expose, attrs }) {
    const value = ref(props.modelValue || '');
    const inputRef = ref<HTMLTextAreaElement | null>(null);
    const isFocused = ref(false);
    const { sizeToken } = useToken();

    onMounted(() => {
      updateAutosize();
    });
    watch(
      () => props.modelValue,
      (val) => {
        value.value = val || '';
        updateAutosize();
      }
    );
    const handleInput = (e: Event) => {
      const target = e.target as HTMLTextAreaElement;
      value.value = target.value;
      emit('update:modelValue', value.value);
      emit('change', value.value);
      updateAutosize();
    };
    function updateAutosize() {
      if (props.autoSize && inputRef.value) {
        inputRef.value.style.height = 'auto';
        inputRef.value.style.height = `${inputRef.value.scrollHeight}px`;
      }
    }
    function onFocus(e: Event) {
      emit('focus', e);
      isFocused.value = true;
    }
    function onBlur(e: Event) {
      emit('blur', e);
      isFocused.value = false;
    }
    expose({
      $el: inputRef,
      focus: () => inputRef.value?.focus(),
      blur: () => inputRef.value?.blur(),
    });

    return () => {
      return h('textarea', {
        ...attrs,
        value: value.value,
        onInput: handleInput,
        placeholder: props.placeholder,
        rows: props.rows,
        ref: inputRef,
        maxlength: props.maxlength,
        minlength: props.minlength,
        onFocus,
        onBlur,
        disabled: props.disabled,
        readonly: props.readonly,
        class: [
          'im-textarea',
          isFocused.value && 'is-focused',
          props.disabled && 'is-disabled',
          props.readonly && 'is-readonly',
          props.autoSize && 'is-autosize',
        ],
        style: {
          '--im-textarea-height': `${sizeToken.value || 36}px`,
        },
      });
    };
  },
});
