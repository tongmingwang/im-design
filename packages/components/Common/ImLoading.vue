<template>
  <Transition name="fade" :appear="true">
    <div
      v-show="show"
      :class="[
        bem.b(),
        props.customClass,
        bem.is('fullscreen', props.fullscreen),
        bem.is('mask', props.mask),
      ]"
      :style="{
        '--im-loading-size': sizeVal,
      }">
      <div :class="[bem.e('icon-wrapper')]">
        <svg
          viewBox="0 0 1024 1024"
          :class="[bem.e('loading')]"
          version="1.1"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          p-id="5828">
          <path
            d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3 0.1 19.9-16 36-35.9 36z"
            p-id="5829"></path>
        </svg>
      </div>
      <div :class="[bem.e('text')]" v-if="props.loadingText">
        {{ props.loadingText }}
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';
import { getSizeValue } from '@/utils';
import { computed, ref, onMounted } from 'vue';

const bem = useBem('loading');
defineOptions({ name: 'ImLoading' });

const props = withDefaults(
  defineProps<{
    size?: string;
    loading?: boolean;
    loadingText?: string;
    mask?: boolean;
    customClass?: string;
    fullscreen?: boolean;
    zIndex?: number;
    onCallback?: (callback: (bol: boolean) => void) => void;
  }>(),
  {
    size: '32',
    loading: false,
    loadingText: '',
    mask: true,
    customClass: '',
    fullscreen: false,
    onCallback: () => {},
  }
);

const show = ref(props.loading);
const sizeVal = computed(() => getSizeValue(props.size));
const setLoading = (val: boolean) => {
  show.value = val;
};

onMounted(() => {
  props.onCallback(setLoading);
});
</script>

<style scoped lang="scss">
@keyframes loading {
  to {
    transform: rotate(360deg);
  }
}
.im-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  z-index: 9999;
  color: var(--im-primary-color-8);
  gap: 8px;

  &.is-fullscreen {
    position: fixed;
    inset: 0;
    overflow: hidden;
  }
  &.is-mask {
    background-color: var(--im-bg-loading-color);
  }

  .im-loading__loading {
    width: var(--im-loading-size, 30px);
    height: var(--im-loading-size, 30px);
    animation: loading 1s linear infinite;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
