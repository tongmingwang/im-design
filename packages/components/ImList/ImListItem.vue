<template>
  <li :class="[bem.b(), bem.is('active', !!(props.active && props.active === props.value))]"
    @click="(e) => emit('click', e)" v-ripple="props.ripple">
    <slot />
  </li>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';

defineOptions({ name: 'ImListItem' })
const bem = useBem('list__item');
const emit = defineEmits(['click']);
const props = withDefaults(defineProps<{
  disabled?: boolean;
  value: string;
  active?: string;
  ripple?: boolean;
}>(), {
  disabled: false,
  active: '',
  value: '',
  ripple: true
})

</script>

<style scoped lang="scss">
  .im-list__item {
    padding: 8px 12px;
    width: 100%;
    box-sizing: border-box;
    border-radius: var(--im-radius, 4px);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    color: var(--im-gray-color-8);


    &:hover {
      background-color: var(--im-rgb-color-1);
    }

    &.is-active {
      background-color: var(--im-primary-color-1);
      color: var(--im-primary-color-10);
    }
  }
</style>