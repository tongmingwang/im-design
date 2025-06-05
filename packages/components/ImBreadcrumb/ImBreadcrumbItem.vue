<template>
  <div @click="() => emits('click', props.value)"
    :class="[bem.b(), bem.is('active', props.active === props.value && !!props.value)]">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';

defineOptions({ name: 'ImBreadcrumbItem' })
// 组件bem封装
const bem = useBem('breadcrumb__item');
// 组件props
const props = withDefaults(defineProps<{
  active?: string;
  value: string;
}>(), {
  value: Math.random().toString()
})
// 组件emits事件声明
const emits = defineEmits<{
  (e: 'click', val: string): void;
}>();
</script>

<style scoped lang="scss">
  .im-breadcrumb__item {
    font-size: 14px;
    padding: 0;
    margin: 0;
    transition: all 0.3ms ease-in-out;
    cursor: pointer;

    &:hover {
      color: var(--im-gray-color-10);

    }

    &.is-active {
      color: var(--im-gray-color-10);
      cursor: default;
    }

  }
</style>