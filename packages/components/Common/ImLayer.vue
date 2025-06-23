<template>
  <Teleport to="#im-layer-container">
    <Transition
      :css="false"
      :duration="{ enter: 200, leave: 200 }"
      mode="out-in"
      @enter="onBeforeEnter"
      appear
      @leave="onLeave">
      <div
        v-show="props.visible"
        @mouseenter="(e) => emit('mouseenter', e)"
        @mouseleave="(e) => emit('mouseleave', e)"
        tabindex="-1"
        ref="layerRef"
        aria-modal="true"
        :class="[
          bem.b(),
          'im-shadow',
          props.customClass,
          placement && bem.m(placement),
        ]"
        :style="{
          zIndex: props.zIndex || zIndexToken,
          ...styles,
        }"
        :role="props.role">
        <!-- 箭头 -->
        <svg
          v-if="props.arrow"
          :class="[bem.e('arrow')]"
          width="16"
          height="16"
          viewBox="0 0 1024 1024"
          version="1.1"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          p-id="19626">
          <path
            d="M590.336 763.563l359.083-362.155A85.333 85.333 0 0 0 888.832 256H170.667a85.333 85.333 0 0 0-60.587 145.408l359.083 362.155a85.333 85.333 0 0 0 121.173 0z"
            p-id="19626"></path>
        </svg>
        <!-- 内容载体 -->
        <div :class="[bem.e('content')]">
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { useToken } from '@/hooks/useToken';
import { useBem } from '@/utils/bem';
import { ref, reactive, onBeforeMount, computed } from 'vue';
import type { ImPlaceType } from '@/types/index.ts';
import { getScreeWH } from '@/utils/dom';
import { throttle } from '@/utils';

defineOptions({ name: 'ImLayer' });
const { zIndexToken } = useToken();
const bem = useBem('layer');
const layerRef = ref<HTMLElement | null>(null);
const emit = defineEmits(['close', 'mouseenter', 'mouseleave']);
// 定义组件的props和emits等属性
const props = withDefaults(
  defineProps<{
    visible: boolean;
    zIndex?: number | '';
    placement?: ImPlaceType;
    offset?: number; // 偏移量
    getTriggerContainer?: () => HTMLElement | null; // 触发层显示的容器ref
    customClass?: string; // 自定义类名
    arrow?: boolean; // 是否显示箭头
    scrollClose?: boolean; // 滚动隐藏
    role?: 'tooltip' | 'dropdown' | ''; // 角色，默认为空字符串
  }>(),
  {
    visible: false,
    zIndex: '',
    getTarget: () => null,
    offset: 8,
    placement: 'bottom-left',
    getTriggerContainer: () => null,
    customClass: '',
    arrow: true,
    scrollClose: false,
    role: 'dropdown',
  }
);
/**
 * 定义样式对象，用于动态更新层的位置和大小信息。

 */
const styles = reactive({
  top: '',
  left: '',
  minWidth: 'fit-content',
});

const placement = computed(() => {
  return getPlacement(props.placement);
});

// 动画基础配置
const animateOption = {
  option: {
    easing: 'ease', // 动画过渡效果
    duration: 200, // 动画持续时间
    delay: 0, // 动画延迟时间
  },
  dropdown: [
    { opacity: 0, transform: 'scaleY(0.88)' },
    { opacity: 1, transform: 'scaleY(1)' },
  ],
  tooltip: [
    { opacity: 0, transform: 'scale(0.88)' },
    { opacity: 1, transform: 'scale(1)' },
  ],
  dropdownLeave: [
    { opacity: 1, transform: 'scaleY(1)' },
    { opacity: 0, transform: 'scaleY(0.88)' },
  ],
  tooltipLeave: [
    { opacity: 1, transform: 'scale(1)' },
    { opacity: 0, transform: 'scale(0.88)' },
  ],
};
/**
 * 统一挂载到指定节点
 */
onBeforeMount(() => {
  const toEl = document.getElementById('im-layer-container');
  if (!toEl) {
    const container = document.createElement('div');
    container.id = 'im-layer-container';
    document.body.appendChild(container);
  }
});

// 位置计算逻辑
const bottomArr = ['bottom', 'bottom-left', 'bottom-right'];
const topArr = ['top', 'top-left', 'top-right'];
const rightArr = ['right', 'right-top', 'right-bottom'];
const leftArr = ['left', 'left-top', 'left-bottom'];

