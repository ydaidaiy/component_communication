<template>
  <div class="son">
    <div @click="on_click" style="color:#f99">我是子组件--点击传给father数据</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '500元',
      moner: '1000元'
    }
  },
  methods: {
    on_click () {
      this.$emit('change', this.name)
    },
    on_aleat () {
      alert('我是子组件的方法')
    }
  }
}
</script>

<style>
</style>
