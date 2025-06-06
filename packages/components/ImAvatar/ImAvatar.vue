<template>
  <span :class="[bem.b(), props.shape ? bem.m(props.shape) : '']" :style="{
    '--im-avatar-size': (Number(props.size) || 36) + 'px',
    '--im-avatar-color': props.color || 'var(--im-rgb-color-2)',
    '--im-avatar-fit': props.fit
  }">
    <div v-if="!props.src && !props.srcset" :class="[bem.e('icon')]">
      <slot />
    </div>
    <img v-else @error="onError" :src="props.src" :srcset="props.srcset" :alt="props.alt" :loading="props.loading"
      :class="[bem.e('img')]" />
  </span>
</template>

<script setup lang="ts">
import { useBem } from '@/utils/bem';

defineOptions({ name: 'ImAvatar' });
const emit = defineEmits<{ (e: 'error', event: Event): void }>();
const bem = useBem('avatar');
const props = withDefaults(
  defineProps<{
    size?: number | string;
    src?: string;
    alt?: string;
    title?: string;
    crossOrigin?: string;
    fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
    srcset?: string;
    loading?: 'eager' | 'lazy';
    shape?: 'circle' | 'square';
    color?: string;
  }>(),
  {
    size: 36,
    src: '',
    alt: '',
    title: '',
    crossOrigin: 'anonymous',
    loading: 'eager',
    shape: 'circle',
    srcset: '',
    fit: 'cover',
    color: ''
  }
);

const onError = (e: Event) => {
  console.log(e.target as HTMLImageElement);
  emit('error', e);
}

</script>

<style scoped lang="scss">
  .im-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: var(--im-avatar-size);
    height: var(--im-avatar-size);
    background-color: transparent;
    border-radius: 50%;
    vertical-align: middle;
    font-size: 14px;
    color: var(--im-gary-color-8);
    white-space: nowrap;
    text-align: center;
    letter-spacing: 0.0258em;


    &.im-avatar--circle {
      border-radius: 50%;
    }

    &.im-avatar--square {
      border-radius: var(--im-radius, 4px);
    }

    .im-avatar__icon {
      background-color: var(--im-avatar-color, var(--im-rgb-color-2));
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .im-avatar__img {
      width: 100%;
      height: 100%;
      object-fit: var(--im-avatar-fit, cover);
      background-color: transparent;
    }
  }
</style>
