<template>
  <ImDateTrigger
    :disabled="props.disabled"
    :class="[bem.b()]"
    :show="showPane"
    :clearable="props.clearable"
    ref="triggerRef"
    @change="() => setShow(true)"
    @clear="onClearDate">
    <template #prefix>
      <input :class="bem.e('left')" readonly :value="startDateStr" />
      <ImIcon name="swap-right" :class="[bem.e('swap')]" />
      <input :class="bem.e('right')" readonly :value="endDateStr" />
    </template>
  </ImDateTrigger>

  <ImLayer
    :visible="showPane"
    ref="contentRef"
    :arrow="props.arrow"
    :offset="props.offset"
    :placement="props.placement"
    :get-trigger-container="getTarget">
    <div :class="[bem.e('content')]">
      <DatePane
        :date="state.startDate"
        :visible="showPane"
        :show-time="props.showTime"
        :paneDate="state.startPaneDate"
        @paneDateChange="onStartDateChange"
        @change="onStartChange"
        rangePosition="start"
        :disabledDate="props.disabledDate"
        :highlightDate="highlightDate"
        time-placement="top" />
      <DatePane
        :date="state.endDate"
        :visible="showPane"
        :show-time="props.showTime"
        :paneDate="state.endPaneDate"
        :disabledDate="props.disabledDate"
        @paneDateChange="onEndDateChange"
        @change="onEndChange"
        :highlightDate="highlightDate"
        rangePosition="end"
        time-placement="top" />
    </div>
    <div :class="[bem.e('footer')]">
      <div :class="[bem.e('footer--left')]">
        <ImButton variant="text" color="default" size="28" @click="onClearDate"
          >清除</ImButton
        >
      </div>
      <div :class="[bem.e('footer--right')]">
        <!-- 自定义日期快捷键 -->
        <slot name="footer"></slot>
        <ImButton variant="text" color="primary" size="28" @click="onOk"
          >确定</ImButton
        >
      </div>
    </div>
  </ImLayer>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import ImDateTrigger from './Base/DateTrigger.vue';
import { useDate } from './hooks/useDate';
import type { ImPlaceType } from '@/types';
import ImLayer from '../Common/ImLayer.vue';
import { ImButton } from '@/components';
import DatePane from './Base/DatePane.vue';
import { watch, computed, reactive } from 'vue';
import dayjs from 'dayjs';

defineOptions({ name: 'ImDateRangePicker' });
const emit = defineEmits<{
  (
    e: 'change',
    value: { startDate: Date | string; endDate: Date | string }
  ): void;
  (e: 'clear'): void;
}>();
// props
const props = withDefaults(
  defineProps<{
    size?: string;
    disabled?: boolean;
    readonly?: boolean;
    placeholder?: string;
    clearable?: boolean;
    placement?: ImPlaceType;
    startDate: string | Date;
    endDate: string | Date;
    showTime?: boolean;
    format?: string;
    disabledDate?: (date?: Date) => boolean;
    arrow?: boolean;
    offset?: number;
  }>(),
  {
    disabled: false,
    readonly: true,
    placeholder: '',
    clearable: false,
    size: '',
    showTime: false,
    startDate: '',
    endDate: '',
    disabledDate: () => false,
    arrow: false,
    offset: 0,
  }
);
// 保存起始时间和结束时间
const state = reactive({
  startDate: props.startDate,
  endDate: props.endDate,
  startPaneDate: props.startDate
    ? new Date(props.startDate)
    : dayjs(new Date()).toDate(),
  endPaneDate: dayjs(new Date()).add(1, 'month').toDate(),
});
const bem = useBem('date-range-picker');
const { showPane, setShow, getTarget, triggerRef, contentRef } = useDate(props);

const format = computed(() => {
  return props.format
    ? props.format
    : props.showTime
    ? 'YYYY-MM-DD HH:mm:ss'
    : 'YYYY-MM-DD';
});
// 计算属性渲染
const startDateStr = computed(() => {
  return state.startDate ? dayjs(state.startDate).format(format.value) : '';
});

const endDateStr = computed(() => {
  return state.endDate ? dayjs(state.endDate).format(format.value) : '';
});

watch(
  () => showPane.value,
  (val) => {
    if (val) {
      updatePaneDate();
    }
  }
);
watch(
  () => [props.startDate, props.endDate],
  () => {
    state.startDate = props.startDate;
    state.endDate = props.endDate;
  }
);

// 选择开始日期需要处理的逻辑
function onStartChange(timer: string | Date) {
  state.startDate = timer;
  if (state.endDate && dayjs(timer).isAfter(state.endDate)) {
    state.endDate = '';
  }
  updatePaneDate();
}

function highlightDate(date?: Date) {
  if (!date) return false;
  const d = new Date(date);
  // 大于等于开始时间，小于等于结束时间的日期高亮
  if (state.startDate && state.endDate) {
    const bFlag =
      dayjs(d).isAfter(state.startDate, 'date') ||
      dayjs(d).isSame(state.startDate, 'date');
    const eFlag =
      dayjs(d).isBefore(state.endDate, 'date') ||
      dayjs(d).isSame(state.endDate, 'date');

    return bFlag && eFlag;
  }
  return false;
}
function updatePaneDate() {
  state.startPaneDate = state.startDate
    ? new Date(state.startDate)
    : dayjs(new Date()).toDate();

  const end = state.endDate
    ? new Date(state.endDate)
    : dayjs(state.startPaneDate).add(1, 'month').toDate();

  state.endPaneDate = end;
}

function onStartDateChange(date: Date) {
  // 更新endDate面板时间，让其显示在面板上
  if (state.endPaneDate && dayjs(date).isAfter(state.endPaneDate)) {
    state.endPaneDate = date;
    state.startPaneDate = state.endPaneDate;
  } else {
    state.endPaneDate = dayjs(date).add(1, 'month').toDate();
    state.startPaneDate = date;
  }
}

function onEndDateChange(date: Date) {
  state.endPaneDate = date;
}

function onEndChange(data: Date) {
  if (data && state.startDate) {
    if (dayjs(data).isBefore(state.startDate)) {
      state.endDate = state.startDate;
      state.startDate = data;
      emit('change', { startDate: state.endDate, endDate: state.startDate });
    } else {
      state.endDate = data;
      emit('change', { startDate: state.startDate, endDate: state.endDate });
    }
  } else {
    state.endDate = data;
  }
}

function onClearDate() {
  state.startDate = '';
  state.endDate = '';
  emit('clear');
  emit('change', {
    startDate: '',
    endDate: '',
  });
  setShow(false);
}

function onOk() {
  setShow(false);
}
</script>

<style lang="scss" scoped>
.im-date-range-picker {
  width: 320px;
  display: flex;
  align-items: center;
  gap: 8px;

  &__content {
    display: flex;
    gap: 0;
    border-radius: inherit;
  }

  &__left,
  &__right {
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    padding: 0;
    text-align: left;
    background-color: transparent;
    font-size: 14px;
    color: inherit;
    cursor: inherit;
  }

  &__swap {
    color: var(--im-gray-color-7);
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    padding: 8px;
    margin: 0;
    gap: 8px;
  }

  &__footer--right {
    display: flex;
    gap: 8px;
    justify-content: flex-end;
  }

  &__footer--left {
    display: flex;
    gap: 8px;
    justify-content: flex-start;
  }
}
</style>
