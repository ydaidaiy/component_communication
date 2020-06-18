<!--
 * @Author: dull_
 * @Date: 2020-05-07 14:38:48
 * @LastEditTime: 2020-05-22 15:08:21
 * @LastEditors: dull_
 * @Description:
 * @FilePath: \component_communication\src\views\父传子\father.vue
 * @
-->
<template>
  <div class="father">
    <div>props + v-bind</div>
    <div>父组件值：1</div>
    <son :sonValue="value" class="box"></son>
  </div>
</template>

<script>
import son from './son.vue'
export default {
  components: { son },
  data () {
    return {
      value: '父组件值：1'
    }
  }
}
</script>

<style scoped>

</style>
