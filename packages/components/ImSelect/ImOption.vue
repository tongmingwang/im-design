<template>
  <li
    @click="handleClick"
    :class="[
      bem.b(),
      bem.is('disabled', !!props.disabled),
      bem.is(
        'active',
        props.selectList?.includes(props.value || props.label || '')
      ),
    ]"
    v-ripple="!props.disabled">
    <span :class="[bem.e('text')]">
      <slot>
        {{ props.label || props.value }}
      </slot>
    </span>
    <ImIcon
      name="check"
      size="12"
      v-if="
        props.multiple &&
        props.selectList?.includes(props.value || props.label || '')
      "
      :class="[bem.e('check')]"
      >✓</ImIcon
    >
  </li>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import ImIcon from '../ImIcon';
import { ripple } from '@/directive';
// 注册指令,
const vRipple = ripple;

defineOptions({ name: 'ImOption' });
const bem = useBem('option');
const emit = defineEmits(['change']);
const props = withDefaults(
  defineProps<{
    disabled?: boolean;
    value: string | number;
    label?: string | number;
    selectList: Array<number | string>;
    multiple?: boolean;
  }>(),
  {
    selectList: () => [],
    disabled: false,
    value: '',
    multiple: false,
  }
);

function handleClick() {
  if (props.disabled) return;
  const v = props.value || props.label;
  v && emit('change', v);
}
</script>

<style lang="scss" scoped>
.im-option {
  padding: 4px 12px;
  height: 32px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  font-size: 14px;
  flex-wrap: nowrap;
  cursor: pointer;
  color: var(--im-gray-color-10);
  transition: all 0.2s ease;
  min-width: max-content;
  width: 100%;
  margin: 0;
  box-sizing: border-box;

  .im-option__text {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &:hover {
    background-color: var(--im-rgb-color-1);
  }

  &.is-active {
    background-color: var(--im-primary-color-1);
    color: var(--im-primary-color-8);
  }

  &.is-disabled {
    pointer-events: none;
    color: var(--im-gray-color-6);
  }
}
</style>
