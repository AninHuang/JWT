import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Dashboard from './views/Dashboard.vue'
import RegisterUser from './views/RegisterUser.vue'
import LoginUser from './views/LoginUser.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: { requiresAuth: true } // requiresAuth 為自定義屬性
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterUser
    },
    {
      path: '/login',
      name: 'login',
      component: LoginUser
    }
  ]
})

// Navigation Guards // 路由改變前的驗證
router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user')

  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next('/') // or next({ path: '/' }) // redirect to a different location
  }
  next() // move on to the next hook in the pipeline.
})

export default router
