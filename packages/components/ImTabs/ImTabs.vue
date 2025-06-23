<template>
  <ul
    :class="[bem.b(), props.color && bem.m(props.color)]"
    :style="{
      justifyContent: alignValue,
    }"
    ref="tabRef">
    <component
      v-for="item in paneList"
      :is="item"
      :modelValue="props.modelValue"
      :color="props.color"
      @change="onSelect" />
    <div :class="[bem.e('bar-wrapper')]">
      <div :class="[bem.e('bar')]" :style="barStyle" />
    </div>
  </ul>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import { computed, useSlots, reactive, ref, watch } from 'vue';

const bem = useBem('tabs');
defineOptions({ name: 'ImTabs' });
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'change', value: string): void;
}>();
const props = withDefaults(
  defineProps<{
    label?: string;
    modelValue?: string;
    color?: 'primary' | 'error' | 'success' | 'warning' | '';
    align?: 'center' | 'right' | 'left';
  }>(),
  {
    label: '',
    modelValue: '',
    color: '',
    align: 'left',
  }
);
const barStyle = reactive({
  width: '',
  left: '0px',
});
const tabRef = ref<HTMLElement>();
const slots = useSlots();
const paneList = computed(() => filterPane(slots.default?.() || []));
const alignValue = computed(() => {
  switch (props.align) {
    case 'center':
      return 'center';
    case 'right':
      return 'flex-end';
    default:
      return 'flex-start';
  }
});

watch(
  () => props.modelValue,
  () => {
    updateBarPosition();
  },
  {
    immediate: true,
    flush: 'post', // 等待下一个事件循环，确保DOM更新完成后再执行
  }
);

function isTab(slot: any) {
  return slot.type?.name === 'ImTab';
}

function filterPane(arr: Array<any>) {
  const result: Array<any> = [];
  arr.forEach((slot) => {
    if (isTab(slot)) {
      result.push(slot);
    } else if (Array.isArray(slot.children)) {
      result.push(...filterPane(slot.children));
    }
  });
  return result;
}

async function onSelect(name: string) {
  emit('update:modelValue', name);
  emit('change', name);
  updateBarPosition();
}

async function updateBarPosition() {
  // 兼容服务端渲染时，DOM还未更新完成的问题。等待下一个事件循环执行。
  await new Promise((resolve) => setTimeout(resolve, 0));
  if (!tabRef.value) return;
  const p = tabRef.value?.querySelector('.im-tab.is-active') as HTMLElement;
  const rect = p.getBoundingClientRect();
  const pRect = tabRef.value?.getBoundingClientRect();
  barStyle.width = rect.width + 'px';
  barStyle.left = rect.x - pRect?.x + 'px';
}
</script>

<style scoped lang="scss">
.im-tabs {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  list-style: none;
  padding: 0;
  margin: 16px 0 0;
  background-color: var(--im-bg-content-color);
  border-radius: 0;
  overflow-y: hidden;
  overflow-x: auto;
  width: 100%;
  border-top-left-radius: var(--im-radius, 4px);
  border-top-right-radius: var(--im-radius, 4px);
  position: relative;
  border: none;
  --bar-size: 2px;

  &__bar-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: var(--bar-size);
    background-color: var(--im-gray-color-3);
  }

  // 色彩
  @each $color in primary, error, success, warning {
    &.im-tabs--#{$color} {
      background-color: var(--im-#{$color}-color-8);
      color: var(--im-gray-color-1);
      .im-tabs__bar {
        background-color: var(--im-#{$color}-color-1);
      }
      .im-tabs__bar-wrapper {
        background-color: var(--im-#{$color}-color-8);
      }
    }
  }
  .im-tabs__bar {
    position: absolute;
    bottom: 0;
    z-index: 10;
    left: 0;
    width: 0;
    height: var(--bar-size);
    background-color: var(--im-primary-color-8);
    border-radius: var(--bar-size);
    transition: all 0.3s ease-in-out;
  }
}
</style>
