<template>
  <div class="father">
    <div>props + v-bind</div>
    <div class="box">父组件值：1000</div>
    <son :sonValue="value" class="box"></son>
  </div>
</template>

<script>
import son from './son.vue'
export default {
  components: { son },
  data () {
    return {
      value: '父组件值：1'
    }
  }
}
</script>

<style scoped>
.box {
  width: 200px;
  height: 200px;
  background-color: #f49;
  margin: 20px auto;
}
</style>
