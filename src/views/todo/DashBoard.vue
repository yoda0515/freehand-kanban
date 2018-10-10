<template>
  <div class="dashboard">
    <h1>dashboard works</h1>
    <template v-for="todo in todos">
      {{todo}}
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import firestore from '../../firebaseInit';

@Component
export default class DashBoard extends Vue {

  private todos: any[];

  public data() {
    return {
      todos: []
    };
  }

  public created() {
    firestore.collection('todos').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        this.todos.push(doc.data());
      });
    });
  }
}
</script>

<style lang="sass" scoped>

</style>
