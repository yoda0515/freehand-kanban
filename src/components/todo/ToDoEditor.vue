<template>
  <div class="todo-editor">
    <canvas id="canvas-title" width="500" height="100" style="border: 1px solid #000000;"></canvas>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { fabric } from 'fabric';
import { Todo } from '@/entities/todo';

@Component({})
export default class ToDoEditor extends Vue {

  @Prop()
  private todo: Todo;
  private titleCanvas: any;

  public mounted(): void {
    this.titleCanvas = new fabric.Canvas('canvas-title', {
      isDrawingMode: true,
      selection: true,
      stateful: true
    });
    fabric.loadSVGFromString(this.todo.title, (objects, options) => {
      const obj = fabric.util.groupSVGElements(objects, options);
      this.titleCanvas.add(obj).renderAll();
    });
  }
}
</script>

<style lang="sass" scoped>
</style>