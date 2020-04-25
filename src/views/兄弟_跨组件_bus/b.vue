<template>
  <div class="box">
    <div>这是组件B</div>
    <div>A组件的值：{{value}}</div>
    <!-- <div>vuex的值：{{user.name }}{{user.age}}</div> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      value: ''
    }
  },
  computed: {
    ...mapState({
      user: 'userInfo'
    })
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
