<template>
  <div :class="[bem.b(), bem.is('vertical', props.vertical)]">
    <component
      v-for="(item, index) in btns"
      :key="index"
      :is="item"
      shape=""
      class="im-button-group__item"
      :size="props.size" />
  </div>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import { useSlots, computed } from 'vue';

const bem = useBem('button-group');
defineOptions({
  name: 'ImButtonGroup',
});
const props = withDefaults(
  defineProps<{
    vertical?: boolean;
    size?: number | string;
    color?: '' | 'primary' | 'success' | 'warning' | 'error';
  }>(),
  {
    vertical: false,
    size: '',
    color: '',
  }
);
const slots = useSlots();
const btns = computed(() => filterBtn(slots.default?.() || []));

// 过滤出按钮组件的插槽内容，并返回数组
function filterBtn(arr: any[]) {
  const res: any = [];
  arr.forEach((item) => {
    const { name } = item?.type || {};
    if (name === 'ImButton') {
      item.props = item.props
        ? { ...item.props, color: props.color }
        : (item.props = { color: props.color });
      res.push(item);
    } else if (Array.isArray(item.children)) {
      res.push(...filterBtn(item.children));
    }
  });
  return res;
}
</script>

<style lang="scss">
.im-button-group {
  display: inline-flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  gap: 0;

  .im-button-group__item {
    padding: 0 12px;
    border-radius: 0;
    margin: 0;
    position: relative;
    z-index: 0;
    margin-left: -1px;
    &:hover {
      z-index: 1;
    }
    &:first-child {
      border-top-left-radius: var(--im-radius);
      border-bottom-left-radius: var(--im-radius);
      margin-left: 0;
    }
    &:last-child {
      border-top-right-radius: var(--im-radius);
      border-bottom-right-radius: var(--im-radius);
    }
  }

  &.is-vertical {
    flex-direction: column;
    width: fit-content;
    height: fit-content;

    .im-button-group__item {
      padding: 0 12px;
      width: 100%;
      border-radius: 0;
      position: relative;
      margin: 0;
      margin-top: -1px;
      z-index: 0;
      text-align: left;
      justify-content: flex-start;
      &:hover {
        z-index: 1;
      }
      &:first-child {
        border-top-left-radius: var(--im-radius);
        border-top-right-radius: var(--im-radius);
        margin-top: 0;
      }
      &:last-child {
        border-bottom-left-radius: var(--im-radius);
        border-bottom-right-radius: var(--im-radius);
      }
    }
  }
}
</style>
