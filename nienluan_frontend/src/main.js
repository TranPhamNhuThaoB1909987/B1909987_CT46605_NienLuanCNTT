import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './assets/main.css'

import { createPinia } from 'pinia';
const pinia = createPinia();

createApp(App).use(router).use(pinia).mount('#app')
