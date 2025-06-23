<template>
  <span
    :class="[bem.b()]"
    ref="triggerRef"
    @mouseenter="onmouseenter"
    @mouseleave="onmouseleave"
    @click="handleClick">
    <slot />
    <ImLayer
      :visible="visible"
      :customClass="bem.e('wrapper')"
      :placement="props.placement"
      :offset="props.offset"
      :z-index="props.zIndex"
      :getTriggerContainer="getTriggerContainer"
      :arrow="props.arrow"
      :scrollClose="props.scrollClose"
      @close="setClose"
      @mouseenter="onmouseenter"
      @mouseleave="onmouseleave"
      role="tooltip">
      <div :class="[bem.e('content')]">
        <slot name="content">
          {{ props.content }}
        </slot>
      </div>
    </ImLayer>
  </span>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import ImLayer from '../Common/ImLayer.vue';
import { useBem } from '@/utils/bem';
import type { ImPlaceType } from '@/types';
import { debounce } from '@/utils';

const bem = useBem('tooltip');
const triggerRef = ref<HTMLElement | null>(null);
const visible = ref(false);
defineOptions({ name: 'ImTooltip' });
const emit = defineEmits(['update:modelValue', 'change']);

const props = withDefaults(
  defineProps<{
    placement?: ImPlaceType;
    offset?: number;
    zIndex?: number;
    arrow?: boolean;
    scrollClose?: boolean;
    modelValue?: boolean;
    trigger?: 'click' | 'hover';
    content?: string;
  }>(),
  {
    placement: 'top',
    offset: 8,
    arrow: true,
    scrollClose: false,
    trigger: 'hover',
    content: '',
  }
);

onMounted(() => {
  docBindHandle();
});

watch(
  () => props.modelValue,
  (val) => {
    visible.value = val;
  }
);
watch(
  () => visible.value,
  () => {
    docBindHandle();
  }
);

function docBindHandle() {
  document.removeEventListener('click', checkHandleClick, { capture: true });
  if (visible.value) {
    document.addEventListener('click', checkHandleClick, {
      passive: true,
      capture: true,
    });
  }
}

function checkHandleClick(e: MouseEvent) {
  if (visible.value) {
    const ta = e.target as HTMLElement;
    const trig = triggerRef.value;
    // 触发器点击不需要处理
    if (ta === trig || trig?.contains(ta)) return;
    // 如果有内不类 is-disabled 不处理
    if (ta.classList.contains('is-disabled')) return;

    updateVisibleDebounce(false);
  }
}

const updateVisibleDebounce = debounce((bol: boolean) => {
  bol ? setShow() : setClose();
}, 100);

function onmouseenter() {
  if (!props.trigger || props.trigger === 'hover') {
    updateVisibleDebounce(true);
  }
}
function onmouseleave() {
  if (!props.trigger || props.trigger === 'hover') {
    updateVisibleDebounce(false);
  }
}
function handleClick() {
  if (!visible.value) {
    updateVisibleDebounce(true);
  }
}
function getTriggerContainer() {
  return triggerRef.value;
}

function setShow() {
  visible.value = true;
  emit('update:modelValue', visible.value);
  emit('change', visible.value);
}

function setClose() {
  visible.value = false;
  emit('update:modelValue', visible.value);
  emit('change', visible.value);
}
</script>

<style scoped lang="scss">
.im-tooltip {
  height: fit-content;
  display: inline-flex;
}
</style>

<style lang="scss">
.im-tooltip__wrapper {
  .im-layer__arrow {
    color: var(--im-gray-color-10);
  }
  .im-tooltip__content {
    padding: 6px 12px;
    background-color: var(--im-gray-color-10);
    color: var(--im-gray-color-1);
    font-size: 14px;
    line-height: 24px;
    word-break: break-all;
    border-radius: var(--im-radius, 4px);
    width: fit-content;
  }
}
</style>
