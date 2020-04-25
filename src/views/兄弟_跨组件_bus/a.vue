<template>
  <div class="box">
    <div @click="change" class="box">这是组件A-----点击发数据</div>
    <!-- <div @click="change_x" class="box">这是组件A-----点击跟新vuex数据</div> -->
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations(['UPDATE_USER']),
    change () {
      this.$bus.$emit('change_a', 'hello-我是A')
    },
    change_x () {
      this.UPDATE_USER({ id: 1, name: '小米', age: 25 })
    }
  }
}
</script>

<style>
.box {
  width: 200px;
  height: 200px;
  background-color: #f49;
  margin: 20px auto;
}
</style>
