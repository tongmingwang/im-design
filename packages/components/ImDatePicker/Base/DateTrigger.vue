<template>
  <div
    :class="[
      bem.b(),
      bem.is('focused', props.show),
      bem.is('disabled', props.disabled),
    ]"
    @click="toggle"
    ref="triggerRef">
    <slot name="prefix">
      <input
        type="text"
        :class="bem.e('input')"
        :readonly="true"
        :placeholder="props.placeholder"
        :value="props.value"
        :disabled="props.disabled" />
    </slot>
    <div :class="[bem.e('suffix')]">
      <span :class="[bem.e('clear')]" v-show="props.value && props.clearable">
        <ImIcon name="close-circle-fill" @click.stop="handleClear" />
      </span>
      <template v-if="showIcon">
        <div
          v-show="!(props.value && props.clearable)"
          :class="[bem.e('date')]">
          <slot name="suffix">
            <ImIcon name="calendar" />
          </slot>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import { ImIcon } from '@/components';
import { ref } from 'vue';

const triggerRef = ref<HTMLDivElement>();
defineOptions({
  name: 'ImDateTrigger',
});
const bem = useBem('date-trigger');
const emit = defineEmits(['change', 'clear']);

defineExpose({
  $el: triggerRef,
});
const props = withDefaults(
  defineProps<{
    size?: string;
    disabled?: boolean;
    readonly?: boolean;
    placeholder?: string;
    clearable?: boolean;
    value?: string;
    show?: boolean;
    showIcon?: boolean;
  }>(),
  {
    disabled: false,
    readonly: true,
    placeholder: '',
    clearable: false,
    size: '',
    value: '',
    show: false,
    showIcon: true,
  }
);

function toggle(e: Event) {
  if (props.disabled) return;
  emit('change', e);
}
function handleClear(e: Event) {
  emit('clear', e);
}
</script>

<style scoped lang="scss">
.im-date-trigger {
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
  margin: 0;
  padding: 0 12px;
  background-color: var(--im-bg-content-color);
  border: 1px solid var(--im-gray-color-5);
  height: 36px;
  font-size: 14px;
  border-radius: var(--im-radius, 4px);
  color: var(--im-gray-color-10);
  cursor: pointer;
  transition: all 0.3s;
  position: relative;

  &:hover,
  &.is-focused {
    border-color: var(--im-primary-color-8);
  }

  &.is-disabled {
    cursor: not-allowed;
    color: var(--im-gray-color-6);
    background-color: var(--im-gray-color-3);
    border-color: var(--im-gray-color-4);
  }

  &__input,
  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background-color: inherit;
    padding: 0;
    margin: 0;
    height: 100%;
    border-radius: inherit;
    color: inherit;
    cursor: inherit;
    font-size: inherit;

    &::placeholder {
      color: var(--im-gray-color-6);
      font-size: 13px;
    }
  }

  &__suffix {
    color: var(--im-gray-color-7);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    position: relative;
    cursor: inherit;
  }

  &__clear {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    color: var(--im-gray-color-6);
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      color: var(--im-gray-color-8);
    }
  }

  &__date {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: fit-content;
    text-wrap: nowrap;
  }
}
</style>
