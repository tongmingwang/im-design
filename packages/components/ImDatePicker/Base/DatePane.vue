<template>
  <div
    :class="[
      bem.b(),
      bem.is('side-open', pickTime && props.timePlacement !== 'top'),
    ]"
    :style="{
      '--im-date-picker-height': '252px',
      '--im-date-picker-width': '252px',
      '--im-date-picker-month-slide-y-size': slideY,
      '--im-date-day-size': '36px',
      '--im-date-btn-size': '28px',
      '--im-date-picker-pd-lr': '16px',
      '--im-date-picker-pd-tb': '8px',
    }">
    <div :class="[bem.e('content')]">
      <div :class="[bem.e('header')]">
        <div :class="[bem.e('action-left')]">
          <!-- 显示年月 -->
          <ImButton
            shape="round"
            size="28"
            variant="text"
            :class="[bem.e('time-btn')]"
            @click="() => setYMVisible(!pickYM)">
            {{ year }}年 {{ month }}月
            <ImIcon name="down" style="margin-left: 4px" size="1em" />
          </ImButton>
          <!-- 显示时间 -->
          <ImInnerLayer
            :visible="pickTime"
            @close="pickTime = false"
            v-if="props.timePlacement === 'top'">
            <ImButton
              shape="round"
              :class="[bem.e('time-btn')]"
              size="28"
              variant="text"
              :color="pickTime ? 'primary' : 'default'"
              @click="setRenderTimeVisible"
              v-if="props.showTime">
              <ImIcon name="time-circle" size="20px" />
            </ImButton>
            <template #content>
              <TimePicker
                :show="pickTime"
                :date="hhmmss"
                height="304px"
                @change="onTimePickerChange" />
            </template>
          </ImInnerLayer>
          <ImButton
            shape="round"
            v-else
            :class="[bem.e('time-btn')]"
            size="28"
            variant="text"
            :color="pickTime ? 'primary' : 'default'"
            @click="setRenderTimeVisible"
            v-if="props.showTime">
            <ImIcon name="time-circle" size="20px" />
          </ImButton>
        </div>
        <div :class="[bem.e('action-right')]">
          <ImButton shape="circle" variant="text" size="28" @click="prevMonth">
            <ImIcon name="arrowup" size="18" />
          </ImButton>

          <ImButton shape="circle" variant="text" size="28" @click="nextMonth">
            <ImIcon name="arrowdown" size="18" />
          </ImButton>
        </div>
      </div>
      <Transition name="slide-y" :duration="300" mode="out-in">
        <YearMonth
          v-if="pickYM"
          :date="nowDate"
          @change="handleYMChange"
          @close="() => setYMVisible(false)" />

        <div v-else :class="[bem.e('body')]" :key="month">
          <div
            v-for="(item, index) in weekDays"
            :key="item"
            :class="[bem.e('day-week')]">
            {{ item }}
          </div>
          <div
            v-for="item in days"
            :class="[
              bem.e('day'),
              bem.is('disabled', item.isDisabled),
              bem.is('range-date', !!item.isRangeDate),
              bem.is(
                `range-${props.rangePosition}`,
                item.isSelected && !!item.isRangeDate
              ),
            ]">
            <span
              @click="() => handleSelected(item)"
              :class="[
                bem.e('day--inner'),
                bem.is('current-mouth', item.isCurrentMonth),
                bem.is('today', item.isToday),
                bem.is('selected', item.isSelected),
              ]"
              >{{ item.day }}</span
            >
          </div>
        </div>
      </Transition>
    </div>

    <template v-if="props.showTime && props.timePlacement !== 'top'">
      <Transition name="slide-x" :duration="300" mode="out-in">
        <TimePicker
          v-show="pickTime"
          :show="pickTime"
          :date="hhmmss"
          height="304px"
          @change="onTimePickerChange" />
      </Transition>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import { ImButton } from '@/components';
import { ref } from 'vue';
import { computed, watch } from 'vue';
import ImIcon from '../../ImIcon';
import YearMonth from './YearMonth.vue';
import TimePicker from './TimePiker.vue';
import { formatTime } from '@/utils';
import ImInnerLayer from '@/components/Common/InnerLayer.vue';
import dayjs from 'dayjs';

