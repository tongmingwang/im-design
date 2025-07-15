import { ref, computed, provide, inject, watch } from 'vue';
import type { RadioGroupProps, RadioProps } from './types';
import { getSizeValue } from '@/utils';
import { useToken } from '@/hooks/useToken';

const key = Symbol('imRadioGroup');

export const useRadioGroup = (props: RadioGroupProps, emit: any) => {
  const active = ref(props.modelValue);

  watch(
    () => props.modelValue,
    (newVal) => {
      active.value = newVal;
    }
  );

  const setActive = (value: string | number) => {
    if (!value && value !== 0) return;
    active.value = value;
    emit('update:modelValue', value);
    emit('change', value);
  };

  provide(key, {
    isActive: (n: string | number) =>
      Boolean(active.value === n && (n || n === 0)),
    setActive,
    variant: () => props.variant,
    disabled: () => props.disabled,
    size: () => props.size,
    vertical: () => props.vertical,
  });
};

export const useRadio = (props: RadioProps) => {
  const { sizeToken } = useToken();
  const group = inject(key, {
    isActive: (n: string | number) => false,
    disabled: () => false,
    variant: () => '',
    size: () => 36,
    vertical: () => false,
    setActive: (n: string | number) => {},
  });

  return {
    isActive: computed(() => group.isActive(props.value)),
    disabled: computed(() => props.disabled || group.disabled()),
    isButton: computed(() => {
      const v = group.variant();
      return !!(v && v === 'button');
    }),
    size: computed(() => getSizeValue(group.size() || sizeToken.value || 36)),
    vertical: computed(() => !!group.vertical()),
    setActive: () => group.setActive(props.value),
  };
};
