<template>
  <Transition name="fade" mode="out-in">
    <div :class="[bem.b()]" v-show="show" @click="handleClick" :style="styles">
      <slot />
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import { onMounted, onUnmounted, ref, computed } from 'vue';
import { throttle } from '@/utils';
import { getSizeValue } from '@/utils';
import { useToken } from '@/hooks/useToken';

defineOptions({
  name: 'ImBackTop',
});

const bem = useBem('back-top');
const show = ref(false);
let scrollTarget: HTMLElement | null | Window = null;
const { zIndexToken } = useToken();

const props = withDefaults(
  defineProps<{
    getTarget?: () => HTMLElement | null;
    // 滚动距离超过多少显示
    visibleHeight?: number;
    zIndex?: number;
    right?: number | string;
    bottom?: number | string;
  }>(),
  {
    getTarget: () => null,
    visibleHeight: 200,
    zIndex: undefined,
    right: '20px',
    bottom: '20px',
  }
);

const styles = computed(() => {
  return {
    zIndex: props.zIndex || zIndexToken.value || 1000,
    right: getSizeValue(props.right),
    bottom: getSizeValue(props.bottom),
  };
});

onMounted(() => {
  scrollTarget = props.getTarget?.() || window;
  bindEvent();
  throttleHandleScroll();
});

onUnmounted(() => {
  unbindEvent();
});

function handleClick() {
  if (!scrollTarget) return;
  scrollTarget.scrollTo({ top: 0, behavior: 'smooth', left: 0 });
}

function handleScroll() {
  if (!scrollTarget) return;

  const scrollTop =
    (scrollTarget as HTMLElement).scrollTop ||
    (scrollTarget as Window).pageYOffset ||
    0;
  show.value = scrollTop > props.visibleHeight;
}
const throttleHandleScroll = throttle(handleScroll, 100);

function bindEvent() {
  if (!scrollTarget) return;
  unbindEvent();
  scrollTarget.addEventListener('scroll', throttleHandleScroll, {
    passive: true,
  });
}
function unbindEvent() {
  if (!scrollTarget) return;
  scrollTarget.removeEventListener('scroll', throttleHandleScroll);
}
</script>

<style scoped lang="scss">
.im-back-top {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 1000;
  width: fit-content;
  cursor: pointer;
  height: fit-content;
  padding: 0;
  margin: 0;
  background-color: transparent;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0);
}
</style>
