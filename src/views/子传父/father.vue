<template>
  <div class="father">
    <div>方法一$emit + v-on(缩写为@)</div>
    <son @change="change" ref="son" class="box"></son>
    <div>父组件获取到的子组件值：----子组件值：{{val}}</div>

    <div style="margin:20px">方法二ref + v-on(缩写为@)----实例式伪通信 ---------不好用</div>
    <div class="box" @click="on_click">这是父组件点击获取子组件值---值为：{{value}}</div>
  </div>
</template>

<script>
import son from './son.vue'
export default {
  components: { son },
  data () {
    return {
      val: '',
      value: ''
    }
  },
  methods: {
    change (val) {
      this.val = val
      console.log('打印---  ', val)
    },
    on_click () {
      this.value = this.$refs.son.moner
      this.$refs.son.on_aleat()
    }
  }
}
</script>

<style scoped>
.box {
  width: 200px;
  height: 200px;
  background-color: #f49;
  margin: 20px auto;
}
</style>
