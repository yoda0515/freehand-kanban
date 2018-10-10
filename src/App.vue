<template>
  <div id="app">
    <b-navbar type="dark" variant="primary">
      <b-navbar-brand href="#" tag="h1">freehand-todo</b-navbar-brand>
    </b-navbar>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/signin">Sign In</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);

@Component({})
export default class App extends Vue {}
</script>

<style lang="sass">
@import './assets/sass/style.sass'
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #42b883

#nav
  padding: 30px

#nav a
  font-weight: bold
  color: #2c3e50

#nav a.router-link-exact-active
  color: #42b983
</style>
