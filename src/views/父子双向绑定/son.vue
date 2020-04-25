<template>
  <div>
    <div class="son" @click="hidePanel" style="color:red">子组件修改值</div>
    <div>父组件传来的值{{value}}</div>
  </div>
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
