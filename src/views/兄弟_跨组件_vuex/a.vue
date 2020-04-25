<template>
  <div class="box">
    <div @click="change_x" class="box">这是组件A-----点击跟新vuex数据</div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations(['UPDATE_USER']),
    change_x () {
      this.UPDATE_USER({ id: 1, name: '小米', age: 25 })
    }
  }
}
</script>

<style>

</style>
