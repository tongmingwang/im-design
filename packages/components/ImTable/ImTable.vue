<template>
  <div
    :class="[
      bem.b(),
      bem.is('border', props.border),
      bem.is('stript', props.stript),
      bem.is('fixed-header', props.fixedHeader),
    ]"
    :style="{
      height: sizeVal,
      overflow: 'auto',
    }">
    <table :class="[bem.e('table')]">
      <component :is="item" v-for="(item, index) in slotItems" :key="index" />
    </table>
  </div>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import { getSizeValue } from '@/utils';
import { computed, useSlots } from 'vue';

defineOptions({
  name: 'ImTable',
});
const bem = useBem('table');
const props = withDefaults(
  defineProps<{
    border?: boolean;
    stript?: boolean;
    height?: string;
    fixedHeader?: boolean;
  }>(),
  {
    border: false,
    stript: false,
    height: '100%',
    fixedHeader: false,
  }
);
const sizeVal = computed(() => getSizeValue(props.height));
const slots = useSlots();
const slotItems = computed(() => getItems(slots?.default?.() ?? []));

function getItems(slots: any) {
  return slots?.map((slot: any) => updateItem(slot));
}
function addClass(slot: any) {
  if (
    slot?.type === 'th' ||
    slot?.type === 'td' ||
    slot?.type === 'tr' ||
    slot?.type === 'thead' ||
    slot?.type === 'tbody'
  ) {
    const className = 'im-table__' + slot.type;

    if (slot.props?.class?.includes(className)) {
      return slot;
    }
    slot.props = slot.props
      ? {
          ...slot.props,
          class: Array.from([slot.props?.class, className])
            .filter(Boolean)
            .join(' '),
        }
      : { class: className };
  }
  return slot;
}
function updateItem(slot: any) {
  if (Array.isArray(slot?.children)) {
    slot.children.map((item: any) => updateItem(item));
  }
  addClass(slot);
  return slot;
}
</script>

<style lang="scss">
.im-table {
  width: 100%;
  position: relative;
  font-size: 14px;
  background-color: var(--im-bg-content-color);
  border-bottom: 1px solid var(--im-gray-color-4);
  .im-table__table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    margin: 0;
    padding: 0;
    border: none;
    background-color: transparent;
    display: table;
    // reset table style
    .im-table__td,
    .im-table__th,
    .im-table__tr,
    .im-table__thead,
    .im-table__tbody {
      margin: 0;
      padding: 0;
      border: none;
      background-color: var(--im-bg-content-color);
    }
    .im-table__td {
      border-bottom: 1px solid var(--im-gray-color-4);
    }
    .im-table__tr:last-child {
      .im-table__td {
        border-bottom: none;
      }
    }

    .im-table__tr {
      transition: all 0.2s ease;
      width: 100%;
    }
    .im-table__td,
    .im-table__th {
      padding: 4px 12px;
      margin: 0;
      height: 48px;
      line-height: 24px;
      color: var(--im-gray-color-8);
      text-align: left;
      border-bottom: 1px solid var(--im-gray-color-4);
      vertical-align: middle;
      background-color: transparent;
    }

    .im-table__thead {
      width: 100%;
      .im-table__th {
        color: var(--im-gray-color-10);
        font-size: 15px;
        font-weight: 500;
        background: var(--im-gray-color-2);
      }
    }

    .im-table__tr {
      background-color: var(--im-bg-content-color);
      &:hover {
        background-color: var(--im-rgb-color-1);
      }
    }
  }

  &.is-border {
    border: none;
    border-bottom: 1px solid var(--im-gray-color-4);
    border-top: 1px solid var(--im-gray-color-4);
    .im-table__table {
      border: none;
      .im-table__th {
        border: 1px solid var(--im-gray-color-4);
        border-top: none;
        border-left: none;
        &:first-child {
          border-left: 1px solid var(--im-gray-color-4);
        }
        &:last-child {
          border-right: 1px solid var(--im-gray-color-4);
        }
      }
      .im-table__td {
        border: 1px solid var(--im-gray-color-4);
        border-top: none;
        border-left: none;
        &:first-child {
          border-left: 1px solid var(--im-gray-color-4);
        }
        &:last-child {
          border-right: 1px solid var(--im-gray-color-4);
        }
      }

      .im-table__tr:last-child {
        .im-table__td {
          border-bottom: none;
        }
      }
    }
  }

  &.is-stript {
    .im-table__table {
      .im-table__tr:nth-child(even) {
        background-color: var(--im-gray-color-2);
      }
    }
  }

  &.is-fixed-header {
    position: relative !important;
    display: flex;
    width: 100%;
    overflow: auto;

    .im-table__table {
      .im-table__thead {
        position: sticky;
        top: 0;
        background-color: var(--im-gray-color-3);
        z-index: 1;
      }
    }
  }
}
</style>
