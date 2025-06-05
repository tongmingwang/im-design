<template>
  <div :class="[bem.b()]">
    <template v-for="(item, index) in items">
      <component :is="item" :active="props.modelValue" @click="onActive" />
      <span v-if="items && items.length > 0 && index < items.length - 1" :class="[bem.e('separator')]">
        <slot name="separator">{{ props.separator }}</slot>
      </span>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import { useSlots, computed } from 'vue';

defineOptions({ name: 'ImBreadcrumb' });
// 组件插槽
const slots = useSlots();
// 组件事件定义
const emit = defineEmits(['update:modelValue', 'change']);
// 组件bem封装
const bem = useBem('breadcrumb');
// 组件props定义
const props = withDefaults(
  defineProps<{
    modelValue?: string;
    separator?: string;
  }>(),
  {
    separator: '/',
    modelValue: '',
  }
);
// 组件内部数据定义

const items = computed(() =>
  slots
    .default?.()
    // @ts-ignore
    ?.filter((com) => com?.type && com?.type?.name === 'ImBreadcrumbItem')
);
// 组件方法定义
const onActive = (value: string) => {
  if (value && props.modelValue !== value) {
    emit('update:modelValue', value);
    emit('change', value);
  }
}
</script>

<style scoped lang="scss">
  .im-breadcrumb {
    display: flex;
    align-items: center;
    font-size: 14px;
    padding: 0;
    margin: 0;
    gap: 0;
    color: var(--im-gray-color-7);
    background-color: transparent;
    line-height: 24px;

    .im-breadcrumb__separator {
      margin: 0 8px;
    }
  }
</style>
