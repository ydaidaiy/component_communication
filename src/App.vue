<!--
 * @Author: dull_
 * @Date: 2020-05-07 14:38:48
 * @LastEditTime: 2020-05-22 15:06:05
 * @LastEditors: dull_
 * @Description:
 * @FilePath: \component_communication\src\App.vue
 * @
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/father1">父传子</router-link>
      <router-link to="/father2">子传父</router-link>
      <router-link to="/father3">父子双向绑定</router-link>
      <router-link to="/father4">兄弟组件 bus</router-link>
      <router-link to="/father5">兄弟组件 vuex</router-link>
      <router-link to="/">mixin</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  display: flex;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin-left: 30px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
