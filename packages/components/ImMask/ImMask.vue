<template>
  <Transition @enter="api.onEnter" @leave="api.onLeave">
    <div v-show="props.visible" :class="[bem.b()]" :style="{
      zIndex: props.zIndex || zIndexToken,
    }" @click="handleClick">
      <slot />
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import { useToken } from '@/hooks/useToken';
import { fadeApi } from '@/utils/transition'

defineOptions({ name: 'ImMask' })
const bem = useBem('mask')
const { zIndexToken } = useToken()
const props = withDefaults(defineProps<{
  visible: boolean;
  zIndex?: number | string;
  closeOnClickMask?: boolean;
}>(), {
  visible: false,
  zIndex: 0,
  closeOnClickMask: true,
})
const api = fadeApi()
const emit = defineEmits(['close'])

const handleClick = () => {
  if (props.closeOnClickMask) {
    emit('close', false)
  }
}
</script>

<style scoped lang="scss">
  .im-mask {
    position: absolute;
    inset: 0;
    background-color: var(--im-bg-dialog-color, rgba(0, 0, 0, .33));
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    pointer-events: all;
  }
</style>