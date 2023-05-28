import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/login/loginView.vue'
//import { useAuth0 } from '@auth0/auth0-vue'
import Store from '@/store'
import StatsView from '@/views/settings/StatsView.vue'
import DonateView from '@/views/settings/DonateView.vue'
import InviteView from '@/views/settings/InviteView.vue'
import AccountView from '@/views/settings/AccountView.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true },

    
  },
    {
      path: '/setting/Stats',
      name: 'Stats',
      component: StatsView,
      meta: { requiresAuth: true },
    },

    {
      path: '/setting/Donate',
      name: 'Donate',
      component: DonateView,
      meta: { requiresAuth: true },
    },

    {
      path: '/setting/Account',
      name: 'Account',
      component: AccountView,
      meta: { requiresAuth: true },
    },

    {
      path: '/setting/Invite',
      name: 'Invite',
      component: InviteView,
      meta: { requiresAuth: true },
    },

  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: LoginView,
    props: {
      store: Store // Pass the Vuex store instance as a prop
    }
  },

  // redirect
  {
    path: '/home',
    redirect: '/'
  },

  // catch-all route for undefined routes
  {
    path: '/:pathMatch(.*)*',
    redirect: '/home'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


const isAuthenticated = () =>{
  const storedEmail = localStorage.getItem('email');
  const storedPassword = localStorage.getItem('password');
  
  // Check if both email and password are present in local storage
  return storedEmail && storedPassword;
}

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    return new Promise((resolve) => {
      resolve(
        next({
          path: '/login',
          query: { redirect: to.fullPath },
        })
      );
    });
  } else {
    next();
  }
});


export default router