function getTop(
  rect: DOMRect,
  cRect: DOMRect,
  placement: ImPlaceType = 'bottom-left'
) {
  const { height } = getScreeWH();
  let top = 0;
  const offset = props.arrow ? parseInt(String(props.offset || 0)) : 0;

  if (bottomArr.includes(placement)) {
    top = rect.bottom;
    top += offset;
  } else if (topArr.includes(placement)) {
    top = rect.top - cRect.height;
    top -= offset;
  } else if (rightArr.includes(placement) || leftArr.includes(placement)) {
    switch (placement) {
      case 'right':
      case 'left':
        top = rect.top + rect.height * 0.5 - cRect.height / 2;
        break;

      case 'right-top':
      case 'left-top':
        top = rect.top;
        break;
      case 'right-bottom':
      case 'left-bottom':
        top = rect.top + rect.height - cRect.height;
        break;
    }
  }

  // 最顶层
  if (top <= 0) return 0;
  // 最底层
  if (top + cRect.height >= height) return height - cRect.height;
  return top || rect.top || 0;
}

function getLeft(
  rect: DOMRect,
  cRect: DOMRect,
  placement: ImPlaceType = 'bottom-left'
) {
  const screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  let left = 0;
  const offset = props.arrow ? parseInt(String(props.offset || 0)) : 0;

  if (bottomArr.includes(placement) || topArr.includes(placement)) {
    switch (placement) {
      case 'bottom':
      case 'top':
        left = rect.right - rect.width / 2 - cRect.width / 2;
        break;
      case 'bottom-right':
      case 'top-right':
        left = rect.left + rect.width - cRect.width;
        break;
      default:
        left = rect.left;
        break;
    }
  } else if (rightArr.includes(placement)) {
    left = rect.left + rect.width + offset;
  } else if (leftArr.includes(placement)) {
    left = rect.left - cRect.width - offset;
  }
  // 最左侧
  if (left <= 0) return 0;
  // 最右侧
  if (left + cRect.width >= screenWidth) return screenWidth - cRect.width;

  return left || rect.left || 0;
}

/**
 * 获取组件的放置位置
 *
 * @returns {string} 组件的放置位置，如果props中的placement不在指定的数组中，则返回'bottom-left'
 */
const getPlacement = (placement: ImPlaceType) => {
  return [...bottomArr, ...topArr, ...rightArr, ...leftArr].includes(placement)
    ? props.placement
    : 'bottom-left';
};

function checkScrollHandle(e: Event) {
  if (props.scrollClose) {
    const target = e.target as HTMLElement;
    const layer = layerRef.value;
    if ((target && target === layer) || layer?.contains(target)) {
      return;
    }
    emit('close', true);
  } else {
    updatePosition();
  }
}

// 节流处理函数，用于限制更新位置的频率
const throttleResizeHandle = throttle(updatePosition, 50);
const throttleHandleSCroll = throttle(checkScrollHandle, 50);

/**
 * 更新位置函数
 *
 * 异步更新触发容器的位置，并根据触发容器的位置和定位方式，调整图层的位置
 */
async function updatePosition() {
  const target = props.getTriggerContainer?.() as HTMLElement;
  if (!target) {
    return emit('close', true);
  }
  setOrigin();
  const place = placement.value;
  const layer = layerRef.value as HTMLElement;
  const rect = target.getBoundingClientRect();
  const cRect = layer.getBoundingClientRect();
  styles.minWidth = props.role == 'tooltip' ? 'fit-content' : `${rect.width}px`;
  styles.top = `${getTop(rect, cRect, place)}px`;
  styles.left = `${getLeft(rect, cRect, place)}px`;
}

/**
 * 更新绑定滚动处理函数
 */
function updateBindScrollHandle() {
  window.removeEventListener('scroll', throttleHandleSCroll);
  props.visible &&
    window.addEventListener('scroll', throttleHandleSCroll, {
      passive: true,
      capture: true,
    });
}

// 更新resize事件处理函数
function updateBindResizeHandle() {
  window.removeEventListener('resize', throttleResizeHandle);
  props.visible &&
    window.addEventListener('resize', throttleResizeHandle, {
      passive: true,
      capture: true,
    });
}

/**
 * 设置元素的 transform-origin 属性。
 *
 * @param el HTML元素对象
 * @param placement 位置类型，默认为 'bottom-left'
 */
function setOrigin() {
  const layer = layerRef.value as HTMLElement;
  if (topArr.includes(placement.value)) {
    layer.style.transformOrigin = 'center bottom';
    return;
  }

  if (
    (rightArr.includes(placement.value) || leftArr.includes(placement.value)) &&
    ['right-bottom', 'left-bottom'].includes(placement.value)
  ) {
    layer.style.transformOrigin = 'center bottom';
    return;
  }
  layer.style.transformOrigin = 'center top';
}