const bem = useBem('date-pane');
/**
 * 说明：
 * 该组件目前显示一个月的日期，支持切换月份，切换年份。
 */
const emit = defineEmits<{
  (e: 'change', date: Date): void;
  (e: 'paneDateChange', date: Date): void;
}>();
//  定义周日到周六的数组
const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
// props
const props = withDefaults(
  defineProps<{
    // 选中的日期
    date?: string | Date;
    // 是否为范围选择模式
    rangePosition?: 'start' | 'end' | '' | undefined;

    visible?: boolean;
    showTime?: boolean;
    timePlacement?: 'right' | 'top';
    // paneDate: 当前面板显示的日期，默认为当前时间
    paneDate?: Date | string | null;
    // 禁用的日期
    disabledDate?: (date?: Date) => boolean;
    // 高亮的日期，日期区间
    highlightDate?: (date: Date) => boolean;
  }>(),
  {
    date: '',
    rangePosition: '',
    visible: false,
    showTime: false,
    timePlacement: 'right',
    paneDate: '',
    disabledDate: () => false,
  }
);
const pickYM = ref(false);
const pickTime = ref(false);
const slideY = ref('-8px');
// 渲染pane
const nowDate = ref<Date>(
  props.rangePosition
    ? new Date(props.paneDate || new Date().getTime())
    : new Date(props.date || new Date().getTime())
);
const year = computed(() => nowDate.value.getFullYear());
const month = computed(() => nowDate.value.getMonth() + 1);
const days = computed(() => {
  const arr = getCalendarDays(year.value, month.value);
  const selected = props.date ? new Date(props.date) : null;

  if (props.date) {
    return arr.map((day) => {
      return {
        ...day,
        isSelected: getCheckedItem(day, selected),
      };
    });
  }

  return arr;
});

const hhmmss = computed(() => {
  const nowDate = new Date(props.date || new Date().getTime());
  const h = nowDate.getHours();
  const m = nowDate.getMinutes();
  const s = nowDate.getSeconds();
  return formatTime(h, m, s);
});

watch(
  () => props.visible,
  (val) => {
    pickYM.value = false;
    // 如果visible为false，则重置年月日信息
    if (!val) {
      nowDate.value = new Date(props.paneDate || new Date().getTime());
      pickTime.value = false;
      pickYM.value = false;
    }
  }
);
watch(
  () => props.paneDate,
  (n, o) => {
    if (dayjs(n).isBefore(o)) {
      slideY.value = '-8px';
    } else {
      slideY.value = '8px';
    }
    nowDate.value = new Date(props.paneDate || new Date().getTime());
  }
);
watch(
  () => props.date,
  () => {
    // 数据更新，需要重新计算days数组
    nowDate.value = new Date(props.date || new Date().getTime());
  }
);

function getCalendarDays(year: number, month: number) {
  // 1. 获取当前月的所有天数
  const currentMonthDays = getDaysInMonth(year, month, true);
  // 2. 计算当前月第一天是星期几（0=周日，1=周一，...，6=周六）
  const firstDayOfWeek = new Date(year, month - 1, 1).getDay();
  // 3. 计算需要补充的上个月的天数（假设周一为一周的第一天）
  const daysFromPrevMonth = firstDayOfWeek === 0 ? 7 : firstDayOfWeek;
  // 4. 获取上个月的最后几天
  const prevMonthDays = getDaysInMonth(year, month - 1, false);
  const prevMonthDaysToShow = prevMonthDays.slice(-daysFromPrevMonth);
  // 5. 计算需要补充的下个月的天数（总共显示42天）
  const totalDays = prevMonthDaysToShow.length + currentMonthDays.length;
  const daysFromNextMonth = Math.max(0, 42 - totalDays); // 确保不为负数
  // 6. 获取下个月的前几天
  const nextMonthDays = getDaysInMonth(year, month + 1, false);
  const nextMonthDaysToShow = nextMonthDays.slice(0, daysFromNextMonth);
  // 7. 合并结果：[上个月补充天数, 当前月天数, 下个月补充天数]
  return [...prevMonthDaysToShow, ...currentMonthDays, ...nextMonthDaysToShow];
}

