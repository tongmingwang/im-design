<template>
  <div
    :class="[
      bem.b(),
      bem.is('open', show),
      bem.is('disabled', props.disabled),
      bem.is('multiple', props.multiple),
    ]"
    :style="{
      '--im-select-width': widthSize,
      '--im-select-height': heightSize,
    }">
    <div
      @click="onClickTrigger"
      :class="[bem.e('trigger')]"
      ref="triggerRef"
      tabindex="-1">
      <span :class="[bem.e('placeholder')]" v-if="showPlaceholder">{{
        props.placeholder
      }}</span>
      <div :class="[bem.e('tag-wrap')]" v-else>
        <div :class="[bem.e('tags')]" v-if="props.multiple">
          <template v-for="(item, index) in tagList">
            <ImTag
              v-if="index < props.maxTag"
              :key="index"
              @close.stop="(e: Event) => onCloseTag(item, e)"
              closeable>
              {{ item.label }}
            </ImTag>
          </template>
        </div>
        <div
          v-if="props.multiple && tagList.length && moreTagLen"
          :class="[bem.e('more')]">
          <ImIcon name="plus" size="12px" /> {{ moreTagLen }}
        </div>
        <!-- 默认展示 -->
        <div :class="[bem.e('default')]" v-if="!props.multiple">
          {{ label }}
        </div>
      </div>
      <!-- icon -->
      <span :class="[bem.e('icon-down'), bem.is('rotate', show)]">
        <slot name="downIcon">
          <ImIcon name="down" size="12" />
        </slot>
      </span>
      <span
        :class="[bem.e('clear-icon')]"
        v-if="showClear"
        @click="onClearValue">
        <slot name="clearIcon">
          <ImIcon name="close-circle-fill" size="18" />
        </slot>
      </span>
    </div>
    <ImLayer
      :visible="show"
      :getTriggerContainer="() => triggerRef"
      :z-index="props.zIndex"
      @close="setClose"
      :arrow="props.arrow"
      :offset="props.offset"
      :scrollClose="props.scrollClose">
      <ul :class="[bem.e('list')]" ref="listRef" v-if="props.options?.length">
        <ImOption
          :multiple="props.multiple"
          v-for="(item, index) in props.options"
          :key="item.value || item.label || index"
          :disabled="item.disabled"
          :select-list="selectList"
          :value="item.value"
          :label="item.label"
          @change="onSelectItem">
          {{ item.label || item.value }}
        </ImOption>
      </ul>
      <ImEmpty v-else :description="props.emptyText" />
    </ImLayer>
  </div>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import ImIcon from '../ImIcon';
import { ref, computed, watch } from 'vue';
import { getSizeValue } from '@/utils';
import { useToken } from '@/hooks/useToken';
import ImLayer from '../Common/ImLayer.vue';
import ImOption from './ImOption.vue';
import ImTag from '../ImTag';

defineOptions({ name: 'ImSelect' });
const bem = useBem('select');
const emit = defineEmits(['update:modelValue']);
const props = withDefaults(
  defineProps<{
    modelValue?: string | number;
    options?: Array<{
      label: string | number;
      value: string | number;
      disabled?: boolean | undefined;
    }>;
    width?: string | number;
    size?: string | number;
    placeholder?: string;
    clearable?: boolean;
    zIndex?: number;
    multiple?: boolean;
    disabled?: boolean;
    maxTag?: number;
    arrow?: boolean;
    offset?: number;
    scrollClose?: boolean;
    emptyText?: string;
  }>(),
  {
    modelValue: '',
    options: () => [],
    width: '',
    clearable: false,
    placeholder: '',
    multiple: false,
    disabled: false,
    maxTag: 1,
    arrow: true,
    offset: 8,
    scrollClose: false,
  }
);
const { sizeToken } = useToken();
const show = ref(false);
const selectList = ref<Array<string | number>>([]);
const triggerRef = ref<HTMLDivElement | null>(null);
const listRef = ref<HTMLUListElement | null>(null);

const widthSize = computed(() => {
  return getSizeValue(props.width || 200);
});
const heightSize = computed(() => {
  return getSizeValue(props.size || sizeToken.value || '36px');
});
const label = computed(() => {
  if (props.multiple) {
    return props.options
      .filter((item) => selectList.value.includes(String(item.value)))
      .map((item) => item.label);
  }
  return (
    props.options.find((item) => item.value === props.modelValue)?.label || ''
  );
});
const tagList = computed(() => {
  return props.options.filter((item) =>
    selectList.value.includes(String(item.value))
  );
});
const moreTagLen = computed(() => {
  const len = tagList.value.length - props.maxTag;
  return tagList.value.length &&
    props.maxTag &&
    tagList.value.length - props.maxTag &&
    len > 0
    ? len
    : '';
});
const showClear = computed(() => {
  return props.clearable && props.modelValue && label.value && !props.disabled;
});

