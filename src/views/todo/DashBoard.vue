<template>
  <div class="dashboard">
    <h1>dashboard works</h1>
    <button type="button" class="btn btn-primary" v-on:click="exportSvg()">export</button>
    <span>{{svg}}</span>
    <to-do-list
      v-bind:todos="todos"
      v-on:titleClick="openDetail"
      v-on:deleteClick="deleteItem">
    </to-do-list>
    <modal v-if="showModal">
      <template slot="body">
        <to-do-editor v-bind:todo="editing"></to-do-editor>
      </template>
      <template slot="footer">
        <button class="btn btn-primary modal-default-button" v-on:click="closeDetail()">save</button>
      </template>
    </modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import firestore from '../../firebaseInit';
import { fabric } from 'fabric';
import ToDoList, { Todo } from '@/components/todo/ToDoList.vue';
import ToDoEditor from '@/components/todo/ToDoEditor.vue';
import Modal from '@/components/vendor/Modal.vue';

@Component({
  components: {
    ToDoList,
    ToDoEditor,
    Modal
  }
})
export default class DashBoard extends Vue {

  private todos: Todo[];
  private svg: string;
  private showModal: boolean;
  private editing: Todo;

  public data() {
    return {
      svg: '',
      todos: [],
      showModal: false
    };
  }

  public created(): void {
    firestore.collection('todos').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        this.todos.push(doc.data() as Todo);
      });
    });
  }

  public exportSvg() {
    // this.svg = this.canvas.toSVG();
  }

  public openDetail(index: number): void {
    this.editing = this.todos[index];
    this.showModal = true;
  }

  public closeDetail(): void {
    this.showModal = false;
  }

  public deleteItem(index: number): void {
    // console.log('deleteItem', index);
  }

}
</script>

<style lang="sass" scoped>

</style>
