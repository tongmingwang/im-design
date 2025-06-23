<template>
  <div
    :class="[bem.b()]"
    :style="{
      width: pickTime ? '424px' : '272px',
      '--im-date-picker-height': '312px',
      '--im-date-picker-width': '272px',
      '--im-date-picker-month-slide-y-size': slideY,
    }">
    <div :Class="[bem.e('content')]">
      <div :class="[bem.e('header')]">
        <div :class="[bem.e('action-left')]">
          <!-- 显示年月 -->
          <ImButton
            shape="round"
            size="32"
            variant="text"
            :class="[bem.e('time-btn')]"
            @click="() => setYMVisible(!pickYM)">
            {{ year }}年 {{ month }}月
            <ImIcon name="down" style="margin-left: 4px" size="1em" />
          </ImButton>
          <!-- 显示时间 -->
          <ImButton
            shape="round"
            :class="[bem.e('time-btn')]"
            title="选择时间"
            size="32"
            variant="text"
            @click="setRenderTimeVisible"
            v-show="props.showTime">
            <ImIcon name="time-circle" size="20px" />
          </ImButton>
        </div>
        <div :class="[bem.e('action-right')]">
          <ImButton
            shape="circle"
            variant="text"
            title="上一个月份"
            size="32"
            @click="prevMonth">
            <ImIcon name="arrowup" size="16px" />
          </ImButton>

          <ImButton
            shape="circle"
            title="下一个月份"
            variant="text"
            size="32"
            @click="nextMonth">
            <ImIcon name="arrowdown" size="16px" />
          </ImButton>
        </div>
      </div>
      <Transition
        name="slide-y"
        :duration="{ enter: 300, leave: 300 }"
        mode="out-in">
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
              bem.is('current-mouth', item.isCurrentMonth),
              bem.is('today', item.isToday),
              bem.is('selected', getCheckedItem(item)),
            ]"
            @click="() => handleSelected(item)">
            {{ item.day }}
          </div>
        </div>
      </Transition>
    </div>

    <template v-if="props.showTime">
      <Transition
        name="slide-x"
        :duration="{ enter: 300, leave: 300 }"
        mode="out-in">
        <TimePicker
          v-show="pickTime"
          :show="pickTime"
          :hh="hour"
          :mm="minute"
          :ss="second"
          @change="onTimePickerChange" />
      </Transition>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import ImButton from '../ImButton';
import { ref } from 'vue';
import { computed, watch } from 'vue';
import ImIcon from '../ImIcon';
import YearMonth from './YearMonth.vue';
import TimePicker from './TimePiker.vue';

const bem = useBem('date-pane');
/**
 * 说明：
 * 该组件目前显示一个月的日期，支持切换月份，切换年份。
 */
const emit = defineEmits<{
  (e: 'change', date: Date): void;
}>();
//  定义周日到周六的数组
const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
// props
const props = withDefaults(
  defineProps<{
    date?: string;
    isRange?: boolean;
    visible?: boolean;
    showTime?: boolean;
  }>(),
  {
    date: '',
    isRange: false,
    visible: false,
    showTime: false,
  }
);
const pickYM = ref(false);
const pickTime = ref(false);
const slideY = ref('-20px');
// 当前年月日信息
const nowDate = ref<Date>(new Date(props.date || new Date().getTime()));
const year = computed(() => nowDate.value.getFullYear());
const month = computed(() => nowDate.value.getMonth() + 1);
const hour = computed(() =>
  nowDate.value.getHours().toString().padStart(2, '0')
);
const minute = computed(() =>
  nowDate.value.getMinutes().toString().padStart(2, '0')
);
const second = computed(() =>
  nowDate.value.getSeconds().toString().padStart(2, '0')
);
const days = computed(() => getCalendarDays(year.value, month.value));

watch(
  () => props.visible,
  (val) => {
    pickYM.value = false;
    // 如果visible为false，则重置年月日信息
    if (!val) {
      nowDate.value = new Date(props.date || new Date().getTime());
      pickTime.value = false;
      pickYM.value = false;
    }
  }
);
watch(
  () => props.date,
  (val) => {
    nowDate.value = new Date(val || new Date().getTime());
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

  return Array.from({ length: maxDay }, (_, i) => ({
    day: i + 1,
    isToday: isToday(year, month, i + 1),
    isCurrentMonth,
    timestamp: new Date(year, month - 1, i + 1).getTime(),
  }));
}
function getCheckedItem(item: { timestamp: number }) {
  if (!props.date) return false;
  const itemDate = new Date(item.timestamp);
  const checkDate = new Date(props.date);
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
  slideY.value = '-20px';
  nowDate.value = new Date(
    year.value,
    month.value - 2,
    nowDate.value.getDate(),
    nowDate.value.getHours(),
    nowDate.value.getMinutes(),
    nowDate.value.getSeconds()
  );
}
// 切换到下个月
function nextMonth() {
  slideY.value = '20px';

  nowDate.value = new Date(
    year.value,
    month.value,
    nowDate.value.getDate(),
    nowDate.value.getHours(),
    nowDate.value.getMinutes(),
    nowDate.value.getSeconds()
  );
}

function handleSelected(item: any) {
  const date = new Date(item.timestamp);

  nowDate.value = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    nowDate.value.getHours(),
    nowDate.value.getMinutes(),
    nowDate.value.getSeconds()
  );
  emit('change', item.timestamp);
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
  const time = nowDate.value;
  if (
    time.getHours() === Number(hh) &&
    time.getMinutes() === Number(mm) &&
    time.getSeconds() === Number(ss)
  )
    return;

  nowDate.value = new Date(
    time.getFullYear(),
    time.getMonth(),
    time.getDate(),
    Number(hh),
    Number(mm),
    Number(ss)
  );
  emit('change', nowDate.value);
}
</script>

<style scoped lang="scss">
.im-date-pane {
  display: flex;
  background-color: var(--im-bg-content-color);
  border-radius: var(--im-radius, 4px);
  font-size: 14px;
  font-weight: 500;
  color: var(--im-gray-color-7);
  height: var(--im-date-picker-height);
  transition: all 0.3s ease-in-out;
  overflow: visible;
  &__content {
    display: flex;
    flex-direction: column;
    background-color: var(--im-bg-content-color);
    border-radius: var(--im-radius, 4px);
    font-size: 14px;
    font-weight: 500;
    color: var(--im-gray-color-7);
    width: var(--im-date-picker-width);
    min-width: var(--im-date-picker-width);
  }

  &__time-btn {
    padding: 0 8px;
  }

  .is-gray {
    color: var(--im-gray-color-6);
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    border: none;
  }

  &__body {
    padding: 8px 12px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 4px;
    overflow: hidden;

    .im-date-pane__day-week {
      width: 32px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 0;
      font-size: 14px;
      color: var(--im-gray-color-8);
    }

    .im-date-pane__day {
      width: 32px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 0;
      border-radius: 50%;
      border: 1px solid transparent;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

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
