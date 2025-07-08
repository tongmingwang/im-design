<template>
  <ImDateTrigger
    :show="showPane"
    :placeholder="props.placeholder"
    :clearable="props.clearable"
    :disabled="props.disabled"
    :readonly="props.readonly"
    :class="[bem.b()]"
    :value="date"
    @change="() => setShow(true)"
    @clear="onClear"
    ref="triggerRef" />
  <ImLayer
    :visible="showPane"
    ref="contentRef"
    :arrow="false"
    :placement="props.placement"
    :get-trigger-container="getTarget">
    <DatePane
      @change="onDatePicker"
      :date="date"
      :visible="showPane"
      :disabledDate="props.disabledDate"
      :showTime="props.showTime" />
    <div :class="[bem.e('footer')]">
      <div :class="[bem.e('footer-left')]">
        <ImButton size="28" color="default" variant="text" @click="onClearDate"
          >清除</ImButton
        >
      </div>
      <div :class="[bem.e('footer-right')]">
        <slot name="footer"></slot>
        <ImButton
          size="28"
          color="primary"
          variant="text"
          @click="onPickerToday"
          >现在</ImButton
        >
        <ImButton size="28" color="primary" variant="text" @click="onOk"
          >确定</ImButton
        >
      </div>
    </div>
  </ImLayer>
</template>

<script lang="ts" setup>
import { useBem } from '@/utils/bem';
import ImLayer from '../Common/ImLayer.vue';
import type { ImPlaceType } from '@/types';
import DatePane from './Base/DatePane.vue';
import dayjs from 'dayjs';
import ImDateTrigger from './Base/DateTrigger.vue';
import { useDate } from './hooks/useDate';
import { computed } from 'vue';
import { ImButton } from '@/components';

const bem = useBem('date-picker');
defineOptions({ name: 'ImDatePicker' });
const props = withDefaults(
  defineProps<{
    modelValue?: string;
    disabled?: boolean;
    readonly?: boolean;
    clearable?: boolean;
    placeholder?: string;
    format?: string;
    zIndex?: number;
    placement?: ImPlaceType;
    showTime?: boolean;
    disabledDate?: (date?: Date) => boolean;
  }>(),
  {
    modelValue: '',
    disabled: false,
    readonly: true,
    clearable: false,
    placeholder: '',
    format: '',
    zIndex: 1000,
    showTime: false,
    disabledDate: () => false,
  }
);
const { date, showPane, setShow, getTarget, triggerRef, contentRef } =
  useDate(props);
// 定义事件
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'change', value: string): void;
}>();

const format = computed(() => {
  return props.format
    ? props.format
    : props.showTime
    ? 'YYYY-MM-DD HH:mm:ss'
    : 'YYYY-MM-DD';
});

function onDatePicker(timestamp: Date) {
  date.value = dayjs(timestamp).format(format.value);
  emit('update:modelValue', date.value);
  emit('change', date.value);
}

function onPickerToday() {
  // 判断是不是禁用的日期
  const date = new Date();
  if (props.disabledDate(date)) return;
  // 不是禁用日期，则设置为当前时间
  onDatePicker(date);
  setShow(false);
}

function onClearDate() {
  date.value = '';
  emit('update:modelValue', '');
  emit('change', '');
  setShow(false);
}

function onOk() {
  setShow(false);
}

function onClear() {
  date.value = '';
  emit('update:modelValue', '');
  emit('change', '');
  setShow(false);
}
</script>

<style lang="scss">
.im-date-picker__footer {
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  border: none;

  .im-date-picker__footer-left,
  .im-date-picker__footer-right {
    display: flex;
    align-items: center;
    gap: 8px;
  }
}
</style>
