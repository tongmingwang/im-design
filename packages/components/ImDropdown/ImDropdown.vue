<template>
  <span
    :class="[bem.b()]"
    ref="dropdownRef"
    @mouseenter="onmouseenter"
    @mouseleave="onmouseleave"
    @click="handleClick">
    <slot />
    <ImLayer
      :visible="visible"
      :customClass="bem.e('content')"
      :placement="props.placement"
      :offset="props.offset"
      :z-index="props.zIndex"
      :getTriggerContainer="getTriggerContainer"
      :arrow="props.arrow"
      :scrollClose="props.scrollClose"
      @close="setClose"
      @mouseenter="onmouseenter"
      @mouseleave="onmouseleave">
      <slot name="content" />
    </ImLayer>
  </span>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import { ref, watch, onMounted } from 'vue';
import { debounce } from '@/utils';
import { type ImPlaceType } from '@/types';
import ImLayer from '../Common/ImLayer.vue';

defineOptions({ name: 'ImDropdown' });
// 组件事件定义
const emit = defineEmits(['update:modelValue', 'change']);
// 组件bem封装
const bem = useBem('dropdown');
// 组件props定义
const props = withDefaults(
  defineProps<{
    modelValue?: boolean;
    trigger?: 'click' | 'hover' | 'contextmenu';
    placement?: ImPlaceType;
    zIndex?: number;
    arrow?: boolean;
    offset?: number;
    scrollClose?: boolean;
  }>(),
  {
    modelValue: false,
    trigger: 'hover',
    placement: 'bottom-left',
    zIndex: undefined,
    arrow: false,
    offset: 8,
    scrollClose: false,
  }
);
const dropdownRef = ref<HTMLElement | null>(null);
const visible = ref(props.modelValue || false);
const delay: number = 100;

onMounted(() => {
  docHandleBind();
});
watch(
  () => visible.value,
  () => {
    docHandleBind();
  }
);

watch(
  () => props.modelValue,
  (val) => {
    visible.value = val;
  }
);

/**
 * 处理绑定文档点击事件
 *
 * @description 当组件可见时，绑定文档的点击事件；当组件不可见时，移除文档的点击事件
 */
function docHandleBind() {
  window.removeEventListener('click', checkHandleClick);
  if (visible.value) {
    window.addEventListener('click', checkHandleClick, {
      passive: true,
    });
  }
}

/**
 * 获取触发容器的引用
 *
 * @returns {any} 触发容器的引用
 */
function getTriggerContainer() {
  return dropdownRef.value;
}

/**
 * 处理点击事件
 *
 * @param e MouseEvent - 鼠标事件对象
 */
function checkHandleClick(e: MouseEvent) {
  if (visible.value) {
    const ta = e.target as HTMLElement;
    const trig = dropdownRef.value;
    // 触发器点击不需要处理
    if (ta === trig || trig?.contains(ta)) return;
    // 如果有内不类 is-disabled 不处理
    if (ta.classList.contains('is-disabled')) return;

    updateVisibleDebounce(false);
  }
}

/**
 * 当鼠标进入元素时触发的函数
 */
function onmouseenter() {
  if (props.trigger === 'hover' || !props.trigger) {
    updateVisibleDebounce(true);
  }
}
/**
 * 鼠标离开时触发的函数
 *
 * @function onmouseleave
 */
function onmouseleave() {
  if (props.trigger === 'hover' || !props.trigger) {
    updateVisibleDebounce(false);
  }
}
const updateVisibleDebounce = debounce((bol: boolean) => {
  bol ? setShow() : setClose();
}, delay);
/**
 * 处理点击事件
 *
 * 当触发条件为点击时，如果当前可见性为true，则调用setClose方法关闭组件；
 * 如果当前可见性为false，则调用setShow方法显示组件。
 */
function handleClick() {
  !visible.value && updateVisibleDebounce(true);
}

/**
 * 设置组件显示状态为可见
 *
 * 设置组件的显示状态为可见，并触发 'update:modelValue' 和 'change' 事件，传递新的显示状态值
 */
function setShow() {
  visible.value = true;
  emit('update:modelValue', visible.value);
  emit('change', visible.value);
}
/**
 * 关闭弹窗
 *
 * 该函数用于关闭弹窗，并将弹窗的显示状态更新为 false。
 * 同时触发两个自定义事件：'update:modelValue' 和 'change'，并将弹窗的显示状态作为参数传递。
 */
function setClose() {
  visible.value = false;
  emit('update:modelValue', visible.value);
  emit('change', visible.value);
}
</script>

<style scoped lang="scss">
.im-dropdown {
  display: inline-flex;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  margin: 0;
  padding: 0;
  line-height: 1;
}
</style>

<style lang="scss">
.im-dropdown__content {
  .im-layer__content {
    padding: 8px 0;
    border-radius: inherit;
  }
}
</style>
