<template>
  <label
    :class="[
      bem.b(),
      bem.is('checked', checked),
      bem.is('disabled', props.disabled),
      bem.is('readonly', props.readonly),
    ]"
    :style="{
      '--im-switch-size': sizeValue,
      '--im-switch-active-color': props.activeColor,
      '--im-switch-inactive-color': props.inactiveColor,
      '--im-switch-border-color': props.borderColor,
    }">
    <span :class="[bem.e('action')]">
      <slot name="action" :checked="checked"></slot>
    </span>
    <Transition name="slide" mode="out-in">
      <span :class="[bem.e('checked')]" v-if="checked">
        <slot name="activeText">
          {{ props.activeText }}
        </slot>
      </span>
      <span :class="[bem.e('inactive')]" v-else>
        <slot name="inactiveText">
          {{ props.inactiveText }}
        </slot>
      </span>
    </Transition>

    <input
      :class="[bem.e('input')]"
      ref="inputRef"
      type="checkbox"
      v-model="checked"
      :disabled="props.disabled"
      :name="props.name"
      :readonly="props.readonly"
      @change="onChange" />
  </label>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import type { SwitchPropsType } from './SwitchTypes';
import { getSizeValue } from '@/utils';
import { computed, ref } from 'vue';

const bem = useBem('switch');
defineOptions({ name: 'ImSwitch' });

/**
 * props 定义
 */
const props = withDefaults(defineProps<SwitchPropsType>(), {
  modelValue: false,
  disabled: false,
  readonly: false,
  size: '16px',
  activeColor: 'var(--im-primary-color-8)',
  inactiveColor: 'var(--im-gray-color-7)',
  activeValue: true,
  inactiveValue: false,
  borderColor: 'var(--im-gray-color-7)',
});

// emit 定义
const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'change', value: boolean): void;
}>();

const checked = ref<boolean>(props.modelValue);
const inputRef = ref<HTMLInputElement | null>(null);
// 计算属性，用于控制开关的样式
const sizeValue = computed(() => getSizeValue(props.size || 16));

function onChange() {
  emit('update:modelValue', checked.value);
  emit('change', checked.value);
}

// 暴露方法给父组件使用
defineExpose({
  $el: inputRef,
});
</script>

<style scoped lang="scss">
.im-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  height: fit-content;
  background-color: var(--im-switch-inactive-color, var(--im-gray-color-7));
  min-width: 40px;
  width: fit-content;
  border-radius: var(--im-switch-size, 16px);
  padding: 2px;
  margin: 0;
  vertical-align: middle;
  gap: 0;
  transition: all 0.3s ease;
  line-height: 1;
  height: calc(var(--im-switch-size, 16px) + 4px);
  padding-left: calc(var(--im-switch-size) + 2px);
  overflow: hidden;
  border: none;
  user-select: none;

  &__action {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--im-switch-size, 16px);
    height: var(--im-switch-size, 16px);
    background-color: var(--im-gray-color-1);
    border-radius: var(--im-switch-size, 16px);
    transition: all 0.3s ease;
    vertical-align: middle;
    position: absolute;
    left: 2px;
    top: 2px;
  }

  &__input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    border: none;
    margin: 0;
    padding: 0;
    display: none;
    outline: none;
  }

  &__inactive,
  &__checked {
    display: inline-block;
    color: var(--im-gray-color-1);
    white-space: nowrap;
    padding: 0 4px;
    font-size: 12px;
  }

  // 状态
  &.is-checked {
    background-color: var(--im-switch-active-color, var(--im-primary-color-8));
    padding-right: calc(var(--im-switch-size) + 2px);
    padding-left: 2px;

    .im-switch__action {
      left: calc(100% - var(--im-switch-size) - 2px);
    }
  }
}

// 动画
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
</style>
