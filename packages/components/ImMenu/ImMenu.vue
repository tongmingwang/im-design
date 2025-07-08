<template>
  <ul
    :class="[
      bem.b(),
      props.color && bem.m(props.color),
      bem.is('vertical', props.vertical),
    ]"
    :style="styles">
    <slot />
  </ul>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import { computed, watch } from 'vue';
import { useProvider } from './useProvider';

const bem = useBem('menu');
const emit = defineEmits(['update:modelValue', 'change']);
defineOptions({
  name: 'ImMenu',
});
const props = withDefaults(
  defineProps<{
    modelValue?: string | number;
    subActiveList?: Array<string | number>;
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
    subActiveList: () => [],
  }
);
const styles = computed(() => {
  const colors = getColor();
  return {
    '--im-menu-align': props.align ? getAlign(props.align) : '',
    // 文字
    ...colors,
    '--im-menu-item-height': props.vertical ? '40px' : '100%',
    '--im-menu-border-color': 'var(--im-gray-color-4)',
    '--im-menu-height': '64px',
    '--im-menu-width': '240px',
    '--im-menu-radius': 'var(--im-radius)',
  };
});

const { activeName } = useProvider(props);

watch(
  () => activeName.value,
  () => {
    console.log(activeName.value);

    emit('update:modelValue', activeName.value);
    emit('change', activeName.value);
  }
);

function getColor() {
  if (['primary', 'error', 'warning', 'success'].includes(props.color)) {
    return {
      '--im-menu-text-color': `var(--im-${props.color}-color-3)`,
      '--im-menu-active-text-color': `var(--im-gray-color-1)`,
      '--im-menu-bg-color': `var(--im-${props.color}-color-8)`,
      '--im-menu-hover-bg-color': 'var(--im-rgb-color-1)',
      '--im-menu-active-bg-color': `var(--im-${props.color}-color-7)`,
    };
  }
  return {
    '--im-menu-text-color': 'var(--im-gray-color-10)',
    '--im-menu-active-text-color': 'var(--im-primary-color-8)',

    '--im-menu-bg-color': 'var(--im-bg-content-color)',
    '--im-menu-hover-bg-color': 'var(--im-rgb-color-1)',
    '--im-menu-active-bg-color': 'var(--im-primary-color-1)',
  };
}
function getAlign(align: 'left' | 'center' | 'right') {
  return align === 'right' ? 'flex-end' : align === 'center' ? 'center' : '';
}
</script>

<style lang="scss" scoped>
.im-menu {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: var(--im-menu-align, flex-start);
  flex-wrap: nowrap;
  overflow: visible;
  background-color: var(--im-menu-bg-color);
  border: none;
  border-bottom: 1px solid var(--im-gray-color-4);
  height: var(--im-menu-height);
  position: relative;

  &.is-vertical {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    border: none;
    width: var(--im-menu-width);
    height: auto;
    padding: 8px;
    overflow-y: auto;
  }
}
</style>
