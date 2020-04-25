<template>
  <div class="father">
    <div>父组件----{{value}}</div>
    <div @click="change">修改</div>
    <son :value.sync="value"  style="margin:20px"></son>
  </div>
</template>

<script>
import son from './son.vue'
export default {
  components: { son },
  data () {
    return {
      value: '500元'
    }
  },
  methods: {
    change () {
      this.value = '100000000元'
    }

  }
}
</script>

<style>

</style>
