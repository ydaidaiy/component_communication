import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// const bus = new Vue()
// Vue.prototype.$bus = bus
import bus from './plugins/bus'

Vue.config.productionTip = false
Vue.use(bus)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
