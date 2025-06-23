<template>
  <li :class="[bem.b()]" :data-name="props.name">
    <slot />
  </li>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';

const bem = useBem('pane');
defineOptions({ name: 'ImPane' });

const props = withDefaults(
  defineProps<{
    name: string | number | undefined;
  }>(),
  {
    name: '',
  }
);
</script>

<style scoped lang="scss">
.im-pane {
  padding: 24px;
  margin: 0;
  font-size: 14px;
  min-width: 100%;
  max-width: 100%;
  height: 100%;
  overflow: auto;
  text-align: left;
  background-color: var(--im-bg-content-color);
  box-sizing: border-box;
}
</style>
