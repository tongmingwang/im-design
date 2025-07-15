<template>
  <TransitionGroup
    tag="ul"
    name="list"
    :duration="400"
    :css="true"
    :class="[bem.b()]">
    <li
      v-for="item in list"
      :key="item.id"
      :data-index="item.id"
      @mouseenter="() => onHover(item)"
      @mouseleave="() => onLeave(item)"
      class="im-message__item"
      :class="[bem.e('item'), item.color ? bem.e(item.color) : '']">
      <ImIcon :name="getIconName(item.color)" size="20" />
      <span class="im-message__text">{{ item.msg }}</span>
    </li>
  </TransitionGroup>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { type MessageItem } from './types';
import { useBem } from '@/utils/bem';
import ImIcon from '../ImIcon';

const bem = useBem('message');

/**
 * 实现逻辑：
 * 定义一个组件，支持添加每一条消息，消息添加后，会在页面上显示，并且在一定时间后自动消失。
 */
const props = defineProps<{
  callback: () => void;
  add: (fn: (item: MessageItem) => void) => void;
}>();
const list = ref<MessageItem[]>([]);

let timer: any = null;

watch(
  () => list.value,
  () => {
    // 当列表为空时，执行回调函数
    if (list.value.length === 0) {
      timer = setTimeout(() => {
        !list.value.length && props.callback();
      }, 400);
    } else {
      timer && clearTimeout(timer);
      timer = null;
    }
  }
);
const getIconName = (color: string | undefined) => {
  switch (color) {
    case 'success':
      return 'check-circle-fill';
    case 'warning':
      return 'warning-circle-fill';
    case 'error':
      return 'close-circle-fill';
    default:
      return 'info-circle-fill';
  }
};

const onHover = (item: MessageItem) => {
  if (item.timer) {
    clearTimeout(item.timer);
    item.timer = null;
  }
};

const onLeave = (item: MessageItem) => {
  item.timer && clearTimeout(item.timer);
  item.timer = setTimeout(() => {
    list.value = list.value.filter((o) => o.id !== item.id);
  }, item.duration || 3000);
};

// 暴露一个方法
const addMsg = (item: MessageItem) => {
  const timer = setTimeout(() => {
    list.value = list.value.filter((o) => o.id !== item.id);
  }, item.duration || 3000);
  list.value.push({ ...item, timer });
};
if (props.add) props.add(addMsg);
defineExpose({ addMsg });
</script>

<style scoped lang="scss">
.im-message {
  position: fixed;
  z-index: 9999;
  top: 16px;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: none;
  justify-content: center;
}

.im-message__item {
  padding: 0 16px 0 4px;
  margin-bottom: 16px;
  box-shadow: none;
  pointer-events: all;
  text-align: left;
  text-wrap: nowrap;
  overflow: hidden;
  height: 28px;
  line-height: 28px;
  border-radius: 28px;
  min-width: 120px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 14px;
  border: none;
  background-color: var(--im-gray-color-11);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.25);
  gap: 8px;

  .im-message__text {
    font-weight: 500;
    flex: 1;
    color: var(--im-gray-color-1);
    text-align: left;
  }
}

@each $color in (success, warning, error, primary) {
  .im-message__#{$color} {
    color: var(--im-#{$color}-color-8);
  }
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 400ms;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-16px) scale(0);
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.list-leave-active {
  position: absolute;
}
</style>
