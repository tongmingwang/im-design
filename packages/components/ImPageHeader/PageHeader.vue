<template>
  <div :class="[bem.b()]">
    <div :class="[bem.e('left')]">
      <slot name="back">
        <ImButton shape="circle" size="36" variant="text" @click="onBack">
          <ImIcon name="arrowleft" size="18" />
        </ImButton>
      </slot>
      <ImDivider
        vertical
        margin="16px"
        v-if="
          $slots.subTitle ||
          props.subTitle ||
          props.title ||
          $slots.title ||
          $slots.content
        "
        style="font-size: 18px"
        color="var(--im-gray-color-5)" />
      <div :class="[bem.e('title')]">
        <slot name="title">
          {{ props.title }}
        </slot>
      </div>

      <div :class="[bem.e('sub-title')]">
        <slot name="subTitle">
          {{ props.subTitle }}
        </slot>
      </div>
      <slot name="content" />
    </div>
    <div :class="[bem.e('right')]">
      <slot name="action" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import ImButton from '../ImButton';
import ImIcon from '../ImIcon';
import ImDivider from '../ImDivider';

const bem = useBem('page-header');
const emit = defineEmits<{ (e: 'back'): void }>();
defineOptions({
  name: 'ImPageHeader',
});
const props = withDefaults(
  defineProps<{
    title?: string;
    subTitle?: string;
  }>(),
  {}
);

function onBack() {
  emit('back');
}
</script>

<style scoped lang="scss">
.im-page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  color: var(--im-gray-color-8);

  &__left {
    display: flex;
    align-items: center;
  }
  &__title {
    margin-right: 12px;
    font-size: 20px;
    font-weight: 500;
    color: var(--im-gray-color-10);
  }
  &__sub-title {
    margin-right: 12px;
  }

  &__right {
    display: flex;
    align-items: center;
    gap: 8px;
  }
}
</style>
