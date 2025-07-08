<template>
  <div :class="[bem.b()]" ref="innerLayerRef">
    <slot />
    <Transition name="layer" :duration="300" mode="out-in">
      <div
        :class="[bem.e('content'), 'im-shadow']"
        v-show="props.visible"
        :style="{
          position: 'absolute',
          zIndex: props.zIndex,
          ...styles,
        }">
        <slot name="content" />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
// 嵌入到某一个触发器上显示的组件
import { watch, ref, computed } from 'vue';
import { useBem } from '@/utils/bem';

defineOptions({ name: 'ImInnerLayer' });
const bem = useBem('inner-layer');
const props = withDefaults(
  defineProps<{
    visible: boolean;
    zIndex?: number;
    placement?: 'left' | 'right';
  }>(),
  {
    visible: false,
    zIndex: 1000,
    placement: 'left',
  }
);

const emit = defineEmits<{ (e: 'close'): void }>();
const innerLayerRef = ref<HTMLElement>();
const styles = computed(() => {
  if (props.placement === 'right') {
    return { right: 0, top: '100%' };
  }
  return { left: 0, top: '100%' };
});

watch(() => props.visible, updateEvent);

function updateEvent() {
  window.removeEventListener('click', onClickOutside);
  if (props.visible) {
    window.addEventListener('click', onClickOutside);
  }
}

function onClickOutside(e: Event) {
  const target = e.target as HTMLElement;
  const innerLayerRefDom = innerLayerRef.value;
  if (innerLayerRefDom && innerLayerRefDom.contains(target)) {
    return;
  }
  emit('close');
}
</script>

<style scoped lang="scss">
.im-inner-layer {
  display: inline-flex;
  position: relative;
  margin: 0;
  padding: 0;
  overflow: visible;
  z-index: 1;
  &__content {
    position: absolute;
    width: fit-content;
    height: auto;
    background-color: var(--im-bg-content-color, #fff);
    border-radius: var(--im-radius, 4px);
  }
}

.layer-enter-active,
.layer-leave-active {
  transition: all 0.3s ease-in-out;
}
.layer-enter-from,
.layer-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
