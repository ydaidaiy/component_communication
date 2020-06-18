import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as moment from 'moment'
import bus from './plugins/bus'

// const bus = new Vue()
// Vue.prototype.$bus = bus
Vue.prototype.$moment = moment

Vue.config.productionTip = false
Vue.use(bus)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
