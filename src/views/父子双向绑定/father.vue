<template>
  <div class="father">
    <div>父组件----{{value}}</div>
    <div @click="change">父组件修改值</div>
    <son :value.sync="value" class="box" ></son>
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
.box {
  width: 200px;
  height: 200px;
  margin: 20px auto;
  background-color: #f99;
}
</style>
