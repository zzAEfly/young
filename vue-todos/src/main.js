import Vue from 'vue'

import App from './App.vue'
import './assets/todos.less'

import router from './config/routes.js'


new Vue({
  el: '#app',
  //将路由实例添加到Vue实例中
  router,
  render: h => h(App)
})
