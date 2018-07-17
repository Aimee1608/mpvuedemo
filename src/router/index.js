import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index/index.vue'
import logs from '../pages/logs/index.vue'
import counter from '../pages/counter/index.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: index,
    alias: '/pages/index/main'
  }, {
    path: '/logs',
    name: 'logs',
    component: logs,
    alias: '/pages/logs/main'
  }, {
    path: '/counter',
    name: 'counter',
    component: counter,
    alias: '/pages/counter/main'
  }]
})
