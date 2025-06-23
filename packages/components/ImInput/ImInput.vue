<template>
  <div
    :class="[bem.b()]"
    v-if="hasPrepend || isAppend"
    :style="{
      '--im-input-wrapper-size': sizeValue,
    }">
    <div :class="[bem.e('prepend')]" v-if="hasPrepend">
      <slot name="prepend">{{ props.prepend }}</slot>
    </div>
    <InputBase
      v-bind="props"
      v-model="val"
      ref="inputRef"
      :type="inputType"
      :size="sizeValue"
      :isPrepend="hasPrepend"
      :isAppend="isAppend">
      <!-- 传播插槽 -->
      <template #prefix v-if="$slots.prefix || props.prefix">
        <slot name="prefix">{{ props.prefix }} </slot>
      </template>
      <template #suffix>
        <PasswordIcon
          v-if="renderPwdIcon"
          :show="Boolean(selfType === 'text')"
          @change="handlePwdChange" />
        <slot name="suffix">{{ props.suffix }} </slot>
      </template>
    </InputBase>
    <div :class="[bem.e('append')]" v-if="isAppend">
      <slot name="append">{{ props.append }}</slot>
    </div>
  </div>
  <InputBase
    v-else
    v-bind="props"
    v-model="val"
    ref="inputRef"
    :type="inputType"
    :size="sizeValue">
    <template #prefix>
      <slot name="prefix"> </slot>
    </template>
    <template #suffix>
      <PasswordIcon
        v-if="renderPwdIcon"
        :show="Boolean(selfType === 'text')"
        @change="handlePwdChange" />
      <slot name="suffix">{{ props.suffix }} </slot>
    </template>
  </InputBase>
</template>

<script setup lang="ts">
import { ref, computed, watch, useSlots } from 'vue';
import { type InputPropsType } from '@/types/input-props-type';
import { useBem } from '@/utils/bem';
import { getSizeValue } from '@/utils';
import InputBase from '../Common/InputBase.vue';
import { useToken } from '@/hooks/useToken';
import PasswordIcon from './PasswordIcon.ts';

const { sizeToken } = useToken();
defineOptions({ name: 'ImInput' });
const slots = useSlots();
const props = defineProps<InputPropsType>();
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'change', value: string): void;
}>();
const inputRef = ref<HTMLInputElement | null>(null);
const val = ref(props.modelValue);
const selfType = ref(props.type || 'text');
const bem = useBem('input-wrapper');
const sizeValue = computed(() =>
  getSizeValue(props.size || sizeToken.value || 36)
);
const hasPrepend = computed(() => !!(props.prepend || slots.prepend?.()));
const isAppend = computed(() => !!(props.append || slots.append?.()));
const inputType = computed(() => selfType.value || props.type || 'text');
const renderPwdIcon = computed(
  () => props.type === 'password' && props.passwordEye
);

watch(
  () => props.modelValue,
  () => {
    val.value = props.modelValue;
  }
);
watch(val, () => {
  emit('update:modelValue', val.value);
  emit('change', val.value);
});

function handlePwdChange(bol: boolean) {
  selfType.value = bol ? 'text' : 'password';

  console.log(selfType.value, 'selfType.value');
}

defineExpose({
  $el: inputRef,
  focus: () => inputRef.value?.focus(),
  blur: () => inputRef.value?.blur(),
  // @ts-ignore
  getInput: () => inputRef.value.$el,
});
</script>

<style lang="scss" scoped>
.im-input-wrapper {
  display: inline-flex;
  align-items: center;
  gap: 0;
  padding: 0;
  margin: 0;
  height: var(--im-input-wrapper-size, 36px);
  box-sizing: border-box;
  border-radius: var(--im-radius, 4px);
  vertical-align: middle;

  .im-input-wrapper__prepend,
  .im-input-wrapper__append {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--im-gray-color-5);
    min-width: 48px;
    background-color: var(--im-rgb-color-1);
    padding: 0 8px;
    border-radius: 0;
  }
  .im-input-wrapper__prepend {
    border-right: none;
    border-top-left-radius: var(--im-radius, 4px);
    border-bottom-left-radius: var(--im-radius, 4px);
  }
  .im-input-wrapper__append {
    border-left: none;
    border-top-right-radius: var(--im-radius, 4px);
    border-bottom-right-radius: var(--im-radius, 4px);
  }
}
</style>
