<template>
  <div ref="alertRef" :class="[bem.b(), bem.m(props.color || 'primary'), props.variant && bem.m(props.variant || '')]">
    <div :class="[bem.e('icon')]" v-if="props.showIcon">
      <slot name="icon">
        <ImIcon :name="iconName" :size="showTitleIcon ? 24 : 16" />
      </slot>
    </div>
    <div :class="[bem.e('content')]">
      <div :class="[bem.e('title')]" v-if="props.title || slots.title">
        <slot name="title">{{ props.title }}</slot>
      </div>
      <div :class="[bem.e('message')]">
        <slot>{{ props.message }}</slot>
      </div>
    </div>
    <div :class="[bem.e('close')]" v-if="props.closable" v-ripple="true" @click="handleClose">
      <slot name="close">
        <ImIcon name="close" size="16" />
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import { type AlertProps } from './AlertProps';
import ImIcon from '../ImIcon';
import { computed, withDefaults, useSlots, ref } from 'vue';
defineOptions({
  name: 'ImAlert'
})
const emit = defineEmits<{ (e: 'close'): void }>();
const alertRef = ref<HTMLElement | null>(null);
const props = withDefaults(defineProps<AlertProps>(), {
  showIcon: true,
  color: 'primary',
  title: '',
  message: '',
  closable: false
});
const bem = useBem('alert');
const slots = useSlots();
const showTitleIcon = computed(() => {
  return Boolean(props.showIcon && props.title);
})

const iconName = computed(() => {
  switch (props.color) {
    case 'error':
      return "close-circle-fill";
    case "warning":
      return "warning-circle-fill";
    case "success":
      return "check-circle-fill";

    default:
      return "info-circle-fill";
  }
})

const handleClose = async () => {
  emit('close')
  alertRef.value?.animate([{
    offset: 0,
    opacity: 1,
    transform: 'scaleY(1)'
  }, {
    transform: 'scaleY(0.9)',
    offset: 0.33,
    opacity: 0.25
  }, {
    transform: 'scaleY(0)',
    offset: 1,
    opacity: 0
  }], {
    duration: 300,
    easing: "linear",
    fill: "forwards"
  })
  await new Promise(resolve => setTimeout(resolve, 300))
  alertRef.value?.remove()
}
</script>

<style scoped lang="scss">
  .im-alert {
    padding: 8px 12px;
    border-radius: var(--im-radius);
    margin: 0;
    font-weight: 500;
    display: flex !important;
    align-items: flex-start;
    justify-content: flex-start;
    border: 1px solid transparent;
    transform-origin: top center;
    height: fit-content;

    .im-alert__icon {
      margin-right: 8px;
      color: var(--im-gray-color-10);
      line-height: 22px;
    }


    .im-alert__content {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      flex: 1;
    }

    .im-alert__title {
      display: flex;
      align-items: center;
      margin: 0;
      padding: 0;
      font-size: 18px;
      line-height: 28px;
    }

    .im-alert__message {
      font-size: 14px;
      margin: 0;
      padding: 0;
      line-height: 24px;
    }

    @each $color in (error, success, warning, primary) {
      &.im-alert--#{$color} {
        background-color: var(--im-#{$color}-color-7);
        border-color: var(--im-#{$color}-color-7);
        color: var(--im-#{$color}-color-1);

        .im-alert__icon {
          color: var(--im-#{$color}-color-1);
        }

        &.im-alert--outlined {
          background-color: var(--im-#{$color}-color-1);
          color: var(--im-#{$color}-color-7);
          border-color: var(--im-#{$color}-color-7);

          .im-alert__icon {
            color: var(--im-#{$color}-color-7);
          }
        }

        &.im-alert--tonal {
          background-color: var(--im-#{$color}-color-1);
          color: var(--im-#{$color}-color-7);
          border: none;

          .im-alert__icon {
            color: var(--im-#{$color}-color-7);
          }
        }
      }
    }

    .im-alert__close {
      cursor: pointer;
      border-radius: var(--im-radius);
      overflow: hidden;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
      margin: 0;
      padding: 0;
      user-select: none;

      &:hover {
        background-color: var(--im-rgb-color-1);
      }
    }
  }
</style>