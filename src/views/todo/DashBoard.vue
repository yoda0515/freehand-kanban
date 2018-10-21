<template>
  <div class="dashboard">
    <to-do-list
      v-bind:todos="todos"
      v-on:titleClick="onClickItem"
      v-on:deleteClick="deleteToDo">
    </to-do-list>
    <v-btn fab color="primary" class="add-button" v-on:click="onClickAddButton()">
      <v-icon dark>add</v-icon>
    </v-btn>
    <modal v-if="showModal">
      <template slot="body">
        <to-do-editor
          v-bind:todo="editing"
          v-on:addToDo="addToDo"
          v-on:updateToDo="updateToDo">
        </to-do-editor>
      </template>
    </modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import firestore from '../../firebaseInit';
import { fabric } from 'fabric';
import { Todo } from '@/entities/todo';
import ToDoAdd from '@/components/todo/ToDoAdd.vue';
import ToDoList from '@/components/todo/ToDoList.vue';
import ToDoEditor from '@/components/todo/ToDoEditor.vue';
import Modal from '@/components/vendor/Modal.vue';

@Component({
  components: {
    ToDoAdd,
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
      todos: [],
      showModal: false
    };
  }

  public created(): void {
    this.loadTodoList();
  }

  public onClickAddButton(): void {
    this.editing = Todo.newInstance('');
    this.showModal = true;
  }

  public onClickItem(index: number): void {
    this.editing = this.todos[index];
    this.showModal = true;
  }

  public addToDo(title: string): void {
    const todo: Todo = this.editing;
    todo.title = title;
    firestore.collection('todos').add(JSON.parse(JSON.stringify(todo))).then(() => {
      // this.editing = null;
      this.showModal = false;
      this.loadTodoList();
    });
  }

  public updateToDo(title: string): void {
    const todo: Todo = this.editing;
    todo.title = title;
    firestore.collection('todos').doc(todo.key).update(JSON.parse(JSON.stringify(todo))).then(() => {
      // this.editing = null;
      this.showModal = false;
      this.loadTodoList();
    });
  }

  public deleteToDo(index: number): void {
    const doc: Todo = this.todos[index];
    firestore.collection('todos').doc(doc.key).delete().then(() => {
      this.loadTodoList();
    });
  }

  private loadTodoList(): void {
    this.todos = [];
    firestore.collection('todos').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        this.todos.push(Todo.ofFirebaseDoc(doc));
      });
    });
  }

}
</script>

<style lang="sass" scoped>
.dashboard
  .add-button
    position: absolute
    bottom: 1rem
    right: 0rem
    z-index: 1000
  .add-button:focus
    outline: 0
</style>
