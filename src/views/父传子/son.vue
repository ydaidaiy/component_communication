<template>
  <div class="son">我是子组件--子组件获取到的父组件值：----{{sonValue}}</div>
</template>

<script>
export default {
  props: {
    sonValue: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
</style>
