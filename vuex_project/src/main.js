import { createApp } from 'vue';

import router from './router.js';
import App from './App.vue';
import store from "./store/index.js";
import BaseBadge from './components/ui/BaseBadge.vue';

const app = createApp(App);
app.use(store);

app.use(router);

app.component('base-badge', BaseBadge);

app.mount('#app');
