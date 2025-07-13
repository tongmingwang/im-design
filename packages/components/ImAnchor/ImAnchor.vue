<script setup lang="ts">
import { onMounted, onUnmounted, watch, ref } from 'vue';
import type { AnchorProps } from './AnchorProps';
import { useBem } from '@/utils/bem';
import { throttle, debounce } from '@/utils';
import { ripple } from '@/directive';
// 注册指令,
const vRipple = ripple;

defineOptions({ name: 'ImAnchor' });
const bem = useBem('anchor');
const props = withDefaults(defineProps<AnchorProps>(), {
  target: null,
  offset: 0,
  label: '',
});
let unBindFn: Function | null = null;
const target = ref<HTMLElement | null | Window>(null);
const activeId = ref<string | null>(null);
const listRef = ref<HTMLElement | null>(null);

watch(
  () => props.target,
  () => {
    unBindFn && unBindFn();
    unBindFn = bindEvent();
  }
);

onMounted(() => {
  unBindFn = bindEvent();
});

onUnmounted(() => {
  unBindFn && unBindFn();
});

/**
 * 获取指定元素的滚动位置
 *
 * @param el HTML元素，表示需要获取滚动位置的元素
 * @returns 返回滚动位置的值
 */
function getScrollTop(el: HTMLElement) {
  let scrollTop = el?.scrollTop;
  // 处理滚动为window的情况
  if (target.value === window) {
    scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
  }
  return scrollTop;
}
/**
 * 处理滚动事件，根据滚动位置更新当前激活的锚点
 *
 * @param e - 滚动事件对象，可选参数
 */
function handleScroll(e?: any) {
  if (!target.value) return;
  const scrollTarget = target.value === window ? e.target : target.value;

  // 1. 获取滚动位置
  let scrollTop = getScrollTop(scrollTarget);
  const targetOffsetTop = scrollTarget.offsetTop || 0;
  // 2. 获取锚点列表
  const anchorList: any[] = (props.data || [])
    .map(({ id }) => {
      const el = document.getElementById(id);
      if (el) {
        return {
          id,
          offsetTop: el.offsetTop - targetOffsetTop,
          el,
        };
      }
      return null;
    })
    .filter(Boolean) as any[];
  activeId.value = null;

  // 3. 根据滚动位置更新当前激活的锚点
  for (let i = 0; i < anchorList.length; i++) {
    const item = anchorList[i];

    if (
      scrollTop >= item.offsetTop - (props.offset || 0) &&
      scrollTop <=
        item.offsetTop + (item.el?.clientHeight || 0) - (props.offset || 0)
    ) {
      // 这里可以触发锚点激活的逻辑，例如更新当前激活的锚点的状态等。
      activeId.value = item.id;
      return;
    }
  }
  // 避免没有激活情况
  if (!activeId.value && scrollTop >= (parseInt(String(props.offset)) || 0)) {
    // 取最接近的锚点
    const item = anchorList.find((item) => {
      if (
        scrollTop <= item.offsetTop - (props.offset || 0) &&
        scrollTop > (props.offset || 0)
      ) {
        activeId.value = item.id;
        return true;
      }
      return false;
    });
    if (item) {
      activeId.value = item.id;
    }
  }
}
/**
 * 绑定滚动事件
 *
 * @returns 返回移除滚动事件监听的函数
 */
function bindEvent() {
  const _target = props.target
    ? typeof props.target === 'string'
      ? document.querySelector(props.target)
      : props.target
    : window;

  if (!_target) {
    new Error('target is not found.');
    return null;
  }
  target.value = _target as HTMLElement;
  const handle = throttle(handleScroll, 50);
  handleScroll({ target: _target as HTMLElement });
  _target.addEventListener('scroll', handle, { passive: true });
  return () => {
    _target.removeEventListener('scroll', handle);
  };
}

/**
 * 滚动到指定锚点位置
 *
 * @param id 锚点的id
 */
async function onScrollToThis(id: string) {
  if (activeId.value === id || !id) return;
  activeId.value = id;
  const el = document.getElementById(id);
  if (!el) return;
  // 滚动到锚点位置
  target.value?.scrollTo({
    // @ts-ignore
    top: el.offsetTop - (props.offset || 0) - (target.value?.offsetTop || 0),
    behavior: 'instant',
    left: 0,
  });
}
</script>

<template>
  <div :class="[bem.b()]" ref="listRef">
    <div :class="[bem.e('label')]" v-if="props.label || $slots.label">
      {{ props.label }}
    </div>
    <div :class="[bem.e('list')]">
      <div :class="[bem.e('line')]"></div>
      <div
        v-ripple="true"
        :class="[bem.e('item'), bem.is('active', activeId === item.id)]"
        v-for="item in props.data"
        @click="() => onScrollToThis(item.id)">
        <div :class="[bem.e('bar')]"></div>
        {{ item.text }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use './style.scss';
</style>
