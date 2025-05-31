import ImDivider from './ImDivider.vue';
import type { App, DefineComponent } from 'vue';
import type { DividerProps } from './DividerProps';

ImDivider.name = 'ImDivider';
ImDivider.install = function (Vue: App) {
  Vue.component('ImDivider', ImDivider);
};
export default ImDivider as DefineComponent<DividerProps>;
export { type DividerProps, ImDivider };
