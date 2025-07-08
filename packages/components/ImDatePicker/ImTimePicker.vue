<template>
  <ImDateTrigger
    :show="showPane"
    :placeholder="props.placeholder"
    :clearable="props.clearable"
    :disabled="props.disabled"
    :readonly="props.readonly"
    :class="[bem.b()]"
    :value="date"
    ref="triggerRef"
    @change="() => setShow(true)"
    @clear="onClearDate">
    <template #suffix>
      <slot name="#suffix">
        <ImIcon name="time-circle" />
      </slot>
    </template>
  </ImDateTrigger>

  <ImLayer
    :visible="showPane"
    :arrow="props.arrow"
    :offset="props.offset"
    ref="contentRef"
    :placement="props.placement"
    :get-trigger-container="getTarget">
    <TimePiker
      @change="onChange"
      :date="date"
      :show="showPane"
      height="234px"
      :class="[bem.e('content')]" />
    <div :class="[bem.e('footer')]">
      <ImButton size="28" color="primary" variant="text" @click="onPickerNow"
        >现在</ImButton
      >
      <ImButton size="28" color="primary" variant="text" @click="onOk"
        >确定</ImButton
      >
    </div>
  </ImLayer>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import TimePiker from './Base/TimePiker.vue';
import ImDateTrigger from './Base/DateTrigger.vue';
import { useDate } from './hooks/useDate';
import type { ImPlaceType } from '@/types';
import ImLayer from '../Common/ImLayer.vue';
import { formatTime } from '@/utils';
import ImIcon from '../ImIcon';
import { ImButton } from '@/components';

defineOptions({ name: 'ImTimePicker' });
// 定义事件
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'change', value: string): void;
}>();
// props
const props = withDefaults(
  defineProps<{
    size?: string;
    disabled?: boolean;
    readonly?: boolean;
    placeholder?: string;
    clearable?: boolean;
    modelValue: string;
    placement?: ImPlaceType;
    arrow?: boolean;
    offset?: number;
  }>(),
  {
    disabled: false,
    readonly: true,
    placeholder: '',
    clearable: false,
    size: '',
    modelValue: '',
    arrow: false,
    offset: 0,
  }
);

const bem = useBem('time-picker');
const { date, showPane, setShow, getTarget, triggerRef, contentRef } =
  useDate(props);

function onClearDate() {
  date.value = '';
  emit('update:modelValue', '');
  emit('change', '');
  setShow(false);
}

function onOk() {
  setShow(false);
}

function onPickerNow() {
  const now = new Date();
  const time = formatTime(now.getHours(), now.getMinutes(), now.getSeconds());
  emit('update:modelValue', time);
  emit('change', time);
  date.value = time;
  setShow(false);
}

function onChange(data: { hh: string; mm: string; ss: string }) {
  const time = `${data.hh}:${data.mm}:${data.ss}`;
  emit('update:modelValue', time);
  emit('change', time);
  date.value = time;
}
</script>

<style lang="scss" scoped>
.im-time-picker {
  width: 150px;
}
.im-time-picker__footer {
  display: flex;
  justify-content: flex-end;
  padding: 8px;
  margin: 0;
  gap: 8px;
  border: none;
  background-color: var(--im-bg-content-color);
  border-bottom-left-radius: var(--im-radius, 4px);
  border-bottom-right-radius: var(--im-radius, 4px);
}
.im-time-picker__content {
  width: 176px;
  padding: 8px 16px 8px;
  overflow: hidden;
  height: 304px;
}
</style>
