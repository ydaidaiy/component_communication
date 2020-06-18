<!--
 * @Author: dull_
 * @Date: 2020-05-07 14:38:48
 * @LastEditTime: 2020-05-22 15:11:58
 * @LastEditors: dull_
 * @Description:
 * @FilePath: \component_communication\src\views\Home.vue
 * @
-->
<template>
  <div class="home">
    混入mixin 在单文件中如果有自己的属性和方法就用自己的 没有就找mixin
  </div>
</template>

<script>
// @ is an alias to /src
import mixin from '@/mixin/mixin'

export default {
  mixins: [mixin],
  name: 'Home',
  created () {
    this.get('你好哇')
  },
  methods: {
    // get () {
    //   console.log('输出--', 123)
    // }
  }
}
</script>
