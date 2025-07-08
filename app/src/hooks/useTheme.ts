import { ref, onMounted } from 'vue';
const themeKey = '__IM_DESIGN_APP_THEME_KEY__';
const THEME_TYPES = ['dark', 'light', 'system'] as const;
export const useTheme = () => {
  const theme = ref(localStorage.getItem(themeKey) || '');

  onMounted(() => {
    if (!theme.value) {
      updateSystemTheme();
    } else {
      document.documentElement.setAttribute('data-theme', theme.value);
    }

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', updateSystemTheme);
  });
  const updateSystemTheme = () => {
    theme.value = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
    document.documentElement.setAttribute('data-theme', theme.value);
    localStorage.setItem(themeKey, theme.value);
  };

  const setTheme = (val: 'dark' | 'light' | 'system') => {
    if (!THEME_TYPES.includes(val)) return;

    if (val === 'system') {
      updateSystemTheme();
    } else {
      theme.value = val;
      document.documentElement.setAttribute('data-theme', theme.value);
      localStorage.setItem(themeKey, theme.value);
    }
  };

  return {
    theme,
    setTheme,
  };
};