// 获取某个月的所有天数
function getDaysInMonth(
  year: number,
  month: number,
  isCurrentMonth: boolean = true
) {
  // 处理跨年情况（如month=0或month=13）
  const date = new Date(year, month - 1, 1);
  date.setMonth(date.getMonth() + 1);
  date.setDate(0);
  const maxDay = date.getDate();

  return Array.from({ length: maxDay }, (_, i) => {
    const curDate = new Date(year, month - 1, i + 1, 0, 0, 0);

    return {
      day: i + 1,
      isToday: isCurrentMonth ? isToday(year, month, i + 1) : false,
      isCurrentMonth,
      isSelected: false,
      timestamp: curDate.getTime(),
      isDisabled: props.disabledDate(curDate),
      isRangeDate: isCurrentMonth ? props.highlightDate?.(curDate) : false,
    };
  });
}
function getCheckedItem(item: { timestamp: number }, checkDate: Date | null) {
  if (!checkDate) return false;
  const itemDate = new Date(item.timestamp);
  if (isNaN(checkDate.getTime())) return false;

  return (
    itemDate.getFullYear() === checkDate.getFullYear() &&
    itemDate.getMonth() === checkDate.getMonth() &&
    itemDate.getDate() === checkDate.getDate()
  );
}
// 检查是否是今天
function isToday(year: number, month: number, day: number) {
  const today = new Date();
  return (
    year === today.getFullYear() &&
    month === today.getMonth() + 1 &&
    day === today.getDate()
  );
}
// 上一个月
function prevMonth() {
  slideY.value = '-8px';
  nowDate.value = new Date(
    year.value,
    month.value - 2,
    nowDate.value.getDate(),
    nowDate.value.getHours(),
    nowDate.value.getMinutes(),
    nowDate.value.getSeconds()
  );
  emit('paneDateChange', nowDate.value);
}
// 切换到下个月
function nextMonth() {
  slideY.value = '8px';

  nowDate.value = new Date(
    year.value,
    month.value,
    nowDate.value.getDate(),
    nowDate.value.getHours(),
    nowDate.value.getMinutes(),
    nowDate.value.getSeconds()
  );
  emit('paneDateChange', nowDate.value);
}

function handleSelected(item: any) {
  if (item.disabled) return;
  const date = new Date(item.timestamp);

  nowDate.value = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    nowDate.value.getHours(),
    nowDate.value.getMinutes(),
    nowDate.value.getSeconds()
  );
  emit('change', nowDate.value);
}

function setYMVisible(bol: boolean) {
  pickYM.value = bol;
}

function handleYMChange(data: {
  year?: number | string;
  month?: number | string;
}) {
  if (!year && !month) return;
  // 需要时间保留
  if (data.year)
    nowDate.value = new Date(
      Number(data.year),
      month.value - 1,
      nowDate.value.getDate(),
      nowDate.value.getHours(),
      nowDate.value.getMinutes(),
      nowDate.value.getSeconds()
    );
  if (data.month)
    nowDate.value = new Date(
      year.value,
      Number(data.month) - 1,
      nowDate.value.getDate(),
      nowDate.value.getHours(),
      nowDate.value.getMinutes(),
      nowDate.value.getSeconds()
    );
  emit('change', nowDate.value);
}

function setRenderTimeVisible() {
  pickTime.value = !pickTime.value;
}

function onTimePickerChange(data: { hh: string; mm: string; ss: string }) {
  // 更新时间选择器的时间
  const { hh, mm, ss } = data;
  const time = props.date ? new Date(props.date) : new Date();
  if (
    time.getHours() === Number(hh) &&
    time.getMinutes() === Number(mm) &&
    time.getSeconds() === Number(ss)
  ) {
    return;
  }
  time.setHours(Number(hh));
  time.setMinutes(Number(mm));
  time.setSeconds(Number(ss));
  nowDate.value = time;
  emit('change', nowDate.value);
}
</script>

