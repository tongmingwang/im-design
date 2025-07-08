<template>
  <ul :class="[bem.b()]">
    <template v-for="item in items">
      <component
        :is="item"
        :active="props.modelValue"
        @click="() => onActive(item)"></component>
    </template>
  </ul>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import { useSlots, computed, type VNode, type VNodeTypes } from 'vue';

defineOptions({ name: 'ImList' });
const props = withDefaults(
  defineProps<{
    modelValue?: string;
  }>(),
  {
    modelValue: '',
  }
);
const slots = useSlots();
const bem = useBem('list');

// Helper function to check if a VNode is a component
const isComponentVNode = (node: VNode) => {
  return typeof node.type === 'object' && node.type !== null; // Ensure type is an object and not null
};

// Function to extract component VNodes with their props
const extractComponentVNodes = (
  nodes: VNode[],
  name: string
): { vnode: VNodeTypes; props: Record<string, any> }[] => {
  const result: { vnode: VNodeTypes; props: Record<string, any> }[] = [];
  nodes.forEach((node: any) => {
    if (isComponentVNode(node) && node.type && node.type.name == name) {
      const props = (node as any).props || {};
      result.push({ vnode: node, props });
    } else if (node && node?.children && Array.isArray(node.children)) {
      result.push(...extractComponentVNodes(node.children, name));
    }
  });
  return result;
};

const items = computed(() => {
  const defaultSlots = slots.default?.() || [];
  const componentNodes = extractComponentVNodes(defaultSlots, 'ImListItem');
  return componentNodes.map((node) => node.vnode); // Return just the VNodes for rendering
});
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'change', value: string): void;
}>();

const onActive = (item: any) => {
  const value = item.props?.value || '';
  if (value !== 0 && !value) return;
  emit('update:modelValue', value);
  emit('change', value);
};
</script>

<style scoped lang="scss">
.im-list {
  list-style: none;
  padding: 0;
  margin: 0;
  overflow: auto;
  width: 100%;
  background-color: var(--im-bg-content-color, #fff);
  box-sizing: border-box;
  border-radius: 0;
}
</style>
