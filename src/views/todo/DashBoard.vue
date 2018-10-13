<template>
  <div class="dashboard">
    <h1>dashboard works</h1>
    <canvas id="title" width="500" height="100" style="border: 1px solid #000000;"></canvas>
    <button type="button" class="btn btn-primary" v-on:click="exportSvg()">export</button>
    <span>{{svg}}</span>
    <to-do-list v-bind:todos="todos"></to-do-list>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import firestore from '../../firebaseInit';
import { fabric } from 'fabric';
import ToDoList from '@/components/todo/ToDoList.vue';

@Component({
  components: {
    ToDoList
  }
})
export default class DashBoard extends Vue {

  private todos: any[];
  private canvas: any;
  private svg: string;

  public data() {
    return {
      svg: '',
      todos: [
        {
          id: 0,
          title: 'Some title',
          description: 'some description',
        },
        {
          id: 1,
          title: 'Some title',
          description: 'some description',
        },
        {
          id: 2,
          title: 'Some title',
          description: 'some description',
        },
      ]
    };
  }

  public mounted(): void {
    let tmp: string = '';
    firestore.collection('todos').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        tmp = doc.data().content;
      });
    }).then(() => {
      this.canvas = new fabric.Canvas('title', {
        isDrawingMode: true,
        selection: true,
        stateful: true
      });
      fabric.loadSVGFromString(tmp, (objects, options) => {
        const obj = fabric.util.groupSVGElements(objects, options);
        this.canvas.add(obj).renderAll();
      });
    });
  }

  public exportSvg() {
    this.svg = this.canvas.toSVG();
  }

}
</script>

<style lang="sass" scoped>

</style>
