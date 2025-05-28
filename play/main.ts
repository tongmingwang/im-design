import { createApp } from 'vue';
import App from './App.vue';
import Im from '../packages/components';

createApp(App).use(Im, { size: 36 }).mount('#app');
