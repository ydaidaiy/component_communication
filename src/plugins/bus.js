import Vue from 'vue'
const bus = new Vue()
export default {
  install (Vue) {
    Vue.prototype.$bus = (() => bus)()
  }
}
