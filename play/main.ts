import { createApp } from 'vue';
import App from './App.vue';
import Im from '../packages/components';
// import Im from 'im-design';
// import 'im-design/dist/index.css';

createApp(App).use(Im, { size: 36 }).mount('#app');
