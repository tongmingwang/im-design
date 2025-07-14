<script setup lang="ts">
import { onMounted, onUnmounted, watch, ref } from 'vue';
import type { AnchorProps } from './AnchorProps';
import { useBem } from '@/utils/bem';
import { debounce } from '@/utils';
import { ripple } from '@/directive';
// 注册指令,
const vRipple = ripple;
defineOptions({ name: 'ImAnchor' });
const bem = useBem('anchor');
const props = withDefaults(defineProps<AnchorProps>(), {
  target: null,
  offset: 0,
  label: '',
  data: () => [],
});
const target = ref<HTMLElement | null | Window>(null);
const activeId = ref<string | null>(null);
const listRef = ref<HTMLElement | null>(null);
const barRef = ref<HTMLElement>();

watch(
  () => [props.target, props.data],
  () => bindEvent()
);
watch(() => activeId.value, updateBarPosition);
onMounted(() => {
  bindEvent();
});
onUnmounted(() => {
  bindEvent(false);
});

function getScrollTop(el: HTMLElement) {
  let scrollTop = el?.scrollTop || 0;
  if (target.value === window) {
    scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
  }
  return scrollTop;
}

function getAnChorData(targetOffsetTop: number) {
  return (props.data || [])
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
}

function isInView(item: any, scrollTop: number) {
  return (
    scrollTop >= item.offsetTop - (props.offset || 0) &&
    scrollTop <=
      item.offsetTop + (item.el?.clientHeight || 0) - (props.offset || 0)
  );
}
function handleScroll(e?: any) {
  if (!target.value) return;
  const scrollTarget = target.value === window ? e.target : target.value;
  const scrollTop = getScrollTop(scrollTarget);
  const targetOffsetTop = scrollTarget.offsetTop || 0;
  const anchorList: any[] = getAnChorData(targetOffsetTop);
  activeId.value = null;

  for (let i = 0; i < anchorList.length; i++) {
    const item = anchorList[i];

    if (isInView(item, scrollTop)) {
      activeId.value = item.id;
    }
  }
}
function getTarget(): HTMLElement | Window | null {
  return props.target
    ? typeof props.target === 'string'
      ? (document.querySelector(props.target) as HTMLElement)
      : props.target
    : window;
}
const handDebounceHandle = debounce(handleScroll, 20);
function bindEvent(flag: boolean = true) {
  target.value = getTarget();
  if (!target.value) return;
  if (!flag) {
    return target.value.removeEventListener('scroll', handDebounceHandle);
  }
  handleScroll({ target: target.value as HTMLElement });
  target.value.addEventListener('scroll', handDebounceHandle, {
    passive: true,
  });
}

async function updateBarPosition() {
  await new Promise((resolve) => requestAnimationFrame(resolve));
  const containerRect = listRef.value?.getBoundingClientRect();
  const activeRect = listRef.value
    ?.querySelector('.is-active')
    ?.getBoundingClientRect();

  if (containerRect && activeRect) {
    const y = activeRect.top - containerRect.top;
    if (!barRef.value) return;
    barRef.value.style.top = y + 'px';
    barRef.value.style.opacity = '1';
    barRef.value.style.height = activeRect.height + 'px';
  } else {
    if (!barRef.value) return;
    barRef.value.style.opacity = '0';
  }
}

// 滚动到锚点位置
async function onScrollToThis(id: string) {
  if (activeId.value === id || !id) return;
  activeId.value = id;
  const el = document.getElementById(id);
  if (!el) return;
  target.value?.scrollTo({
    top: el.offsetTop - (props.offset || 0),
    behavior: 'smooth',
    left: 0,
  });
}
</script>

<template>
  <div :class="[bem.b()]">
    <div :class="[bem.e('label')]" v-if="props.label || $slots.label">
      {{ props.label }}
    </div>

    <div :class="[bem.e('list')]" ref="listRef">
      <div :class="[bem.e('line')]" />
      <div :class="[bem.e('bar')]" ref="barRef" />
      <div
        v-ripple="true"
        :class="[bem.e('item'), bem.is('active', activeId === item.id)]"
        v-for="item in props.data"
        @click="() => onScrollToThis(item.id)">
        {{ item.text }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use './style.scss';
</style>
