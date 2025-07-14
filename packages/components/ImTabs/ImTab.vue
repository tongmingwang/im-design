<template>
  <div
    :class="[
      bem.b(),
      bem.is('active', active),
      bem.is('disabled', props.disabled),
    ]"
    @click="setActive"
    v-ripple="!props.disabled">
    <slot>{{ props.label }}</slot>
    <Transition name="slide" :duration="300" mode="out-in">
      <div v-if="active" :class="bem.e('bar')"></div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import { ripple } from '@/directive';
import type { TabProps } from './types';
import { useInjectTab } from './useTab';
// 注册指令,
const vRipple = ripple;
const bem = useBem('tab');
defineOptions({ name: 'ImTab' });

const props = withDefaults(defineProps<TabProps>(), {
  label: '',
  name: '',
  disabled: false,
});
const { active, setActive } = useInjectTab(props);
</script>

<style scoped lang="scss">
.im-tab {
  display: flex;
  margin: 0;
  overflow: hidden;
  text-wrap: nowrap;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  font-size: 14px;
  min-width: fit-content;
  transition: all 0.3s ease-in-out;
  user-select: none;
  position: relative;
  z-index: 1;
  color: var(--im-tabs-color);
  border-radius: 0;

  &:hover {
    color: var(--im-tabs-color-active);
  }
  &.is-active {
    color: var(--im-tabs-color-active);
  }
  &.is-disabled {
    cursor: not-allowed;
    color: var(--im-gray-color-6);
    background: transparent;
  }

  &__bar {
    position: absolute;
    left: 0;
    bottom: 0px;
    width: 100%;
    height: 2px;
    background-color: var(--im-tabs-color-active);
    border-radius: 2px;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-in-out;
}
.slide-enter-from,
.slide-leave-to {
  transform: scaleX(0);
  opacity: 0;
}
</style>
