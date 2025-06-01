import type { App } from 'vue';

export const withInstall = (name: string, comp: any) => {
  comp.install = (app: App) => {
    app.component(name, comp);
  };
  return comp;
};
