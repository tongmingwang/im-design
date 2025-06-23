<template>
  <div :class="[bem.b()]">
    <div :class="[bem.e('content')]" ref="contentRef">
      <div :class="[bem.e('hh')]">
        <div
          :class="[bem.e('item'), bem.is('selected', props.hh === item)]"
          @click="(e) => onSelectItem(item, 'hh', e)"
          v-for="item in hours">
          {{ item }}
        </div>
      </div>
      <div :class="[bem.e('mm')]">
        <div
          :class="[bem.e('item'), bem.is('selected', props.mm === item)]"
          @click="(e) => onSelectItem(item, 'mm', e)"
          v-for="item in minuteSecondList">
          {{ item }}
        </div>
      </div>
      <div :class="[bem.e('ss')]">
        <div
          :class="[bem.e('item'), bem.is('selected', props.ss === item)]"
          @click="(e) => onSelectItem(item, 'ss', e)"
          v-for="item in minuteSecondList">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import { ref, watch } from 'vue';

const bem = useBem('time-picker');
const contentRef = ref<HTMLDivElement | null>(null);
const props = withDefaults(
  defineProps<{
    hh?: string;
    mm?: string;
    ss?: string;
    show?: boolean;
  }>(),
  {
    hh: '00',
    mm: '00',
    ss: '00',
    show: false,
  }
);
const emit = defineEmits(['change']);

const hours = new Array(24).fill(0).map((_, index) => {
  return index.toString().padStart(2, '0');
});
const minuteSecondList = new Array(60).fill(0).map((_, index) => {
  return index.toString().padStart(2, '0');
});

watch(
  () => props.show,
  (val) => {
    if (val) {
      setTimeout(() => {
        Array.from(
          contentRef.value?.querySelectorAll(
            '.im-time-picker__item.is-selected'
          ) || []
        ).forEach((item) => {
          item?.scrollIntoView({ behavior: 'instant', block: 'start' });
        });
      }, 0);
    }
  },
  {
    immediate: true,
    flush: 'post',
  }
);

function onSelectItem(item: string, type: 'hh' | 'mm' | 'ss', e: Event) {
  let hh = props.hh;
  let mm = props.mm;
  let ss = props.ss;

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
  const target = e.target as HTMLElement;
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
</script>

<style scoped lang="scss">
.im-time-picker {
  width: 150px;
  min-width: 150px;
  height: var(--im-date-picker-height);
  margin: 0;
  padding: 12px 12px 8px 8px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border-radius: none;
  border: none;
  border-left: 1px solid var(--im-gray-color-4);

  &__content {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
  &__hh,
  &__mm,
  &__ss {
    flex: 1;
    overflow-y: auto;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    gap: 4px;
    padding: 0;
    margin: 0;
    padding-bottom: calc(var(--im-date-picker-height) - 52px);
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
    border-radius: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    font-size: 14px;
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