/**
 * 在元素进入视口前执行的异步函数
 *
 * @param els 进入视口前的元素
 */
async function onBeforeEnter(els: Element, done: () => void) {
  const el = els as HTMLElement;
  el.style.setProperty('transition', 'none');
  updateBindScrollHandle();
  updateBindResizeHandle();
  await new Promise((resolve) => requestAnimationFrame(resolve));
  updatePosition();
  try {
    el.getAnimations().forEach((animation) => animation?.cancel());
    el.animate(
      props.role === 'tooltip' ? animateOption.tooltip : animateOption.dropdown,
      animateOption.option
    );
    Promise.all(
      el.getAnimations().map((animation) => animation.finished)
    ).finally(() => {
      el.style.setProperty('transition', 'all 100ms ease');
    });
  } catch (error) {
    console.error(error);
  }
  done();
}

/**
 * 在元素离开视口时执行的函数
 *
 * @param els 要执行动画的元素
 * @param done 动画结束后执行的回调函数
 */
function onLeave(els: Element, done: () => void) {
  try {
    const el = els as HTMLElement;
    el.style.setProperty('transition', 'none');
    el.getAnimations().forEach((animation) => animation.cancel());
    el.animate(
      props.role === 'tooltip'
        ? animateOption.tooltipLeave
        : animateOption.dropdownLeave,
      animateOption.option
    );
    Promise.all(
      el.getAnimations().map((animation) => animation.finished)
    ).finally(() => {
      done();
      updateBindScrollHandle();
      updateBindResizeHandle();
    });
  } catch (error) {
    console.error(error);
  }
}
</script>

<style lang="scss">
#im-layer-container {
  width: 100%;
}

.im-layer {
  position: fixed;
  top: 0;
  left: 0;
  bottom: auto;
  right: auto;
  z-index: 1000;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  border: none;
  min-width: fit-content;
  background-color: transparent;
  pointer-events: all;
  border-radius: var(--im-radius, 4px);

  &__arrow {
    position: absolute;
    top: -8px;
    left: calc(50% - 8px);
    z-index: -1;
    color: var(--im-bg-content-color);
    transform: rotate(180deg);
  }

  &__content {
    position: relative;
    z-index: 1;
    background-color: var(--im-bg-content-color);
    border-radius: var(--im-radius, 4px);
    width: 100%;
    min-width: fit-content;
    overflow: visible;
  }

  &.im-layer--top-left {
    .im-layer__arrow {
      top: auto;
      bottom: -8px;
      left: 5%;
      transform: rotate(0deg);
    }
  }

  &.im-layer--top {
    .im-layer__arrow {
      top: auto;
      bottom: -8px;
      left: calc(50% - 8px);
      transform: rotate(0deg);
    }
  }

  &.im-layer--top-right {
    .im-layer__arrow {
      top: auto;
      left: auto;
      bottom: -8px;
      right: 5%;
      transform: rotate(0deg);
    }
  }

  &.im-layer--bottom-right {
    .im-layer__arrow {
      top: -8px;
      left: auto;
      right: 5%;
      transform: rotate(180deg);
    }
  }

  &.im-layer--bottom {
    .im-layer__arrow {
      top: -8px;
      left: calc(50% - 8px);
      transform: rotate(180deg);
    }
  }

  &.im-layer--bottom-left {
    .im-layer__arrow {
      top: -8px;
      left: 5%;
      transform: rotate(180deg);
    }
  }

  &.im-layer--left {
    .im-layer__arrow {
      top: calc(50% - 8px);
      left: auto;
      right: -8px;
      transform: rotate(-90deg);
    }
  }

  &.im-layer--left-top {
    .im-layer__arrow {
      top: 5%;
      right: -8px;
      left: auto;
      transform: rotate(-90deg);
    }
  }

  &.im-layer--left-bottom {
    .im-layer__arrow {
      top: auto;
      left: auto;
      right: -8px;
      bottom: 5%;
      transform: rotate(-90deg);
    }
  }

  &.im-layer--right {
    .im-layer__arrow {
      top: calc(50% - 8px);
      left: -8px;
      transform: rotate(90deg);
    }
  }

  &.im-layer--right-top {
    .im-layer__arrow {
      top: 5%;
      left: -8px;
      transform: rotate(90deg);
    }
  }

  &.im-layer--right-bottom {
    .im-layer__arrow {
      top: auto;
      left: -8px;
      bottom: 5%;
      transform: rotate(90deg);
    }
  }
}
</style>
