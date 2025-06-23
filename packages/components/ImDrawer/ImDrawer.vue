<template>
  <Teleport to="body">
    <div
      tabindex="-1"
      ref="containerRef"
      :class="[
        bem.b(),
        bem.is('im-lock-scroll', props.modelValue),
        props.placement ? bem.m(props.placement) : '',
      ]"
      :style="{
        '--im-drawer-size': sizeValue,
        zIndex: props.zIndex || zIndexToken,
      }"
      :aria-modal="props.modelValue">
      <ImMask
        v-if="props.mask"
        :visible="props.modelValue"
        :closeOnClickMask="props.closeOnClickMask"
        @close="onClose"
        zIndex="1" />
      <Transition @enter="onEnter" @leave="onLeave">
        <div
          :class="[bem.e('content'), 'im-dialog-shadow']"
          v-show="props.modelValue">
          <slot />
        </div>
      </Transition>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import ImMask from '../ImMask';
import { ref, computed, watch } from 'vue';
import { useToken } from '@/hooks/useToken';
import { getSizeValue } from '@/utils';
import { removeAnimate, waitForAnimate, updateLockScroller } from '@/utils/dom';
import {
  rightToLeft,
  leftToRight,
  topToBottom,
  bottomToTop,
} from '@/utils/transition';

defineOptions({ name: 'ImDrawer' });
const bem = useBem('drawer');
const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();

const props = withDefaults(
  defineProps<{
    modelValue: boolean;
    mask?: boolean;
    closeOnClickMask?: boolean;
    placement?: 'left' | 'right' | 'top' | 'bottom';
    size?: string | number;
    zIndex?: string | number;
  }>(),
  {
    modelValue: false,
    mask: true,
    placement: 'right',
    size: '280px',
    zIndex: '',
    closeOnClickMask: true,
  }
);
const containerRef = ref<HTMLElement | null>(null);
const { zIndexToken } = useToken();
const sizeValue = computed(() =>
  getSizeValue(props.size || zIndexToken.value || '280px')
);

watch(
  () => props.modelValue,
  (val) => {
    updateLockScroller();
  },
  { immediate: true }
);

const onClose = () => {
  emit('update:modelValue', false);
};

function onEnter(el: Element, done: () => void) {
  removeAnimate(el as HTMLElement);

  switch (props.placement) {
    case 'right':
      rightToLeft(el as HTMLElement);
      break;
    case 'left':
      leftToRight(el as HTMLElement);
      break;
    case 'top':
      topToBottom(el as HTMLElement);
      break;
    case 'bottom':
      bottomToTop(el as HTMLElement);
      break;
    default:
      rightToLeft(el as HTMLElement);
      break;
  }
  done();
}

function onLeave(el: Element, done: () => void) {
  removeAnimate(el as HTMLElement);
  switch (props.placement) {
    case 'right':
      rightToLeft(el as HTMLElement, false);
      break;
    case 'left':
      leftToRight(el as HTMLElement, false);
      break;
    case 'top':
      topToBottom(el as HTMLElement, false);
      break;
    case 'bottom':
      bottomToTop(el as HTMLElement, false);
      break;
    default:
      rightToLeft(el as HTMLElement, false);
      break;
  }
  waitForAnimate(el as HTMLElement).finally(done);
}
</script>

<style scoped lang="scss">
.im-drawer {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  pointer-events: none;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background-color: transparent;

  .im-drawer__content {
    position: absolute;
    pointer-events: all;
    overflow: auto;
    z-index: var(--im-drawer-index, 1000);
    background-color: var(--im-bg-content-color, #fff);
    padding: 0;
    margin: 0;
  }

  &.im-drawer--right,
  &.im-drawer--left {
    .im-drawer__content {
      width: var(--im-drawer-size);
      height: 100%;
    }
  }

  &.im-drawer--top,
  &.im-drawer--bottom {
    .im-drawer__content {
      height: var(--im-drawer-size);
      width: 100%;
    }
  }

  &.im-drawer--right {
    .im-drawer__content {
      right: 0;
    }
  }

  &.im-drawer--left {
    .im-drawer__content {
      left: 0;
    }
  }

  &.im-drawer--top {
    .im-drawer__content {
      top: 0;
    }
  }

  &.im-drawer--bottom {
    .im-drawer__content {
      bottom: 0;
    }
  }
}
</style>
