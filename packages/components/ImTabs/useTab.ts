import { provide, ref, watch, inject, computed } from 'vue';
import type { TabsProps, TabProps } from './types';

const key = Symbol('im-tab');

export const useTab = (props: TabsProps, emit: any) => {
  const active = ref(props.modelValue);

  provide(key, {
    activeTab: () => active.value,
    setActiveTab: (value: string | number) => {
      if (value || value === 0) {
        active.value = value;
        emit('update:modelValue', value);
        emit('change', value);
      }
    },
    color: props.color,
    align: props.align,
  });

  watch(
    () => props.modelValue,
    (newVal) => {
      active.value = newVal;
    }
  );

  return {
    active,
  };
};

export const useInjectTab = (props: TabProps) => {
  const tab = inject(key, {
    activeTab: () => '',
    setActiveTab: (value: string | number) => {},
    color: 'default',
    align: 'left',
  });

  const active = computed(() => {
    const name = props.name;
    const activeName = tab.activeTab();
    return Boolean(activeName === name && name);
  });
  const color = computed(() => tab.color);
  const setActive = () => {
    if (props.disabled) return;
    tab.setActiveTab(props.name);
  };

  return {
    setActive,
    active,
    color,
  };
};
