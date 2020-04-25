<template>
  <div id="app">
    <div id="nav">
      <router-link to="/father1">父传子</router-link>
      <router-link to="/father2">子传父</router-link>
      <router-link to="/father3">父子双向绑定</router-link>
      <router-link to="/father4">兄弟组件 bus</router-link>
      <router-link to="/father5">兄弟组件 vuex</router-link>
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
  flex-direction:column;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
