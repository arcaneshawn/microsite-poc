import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _74bd12be = () => interopDefault(import('./prismic/pages/preview.vue' /* webpackChunkName: "" */))
const _0f2f90b2 = () => interopDefault(import('../pages/_uid.vue' /* webpackChunkName: "pages/_uid" */))
const _7e5802fe = () => interopDefault(import('../pages/_parentpage/_uid.vue' /* webpackChunkName: "pages/_parentpage/_uid" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/preview",
    component: _74bd12be,
    name: "prismic-preview"
  }, {
    path: "/:uid?",
    component: _0f2f90b2,
    name: "uid"
  }, {
    path: "/:parentpage?/:uid?",
    component: _7e5802fe,
    name: "parentpage-uid"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
