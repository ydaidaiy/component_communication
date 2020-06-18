/*
 * @Author: dull_
 * @Date: 2020-05-22 14:53:15
 * @LastEditTime: 2020-05-22 15:12:49
 * @LastEditors: dull_
 * @Description:
 * @FilePath: \component_communication\src\mixin\mixin.js
 * @
 */
export default {
  data () {
    return {
      name: 'mixin'
    }
  },
  created () {
  },
  methods: {
    get (str) {
      console.log('mixin...', str)
    }
  }
}
