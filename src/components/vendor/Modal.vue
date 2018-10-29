<template type="text/x-template" id="modal-template">
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <slot name="header"></slot>
          <div class="modal-body">
            <slot name="body">
              default body
            </slot>
          </div>
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Modal extends Vue {

  private defaultHtmlOverflow: any;
  private defaultBodyOverflow: any;
  private defaultHtmlHeight: any;
  private defaultBodyHeight: any;

  public mounted(): void {
    this.defaultHtmlOverflow = document.documentElement!.style.overflow;
    this.defaultBodyOverflow = document.body.style.overflow;
    this.defaultHtmlHeight = document.documentElement!.style.height;
    this.defaultBodyHeight = document.body.style.height;
    document.documentElement!.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    document.documentElement!.style.height = '100%';
    document.body.style.height = '100%';
  }

  public beforeDestroy(): void {
    document.documentElement!.style.overflow = this.defaultHtmlOverflow;
    document.body.style.overflow = this.defaultBodyOverflow;
    document.documentElement!.style.height = this.defaultHtmlHeight;
    document.body.style.height = this.defaultBodyHeight;
  }

}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 95%;
  margin: 0px auto;
  padding: 1rem;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>