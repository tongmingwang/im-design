<template>
  <Teleport to="body">
    <div aria-modal="true" :class="[bem.b()]" tabindex="-1" :data-visible="props.modelValue"
      :data-esc="props.closeOnEscape" ref="dialogRef" :style="{
        zIndex: props.zIndex || zIndexToken,
      }">
      <ImMask v-if="props.mask && !props.fullscreen" :closeOnClickMask="props.closeOnClickMask"
        :visible="props.modelValue" @close="() => emit('update:modelValue', false)" />
      <Transition @enter="onEnter" :duration="{ enter: 200, leave: 200 }" @leave="onLeave">
        <div v-show="props.modelValue" :class="[
          bem.e('content'),
          bem.is('fullscreen', props.fullscreen),
          'im-shadow',
        ]" :style="{
          maxWidth: props.width,
          width: props.width,
          height: props.height,
        }">
          <slot />
        </div>
      </Transition>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import ImMask from '../ImMask';
import { watch, ref } from 'vue';
import { useToken } from '@/hooks/useToken';

defineOptions({ name: 'ImDialog' });
const bem = useBem('dialog');
const emit = defineEmits<{ (e: 'update:modelValue', value: boolean): void }>();
const props = withDefaults(
  defineProps<{
    modelValue: boolean;
    closeOnClickMask?: boolean;
    width?: string;
    height?: string;
    fullscreen?: boolean;
    closeOnEscape?: boolean;
    mask?: boolean;
    zIndex?: number;
  }>(),
  {
    modelValue: false,
    closeOnClickMask: true,
    width: '420px',
    height: 'auto',
    fullscreen: false,
    closeOnEscape: true,
    mask: true,
    zIndex: 1000
  }
);
const dialogRef = ref<HTMLElement | null>(null);
const { zIndexToken } = useToken()

watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      props.closeOnEscape &&
        window.addEventListener('keydown', escHandle, { passive: true });
    } else {
      window.removeEventListener('keydown', escHandle);
    }
  }
);

function escHandle(e: KeyboardEvent) {
  if (e.key === 'Escape' || e.code === 'Escape') {
    const dialogs = document.querySelectorAll(
      '.im-dialog[data-visible="true"][data-esc="true"]'
    );
    if (dialogs.length && dialogRef.value) {
      const dialog = Array.from(dialogs).pop();
      if (dialog === dialogRef.value) emit('update:modelValue', false);
    }
  }
}
// 动画钩子
const onEnter = async (el: any, done: () => void) => {
  el.style.setProperty('opacity', '0');
  el.style.setProperty('transition', 'all 0.2s ease');
  if (props.fullscreen) {
    el.style.setProperty('transform', 'translateY(100%)');
  } else {
    el.style.setProperty('transform', 'scale(0.98)');
  }
  el.getBoundingClientRect();
  el.style.setProperty('opacity', '1');
  el.style.setProperty('transform', 'translateY(0) scale(1)');
  done();
  // 设置body滚动
  !document.body.classList.contains('im-overflow-hidden') &&
    document.body.classList.add('im-overflow-hidden');
};
const onLeave = async (el: any, done: () => void) => {
  el.style.setProperty('opacity', '0');
  if (props.fullscreen) {
    el.style.setProperty('transform', 'translateY(100%)');
  } else {
    el.style.setProperty('transform', 'scale(0.98)');
  }
  el.style.setProperty('transition', 'all 0.2s ease');

  const leaveHandle = () => {
    done();
    // 移除body滚动
    const dialogs = Array.from(
      document.body.querySelectorAll('.im-dialog[data-visible="true"]')
    );
    if (!dialogs.length) {
      document.body.classList.remove('im-overflow-hidden');
    }
    el.removeEventListener('transitionend', leaveHandle);
  };
  el.addEventListener('transitionend', leaveHandle, { passive: true });
};
</script>

<style scoped lang="scss">
  .im-dialog {
    position: fixed;
    inset: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
    pointer-events: none;
    border: none;
    outline: none;
    display: flex;

    .im-dialog__content {
      position: relative;
      z-index: 1001;
      border-radius: var(--im-radius, 4px);
      pointer-events: all;
      margin: auto;
      overflow: auto;
      background-color: var(--im-bg-content-color, #fff);
      will-change: transform, opacity;

      &.is-fullscreen {
        width: 100% !important;
        max-width: 100% !important;
        height: 100vh !important;
        border-radius: 0;
        overflow: auto;
      }
    }
  }
</style>
