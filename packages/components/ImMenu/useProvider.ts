import { inject, provide, ref, watch, computed } from 'vue';
import type { MenuProvide, MenuProps, MenuItemProps } from './types';
const key = Symbol('im-menu-provider');
const subKey = Symbol('im-sub-menu-provider');
// 子菜单的paddingLeft 注入数据，用于计算submenu的paddingLeft值
const paddingLeftMultiple = Symbol('im-sub-menu-paddingLeft');

// 主menu注入的数据
export const useProvider = (props: MenuProps) => {
  const activeName = ref(props.modelValue);

  provide(key, {
    isActive: (name: string | number) =>
      activeName.value === name && (name || name === 0),
    setActiveName: (name: string | number) => {
      activeName.value = name;
    },
    isSubActive: (name: string | number) =>
      props.subActiveList?.includes(name) && (name || name === 0),

    isVertical: () => props.vertical,
  });
  provide(paddingLeftMultiple, 1);

  watch(
    () => props.modelValue,
    () => {
      activeName.value = props.modelValue;
    }
  );
  return {
    activeName,
  };
};

// 子menu的数据
export const useMenuInject = (props: MenuItemProps) => {
  const menu = inject(key, {} as MenuProvide);
  const paddingLeft = inject(paddingLeftMultiple, 1);

  const vertical = computed(() => menu.isVertical());
  const subActive = computed(() => menu.isSubActive(props.name || ''));
  const active = computed(() => menu.isActive(props.name || ''));
  return {
    isActive: (name: string | number) => menu.isActive(name),
    setActiveName: (name: string | number) => menu.setActiveName(name),
    isSubActive: (name: string | number) => menu.isSubActive(name),
    isVertical: () => menu.isVertical(),
    vertical,
    active,
    subActive,
    paddingLeft,
  };
};

// sub 注入给子的数据
export const useSubProvider = () => {
  const paddingLeft = inject(paddingLeftMultiple, 1);
  provide(paddingLeftMultiple, paddingLeft + 1);
  provide(subKey, {
    isSub: true,
  });
};

export const useMenuItem = () => {
  const subProvider = inject(subKey, {} as { isSub: boolean });

  const isSub = computed(() => subProvider?.isSub);

  return {
    isSub,
  };
};
