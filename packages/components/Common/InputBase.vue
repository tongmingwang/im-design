<template>
  <div
    :class="[
      bem.b(),
      bem.is('disabled', props.disabled),
      bem.is('readonly', props.readonly),
      bem.is('has-append', props.isAppend),
      bem.is('has-prepend', props.isPrepend),
      bem.is('focused', isFocus),
    ]"
    :style="{
      '--im-input-size': sizeValue,
    }">
    <!-- 前缀 -->
    <slot name="prefix">
      <div :class="[bem.e('prefix')]" v-if="props.prefix">
        {{ props.prefix }}
      </div>
    </slot>
    <input
      :class="[bem.e('input')]"
      ref="inputRef"
      :disabled="props.disabled"
      :readonly="props.readonly"
      :placeholder="props.placeholder"
      :name="props.name"
      :type="props.type"
      :max="props.max"
      :min="props.min"
      :maxlength="props.maxlength"
      :minlength="props.minlength"
      :step="props.step"
      :pattern="props.pattern"
      :autocomplete="props.autocomplete"
      :autofocus="props.autofocus"
      :tabindex="props.tabindex"
      :id="props.id"
      :value="val"
      @input="handInput"
      @focus="onFocus"
      @blur="onBlur" />
    <!-- 清空数据 -->
    <span
      :class="[bem.e('clearable')]"
      v-show="
        props.clearable &&
        (val || val === 0) &&
        !(props.disabled || props.readonly)
      ">
      <ImIcon name="close-circle-fill" size="1.2em" @click="handleClear" />
    </span>
    <!-- 后缀 -->
    <slot name="suffix">
      <div :class="[bem.e('suffix')]" v-if="props.prefix">
        {{ props.suffix }}
      </div>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, useSlots } from 'vue';
import { type InputPropsType } from '@/types/input-props-type';
import { useBem } from '@/utils/bem';
import { useToken } from '@/hooks/useToken';
import { getSizeValue } from '@/utils';
import ImIcon from '../ImIcon/ImIcon.vue';

interface PropsType extends InputPropsType {
  isAppend?: boolean;
  isPrepend?: boolean;
}

defineOptions({ name: 'ImInput' });
const props = defineProps<PropsType>();
const inputRef = ref<HTMLInputElement | null>(null);
const { sizeToken } = useToken();
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'change', value: string): void;
  (e: 'clear'): void;
  (e: 'focus', value: Event): void;
  (e: 'blur', value: Event): void;
}>();
const val = ref(props.modelValue || '');
const isFocus = ref(false);
const bem = useBem('input');
const sizeValue = computed(() =>
  getSizeValue(props.size || sizeToken.value || 36)
);

watch(
  () => props.modelValue,
  () => {
    val.value = props.modelValue;
  }
);
defineExpose({
  $el: inputRef,
  focus: () => inputRef.value?.focus(),
  blur: () => inputRef.value?.blur(),
});

const handInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  val.value = target.value;
  emit('update:modelValue', val.value);
  emit('change', val.value);
};

function handleClear(e: Event) {
  e.stopPropagation();

  val.value = '';
  emit('update:modelValue', val.value);
  emit('change', val.value);
  emit('clear');
}

function onFocus(e: Event) {
  isFocus.value = true;
  emit('focus', e);
}
function onBlur(e: Event) {
  isFocus.value = false;
  emit('blur', e);
}
</script>

<style lang="scss" scoped>
.im-input {
  --im-input-bg: var(--im-bg-content-color);
  --im-input-color: var(--im-gray-color-10);
  --im-input-border-color: var(--im-gray-color-5);

  position: relative;
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  vertical-align: middle;
  border: 1px solid var(--im-input-border-color);
  background-color: var(--im-input-bg);
  color: var(--im-input-color);
  height: var(--im-input-size);
  border-radius: var(--im-radius);
  transition: all 0.2s ease-in-out;
  overflow: hidden;
  padding: 0 12px;
  width: 100%;
  font-size: 14px;
  gap: 8px;

  &:focus-within,
  &:hover,
  .is-focused {
    --im-input-border-color: var(--im-primary-color-7);
  }

  &.is-disabled {
    border-color: var(--im-gray-color-5);
    background-color: var(--im-rgb-color-1) !important;
    color: var(--im-gray-color-6);
    cursor: not-allowed;
    &:hover {
      border-color: var(--im-gray-color-5);
      background-color: var(--im-rgb-color-1) !important;
      color: var(--im-gray-color-6);
    }

    .im-input__clearable {
      cursor: inherit;
    }
  }

  &.is-readonly {
    pointer-events: none;
  }

  &.is-has-append {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  &.is-has-prepend {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .im-input__input {
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
    flex: 1;
    width: 100%;
    color: inherit;
    background-color: transparent;
    height: 100%;
    font-size: inherit;
    font-family: inherit;
    font-weight: normal;
    cursor: inherit;

    &::placeholder {
      color: var(--im-gray-color-6);
      font-size: 12px;
    }
  }

  @keyframes iconFade {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  .im-input__clearable {
    animation: iconFade 0.2s ease-in-out;

    cursor: pointer;
    color: var(--im-gray-color-6);
    transition: all 0.2s ease-in-out;
    min-width: fit-content;
    &:hover {
      color: var(--im-gray-color-8);
    }
  }

  .im-input__suffix,
  .im-input__prefix {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    min-width: fit-content;
    cursor: inherit;
    background-color: transparent;
  }
}
</style>
