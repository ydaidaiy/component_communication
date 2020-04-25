<template>
  <div class="box">
    <div @click="change" class="box">这是组件A-----点击发数据</div>
  </div>
</template>

<script>

export default {
  methods: {
    change () {
      this.$bus.$emit('change_a', 'hello-我是A')
    }
  }
}
</script>

<style>
</style>
