<template>
  <div >
    <boxa class="box"></boxa>
    <boxb class="box"></boxb>
  </div>
</template>

<script>
import boxa from './a'
import boxb from './b'
export default {
  components: { boxa, boxb }

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
