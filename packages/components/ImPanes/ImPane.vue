<template>
  <transition @enter="enter" @leave="leave" mode="out-in">
    <div :class="[bem.b()]" :data-name="props.name" v-if="isActive">
      <slot />
    </div>
  </transition>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import { computed } from 'vue';

const bem = useBem('pane');
defineOptions({ name: 'ImPane' });

const props = withDefaults(
  defineProps<{
    name: string | number | undefined;
    active: string | number | undefined
  }>(),
  {
    name: '',
    active: ''
  }
);
const isActive = computed(() => props.active === props.name && props.active !== '' && props.active !== undefined) ;

const enter = async (el: any, done: () => void) => {
  const { height } = el.getBoundingClientRect();
  const parentEl = el.parentElement!;
  console.log(parentEl,'parentEl');
  
  // panesRef.value!.style.maxHeight = `${height}px`;
  // panesRef.value!.style.height = `${height}px`;
  el.animate(
    [
      {
        offset: 0,
        opacity: 0,
        transform: 'translateX(var(--slide-x))',
      },
      {
        offset: 0.5,
        opacity: 0.33,
        transform: 'translateX(0)',
      },
      {
        offset: 1,
        opacity: 1,
      },
    ],
    {
      duration: 300,
      easing: 'linear',
    }
  );
  // 等待动画执行完毕
  await new Promise((resolve) => setTimeout(resolve, 300));
  // panesRef.value!.style.maxHeight = ``;
  // panesRef.value!.style.height = ``;
  done();
};

const leave = (el: any, done: () => void) => {
  el.style.transform = 'translateX(var(--slide-x))';
  done();
};
</script>

<style scoped lang="scss">
.im-pane {
  padding: var(--pane-pd,24px);
  margin: 0;
  font-size: 14px;
  min-width: 100%;
  max-width: 100%;
  height: 100%;
  overflow: auto;
  text-align: left;
  box-sizing: border-box;
  background-color: transparent;
}
</style>
