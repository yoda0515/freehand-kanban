<template>
  <div class="todo-editor">
    <v-card class="white">
      <canvas id="canvas-title" width="500" height="100"></canvas>
    </v-card>
    <v-btn
      v-on:click="onSave()"
      block
      class="primary">
      save
    </v-btn>
    <v-btn
      v-on:click="onCancel()"
      block
      class="secondary">
      cancel
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';
import { fabric } from 'fabric';
import { Todo } from '@/entities/todo';

@Component({})
export default class ToDoEditor extends Vue {

  @Prop()
  private todo: Todo;
  private mode: EditMode;
  private titleCanvas: any;

  public mounted(): void {
    this.titleCanvas = new fabric.Canvas('canvas-title', {
      isDrawingMode: true,
      selection: true,
      stateful: true
    });
    // TODO implement cloneDeep and reset feature
    if (!!this.todo.title) {
      this.mode = EditMode.UPDATE;
      fabric.loadSVGFromString(this.todo.title, (objects, options) => {
        const obj = fabric.util.groupSVGElements(objects, options);
        this.titleCanvas.add(obj).renderAll();
      });
    } else {
      this.mode = EditMode.CREATE;
    }
  }

  public onSave(): void {
    if (this.mode === EditMode.CREATE) {
      this.add();
    } else if (this.mode === EditMode.UPDATE) {
      this.update();
    }
  }

  @Emit('cancel')
  private onCancel(): void {

  }

  @Emit('addToDo')
  private add(): string {
    return this.titleCanvas.toSVG();
  }

  @Emit('updateToDo')
  private update(): string {
    return this.titleCanvas.toSVG();
  }

}

enum EditMode {
  CREATE,
  UPDATE
}
</script>

<style lang="sass" scoped>
</style>