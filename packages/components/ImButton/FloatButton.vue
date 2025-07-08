<template>
  <div
    :class="[bem.b()]"
    :style="{
      '--im-button-size': sizeValue,
      '--im-button-right': props.right,
      '--im-button-bottom': props.bottom,
    }">
    <Transition name="slide" v-if="$slots.content">
      <div :class="[bem.e('content')]" v-show="open">
        <slot name="content" />
      </div>
    </Transition>
    <div
      @click="open = !open"
      :class="[
        bem.e('toggle'),
        bem.is('open', open),
        bem.e(props.shape || 'default'),
      ]">
      <slot :open="open" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { getSizeValue } from '@/utils';
import { useBem } from '@/utils/bem';
import { ref, computed, watch } from 'vue';

const bem = useBem('float-button');
defineOptions({
  name: 'ImFloatButton',
});

const props = withDefaults(
  defineProps<{
    size?: number | string;
    shape?: '' | 'circle';
    open?: boolean;
    right?: string;
    bottom?: string;
  }>(),
  {
    size: '',
    shape: '',
    open: false,
    right: '20px',
    bottom: '20px',
  }
);

const open = ref(props.open);
const sizeValue = computed(() => getSizeValue(props.size || 36));

watch(
  () => props.open,
  (newVal) => {
    open.value = newVal;
  }
);
</script>

<style scoped lang="scss">
.im-float-button {
  position: fixed;
  bottom: var(--im-button-bottom, 20px);
  right: var(--im-button-right, 20px);
  z-index: 1000;
  width: var(--im-button-size);
  min-width: var(--im-button-size);
  margin: 0;
  transition: all 0.3s ease;

  .im-float-button__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 8px;
  }

  .im-float-button__toggle {
    box-shadow: rgba(0, 0, 0, 0.08) 0px 6px 16px 0px,
      rgba(0, 0, 0, 0.12) 0px 3px 6px -4px, rgba(0, 0, 0, 0.05) 0px 9px 28px 8px;
    border-radius: var(--im-radius, 4px);
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--im-button-size);
    height: var(--im-button-size);
    background-color: var(--im-bg-content-color);

    &.im-float-button__circle {
      border-radius: 50%;
    }
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>
