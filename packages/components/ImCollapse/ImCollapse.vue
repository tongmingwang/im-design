<template>
  <div :class="[bem.b()]">
    <component
      :is="item"
      v-for="item in items"
      :key="item.key"
      :activeName="props.modelValue"
      @change="onSelectItem" />
  </div>
</template>

<script setup lang="ts">
import { useSlots, computed } from 'vue';
import { useBem } from '@/utils/bem';

const bem = useBem('collapse');
const slots = useSlots();
defineOptions({ name: 'ImCollapse' });
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'change', value: string): void;
}>();
const props = withDefaults(
  defineProps<{
    title?: string;
    desc?: string;
    modelValue?: string;
  }>(),
  {
    title: '',
    desc: '',
    modelValue: '',
  }
);

function isCollapseItem(item: any) {
  return item.type?.name === 'ImCollapseItem';
}

function filterAllItems(items: any) {
  let result: any[] = [];
  if (Array.isArray(items)) {
    for (let i = 0; i < items.length; i++) {
      if (Array.isArray(items[i])) {
        result = result.concat(filterAllItems(items[i]));
      } else if (isCollapseItem(items[i])) {
        result.push(items[i]);
      } else if (Array.isArray(items[i].children)) {
        result = result.concat(filterAllItems(items[i].children));
      }
    }
  }
  return result.filter((item: any) => isCollapseItem(item));
}

const items = computed(() => filterAllItems(slots.default?.()));

const onSelectItem = (key: string) => {
  emit('update:modelValue', key);
  emit('change', key);
};
</script>

<style scoped lang="scss">
.im-collapse {
  padding: 0;
  margin: 16px 0;
  width: 100%;
  box-sizing: border-box;
}
</style>
