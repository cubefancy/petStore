import Vue from 'vue'
import App from './App.vue'
import router from './router'
import entrees from './entrees.js'
import appetizers from './appetizers.js'
import desserts from './desserts.js'

let data = {
  entrees: entrees,
  appetizers: appetizers,
  desserts: desserts,
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
