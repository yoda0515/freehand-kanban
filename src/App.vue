<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline">
        <span>freehand-todo</span>
      </v-toolbar-title>
      <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/signin">Sign In</router-link> |
      <router-link to="/dashboard">Dashboard</router-link>
    </div>
    </v-toolbar>
    <v-content>
      <router-view class="route"></router-view>
    </v-content>
  </v-app>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class App extends Vue {}
</script>

<style lang="sass">
@import './assets/sass/style.sass'


.route
  padding: 15px
</style>