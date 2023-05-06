import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

const store = createStore({
  state: {
    userIsAuthorized: true
  },
  mutations: {

  },
  actions: {

  }
})

const app = createApp(App)
app.use(store)
app.mount('#app')
