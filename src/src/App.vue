<template>
  <div id="app">
    <nav class="router-nav">
        <router-link to='/'>Main</router-link>
        <br />
        <router-link to='/genarate'>Generate</router-link>
        
    </nav>
    <router-view />
  </div>
</template>

<script>
import Main from './components/Main.vue'

export default {
  name: 'app',
  components: {
    Main
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.router-nav {
  margin-left: 20%;
  margin-right: auto;
  text-align: left;
}

</style>
