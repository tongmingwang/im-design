<template>
  <ul :class="[bem.b()]">
    <template v-for="item in items">
      <component :is="item" :active="props.modelValue" @click="() => onActive(item.props)"></component>
    </template>
  </ul>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import type { VNodeTypes } from 'vue';
import { useSlots, computed } from 'vue';

defineOptions({ name: 'ImList' })
const props = withDefaults(defineProps<{
  modelValue?: string
}>(), {
  modelValue: '',
})
const slots = useSlots();
const bem = useBem('list');
const items = computed(() => {
  const dArr = (slots.default?.() || [])
  if (dArr.length) {
    const list: VNodeTypes = []
    dArr.forEach(o => {
      if (typeof o.type === 'object') {
        list.push(o)
      } else if (o.children && o.children?.length) {
        // @ts-ignore
        o.children?.forEach((c: unknown) => {
          // @ts-ignore
          if (typeof c?.type === 'object') {
            list.push(c)
          }
        })
      }
    })
    return list
  }
})
console.log(items.value);

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'change', value: string): void;
}>()

const onActive = (item: { value: string }) => {
  emit('update:modelValue', item.value)
  emit('change', item.value)
}

</script>

<style scoped lang="scss">
  .im-list {
    list-style: none;
    padding: 4px;
    margin: 0;
    overflow: auto;
    width: 100%;
    background-color: var(--im-bg-content-color, #fff);
  }
</style>