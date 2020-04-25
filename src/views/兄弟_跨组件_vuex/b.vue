<template>
  <div class="box">
    <div>vuex的值：{{user.name }}---{{user.age}}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      user: 'userInfo'
    })
  }
}
</script>

<style>

</style>
