<template>
  <div
    :class="[bem.b(), bem.is('open', show)]"
    ref="triggerRef"
    @click="onClick">
    <input
      type="text"
      :class="[bem.e('input')]"
      :value="date"
      readonly
      :placeholder="props.placeholder" />
    <ImIcon name="calendar" size="1em" color="var(--im-rgb-color-3)" />
    <div
      :class="[bem.e('close')]"
      v-if="props.clearable && date"
      @click.stop="onClear">
      <ImIcon
        name="close-circle-fill"
        size="1.1em"
        color="var(--im-rgb-color-3)" />
    </div>
    <ImLayer
      :visible="show"
      :placement="props.placement"
      :get-trigger-container="getTarget">
      <div ref="contentRef">
        <DatePane
          @change="onDatePicker"
          :date="date"
          :visible="show"
          :showTime="props.showTime" />
        <div :class="[bem.e('footer')]">
          <div :class="[bem.e('footer-left')]">
            <ImButton
              size="32"
              color="default"
              variant="text"
              @click="onClearDate"
              >清除</ImButton
            >
          </div>
          <div :class="[bem.e('footer-right')]">
            <ImButton
              size="32"
              color="primary"
              variant="text"
              @click="onPickerToday"
              >现在</ImButton
            >
            <ImButton size="32" color="primary" variant="text" @click="onOk"
              >确定</ImButton
            >
          </div>
        </div>
      </div>
    </ImLayer>
  </div>
</template>

<script lang="ts" setup>
import { useBem } from '@/utils/bem';
import { ref, watch } from 'vue';
import ImLayer from '../Common/ImLayer.vue';
import type { ImPlaceType } from '@/types';
import DatePane from './DatePane.vue';
import dayjs from 'dayjs';
import { debounce } from '@/utils';
import ImIcon from '../ImIcon';

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
  }>(),
  {
    modelValue: '',
    disabled: false,
    readonly: false,
    clearable: false,
    placeholder: '',
    format: 'YYYY-MM-DD',
    zIndex: 1000,
    showTime: false,
  }
);

// 定义事件
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'change', value: string): void;
}>();

const show = ref(false);
const triggerRef = ref<HTMLElement>();
const contentRef = ref<HTMLElement>();
const date = ref(props.modelValue || '');

watch(
  () => show.value,
  (val) => {
    document.removeEventListener('click', handleDocClick, { capture: true });
    val &&
      document.addEventListener('click', handleDocClick, { capture: true });
  }
);
watch(
  () => props.modelValue,
  (val) => {
    date.value = val;
  }
);

function getTarget() {
  return triggerRef.value as HTMLElement;
}
// 统一更新显示状态，防抖处理
const setShow = debounce((bol: boolean) => {
  show.value = bol;
}, 100);

function handleDocClick(e: MouseEvent) {
  // 什么时候关闭弹窗
  const c = contentRef.value as HTMLElement;
  if (c && !c.contains(e.target as Node)) {
    setShow(false);
  }
}

function onDatePicker(timestamp: Date) {
  date.value = dayjs(timestamp).format(props.format || 'YYYY-MM-DD');
  emit('update:modelValue', date.value);
  emit('change', date.value);
}

function onPickerToday() {
  onDatePicker(new Date());
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

function onClick() {
  setShow(true);
}
function onClear() {
  date.value = '';
  emit('update:modelValue', '');
  emit('change', '');
}
</script>

<style scoped lang="scss">
.im-date-picker {
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  width: 200px;
  margin: 0;
  padding: 0 12px;
  background-color: var(--im-bg-content-color);
  border: 1px solid var(--im-gray-color-5);
  height: 36px;
  font-size: 14px;
  border-radius: 4px;
  color: var(--im-gray-color-10);
  cursor: pointer;
  transition: all 0.3s;
  position: relative;

  &:hover,
  &.is-open {
    border-color: var(--im-primary-color-8);
    background-color: var(--im-primary-color-1);
    .im-date-picker__close {
      display: block;
    }
  }

  &__input,
  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background-color: inherit;
    padding: 0;
    margin: 0;
    height: 100%;
    border-radius: inherit;
    color: inherit;
    cursor: inherit;
    font-size: inherit;
  }

  .im-date-picker__close {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    background-color: inherit;
    display: none;
  }
}
</style>

<style lang="scss">
.im-date-picker__footer {
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  border: none;
  border-top: 1px solid var(--im-gray-color-4);

  .im-date-picker__footer-left,
  .im-date-picker__footer-right {
    display: flex;
    align-items: center;
    gap: 4px;
  }
}
</style>
