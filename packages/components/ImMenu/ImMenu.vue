<template>
  <ul
    :class="[bem.b(), props.color && bem.m(props.color)]"
    :style="{
      '--im-menu-align': alignVal,
    }">
    <component
      :is="item"
      v-for="item in menuItems"
      :activeName="props.modelValue"
      :subActives="props.subActives"
      @change="onSelected"
      :color="props.color"></component>
  </ul>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import { useSlots, computed, provide } from 'vue';

const bem = useBem('menu');
const emit = defineEmits(['update:modelValue']);
defineOptions({
  name: 'ImMenu',
});
const props = withDefaults(
  defineProps<{
    modelValue: string | number;
    subActives?: Array<string | number>;
    disabled?: boolean;
    vertical?: boolean;
    color?: 'primary' | 'success' | 'warning' | 'error' | '';
    align?: 'left' | 'center' | 'right';
  }>(),
  {
    disabled: false,
    vertical: false,
    color: '',
    modelValue: '',
    subActives: () => [],
  }
);
const slots = useSlots();
const menuItems = computed(() => deepSetProps(slots.default?.() || []));
const alignVal = computed(() => {
  return props.align ? getAlign(props.align) : '';
});
provide('ImMenuProvider', {
  isActive: (name: string | number) => name === props.modelValue,
  setActive: onSelected,
  isActiveSub: (name: string | number) => {
    console.log(name, props.subActives);

    return props.subActives?.includes(name);
  },
});
function getAlign(align: 'left' | 'center' | 'right') {
  return align === 'right' ? 'flex-end' : align === 'center' ? 'center' : '';
}
function isMenuItem(item: any) {
  return item.type?.name === 'ImMenuItem' || item.type?.name === 'ImSubMenu';
}
function setProps(item: any) {
  item.props = item.props
    ? { ...item.props, activeName: props.modelValue, color: props.color }
    : { activeName: props.modelValue, color: props.color };
}

function deepSetProps(arr: any) {
  const result: any[] = [];
  arr.forEach((slot: any) => {
    if (isMenuItem(slot)) {
      result.push(slot);
      setProps(slot);
      if (Array.isArray(slot.children)) {
        slot.children = deepSetProps(slot.children);
      }
    }
  });
  return result;
}

function onSelected(name: string | number) {
  emit('update:modelValue', name);
}
</script>

<style scoped lang="scss">
.im-menu {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: var(--im-menu-align, flex-start);
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  background-color: var(--im-bg-content-color);
  border: none;
  border-bottom: 1px solid var(--im-gray-color-4);
  height: 64px;

  @each $color in primary, success, warning, error {
    &--#{$color} {
      background-color: var(--im-#{$color}-color-8);
      color: var(--im-#{$color}-color-1);
    }
  }
}
</style>
