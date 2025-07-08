import { onBeforeMount } from 'vue';

export const useOverlay = () => {
  onBeforeMount(() => {
    const overlay = document.getElementById('im-overlay-container');

    if (!overlay) {
      const newOverlay = document.createElement('div');
      newOverlay.id = 'im-overlay-container';
      document.documentElement.appendChild(newOverlay);
    }
  });
};
