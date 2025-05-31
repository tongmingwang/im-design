<template>
  <div :class="[bem.b(), bem.is('vertical', props.vertical)]" :style="{
    '--im-divider-color': props.color || 'var(--im-gray-color-4)',
    '--im-divider-margin-size': `${props.margin || 8}px`,
    '--im-divider-size': `${props.size || 1}px`,
    '--im-divider-text-left-width': props.textLeftWidth ? props.textLeftWidth : '100%',
    '--im-divider-text-right-width': props.textRightWidth ? props.textRightWidth : '100%'
  }">
    <span :class="[bem.e('text')]" v-if="!props.vertical">
      <slot />
    </span>
  </div>
</template>

<script setup lang="ts">
import type { DividerProps } from './DividerProps'
import { useBem } from '@/utils/bem';

const bem = useBem('divider')
const props = defineProps<DividerProps>()
</script>

<style lang="scss" scoped>
  .im-divider {
    display: flex;
    position: relative;
    align-items: center;
    margin: var(--im-divider-margin-size) 0;
    overflow: hidden;

    &::before,
    &::after {
      display: block;
      content: '';
      height: 0;
      width: 100%;
      border-bottom: var(--im-divider-size, 1px) solid var(--im-divider-color);
    }

    &::before {
      max-width: var(--im-divider-text-left-width, 100%);
    }

    &::after {
      max-width: var(--im-divider-text-right-width, 100%);
    }

    .im-divider__text {
      padding: 0 1em;
      color: var(--im-gray-color-10);
      font-size: 16px;
    }

    &.is-vertical {
      display: inline-flex;
      height: 1em;
      width: 0;
      vertical-align: middle;
      margin: 0 var(--im-divider-margin-size);
      align-items: center;
      flex-direction: column;
      justify-content: center;
      overflow: visible;

      &::before,
      &::after {
        display: block;
        content: '';
        width: 0;
        height: 50%;
        border-left: var(--im-divider-size, 1px) solid var(--im-divider-color);
      }
    }
  }
</style>