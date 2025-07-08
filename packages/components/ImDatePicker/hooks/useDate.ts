import { ref, watch } from 'vue';
import { debounce } from '@/utils';

export const useDate = (props: any) => {
  // 渲染的日期值
  const date = ref(props.modelValue || '');
  const showPane = ref(false);
  const triggerRef = ref<HTMLElement | null>(null);
  const contentRef = ref<HTMLElement | null>(null);

  // 统一更新显示状态，防抖处理
  const setShow = debounce((bol: boolean) => {
    showPane.value = bol;
  }, 100);

  function getTarget() {
    // @ts-ignore
    return triggerRef.value?.$el;
  }
  function handleDocClick(e: MouseEvent) {
    // @ts-ignore
    const c = contentRef.value?.$el;
    if (c && !c.contains(e.target as Node)) {
      setShow(false);
    }
  }

  function bindEvent() {
    setTimeout(() => {
      window.removeEventListener('click', handleDocClick, { capture: true });
      if (showPane.value) {
        window.addEventListener('click', handleDocClick, { capture: true });
      }
    }, 0);
  }

  watch(
    () => showPane.value,
    () => {
      bindEvent();
    }
  );
  watch(
    () => props.modelValue,
    (val) => {
      date.value = val;
    }
  );

  return {
    date,
    showPane,
    getTarget,
    triggerRef,
    contentRef,
    setShow,
  };
};
