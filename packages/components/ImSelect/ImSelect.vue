<template>
  <div :class="[bem.b()]" :style="{
    '--im-select-width': width,
    '--im-select-height': height,
  }">
    <div @click="onClickTrigger" :class="[bem.e('trigger'), bem.is('open', show)]" ref="triggerRef" tabindex="-1">
      <input :class="[bem.e('input')]" ref="inputRef" tabindex="-1" :value="label" readonly type="text"
        :placeholder="props.placeholder">
      <span :class="[bem.e('icon-down'), bem.is('rotate', show)]">
        <slot name="downIcon">
          <ImIcon name="down" size="12" />
        </slot>
      </span>
      <span :class="[bem.e('clear-icon')]" v-if="props.allowClear && label" @click="onClearValue">
        <slot name="clearIcon">
          <ImIcon name="close-circle-fill" size="18" />
        </slot>
      </span>
    </div>
    <ImLayer :visible="show" :getTarget="() => triggerRef" :z-index="props.zIndex">
      <ul :class="[bem.e('list')]" ref="listRef">
        <li @click="() => !item.disabled && onSelectItem(item.value)"
          :class="[bem.e('option'), bem.is('disabled', !!item.disabled), bem.is('active', item.value === props.modelValue)]"
          v-ripple="!item.disabled" v-for="(item, index) in props.options" :key="item.value || index">
          {{ item.label || item.value }}
        </li>
      </ul>
    </ImLayer>
  </div>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import ImIcon from '../ImIcon';
import { ref, computed, watch } from 'vue'
import { getSizeValue } from '@/utils'
import { useToken } from '@/hooks/useToken';
import ImLayer from '../Common/ImLayer.vue';

defineOptions({ name: 'ImSelect' })
const bem = useBem('select')
const emit = defineEmits(['update:modelValue'])
const props = withDefaults(defineProps<{
  modelValue?: string | number;
  options: Array<{ label: string | number; value: string | number, disabled?: boolean | undefined }>;
  width?: string | number;
  size?: string | number;
  placeholder?: string;
  allowClear?: boolean;
  zIndex?: number;
}>(), {
  modelValue: '',
  options: () => [],
  width: '',
  allowClear: false,
  placeholder: ''
})
const { sizeToken } = useToken()
const show = ref(false)
const triggerRef = ref<HTMLDivElement | null>(null)
const listRef = ref<HTMLUListElement | null>(null)
const inputRef = ref<HTMLInputElement | null>(null)

const width = computed(() => {
  return getSizeValue(props.width)
})
const height = computed(() => {
  return getSizeValue(props.size || sizeToken.value || '36px')
})
const label = computed(() => {
  return props.options.find(item => item.value === props.modelValue)?.label || ''
})

watch(() => show.value, (val) => {
  document.removeEventListener('click', hideSelect, { capture: true })
  if (val) {
    document.addEventListener('click', hideSelect, { capture: true })
  } else {
    window.removeEventListener('scroll', scrollHandle, { capture: true })
  }
})

function scrollHandle(e: Event) {
  if (listRef.value?.contains(e.target as HTMLElement) || listRef.value === e.target as Node) {
    return
  }
  show.value = false
}

function hideSelect(e: Event) {
  if (triggerRef.value?.contains(e.target as Node) || triggerRef.value === e.target || e.target === listRef.value) {
    return
  }
  show.value = false
}
// 聚焦事件处理函数
async function onClickTrigger() {
  if (show.value) return;
  show.value = true
  await new Promise(resolve => requestAnimationFrame(resolve))
  const activeOption = listRef.value?.querySelector(`.${bem.is('active', true)}`)
  activeOption && activeOption.scrollIntoView({ behavior: 'instant', block: 'nearest' })
  await new Promise(resolve => requestAnimationFrame(resolve))
  window.addEventListener('scroll', scrollHandle, { capture: true })
}
function onSelectItem(value: string | number) {
  emit('update:modelValue', value)
}
// 点击清除按钮
function onClearValue(e: Event) {
  e.preventDefault();
  e.stopPropagation();
  emit('update:modelValue', '')
}
</script>

<style scoped lang="scss">
  @keyframes icon-fade {
    from {
      opacity: 0;
      transform: scale(0.33);
    }

    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .im-select {
    display: inline-flex;
    width: var(--im-select-width, 200px);

    .im-select__trigger {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      border: 1px solid var(--im-gray-color-5);
      padding: 0 11px;
      border-radius: var(--im-radius, 4px);
      color: var(--im-gray-color-10);
      height: var(--im-select-height, 36px);
      box-sizing: border-box;
      overflow: hidden;
      cursor: pointer;
      transition: all 0.2s ease;
      position: relative;
      background-color: var(--im-bg-content-color);

      &:hover {
        border-color: var(--im-primary-color-8);

        .im-select__clear-icon {
          display: inline-flex;
        }
      }

      &:focus-within {
        border-color: var(--im-primary-color-8);
      }
    }

    .im-select__input {
      outline: none;
      border: none;
      width: 100%;
      background: transparent;
      height: 100%;
      font-size: 14px;
    }

    .im-select__icon-down {
      min-width: max-content;
      margin-left: 8px;
      color: var(--im-gray-color-6);
      pointer-events: none;
      transition: transform 200ms ease;

      &.is-rotate {
        transform: rotate(180deg);
      }
    }

    .im-select__clear-icon {
      min-width: max-content;
      color: var(--im-gray-color-6);
      position: absolute;
      right: 10px;
      top: 0;
      height: 100%;
      display: none;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      height: 100%;
      z-index: 1;
      background-color: var(--im-bg-content-color);
      transition: color 200ms ease;
      animation: icon-fade 200ms ease;

      &:hover {
        color: var(--im-gray-color-8);
      }
    }
  }
</style>
<style lang="scss">
  .im-select__list {
    background-color: var(--im-bg-content-color);
    list-style: none;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    overflow: auto;
    max-height: 320px;

    .im-select__option {
      padding: 0 12px;
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
      margin: 0;


      &:hover {
        background-color: var(--im-rgb-color-1);
      }

      &.is-active {
        background-color: var(--im-primary-color-1);
        color: var(--im-primary-color-8);
        font-weight: 600;
      }

      &.is-disabled {
        pointer-events: none;
        color: var(--im-gray-color-6);
      }
    }
  }
</style>