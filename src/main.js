import { createApp } from 'vue';
import App from './App.vue';
import '@fortawesome/fontawesome-free/css/all.css';
import router from './router';
import store from '@/store';
import posthogPlugin from './plugins/posthog';
 import { createAuth0 } from '@auth0/auth0-vue';
 import Ads from 'vue-google-adsense'

const app = createApp(App)
app.use( posthogPlugin);
// ad
 app.use(require('vue-script2'))
 app.use(Ads.Adsense)

//  G OAuth
app.use(
    createAuth0({
       domain: "dev-zbh16ocf4zo8gfwb.us.auth0.com",
       clientId: "caN8kvAIUSbuqmiDDAEhrHCGAkh3mMcH",
        authorizationParams: {
          redirect_uri: 'http://localhost:8080/',
          scope: 'openid profile email',
          // audience: "https://ouiadgood.onrender.com",
       }
     })
  );
app.use(store)
app.use(router).mount('#app');
