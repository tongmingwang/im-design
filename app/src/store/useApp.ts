import { defineStore } from 'pinia';
const themeKey = '__IM_DESIGN_APP_THEME_KEY__';
const THEME_TYPES = ['dark', 'light', 'system'] as const;
const getSystem = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

const setThemeToHtml = () => {
  const theme = localStorage.getItem(themeKey) || getSystem();

  document.documentElement.setAttribute('data-theme', theme);
};

setThemeToHtml();

export const useAppStore = defineStore('app', {
  state: () => ({
    isMobile: false,
    theme: localStorage.getItem(themeKey) || getSystem(),
  }),
  getters: {},
  actions: {
    setTheme(val: 'dark' | 'light' | 'system') {
      if (!THEME_TYPES.includes(val)) return;
      this.theme = val === 'system' ? getSystem() : val;
      localStorage.setItem(themeKey, this.theme);
      setThemeToHtml();
    },
  },
});
