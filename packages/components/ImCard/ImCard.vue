<template>
  <div :class="[bem.b(), bem.is('borderless', props.borderless), props.shadow ? bem.m(props.shadow) : '']">
    <slot name="header">
      <div :class="[bem.e('header')]" v-if="props.title || $slots['header-action']">
        <span :class="[bem.e('title')]">{{ props.title }}</span>
        <slot name="header-action" />
      </div>
    </slot>
    <div :class="[bem.e('body')]">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';

defineOptions({ name: 'ImCard' });
const bem = useBem('card');
const props = withDefaults(defineProps<{
  title?: string;
  borderless?: boolean;
  shadow?: 'always' | 'hover' | '';
}>(), {
  title: '',
  borderless: false,
  shadow: ''
})
</script>

<style scoped lang="scss">
  .im-card {
    box-sizing: border-box;
    border: 1px solid var(--im-gray-color-4, rgba(0, 0, 0, .25));
    border-radius: var(--im-radius);
    background-color: var(--im-bg-content-color, #fff);
    overflow: hidden;
    transition: box-shadow .3s ease-in-out;
    width: 100%;
    position: relative;
    margin: 0;
    padding: 0;

    &.is-borderless {
      border: none;
    }

    .im-card__header {
      padding: 8px;
      padding-left: 24px;
      display: flex;
      min-height: 36px;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid var(--im-gray-color-4);
    }


    .im-card__title {
      font-size: 18px;
      font-weight: 500;
      text-align: left;
      line-height: 24px;
      color: var(--im-gray-color-10);
      text-wrap: nowrap;
      overflow: hidden;
    }


    .im-card__body {
      padding: 24px;
      overflow: auto;
      line-height: 24px;
      margin: 0;
      font-size: 14px;
    }

    &.im-card--hover {
      &:hover {
        box-shadow: 0 5px 15px var(--im-shadow-color, rgba(0, 0, 0, .15));
      }
    }

    &.im-card--always {
      box-shadow: 0 5px 12px var(--im-shadow-color, rgba(0, 0, 0, .15));
    }
  }

</style>