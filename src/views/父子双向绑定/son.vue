<template>
  <div class="son" @click="hidePanel">点击修改  父组件传来的值{{value}}</div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    hidePanel () {
      this.$emit('update:value', '10000元')
    }
  }
}
</script>

<style>
</style>
