<template>
  <span :class="[bem.b()]" ref="dropdownRef">
    <slot />
    <Teleport to="body">
      <Transition @enter="animation.onEnter" @leave="animation.onLeave" :duration="{ enter: 300, leave: 200 }">
        <div :class="[bem.e('content')]" v-show="visible" ref="contentRef" :style="{
          zIndex: props.zIndex || zIndexToken
        }">
          <slot name="content" />
        </div>
      </Transition>
    </Teleport>
  </span>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { debounce, isInRange, throttle } from '@/utils';
import { useMouse } from '@/hooks/useMouse'
import { usePlace } from '@/hooks/usePlace'
import { type ImPlaceType } from '@/types';
import { useToken } from '@/hooks/useToken';
import { useAnimation } from './useAnimation'

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
  }>(),
  {
    modelValue: false,
    trigger: 'hover',
    placement: 'bottomLeft',
    zIndex: undefined
  }
);
const dropdownRef = ref<HTMLElement | null>(null);
const contentRef = ref<HTMLElement | null>(null);
const visible = ref(props.modelValue || false);
const animation = useAnimation(props.placement?.includes('top') ? 'top' : 'bottom')

let unbind: (() => void) | null = null;
let delay: number = 100
const { x, y } = useMouse(30)
const { zIndexToken } = useToken()
// 计算位置信息
usePlace(visible, dropdownRef, contentRef, props.placement)
onMounted(() => {
  unbind && unbind();
  unbind = bindEvent()
})
onUnmounted(() => {
  unbind && unbind()
})
watch(() => props.trigger, () => {
  unbind && unbind();
  unbind = bindEvent()
})
// 节流
const onMouseLeave = throttle(() => {
  const isC = isInRange(x.value, y.value, contentRef.value)
  const isD = isInRange(x.value, y.value, dropdownRef.value)

  if (isD || isC) return;
  visible.value = false;
}, delay)
watch(() => [x.value, y.value], () => {
  if (props.trigger != 'hover' || !visible.value) return;
  onMouseLeave()
})

function setShow() {
  visible.value = true;
  emit('update:modelValue', visible.value);
  emit('change', visible.value);
  // 不支持滚动
  window.addEventListener('scroll', setClose, { passive: true, capture: true })
}
function setClose() {
  visible.value = false;
  emit('update:modelValue', visible.value);
  emit('change', visible.value);
  window.removeEventListener('scroll', close)
}


function bindEvent() {
  unbind && unbind();
  const handClickClose = debounce((e: Event) => {
    if (dropdownRef.value?.contains(e.target as Node)) return;
    setClose()
  }, delay)
  document.addEventListener('click', handClickClose, { passive: true })

  // hover
  if (props.trigger === 'hover') {
    const mouseenterHandle = debounce(setShow, delay)
    dropdownRef.value?.addEventListener('mouseenter', mouseenterHandle, { passive: true });
    return () => {
      dropdownRef.value?.removeEventListener('mouseenter', mouseenterHandle);
      document.removeEventListener('click', handClickClose);
    }
  }

  if (props.trigger === 'click') {
    const onTrigger = debounce(() => {
      const cur = visible.value
      cur ? setClose() : setShow()
    }, delay)
    // 监听点击事件
    dropdownRef.value?.addEventListener('click', onTrigger, { passive: true })

    return () => {
      dropdownRef.value?.removeEventListener('click', onTrigger);
      document.removeEventListener('click', handClickClose);
    }
  }
  return null
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
  }
</style>
