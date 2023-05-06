import { createApp } from 'vue';
import App from './App.vue';
import '@fortawesome/fontawesome-free/css/all.css';
import router from './router';
import store from './store';
//import GAuth from 'vue3-google-oauth2';
import './assets/main.css';

const app = createApp(App)
app.use(store)
app.use(router).mount('#app');
