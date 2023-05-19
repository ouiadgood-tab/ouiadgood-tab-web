import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import store from './store';
import auth0 from 'auth0-js';
import router from './router/index'

export default createStore({
  state: {
    userIsAuthorized:false,
     auth0: new auth0.WebAuth({
       domain: process.env.VUE_APP_AUTH0_CONFIG_DOMAIN,
       clientID: process.env.VUE_APP_AUTH0_CONFIG_CLIENTID,
       redirectUri: process.env.VUE_APP_DOMAINURL,
       responseType: process.env.VUE_APP_AUTH0_CONFIG_RESPONSETYPE,
       scope: process.env.VUE_APP_AUTH0_CONFIG_SCOPE
     }),
   
  },
  mutations: {
    setUserIsAuthenticated(state, replacement){
      state.userIsAuthorized = replacement;
     },
  },
  actions: {
    async login( context ) {
      console.log(auth0);
      console.log('we are in a store action for login');
      context.state.auth0.authorize()
      // const auth0Instance = new auth0.WebAuth(state.auth0);
      // commit('setAuth0', auth0Instance);
    },
    auth0HandleAuthentication (context) {
      context.state.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          let expiresAt = JSON.stringify(
            authResult.expiresIn * 1000 + new Date().getTime()
          )
          // save the tokens locally
          localStorage.setItem('access_token', authResult.accessToken);
          localStorage.setItem('id_token', authResult.idToken);
          localStorage.setItem('expires_at', expiresAt);

          router.replace('/');
        } 
        else if (err) {
          alert('login failed. try again');
          router.replace('/login');
          console.log(err);
        }
      })
    },

    // auth0Logout (context) {
    //   // No need to update the bearer in global axiosConfig to null because we are redirecting out of the application
    //   // Clear Access Token and ID Token from local storage
    //   localStorage.removeItem('access_token');
    //   localStorage.removeItem('id_token');
    //   localStorage.removeItem('expires_at');

    //   // redirect to auth0 logout to completely log the user out
    //   window.location.href = process.env.VUE_APP_AUTH0_CONFIG_DOMAINURL + "/v2/logout?returnTo=" + process.env.VUE_APP_DOMAINURL + "/login&client_id=" + process.env.VUE_APP_AUTH0_CONFIG_CLIENTID; 
    // },
  }
});

const app = createApp(App)
app.use(store)
///app.mount('#app')