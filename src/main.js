import { createApp } from 'vue';
import App from './App.vue';
import '@fortawesome/fontawesome-free/css/all.css';
import router from './router';
import store from '@/store';
import posthogPlugin from './plugins/posthog';
import vue3GoogleLogin from 'vue3-google-login'

//  import Ads from 'vue-google-adsense'

// THE ORIGINAL CLIENTID
// 1024039220598-mh0k7q1puncjrbjtltlluf99gp4ulbv4.apps.googleusercontent.com
const app = createApp(App)
app.use( posthogPlugin);
// ad
 app.use(require('vue-script2'))
//  app.use(Ads.Adsense)
 app.use(vue3GoogleLogin, {
  clientId: '81713163843-776kmaegal7brehobfk6iq4rkisb9c8u.apps.googleusercontent.com',
})
app.use(store)
app.use(router).mount('#app');
