<template>
  <div :class="[bem.b(), bem.is('loading', props.loading)]">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import type { SkeletonProps } from './types';
import { useProvider } from './useProvider';

const bem = useBem('skeleton');
defineOptions({ name: 'ImSkeleton' });
const props = withDefaults(defineProps<SkeletonProps>(), {
  loading: false,
});
useProvider(props);
</script>

<style scoped lang="scss">
.im-skeleton {
  margin: 16px 0;
  background-color: transparent;
}
</style>
