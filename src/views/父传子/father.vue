<template>
  <div class="father">
    <div>props + v-bind</div>
    <son :sonValue="value"></son>
  </div>
</template>

<script>
import son from './son.vue'
export default {
  components: { son },
  data () {
    return {
      value: '父组件值：1000'
    }
  }
}
</script>

<style>
</style>
