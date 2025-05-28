import { type App } from 'vue';
import ImRow from './ImRow.vue';
import ImCol from './ImCol.vue';

ImRow.install = (app: App) => {
  app.component('ImRow', ImRow);
};
ImCol.install = (app: App) => {
  app.component('ImCol', ImCol);
};
export { ImRow, ImCol };
