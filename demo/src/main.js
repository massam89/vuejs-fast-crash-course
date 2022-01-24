// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Posts from './components/Posts'
import Contact from './components/Contact'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: "App",
    component: App
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router: router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
