<template>
  <v-app>
    <v-toolbar app class="primary white--text">
      <v-toolbar-title class="headline">
        <span>freehand-todo</span>
      </v-toolbar-title>
      <v-toolbar-items>
        <v-btn flat><router-link to="/" class="white--text">Sign In</router-link></v-btn>
        <v-btn flat><router-link to="/dashboard" class="white--text">Dashboard</router-link></v-btn>
      </v-toolbar-items>
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