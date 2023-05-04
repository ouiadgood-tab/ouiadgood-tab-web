import { createApp } from 'vue';
import App from './App.vue';
import '@fortawesome/fontawesome-free/css/all.css';
import router from './router';
//import GAuth from 'vue3-google-oauth2';

const app = createApp(App)

app.use(router).mount('#app');
