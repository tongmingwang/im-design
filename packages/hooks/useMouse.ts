import { throttle } from '@/utils';
import { ref, onMounted, onUnmounted } from 'vue';

export const useMouse = (delay: number = 50) => {
  const x = ref(0);
  const y = ref(0);

  const handle = throttle((e: MouseEvent) => {
    x.value = e.clientX;
    y.value = e.clientY;
  }, delay);

  onMounted(() => {
    window.addEventListener('mousemove', handle, { passive: true });
  });

  onUnmounted(() => {
    window.removeEventListener('mousemove', handle);
  });

  return { x, y };
};
