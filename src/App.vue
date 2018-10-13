<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <router-link to="/" class="navbar-brand mb-0 h1 text-light">freehand-todo</router-link>
    </nav>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/signin">Sign In</router-link> |
      <router-link to="/dashboard">Dashboard</router-link>
    </div>
    <router-view class="route"></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const vueSwipeActions = require('vue-swipe-actions');
const SwipeList = vueSwipeActions.SwipeList;
const SwipeOut = vueSwipeActions.SwipeOut;

@Component({
  components: {
    SwipeOut,
    SwipeList
  }
})
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
  padding: 15px

#nav a
  font-weight: bold
  color: #2c3e50

#nav a.router-link-exact-active
  color: #42b983

.route
  padding: 15px
</style>
