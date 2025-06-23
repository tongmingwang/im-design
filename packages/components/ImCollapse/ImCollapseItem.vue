<template>
  <div :class="[bem.b()]">
    <div :class="[bem.e('title')]" @click="onClickTitle">
      <!-- 插槽头部 -->
      <slot name="header">
        <span>{{ props.title }}</span>
        <span :class="[bem.e('right-icon'), bem.is('open', show)]">
          <ImIcon name="down" />
        </span>
      </slot>
    </div>
    <Transition
      :css="false"
      mode="out-in"
      :duration="{ enter: 300, leave: 300 }"
      @enter="onEnter"
      @leave="onLeave">
      <div v-show="show" :class="[bem.e('content')]">
        <div :class="[bem.e('desc')]">
          <slot>{{ props.desc }}</slot>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useBem } from '@/utils/bem';

const bem = useBem('collapse-item');
defineOptions({ name: 'ImCollapseItem' });
const emit = defineEmits<{
  (e: 'change', value: string): void;
}>();
const props = withDefaults(
  defineProps<{
    title?: string;
    desc?: string;
    name?: string;
    activeName?: string;
  }>(),
  {
    title: '',
    desc: '',
    string: '',
    activeName: '',
  }
);

const show = ref(
  (props.activeName && props.activeName === props.name) || false
);

watch(
  () => props.activeName,
  () => {
    console.log(props.activeName, props.name);

    show.value = !!(props.activeName && props.activeName === props.name);
  }
);
function onClickTitle() {
  show.value = !show.value;
  props.name && emit('change', show.value ? props.name : '');
}
async function onEnter(el: any, done: () => void) {
  el.style.height = 'auto';
  const rect = el.getBoundingClientRect();
  el.style.height = '0px';
  el.style.transition = 'all 0.3s ease';
  await new Promise((resolve) => requestAnimationFrame(resolve));
  el.style.height = `${rect.height}px`;
  done();
}

async function onLeave(el: any, done: () => void) {
  el.style.transition = 'all 0.3s ease';
  el.style.height = '0px';
  await new Promise((resolve) => requestAnimationFrame(resolve));
  const handle = () => {
    el.removeEventListener('transitionend', handle, { passive: true });
    done();
  };
  // 添加过渡结束事件监听
  el.addEventListener('transitionend', handle, { passive: true });
}
</script>

<style scoped lang="scss">
.im-collapse-item {
  padding: 8px 16px 8px 24px;
  padding-left: 20px;
  background-color: var(--im-bg-content-color);
  border-top: 1px solid var(--im-gray-color-5);
  &:last-child {
    border-bottom: 1px solid var(--im-gray-color-5);
  }
  &__title {
    font-size: 16px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    color: var(--im-gray-color-10);
  }

  &__content {
    overflow: hidden;
    padding: 0 !important;
    margin: 0 !important;
  }

  &__desc {
    font-size: 14px;
    line-height: 24px;
  }
  .im-collapse-item__right-icon {
    transform: rotate(0deg);
    transition: all 0.3s ease;
    color: var(--im-gray-color-6);
    &.is-open {
      transform: rotate(180deg);
    }
  }
}
</style>
