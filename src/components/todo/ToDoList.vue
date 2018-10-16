<template>
  <div class="todo-list">
    <swipe-list
      class="card"
      v-bind:items="todos"
      transition-key="key">
      <template slot-scope="{ item, index, revealLeft, revealRight, close }">
        <div class="card-content" v-on:click="titleClick(index)">
          <svg class="todo-item-svg" v-html="item.title"></svg>
        </div>
      </template>
      <template slot="right" slot-scope="{ item, index }">
        <div class="swipeout-action red" v-on:click="deleteClick(index)">
          <i class="fa fa-trash"></i>
        </div>
      </template>
      <div slot="empty">
        list is empty ( filtered or just empty )
      </div>
    </swipe-list>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';
import { fabric } from 'fabric';
import SwipeList from '@/components/vendor/SwipeList.vue';

@Component({
  components: {
    SwipeList
  }
})
export default class ToDoList extends Vue {

  @Prop({required: true})
  private todos: Todo[];

  public data() {
    return {};
  }

  @Emit('titleClick')
  public titleClick(index: number) {}
  @Emit('deleteClick')
  public deleteClick(index: number) {}

}

export class Todo {
  public key: string;
  public title: string;
  public content: string;
  constructor(title: string) {
    this.title = title;
  }
}

</script>

<style lang="scss" scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
.swipeout-list {
  display: flex;
  flex-direction: column;
}
.swipeout-action {
  display: flex;
  align-items: center;
  padding: 0 3rem;
  cursor: pointer;
  left: 0;
  &.blue {
    color: white;    
    background-color: rgb(0,122,255);
      &:hover {
        background-color: darken(rgb(0,122,255), 5%);
      }
  }
  &.purple {
    color: white;    
    background-color: rgb(88,86,214);
      &:hover {
      background-color: darken(rgb(88,86,214), 5%);
      }
  }
  &.red {
    color: white;    
    background-color: rgb(255,59,48);
      &:hover {
      background-color: darken(rgb(255,59,48), 5%);
      }
  }
  &.green {
    color: white;    
    background-color: rgb(76,217,100);
      &:hover {
      background-color: darken(rgb(76,217,100), 5%);
      }
  }
}
.swipeout-list-item {
  flex: 1;
  border-bottom: 1px solid lightgray;
  &:last-of-type {
    border-bottom: none;
  }
}
.card {
  width: 100%;
  background-color: white;
  border-radius: 3px;
  box-shadow: none;
  border: 1px solid lightgray;
}
.card-content {
  padding: 1rem;
  svg {
    display: block;
    width: 100%;
  }
}

</style>
