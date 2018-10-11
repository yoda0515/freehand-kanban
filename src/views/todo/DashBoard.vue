<template>
  <div class="dashboard">
    <h1>dashboard works</h1>
    <canvas id="title" width="500" height="100" style="border: 1px solid #000000;"></canvas>
    <button type="button" class="btn btn-primary" v-on:click="exportSvg()">export</button>
    <span>{{svg}}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import firestore from '../../firebaseInit';
import { fabric } from 'fabric';

@Component
export default class DashBoard extends Vue {

  private todos: any[];
  private canvas: any;
  private svg: string;

  public data() {
    return {
      todos: [],
      svg: ''
    };
  }

  public mounted(): void {
    firestore.collection('todos').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        this.todos.push(doc.data());
      });
    }).then(() => {
      this.canvas = new fabric.Canvas('title', {
        isDrawingMode: true,
        selection: true,
        stateful: true
      });
      fabric.loadSVGFromString(this.todos[0].content, (objects, options) => {
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
