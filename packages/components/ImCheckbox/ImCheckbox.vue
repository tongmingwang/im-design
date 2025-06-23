<template>
  <label
    :class="[
      bem.b(),
      bem.is('checked', checked || props.indeterminate),
      bem.is('readonly', props.readonly),
      bem.is('disabled', props.disabled),
      bem.is('indeterminate', props.indeterminate),
    ]"
    :tabindex="props.tabindex"
    :style="{
      '--im-checkbox-size': sizeValue,
    }">
    <span :class="[bem.e('state')]" v-ripple="isRipple">
      <Transition
        name="fade"
        mode="out-in"
        :duration="{ enter: 200, leave: 200 }">
        <svg
          class="im-checkbox_state-icon"
          viewBox="0 0 24 24"
          v-if="checked"
          fill="currentColor"
          aria-hidden="true">
          <path
            d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8.29 13.29c-.39.39-1.02.39-1.41 0L5.71 12.7a.9959.9959 0 010-1.41c.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.58 7.59z"></path>
        </svg>
        <svg
          class="im-checkbox_state-icon"
          viewBox="0 0 24 24"
          aria-hidden="true"
          v-else-if="props.indeterminate"
          fill="currentColor">
          <path
            d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 10H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1z"></path>
        </svg>
        <svg
          class="im-checkbox_state-icon"
          v-else
          fill="currentColor"
          viewBox="0 0 24 24">
          <path
            d="M18 19H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1zm1-16H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
        </svg>
      </Transition>
    </span>
    <span :class="[bem.e('inner')]">
      <slot>{{ props.label }}</slot>
    </span>
    <input
      type="checkbox"
      :class="[bem.e('input')]"
      :value="props.value"
      :disabled="props.disabled"
      :readonly="props.readonly"
      :checked="checked"
      @change="handleChange"
      :tabindex="-1" />
  </label>
</template>

<script setup lang="ts">
import { getSizeValue } from '@/utils';
import { useBem } from '@/utils/bem';
import { ref, computed, watch } from 'vue';
import { useToken } from '@/hooks/useToken';
import { ripple } from '@/directive';
// 注册指令,
const vRipple = ripple;

const bem = useBem('checkbox');
defineOptions({ name: 'ImCheckbox' });
const emit = defineEmits(['update:modelValue', 'change']);
const props = withDefaults(
  defineProps<{
    modelValue: boolean | Array<string>;
    value?: string | number;
    disabled?: boolean;
    readonly?: boolean;
    label?: string;
    indeterminate?: boolean;
    checked?: boolean;
    tabindex?: number;
    size?: string | number;
  }>(),
  {
    modelValue: false,
    value: undefined,
    disabled: false,
    label: '',
    size: '',
  }
);
const { sizeToken } = useToken();
const checked = ref(getIsChecked());
const isRipple = computed(() => !props.disabled && !props.readonly);
const sizeValue = computed(() =>
  getSizeValue(props.size || sizeToken.value || '36px')
);

watch(
  () => props.modelValue,
  () => {
    checked.value = getIsChecked();
  }
);
watch(
  () => props.checked,
  (val) => {
    checked.value = val;
  }
);

// 触发更新
function handleChange(e: Event) {
  const target = e.target as HTMLInputElement;
  checked.value = target.checked;
  updateModelValue();
}
function isValue(value: string | number | undefined) {
  return value || value === 0;
}

function getIsChecked() {
  return Array.isArray(props.modelValue)
    ? props.modelValue.includes(props.value as string)
    : !!(props.modelValue || props.checked || false);
}

// 更新modelValue的值
function updateModelValue() {
  if (checked.value) {
    if (Array.isArray(props.modelValue)) {
      const checkedList = [...props.modelValue];
      if (
        isValue(props.value) &&
        !checkedList.includes(props.value as string)
      ) {
        checkedList.push(props.value as string);
        emit('update:modelValue', checkedList);
        emit('change', checkedList);
      }
    } else {
      emit('update:modelValue', true);
      emit('change', true);
    }
  } else {
    if (Array.isArray(props.modelValue)) {
      const checkedList = [...props.modelValue];
      if (isValue(props.value) && checkedList.includes(props.value as string)) {
        const index = checkedList.indexOf(props.value as string);
        if (index > -1) {
          checkedList.splice(index, 1);
          emit('update:modelValue', checkedList);
          emit('change', checkedList);
        }
      }
    } else {
      emit('update:modelValue', false);
      emit('change', false);
    }
  }
}
</script>

<style scoped lang="scss">
.im-checkbox {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  justify-content: flex-start;
  flex-wrap: nowrap;
  vertical-align: middle;
  padding: 0;
  margin: 0;
  margin-right: 8px;
  color: var(--im-gray-color-10);
  &.is-checked {
    .im-checkbox__state {
      color: var(--im-primary-color-8);
    }
  }
  &.is-disabled {
    cursor: not-allowed;
    color: var(--im-gray-color-6);
    .im-checkbox__state {
      pointer-events: none;
      color: var(--im-gray-color-6);
    }
  }
  &.is-readonly {
    pointer-events: none;
    .im-checkbox__state {
      color: var(--im-gray-color-8);
      pointer-events: none;
    }
  }

  &__state {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
    color: inherit;
    width: var(--im-checkbox-size);
    height: var(--im-checkbox-size);
    color: var(--im-gray-color-8);

    &:hover {
      background-color: var(--im-rgb-color-1);
      color: var(--im-primary-color-8);
    }
  }

  &__inner {
    font-size: 14px;
    line-height: 20px;
    text-align: left;
    color: inherit;
  }

  &__input {
    width: 0;
    height: 0;
    opacity: 0;
    display: none;
  }

  .im-checkbox_state-icon {
    --im-checkbox-state-icon-size: calc(var(--im-checkbox-size) * 0.6);

    width: var(--im-checkbox-state-icon-size, 20px);
    height: var(--im-checkbox-state-icon-size, 20px);
    transform-origin: center;
    color: inherit;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 200ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0.9;
  transform: scale(0.9);
}
</style>
