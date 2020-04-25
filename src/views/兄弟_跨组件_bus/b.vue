<template>
  <div class="box">
    <div>这是组件B</div>
    <div>A组件的值：{{value}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  },
  mounted () {
    this.$bus.$on('change_a', this.change)
  },
  methods: {
    change (res) {
      console.log('打印---  ', res)
      this.value = res
      console.log('打印--- this.value ', this.value)
    }
  }
}
</script>

<style>

</style>
