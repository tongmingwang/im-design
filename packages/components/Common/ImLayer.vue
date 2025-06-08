<template>
  <Teleport to="body">
    <Transition name="im-fade" :duration="{ enter: 200, leave: 200 }">
      <div v-show="props.visible" :class="[bem.b(), 'im-shadow']" ref="contentRef" :style="{
        ...state,
        zIndex: layerIndex,
      }">
        <slot />
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { useToken } from '@/hooks/useToken';
import { useBem } from '@/utils/bem';
import { computed, reactive, watch, ref } from 'vue';

defineOptions({ name: 'ImLayer' })
const emit = defineEmits(['close'])
const { zIndexToken } = useToken()
const bem = useBem('layer')
const props = withDefaults(defineProps<{
  visible: boolean,
  zIndex?: number | '',
  getTarget?: () => HTMLElement | null, // 触发层显示的元素ref
}>(), {
  visible: false,
  zIndex: '',
  getTarget: () => null,
})

const state = reactive({
  minWidth: '',
  top: '',
  left: '',
})
const contentRef = ref<HTMLElement | null>(null)
const layerIndex = computed(() => {
  return props.zIndex || zIndexToken.value || 1000
})

watch(() => props.visible, (val) => {
  if (val) {
    handleContentShow()
  }
})

async function handleContentShow() {
  // 处理显示逻辑
  const trig = props.getTarget()
  const screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
  if (trig) {
    const rect = trig.getBoundingClientRect()
    state.minWidth = `${rect?.width}px`
    state.left = `${rect?.left}px`
    state.top = `${rect?.bottom}px`
    // 等待下一次渲染，确保获取到正确的clientHeight值
    await new Promise(resolve => requestAnimationFrame(resolve))
    const listHeight = contentRef.value!.clientHeight

    if (rect?.bottom! + listHeight > screenHeight) {
      state.top = `${screenHeight - listHeight - 8}px`
    }
  }
}
</script>

<style scoped lang="scss">

  .im-fade-enter-active,
  .im-fade-leave-active {
    transition: all 200ms ease;
  }

  .im-fade-enter-from,
  .im-fade-leave-to {
    opacity: 0;
    transform: translateY(-8px) scaleY(0.9);
  }
</style>

<style lang="scss">
  .im-layer {
    position: fixed;
    top: -9999;
    left: -9999;
    z-index: 1000;
    background-color: var(--im-bg-content-color);
    padding: 4px 0;
    margin: 0;
    border-radius: var(--im-radius, 4px);
    transform-origin: center top;
  }
</style>