<style scoped lang="scss">
.im-date-pane {
  display: flex;
  background-color: var(--im-bg-content-color);
  border-radius: inherit;
  font-size: 14px;
  font-weight: 500;
  color: var(--im-gray-color-7);
  transition: all 0.3s ease-in-out;
  overflow: visible;
  width: calc(var(--im-date-picker-width) + var(--im-date-picker-pd-lr) * 2);
  height: calc(
    var(--im-date-picker-height) + var(--im-date-picker-pd-tb) * 3 +
      var(--im-date-btn-size)
  );

  &.is-side-open {
    width: calc(
      var(--im-date-picker-width) + var(--im-date-picker-pd-lr) * 4 + 144px
    );
  }
  &__content {
    display: flex;
    flex-direction: column;
    background-color: var(--im-bg-content-color);
    padding: var(--im-date-picker-pd-tb) var(--im-date-picker-pd-lr)
      var(--im-date-picker-pd-tb);
    margin: 0;
    border-radius: inherit;
    font-size: 14px;
    font-weight: 500;
    color: var(--im-gray-color-7);
    width: calc(var(--im-date-picker-width) + var(--im-date-picker-pd-lr) * 2);
    min-width: calc(
      var(--im-date-picker-width) + var(--im-date-picker-pd-lr) * 2
    );
  }

  &__time-btn {
    padding: 0 8px;
    margin: 0;
  }

  .is-gray {
    color: var(--im-gray-color-6);
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 var(--im-date-picker-pd-tb) 0;
    margin: 0;
    border: none;
  }

  &__body {
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 0;
    overflow: hidden;
    height: var(--im-date-picker-height);

    .im-date-pane__day-week {
      width: var(--im-date-day-size);
      height: var(--im-date-day-size);
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 0;
      font-size: 12px;
      color: var(--im-gray-color-8);
    }

    .im-date-pane__day {
      width: var(--im-date-day-size);
      height: var(--im-date-day-size);
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 0;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &.is-disabled {
        color: var(--im-gray-color-6);
        cursor: not-allowed;

        .im-date-pane__day--inner {
          pointer-events: none;
          color: var(--im-gray-color-6);
        }
      }
      &.is-range-date {
        background-color: var(--im-primary-color-1);
        border-radius: 0;
      }
      &.is-range-start {
        border-top-left-radius: 50%;
        border-bottom-left-radius: 50%;
      }
      &.is-range-end {
        border-top-right-radius: 50%;
        border-bottom-right-radius: 50%;
      }
    }

    .im-date-pane__day--inner {
      width: var(--im-date-btn-size);
      height: var(--im-date-btn-size);
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 0;
      border: 1px solid transparent;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      border-radius: 50%;

      &:hover {
        background-color: var(--im-rgb-color-1);
      }

      &:active {
        background-color: var(--im-rgb-color-2);
      }
      &.is-current-mouth {
        color: var(--im-gray-color-10);
      }

      &.is-today {
        border-color: var(--im-primary-color-8);
        background-color: var(--im-rgb-color-1);
      }

      &.is-selected {
        border-color: var(--im-primary-color-8);
        background-color: var(--im-primary-color-8);
        color: var(--im-primary-color-1);
      }
    }
  }

  &__action-left,
  &__action-right {
    display: flex;
    align-items: center;
    gap: 0px;
    margin: 0;
    padding: 0;
  }

  &__picker {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: center;
    color: var(--im-gray-color-10);
    font-weight: 500;
    cursor: pointer;
  }
}

.slide-y-enter-active,
.slide-y-leave-active {
  transition: all 0.3s ease;
}
.slide-y-enter-from {
  transform: translateY(var(--im-date-picker-month-slide-y-size));
  opacity: 0;
}
.slide-y-leave-to {
  transform: translateY(calc(-1 * var(--im-date-picker-month-slide-y-size)));
  opacity: 0;
}

.slide-x-enter-active,
.slide-x-leave-active {
  transition: all 0.3s ease;
}
.slide-x-enter-from {
  transform: translateX(-20px);
  opacity: 0;
}
.slide-x-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>
