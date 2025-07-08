<template>
  <InputBase
    :class="[bem.b(), bem.is('control-right', props.controlRight)]"
    v-bind="props"
    type="number"
    v-model="val"
    @change="updateValue"
    @focus="() => emit('focus')"
    @blur="() => emit('blur')"
    @clear="() => emit('clear')">
    <!-- prefix -->
    <template #prefix>
      <div
        :class="[bem.e('decrease'), bem.is('disabled', minDisabled)]"
        v-if="!props.controlRight"
        @click="decrease">
        <ImIcon name="minus" size="1em" />
      </div>
      <!-- prefix -->
      <slot name="prefix">
        <div v-if="props.prefix" :class="[bem.e('prefix')]">
          {{ props.prefix }}
        </div>
      </slot>
    </template>

    <template #suffix>
      <slot name="suffix">
        <div v-if="props.suffix" :class="[bem.e('suffix')]">
          {{ props.suffix }}
        </div>
      </slot>

      <div
        :class="[bem.e('increase'), bem.is('disabled', maxDisabled)]"
        @click="increase"
        v-if="!props.controlRight">
        <ImIcon name="plus" size="1em" />
      </div>
      <!-- 右侧控制 -->
      <div v-if="props.controlRight" :class="[bem.e('control-right')]">
        <span
          @click="decrease"
          :class="[bem.e('down'), bem.is('disabled', minDisabled)]"
          ><ImIcon name="down" size="1em"
        /></span>
        <span :class="[bem.e('control-divider')]"></span>
        <span
          :class="[bem.e('up'), bem.is('disabled', maxDisabled)]"
          @click="increase"
          ><ImIcon name="up" size="1em"
        /></span>
      </div>
    </template>
  </InputBase>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import { type InputPropsType } from '@/types/input-props-type';
import { useBem } from '@/utils/bem';
import InputBase from '../Common/InputBase.vue';
import ImIcon from '../ImIcon';
import { isNumberValue } from '@/utils';
import { ripple } from '@/directive';
// 注册指令,
const vRipple = ripple;

interface PropsType extends InputPropsType {
  controlRight?: boolean;
}

defineOptions({ name: 'ImInputNumber' });
const props = defineProps<PropsType>();
const emit = defineEmits<{
  (e: 'update:modelValue', value: number | string): void;
  (e: 'change', value: number | string): void;
  (e: 'clear'): void;
  (e: 'focus'): void;
  (e: 'blur'): void;
}>();
const inputRef = ref<HTMLInputElement | null>(null);
const val = ref(props.modelValue);
const bem = useBem('input-number');

const isDisabled = computed(() => props.disabled || props.readonly);
// 最小禁用
const minDisabled = computed(() => {
  const min = Number(props.min);
  return (isNumberValue(min) && val.value <= min) || isDisabled.value;
});
// 最大禁用
const maxDisabled = computed(() => {
  const max = Number(props.max);
  return (isNumberValue(max) && val.value >= max) || isDisabled.value;
});

watch(
  () => props.modelValue,
  () => {
    val.value = props.modelValue;
  }
);

defineExpose({
  $el: inputRef,
  focus: () => inputRef.value?.focus(),
  blur: () => inputRef.value?.blur(),
  // @ts-ignore
  getInput: () => inputRef.value.$el,
});
// 处理小数精度
const toPrecision = (value: number | string) => {
  if (props.precision === 0) return Math.round(+value);
  return parseFloat(Number(value).toFixed(props.precision || 0));
};
function increase() {
  const step = parseFloat(String(props.step || 1));
  const value = +val.value + step;
  updateValue(toPrecision(value));
}
function decrease() {
  const step = parseFloat(String(props.step || 1));
  const value = val.value - step;
  updateValue(toPrecision(value));
}

function updateValue(curValue?: number | string) {
  let value = parseFloat(String(curValue));
  if (!value && value !== 0) return;

  const min = isNumberValue(Number(props.min)) ? Number(props.min) : -Infinity;
  const max = isNumberValue(Number(props.max)) ? Number(props.max) : Infinity;
  // 不是一个有效数字时，重置为空字符串
  if (Number.isNaN(value)) {
    value = 0;
  }

  if (value < min) value = min;
  if (value > max) value = max;
  val.value = value;
  emit('update:modelValue', value);
  emit('change', value);
}
</script>

<style lang="scss" scoped>
.im-input-number {
  padding: 0;
  &.is-disabled {
    .im-input-number__decrease,
    .im-input-number__increase {
      pointer-events: none;
    }
    .im-input-number__control-right {
      pointer-events: none;
    }
  }
  &.is-control-right {
    padding-left: 12px;
  }
  .im-input-number__decrease,
  .im-input-number__increase {
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    height: 100%;
    color: var(--im-gray-color-7);
    padding: 0 10px;
    transition: all 0.2s ease;
    background-color: transparent;
    &:hover {
      color: var(--im-primary-color-7);
      background-color: var(--im-rgb-color-1);
    }
  }
  .im-input-number__decrease {
    border-right: 1px solid var(--im-gray-color-5);
  }
  .im-input-number__increase {
    border-left: 1px solid var(--im-gray-color-5);
  }

  .im-input-number__control-right {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding: 0;
    min-width: fit-content;
    height: 100%;
    border-left: 1px solid var(--im-gray-color-5);
    .im-input-number__control-divider {
      border: none;
      margin: 0;
      padding: 0;
      border-left: 1px solid var(--im-gray-color-5);
      width: 1px;
      height: 100%;
      max-height: 100%;
    }
    .im-input-number__up,
    .im-input-number__down {
      cursor: pointer;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 100%;
      height: 100%;
      width: 28px;
      cursor: pointer;
      color: var(--im-gray-color-7);
      &:hover {
        color: var(--im-primary-color-7);
        background-color: var(--im-rgb-color-1);
      }
    }
  }

  .im-input-number__suffix,
  .im-input-number__prefix {
    display: flex;
    align-items: center;
    height: 100%;
  }
}
</style>
