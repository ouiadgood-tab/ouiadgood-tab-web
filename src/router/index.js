import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/login/loginView.vue'
//import { useAuth0 } from '@auth0/auth0-vue'
import Store from '@/store'
import StatsView from '@/views/settings/StatsView.vue'
import DonateView from '@/views/settings/DonateView.vue'
import InviteView from '@/views/settings/InviteView.vue'
import AccountView from '@/views/settings/AccountView.vue'
import WidgetView from  '@/views/settings/WidgetView.vue'
import BackgroundImageView from '@/views/settings/BackgroundImageView.vue'
import AdminView from '@/views/settings/Admin.vue'
import VideoViewVue from '@/views/VideoView.vue'


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
      path: '/setting/Background',
      name: 'Background',
      component: BackgroundImageView,
      meta: { requiresAuth: true },
    },

    {
      path: '/setting/Widget',
      name: 'Widget',
      component: WidgetView,
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
      path: '/new',
      name: 'New',
      component: VideoViewVue,
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
    redirect: '/',
    meta: { requiresAuth: true },
  },

  // catch-all route for undefined routes
  {
    path: '/:pathMatch(.*)*',
    redirect: '/home'
  },
  {
    path: '/setting/Admin',
    name: 'Admin',
    component: AdminView,
    meta: { requiresAuth: true, requiresAdmin:true },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


const isAuthenticated = () =>{
  const storedLogin = localStorage.getItem('loginRequest');
  
  // Check if both email and password are present in local storage
  return JSON.parse(storedLogin || '{}');
}

router.beforeEach((to, from, next) => {
  const isLoggedIn = isAuthenticated().email
  const isAdmin = isAuthenticated().admin

  if (to.meta.requiresAuth && !isLoggedIn) {
    // Redirect to the login page if authentication is required but user is not logged in
    next('/login')
  }else if (to.meta.requiresAdmin && (!isLoggedIn || !isAdmin)) {
    // Redirect to the home page if admin access is required but user is not logged in or is not an admin
    next('/login')
  } else {
    // Proceed with the navigation
    next()
  }
});


export default router