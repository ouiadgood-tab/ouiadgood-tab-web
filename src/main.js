import { createApp } from 'vue';
import App from './App.vue';
import '@fortawesome/fontawesome-free/css/all.css';
import router from './router';
import store from '@/store';
 import { createAuth0 } from '@auth0/auth0-vue';
//import GAuth from 'vue3-google-oauth2';
//import './assets/main.css';

const app = createApp(App)
app.use(
    createAuth0({
       domain: "dev-8fb7e5kg24azc51x.us.auth0.com",
       clientId: "geHen3fHpDG8MiXAKq4V7szvY0dqaKqx",
        authorizationParams: {
          redirect_uri: 'http://localhost:8080/home',
          scope: 'openid profile email',
          audience: "https://famesfx.com/users",
       }
     })
  );
app.use(store)
app.use(router).mount('#app');
