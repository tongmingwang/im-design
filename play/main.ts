import { createApp } from 'vue';
import App from './App.vue';
import Im, { ImDirective } from '../packages/components';
// import Im, { ImDirective } from 'im-design';
// import 'im-design/dist/index.css';

createApp(App).use(ImDirective).use(Im, { size: 36 }).mount('#app');
