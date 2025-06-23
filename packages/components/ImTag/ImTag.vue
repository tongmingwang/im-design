<script setup lang="ts">
import { useBem } from '@/utils/bem';
import ImIcon from '../ImIcon';

const bem = useBem('tag');
defineOptions({ name: 'ImTag' })
const emit = defineEmits(['close', 'update:modelValue']);
const props = withDefaults(defineProps<{
  color?: 'primary' | 'success' | 'warning' | 'error' | '',
  border?: boolean,
  closeable?: boolean,
  modelValue?: boolean;
}>(), { color: '', modelValue: true, closeable: false })

function handleClose(e: Event) {
  emit('update:modelValue', false)
  emit('close', e)
}
</script>

<template>
  <Transition name="fade">
    <span :class="[bem.b(), props.color ? bem.m(props.color) : '', bem.is('border', props.border)]"
      v-if="props.modelValue">
      <div :class="[bem.e('content')]">
        <slot />
        <ImIcon name="close" size="1em" v-if="props.closeable" @click="handleClose" :class="[bem.e('close')]" />
      </div>
    </span>
  </Transition>
</template>


<style scoped lang="scss">
  .im-tag {
    display: inline-flex;
    align-items: center;
    height: 20px;
    vertical-align: middle;

    &__content {
      display: inline-flex;
      align-items: center;
      padding: 0 4px;
      border-radius: var(--im-radius, 4px);
      font-size: 12px;
      font-weight: 500;
      height: 100%;
      min-width: max-content;
      line-height: 1;
      color: var(--im-gray-color-8);
      background-color: var(--im-rgb-color-1);
      border: 0 solid var(--im-rgb-color-2);
    }

    &.is-border .im-tag__content {
      border-width: 1px;
    }

    &__close {
      margin-left: 4px;
      cursor: pointer;
      color: var(--im-rgb-color-4);

      &:hover {
        color: var(--im-rgb-color-5);
      }
    }
  }


  @each $color in primary, success, warning, error {

    .im-tag--#{$color} {
      .im-tag__content {
        color: var(--im-#{$color}-color-8);
        background-color: var(--im-#{$color}-color-1);
        border-color: var(--im-#{$color}-color-3);
      }
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>