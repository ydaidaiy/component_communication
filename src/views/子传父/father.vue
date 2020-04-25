<template>
  <div class="father">
    <div>$emit + v-on(缩写为@)</div>
    <son style="margin:20px" @change="change" ref="son"></son>
    <div>父组件获取到的子组件值：----子组件值：{{val}}</div>

    <div style="margin:20px">ref + v-on(缩写为@)----实例式伪通信 ---------不好用</div>
    <div @click="on_click">点击获取子组件值---值为：{{value}}</div>
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

<style>

</style>
