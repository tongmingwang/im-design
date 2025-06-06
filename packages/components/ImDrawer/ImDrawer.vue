<template>
  <Teleport to="body">
    <div tabindex="-1" ref="containerRef" :class="[bem.b(), props.placement ? bem.m(props.placement) : '']"
      :style="{ '--im-drawer-size': (parseInt(String(props.size)) || 378) + 'px', zIndex: props.zIndex || zIndexToken }"
      :aria-modal="props.modelValue">
      <ImMask v-if="props.mask" :visible="props.modelValue" :closeOnClickMask="props.closeOnClickMask" @close="onClose"
        zIndex="1" />
      <Transition @enter="api.onEnter" @leave="api.onLeave">
        <div :class="[bem.e('content')]" v-show="props.modelValue">
          <slot />
        </div>
      </Transition>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import ImMask from '../ImMask';
import { ref } from 'vue';
import { slidTo } from '@/utils/transition'
import { useToken } from '@/hooks/useToken';

defineOptions({ name: 'ImDrawer' })
const bem = useBem('drawer')
const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>()

const props = withDefaults(defineProps<{
  modelValue: boolean;
  mask?: boolean;
  closeOnClickMask?: boolean;
  placement?: 'left' | 'right' | 'top' | 'bottom';
  size?: string | number;
  zIndex?: string | number;
}>(), {
  modelValue: false,
  mask: true,
  placement: 'right',
  size: 378,
  zIndex: '',
  closeOnClickMask: true,
})
const containerRef = ref<HTMLElement | null>(null)
const api = slidTo(props.placement)
const { zIndexToken } = useToken()

const onClose = () => {
  emit('update:modelValue', false)
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
      box-shadow: 0 0 3px 0px var(--im-shadow-color), 0 0 15px 0 var(--im-shadow-color);
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