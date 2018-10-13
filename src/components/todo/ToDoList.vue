<template>
  <div class="todo-list">
    <swipe-list
      class="card"
      v-bind:items="todos"
      transition-key="id"
      v-on:swipeout:contentclick="contentClick"
      v-on:swipeout:click="itemClick">
      <template slot-scope="{ item, index, revealLeft, revealRight, close }">
        <!-- item is the corresponding object from the array -->
        <!-- index is clearly the index -->
        <!-- revealLeft is method which toggles the left side -->
        <!-- revealRight is method which toggles the right side -->
        <!-- close is method which closes an opened side -->
        <div class="card-content">
          <!-- style content how ever you like -->
          <h2>{{ item.title }}</h2>
          <p>{{ item.description }}</p>
          <span>{{ index }}</span>
        </div>
      </template>
      <!-- right swipe side template and slot-scope="{ item }" is the item clearly -->
      <!-- remove <template slot="right" slot-scope="{ item }"> if you dont wanna have right swipe side  -->
      <template slot="right" slot-scope="{ item }">
        <div class="swipeout-action red">
          <!-- place icon here or what ever you want -->
          <i class="fa fa-trash"></i>
        </div>
      </template>
      <div slot="empty">
        <!-- change mockSwipeList to an empty array to see this slot in action  -->
        list is empty ( filtered or just empty )
      </div>
    </swipe-list>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { fabric } from 'fabric';
const vueSwipeActions = require('vue-swipe-actions');
const SwipeList = vueSwipeActions.SwipeList;
const SwipeOut = vueSwipeActions.SwipeOut;

@Component({
  components: {
    SwipeOut,
    SwipeList
  }
})
export default class ToDoList extends Vue {

  @Prop({required: true})
  private todos: any[];
  private canvas: any;
  private svg: string;

  public data() {
    return {
      svg: ''
    };
  }

  public contentClick(e: any) {
    // console.log(e, 'content click');
  }

  public itemClick(e: any) {
    // console.log(e, 'item click');
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
}
</style>
