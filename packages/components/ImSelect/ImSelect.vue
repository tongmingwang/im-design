<template>
  <div :class="[bem.b()]" :style="{
    '--im-select-width': width,
    '--im-select-height': height,
  }">
    <label :class="[bem.e('trigger')]" ref="triggerRef">
      <input :class="[bem.e('input')]" ref="inputRef" :value="label" readonly type="text" placeholder="请选择"
        @focus="onFocus" @blur="onBlur">
      <div :class="[bem.e('icon')]">
        <slot name="rightIcon">
          <ImIcon name="down" size="12" />
        </slot>
      </div>
    </label>
    <Teleport to="body">
      <Transition name="select">
        <ul :class="[bem.e('list'), 'im-shadow']" v-show="show" :style="contentStyle" ref="listRef">
          <li @click="() => onSelectItem(item.value)"
            :class="[bem.e('option'), bem.is('active', item.value === props.modelValue)]" v-ripple="true"
            v-for="(item, index) in props.options" :key="item.value || index">
            {{ item.label || item.value }}
          </li>
        </ul>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import ImIcon from '../ImIcon';
import { ref, computed, reactive } from 'vue'
import { getSizeValue } from '@/utils'
import { useToken } from '@/hooks/useToken';

defineOptions({ name: 'ImSelect' })
const bem = useBem('select')
const emit = defineEmits(['update:modelValue'])
const props = withDefaults(defineProps<{
  modelValue?: string | number;
  options: Array<{ label: string | number; value: string | number }>;
  width?: string | number;
  size?: string | number
}>(), {
  modelValue: '',
  options: () => [],
  width: '',
  size: ''
})
const { sizeToken } = useToken()
const show = ref(false)
const contentStyle = reactive({
  minWidth: '',
  top: '',
  left: ''
})
const triggerRef = ref<HTMLDivElement | null>(null)
const listRef = ref<HTMLUListElement | null>(null)
const inputRef = ref<HTMLInputElement | null>(null)
let timer: any = null


const width = computed(() => {
  return getSizeValue(props.width)
})
const height = computed(() => {
  return getSizeValue(props.size || sizeToken.value || '36px')
})
const label = computed(() => {
  return props.options.find(item => item.value === props.modelValue)?.label || ''
})


function hideSelect(e: Event) {
  // 滚动事件不是当前下拉菜单的子元素，则隐藏下拉菜单
  if (!listRef.value?.contains(e.target as Node)) {
    inputRef.value?.blur()
  }
}

// 聚焦事件处理函数
async function onFocus() {
  const rect = triggerRef.value?.getBoundingClientRect()
  const screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight

  contentStyle.top = `${rect?.bottom}px`
  contentStyle.minWidth = `${rect?.width}px`
  contentStyle.left = `${rect?.left}px`
  show.value = true
  timer && clearTimeout(timer)
  timer = null
  // 监听滚动的时候隐藏下拉菜单
  window.addEventListener('scroll', hideSelect, { passive: true, capture: true })
  // 找到激活的选项并滚动到视图中
  const activeOption = listRef.value?.querySelector(`.${bem.is('active', true)}`)
  await new Promise(resolve => requestAnimationFrame(resolve))
  console.log(rect?.bottom!, listRef.value!.offsetHeight);
  const listHeight = listRef.value!.offsetHeight
  // 判断下拉菜单是否超出视口，如果超出则调整位置
  if (rect?.bottom! + listHeight > screenHeight) {
    contentStyle.top = `${screenHeight - listHeight}px`
  }
  if (activeOption) {
    activeOption.scrollIntoView({ behavior: 'instant', block: 'nearest' })
  }
}

function onBlur() {
  timer && clearTimeout(timer)
  timer = setTimeout(() => {
    show.value = false
    window.removeEventListener('scroll', hideSelect)
    timer = null
  }, 150)

}

function onSelectItem(value: string | number) {
  emit('update:modelValue', value)
}
</script>

<style scoped lang="scss">

  // 动画效果
  .select-enter-active,
  .select-leave-active {
    transition: all 0.2s ease;
  }

  .select-enter-from,
  .select-leave-to {
    opacity: 0;
    transform: translateY(-8px);
  }

  // 编写组件基础样式
  .im-select {
    display: inline-flex;
    width: var(--im-select-width, 100%);

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

      &:hover {
        border-color: var(--im-primary-color-8);
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

    .im-select__icon {
      min-width: max-content;
      margin-left: 8px;
    }
  }
</style>
<style lang="scss">
  .im-select__list {
    position: fixed;
    z-index: 1000;
    background-color: var(--im-bg-content-color);
    list-style: none;
    padding: 4px 0;
    margin: 0;
    border-radius: var(--im-radius, 4px);
    max-height: 320px;
    overflow-y: auto;

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

      &:hover {
        background-color: var(--im-rgb-color-1);
      }

      &.is-active {
        background-color: var(--im-primary-color-1);
        color: var(--im-primary-color-8)
      }
    }
  }
</style>