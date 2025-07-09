<template>
  <Teleport to="#im-overlay-container">
    <div
      aria-modal="true"
      :tabindex="-1"
      :class="[
        bem.b(),
        bem.is('im-lock-scroll', props.modelValue),
        bem.is('show', props.modelValue),
      ]"
      :data-esc="props.closeOnEscape"
      ref="dialogRef"
      :style="{
        zIndex: zIndex,
      }">
      <!-- 模态框 -->
      <ImMask
        v-if="props.mask && !props.fullscreen"
        :closeOnClickMask="props.closeOnClickMask"
        :visible="props.modelValue"
        zIndex="1"
        @close="() => emit('update:modelValue', false)" />

      <!-- 对话框 -->
      <Transition
        :css="false"
        :duration="300"
        @enter="enterFN"
        @leave="leaveFN"
        mode="out-in">
        <div
          v-show="props.modelValue"
          ref="contentRef"
          :class="[
            bem.e('content'),
            bem.is('fullscreen', props.fullscreen),
            'im-dialog-shadow',
          ]"
          :style="{
            maxWidth: widthValue,
            width: widthValue,
            height: props.height,
            marginTop: topValue,
            zIndex: zIndex,
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
import { watch, ref, computed, nextTick } from 'vue';
import { useToken } from '@/hooks/useToken';
import { updateLockScroller, isMobile } from '@/utils/dom';
import { getSizeValue, throttle } from '@/utils';
import { useDialogAnimation } from './dialogAnimation';
import { useOverlay } from '@/hooks/useOverlay';

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
    top?: string | number;
    getTarget?: () => HTMLElement | null;
    draggable?: boolean;
  }>(),
  {
    modelValue: false,
    closeOnClickMask: true,
    width: '420px',
    height: 'auto',
    fullscreen: false,
    closeOnEscape: true,
    mask: true,
    zIndex: 1000,
    getTarget: () => null,
    draggable: false,
  }
);
useOverlay();
const dialogRef = ref<HTMLElement | null>(null);
const contentRef = ref<HTMLElement | null>(null);
const { zIndexToken } = useToken();
const topValue = computed(() => getSizeValue(props.top || ''));
const widthValue = computed(() => getSizeValue(props.width || '420px'));
const zIndex = computed(() => props.zIndex || zIndexToken.value);

const { enterFN, leaveFN } = useDialogAnimation(props);

/**
 * keydown事件处理函数，用于关闭对话框，当按下Esc键时关闭对话框。
如果当前对话框的`closeOnEscape`属性为true，则执行关闭操作。同时，会检查是否有其他打开的对话框存在，如果没有，则会移除body滚动锁定效果。
 */
watch(
  () => props.modelValue,
  (val) => {
    window.removeEventListener('keydown', escHandle);
    if (val) {
      props.closeOnEscape && window.addEventListener('keydown', escHandle);
      checkDraggable();
    }
    updateLockScroller();
  },
  {
    immediate: true,
    flush: 'post',
  }
);

// 处理拖拽逻辑
watch(
  () => props.draggable,
  () => {
    checkDraggable();
  }
);

// 检测是否需要拖拽
async function checkDraggable() {
  // 确保dialogRef已经渲染完成，并且是可见的对话框
  await nextTick();
  const dialog = dialogRef.value?.querySelector(
    '.im-dialog__header'
  ) as HTMLElement;
  if (!dialog) return;
  const isMobileDevice = isMobile();
  if (isMobileDevice) {
    // 按下事件监听器，用于拖拽对话框
    dialog.removeEventListener('touchstart', touchStart);
    if (props.draggable && !props.fullscreen && props.modelValue) {
      if (dialog) {
        dialog.style.cursor = 'move';
        dialog.style.userSelect = 'none';
        dialog.addEventListener('touchstart', touchStart, { passive: true });
        contentRef.value && (contentRef.value.style.transform = '');
      }
    }
  } else {
    dialog.removeEventListener('mousedown', dragStart);
    dialog.style.cursor = 'default';
    dialog.style.userSelect = 'text';
    if (props.draggable && !props.fullscreen && props.modelValue) {
      if (dialog) {
        dialog.style.cursor = 'move';
        dialog.style.userSelect = 'none';
        dialog.addEventListener('mousedown', dragStart, { passive: true });
        contentRef.value && (contentRef.value.style.transform = '');
      }
    }
  }

  function dragStart(e: MouseEvent) {
    const dialog = contentRef.value as HTMLElement;
    e?.preventDefault?.();
    if (!dialog) return;
    let startX = e?.clientX || 0;
    let startY = e?.clientY || 0;

    const dragMove = throttle((e: MouseEvent) => {
      // 计算新位置
      let newX = e.clientX - startX;
      let newY = e.clientY - startY;

      dialog.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
    }, 20);

    dragEnd();
    // 获取当前transform值
    const style = window.getComputedStyle(dialog);
    const matrix = new DOMMatrix(style.transform);
    const currentTranslateX = matrix.m41;
    const currentTranslateY = matrix.m42;

    startX = startX - currentTranslateX;
    startY = startY - currentTranslateY;

    function dragEnd() {
      window.removeEventListener('mousemove', dragMove);
      window.removeEventListener('mouseup', dragEnd);
    }

    window.addEventListener('mousemove', dragMove, { passive: true });
    window.addEventListener('mouseup', dragEnd, { passive: true });
  }

  function touchStart(e: TouchEvent) {
    const dialog = contentRef.value as HTMLElement;
    e?.preventDefault?.();
    if (!dialog) return;
    let startX = e.touches[0].clientX || 0;
    let startY = e.touches[0].clientY || 0;

    const dragMove = throttle((e: TouchEvent) => {
      // 计算新位置
      let newX = e.touches[0].clientX - startX;
      let newY = e.touches[0].clientY - startY;

      dialog.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
    }, 20);

    dragEnd();
    // 获取当前transform值
    const style = window.getComputedStyle(dialog);
    const matrix = new DOMMatrix(style.transform);
    const currentTranslateX = matrix.m41;
    const currentTranslateY = matrix.m42;

    startX = startX - currentTranslateX;
    startY = startY - currentTranslateY;

    function dragEnd() {
      window.removeEventListener('touchmove', dragMove);
      window.removeEventListener('touchend', dragEnd);
    }

    window.addEventListener('touchmove', dragMove, { passive: true });
    window.addEventListener('touchend', dragEnd, { passive: true });
  }
}

function escHandle(e: KeyboardEvent) {
  if (e.key === 'Escape' || e.code === 'Escape') {
    const dialogs = document.querySelectorAll(
      '.im-dialog.is-show[data-esc="true"]'
    );
    if (dialogs.length && dialogRef.value) {
      const dialog = Array.from(dialogs).pop();
      if (dialog === dialogRef.value) emit('update:modelValue', false);
    }
  }
}
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
    pointer-events: all;
    margin: auto;
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
    background-color: var(--im-bg-content-color, #fff);
    border-radius: var(--im-radius, 4px);
    transition: all 0.1s ease; // 拖拽动画效果

    &.is-fullscreen {
      width: 100% !important;
      max-width: 100% !important;
      height: 100% !important;
      min-height: 100%;
      border-radius: 0;
      overflow: auto;
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