const showPlaceholder = computed(() => {
  if (!props.placeholder) return false;
  if (props.multiple) return !tagList.value?.length;
  if (label.value) return false;
  return true;
});

watch(
  () => props.modelValue,
  () => {
    updateList();
  },
  { immediate: true }
);

watch(
  () => show.value,
  (val) => {
    window.removeEventListener('click', hideSelect);
    if (val) {
      window.addEventListener('click', hideSelect);
    }
  }
);

// 关闭标签
function onCloseTag(
  item: { label: string | number; value: string | number },
  e: Event
) {
  e.preventDefault();
  const newVal = selectList.value.filter((o) => o !== item.value);
  emit('update:modelValue', newVal.join(','));
}

function setClose() {
  show.value = false;
}

function updateList() {
  if (props.multiple) {
    selectList.value = String(props.modelValue)?.split(',') || [];
  } else {
    selectList.value = [props.modelValue];
  }
}

function hideSelect(e: Event) {
  const target = e.target as HTMLElement;
  if (!target) return;

  if (
    triggerRef.value?.contains(target) ||
    triggerRef.value === e.target ||
    e.target === listRef.value
  ) {
    return;
  }
  if (
    (props.multiple && listRef.value?.contains(target)) ||
    listRef.value === e.target
  ) {
    return;
  }
  setClose();
}
// 聚焦事件处理函数
async function onClickTrigger() {
  if (show.value) return;
  show.value = true;
  await new Promise((resolve) => requestAnimationFrame(resolve));
  const activeOption = listRef.value?.querySelector(
    `.${bem.is('active', true)}`
  );
  activeOption &&
    activeOption.scrollIntoView({ behavior: 'instant', block: 'nearest' });
  await new Promise((resolve) => requestAnimationFrame(resolve));
}
function onSelectItem(value: string | number) {
  if (props.multiple) {
    const list = selectList.value;

    if (list.includes(value)) {
      list.splice(list.indexOf(value), 1);
    } else {
      list.push(value);
    }
    emit('update:modelValue', list.filter((i) => i).join(','));
    return;
  } else {
    emit('update:modelValue', value);
  }
}
// 点击清除按钮
function onClearValue(e: Event) {
  e.preventDefault();
  e.stopPropagation();
  emit('update:modelValue', '');
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
  min-height: var(--im-select-height, 36px);
  height: var(--im-select-height, 36px);
  vertical-align: middle;
  align-items: center;
  text-wrap: nowrap;

  &.is-open {
    .im-select__trigger {
      border-color: var(--im-primary-color-8);
      background-color: var(--im-primary-color-1);
      color: var(--im-gray-color-6);
    }
  }

  &__tag-wrap {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 4px;
  }

  .im-select__default {
    flex: 1;
    overflow: hidden;
    width: 100%;
    text-wrap: nowrap;
    color: inherit;
  }

  &.is-disabled {
    cursor: not-allowed;
    .im-select__trigger {
      pointer-events: none;
      background-color: var(--im-gray-color-3);
      border-color: var(--im-gray-color-5);
      color: var(--im-gray-color-6);
    }
  }

  .im-select__trigger {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    border: 1px solid var(--im-gray-color-5);
    padding: 0 11px;
    height: var(--im-select-height, 36px);
    border-radius: var(--im-radius, 4px);
    color: var(--im-gray-color-10);
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;
    gap: 4px;
    background-color: var(--im-bg-content-color);

    &:hover {
      border-color: var(--im-primary-color-8);
    }
  }

  .im-select__placeholder {
    color: var(--im-gray-color-6);
    flex: 1;
    width: 100%;
    overflow: hidden;
  }

  .im-select__tags {
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
    align-items: center;
    justify-content: flex-start;
    gap: 4px;
    height: 20px;
  }

  .im-select__more {
    min-width: max-content;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    background-color: var(--im-rgb-color-1);
    padding: 0 4px;
    height: 20px;
    border-radius: 4px;
    color: var(--im-gray-color-8);
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
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 100%;
    z-index: 1;
    background-color: transparent;
    transition: color 200ms ease;
    animation: icon-fade 200ms ease;

    &:hover {
      color: var(--im-gray-color-7);
    }
  }
}
</style>
<style lang="scss">
.im-select__list {
  background-color: var(--im-bg-content-color);
  list-style: none;
  padding: 8px 0;
  margin: 0;
  box-sizing: border-box;
  overflow: auto;
  max-height: 256px;
  border-radius: var(--im-radius, 4px);
}
</style>
