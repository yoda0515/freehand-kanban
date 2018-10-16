<template>
  <div class="todo-add">
    <canvas id="canvas-add" width="500" height="100" style="border: 1px solid #000000;"></canvas>
    <button class="btn btn-primary pull-right" v-on:click="add()">add</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import { fabric } from 'fabric';
import { Todo } from '@/entities/todo';

@Component({})
export default class ToDoAdd extends Vue {

  private canvas: any;

  public mounted(): void {
    this.canvas = new fabric.Canvas('canvas-add', {
      isDrawingMode: true,
      selection: true,
      stateful: true
    });
  }

  @Emit('addToDo')
  public add(): string {
    const svg: string = this.canvas.toSVG();
    this.reset();
    return svg;
  }

  private reset(): void {
    this.canvas.clear().renderAll();
  }
}
</script>

<style lang="sass" scoped>
</style>