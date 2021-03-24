import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
      meta: {
        authRequired: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
      meta: {
        authRequired: false
      }
    },
    {
      path: '/error-404',
      name: 'error',
      component: () => import('./views/Error.vue')
    },
    {
      path: '*',
      redirect: '/error-404'
    }
  ]
})

router.beforeEach((to, _, next) => {
  if (to.meta.authRequired === true) {
    // NOTE run the logic for checking auth
    if (store.state.auth.status) next()
    else router.push({ name: 'login', query: { to: to.path } })
  } else if (to.meta.authRequired === false) {
    // NOTE for check on pages like login
    if (store.state.auth.status) router.push(router.currentRoute.query.to || '/')
    return next()
  } else {
    return next()
  }
})

export default router
