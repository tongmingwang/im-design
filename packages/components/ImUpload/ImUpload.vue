<template>
  <div
    :class="[
      bem.b(),
      bem.is('disabled', props.disabled),
      bem.is('readonly', props.readonly),
    ]"
    :style="{ '--im-upload-size': sizeVal }">
    <label :class="[bem.e('label')]">
      <input
        type="file"
        ref="inputRef"
        :class="bem.e('input')"
        :accept="props.accept"
        :multiple="props.multiple"
        :disabled="props.disabled"
        :name="props.name"
        :required="props.required"
        @change="onChange"
        :readonly="props.readonly" />
      <slot name="icon"><ImIcon name="plus" :class="[bem.e('icon')]" /></slot>
    </label>
    <slot :fileList="fileList" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useBem } from '@/utils/bem';
import { getSizeValue } from '@/utils';
import ImIcon from '../ImIcon/ImIcon.vue';

const inputRef = ref<HTMLInputElement>();
const bem = useBem('file-upload');
const fileList = ref<File[]>([]);
defineOptions({ name: 'ImUpload' });
const props = withDefaults(
  defineProps<{
    accept?: string;
    multiple?: boolean;
    disabled?: boolean;
    required?: boolean;
    name?: string;
    readonly?: boolean;
    size?: number | string;
    fileList?: File[];
  }>(),
  {
    accept: '',
    multiple: false,
    disabled: false,
    required: false,
    name: '',
    readonly: false,
    size: '80px',
    fileList: () => [],
  }
);

const emit = defineEmits<{ (e: 'change', files: File[]): void }>();
// 暴露方法给父组件调用
defineExpose({
  $el: inputRef,
  focus: () => {
    inputRef.value?.focus();
  },
  blur: () => {
    inputRef.value?.blur();
  },
  click: () => {
    inputRef.value?.click();
  },
});
const sizeVal = computed(() => {
  return getSizeValue(props.size);
});

watch(
  () => props.fileList,
  () => {
    fileList.value = props.fileList;
  }
);
const onChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const files = Array.from(target.files || []);
  fileList.value = files;
  emit('change', files);
};
</script>

<style scoped lang="scss">
.im-file-upload {
  display: inline-flex;
  width: fit-content;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  cursor: pointer;

  &__label {
    min-width: var(--im-upload-size);
    min-height: var(--im-upload-size);
    border-radius: var(--im-radius, 4px);
    cursor: inherit;
    border: 1px dashed var(--im-gray-color-4);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    background-color: var(--im-bg-content-color);
    transition: all 0.3s ease;

    &:hover {
      border-color: var(--im-primary-color-8);
      color: var(--im-primary-color-8);
    }
  }

  &__icon {
    font-size: 18px;
  }

  &__input {
    display: none;
    width: 0;
    height: 0;
    opacity: 0;
    overflow: hidden;
    outline: none;
    border: none;
    pointer-events: inherit;
    cursor: inherit;
  }

  // 状态
  &.is-disabled {
    cursor: not-allowed;
    color: var(--im-gray-color-4);
    .im-file-upload__label {
      pointer-events: none;
    }
  }
  &.is-readonly {
    cursor: default;
    pointer-events: none;
  }
}
</style>
