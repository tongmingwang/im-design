<template>
  <div :class="[bem.b()]" ref="wrapRef">
    <div :class="[bem.e('year')]">
      <div
        :class="[bem.e('year-item'), bem.is('selected', year === it)]"
        @click="() => onYearChange(it)"
        v-for="it in yearList">
        {{ it }}
      </div>
    </div>
    <div :class="[bem.e('month')]">
      <div
        :class="[bem.e('month-item'), bem.is('selected', month === i)]"
        @click="() => onMonthChange(i)"
        v-for="i in 12">
        {{ i }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import { computed, ref, onMounted } from 'vue';

const bem = useBem('year-month');
const props = withDefaults(
  defineProps<{
    date?: Date;
    yearLimit?: [number, number];
    month?: number[];
  }>(),
  {
    date: () => new Date(),
    year: () => [1900, 2100],
    months: () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  }
);
const emit = defineEmits<{
  (
    e: 'change',
    data: { year?: number | string; month?: string | number }
  ): void;
  (e: 'close'): void;
}>();
const wrapRef = ref<HTMLDivElement | null>(null);

// 选择的年月日期对象
const checkedDate = computed(() => (props.date ? new Date(props.date) : null));
const year = computed(() => {
  return checkedDate.value?.getFullYear?.() || '';
});
const month = computed(() => {
  return checkedDate.value ? checkedDate.value?.getMonth() + 1 : '';
});
// 渲染前后各100年左右的年份列表
const yearList = getYearList();

onMounted(() => {
  // 滚动到可是区域
  Array.from(wrapRef.value?.querySelectorAll('.is-selected') || []).forEach(
    (el) => {
      el?.scrollIntoView({
        behavior: 'instant',
        block: 'center',
      });
    }
  );
});

// 获取前后一百年的年份列表列表
function getYearList() {
  const y = new Date().getFullYear();
  const start = y - 100;
  const max = y + 101;
  const list = Array.from({ length: max - start }, (_, i) => start + i);
  return list;
}

// 年份选择
function onYearChange(y: number) {
  emit('change', {
    year: y,
    month: month.value || '',
  });
}

// 月份选择
function onMonthChange(m: number) {
  emit('change', {
    year: year.value || '',
    month: m,
  });
  // 关闭面板
  emit('close');
}
</script>

<style scoped lang="scss">
.im-year-month {
  color: var(--im-gray-color-10);
  height: var(--im-date-picker-height, 310px);
  max-height: var(--im-date-picker-height, 310px);
  padding: 8px;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  gap: 8px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--im-rgb-color-2);
    border-radius: 4px;
  }

  .im-year-month__year {
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0;
    gap: 4px;

    .im-year-month__year-item {
      margin: 0;
      padding: 0;
      width: 56px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      border-radius: 32px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      &:hover {
        color: var(--im-primary-color-8);
        background-color: var(--im-rgb-color-1);
      }
      &.is-selected {
        background-color: var(--im-primary-color-8);
        color: var(--im-primary-color-1);
      }
    }
  }

  .im-year-month__month {
    flex: 0 0 60px;
    min-width: 60px;
    text-align: center;
    overflow-y: auto;
    padding: 8px;

    .im-year-month__month-item {
      margin: 0;
      margin-top: 4px;
      padding: 0;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-radius: 50%;
      transition: all 0.3s ease-in-out;
      &:hover {
        color: var(--im-primary-color-8);
        background-color: var(--im-rgb-color-1);
      }
      &.is-selected {
        background-color: var(--im-primary-color-8);
        color: var(--im-primary-color-1);
      }
    }
  }
}
</style>
