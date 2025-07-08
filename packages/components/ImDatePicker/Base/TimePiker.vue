<template>
  <div
    :class="[bem.b()]"
    ref="contentRef"
    :style="{
      height: styleHeight,
      '--im-time-picker-height': styleHeight,
    }">
    <div :class="[bem.e('hh')]">
      <div
        :class="[bem.e('item'), bem.is('selected', hhmmss.hh === item)]"
        @click="(e) => onSelectItem(item, 'hh', e)"
        v-for="item in hours">
        {{ item }}
      </div>
    </div>
    <div :class="[bem.e('mm')]">
      <div
        :class="[bem.e('item'), bem.is('selected', hhmmss.mm === item)]"
        @click="(e) => onSelectItem(item, 'mm', e)"
        v-for="item in minuteSecondList">
        {{ item }}
      </div>
    </div>
    <div :class="[bem.e('ss')]">
      <div
        :class="[bem.e('item'), bem.is('selected', hhmmss.ss === item)]"
        @click="(e) => onSelectItem(item, 'ss', e)"
        v-for="item in minuteSecondList">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getSizeValue } from '@/utils';
import { useBem } from '@/utils/bem';
import { ref, watch, computed } from 'vue';

const bem = useBem('time-picker');
const contentRef = ref<HTMLDivElement | null>(null);
const props = withDefaults(
  defineProps<{
    date: string;
    show?: boolean;
    height: number | string;
  }>(),
  {
    show: false,
    date: '',
    height: '304px',
  }
);
const emit = defineEmits(['change']);
const hours = new Array(24).fill(0).map((_, index) => {
  return index.toString().padStart(2, '0');
});
const minuteSecondList = new Array(60).fill(0).map((_, index) => {
  return index.toString().padStart(2, '0');
});

// style height
const styleHeight = computed(() => {
  return getSizeValue(props.height);
});

const hhmmss = computed(() => {
  if (!props?.date) return { hh: '00', mm: '00', ss: '00' };
  const arr = props.date.toString().split(':');
  if (arr.length === 3) {
    return { hh: arr[0], mm: arr[1], ss: arr[2] };
  }
  return { hh: '00', mm: '00', ss: '00' };
});

watch(() => hhmmss.value, onTimeToView);
watch(() => props.show, onTimeToView);

function onTimeToView() {
  setTimeout(() => {
    Array.from(
      contentRef.value?.querySelectorAll('.im-time-picker__item.is-selected') ||
        []
    ).forEach((item) => {
      item?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, 0);
}

function onSelectItem(item: string, type: 'hh' | 'mm' | 'ss', e: Event) {
  let hh = hhmmss.value.hh;
  let mm = hhmmss.value.mm;
  let ss = hhmmss.value.ss;

  switch (type) {
    case 'hh':
      hh = item;
      break;
    case 'mm':
      mm = item;
      break;
    case 'ss':
      ss = item;
      break;
  }

  emit('change', {
    hh,
    mm,
    ss,
  });
  onTimeToView();
}
</script>

<style scoped lang="scss">
.im-time-picker {
  width: 176px;
  margin: 0;
  padding: 8px 16px;
  box-sizing: border-box;
  border-radius: none;
  gap: 0;
  display: flex;
  border: none;
  overflow: hidden;

  &__hh,
  &__mm,
  &__ss {
    overflow: hidden;
    overflow-y: auto;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
    padding: 0;
    margin: 0;
    min-width: 48px;
    width: 48px;
    background-color: transparent;
    padding-bottom: calc(var(--im-time-picker-height) - 48px);

    &::-webkit-scrollbar {
      width: 4px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--im-rgb-color-2);
      border-radius: 4px;
    }
  }

  .im-time-picker__item {
    height: 32px;
    min-height: 32px;
    cursor: pointer;
    width: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    font-size: 14px;
    padding: 0;
    margin: 0;
    color: var(--im-gray-color-10);

    &:hover {
      background-color: var(--im-rgb-color-1);
    }
    &.is-selected {
      background-color: var(--im-primary-color-8);
      color: var(--im-primary-color-1);
    }
  }
}
</style>
