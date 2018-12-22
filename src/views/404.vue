<template>
  <div class="404">
    <h1>Page Not Found</h1>
    <div id="nav">
      <router-link to="/">Return to home</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
