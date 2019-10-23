<template>
  <div class="nice-sideview" @mousemove="mouseMove" @mouseup="dragging = false" :class="{ 'no-select': dragging }">
    <transition name="side-view">
      <div class="side-view-body" :style="{ '--side-view-width': sideViewWidth + 'px' }" v-if="isOpen">
        <div class="handle" ref="handle" :class="{ 'active': dragging }" @mousedown="dragging = true"></div>
        <slot></slot>
      </div>
    </transition>
  
    <transition name="side-overlay">
      <div class="overlay" v-if="isOpen" @click="close"></div>
    </transition>
  </div>
</template>



<script>
export default {
  name: 'NiceSideview',


  props: {
    isOpen: Boolean
  },


  data () {
    return {
      dragging: false,
      sideViewWidth: 500
    }
  },


  methods: {
    changeSideViewWidth (width) {
      this.sideViewWidth = width
    },

    close () {
      this.$emit("close")
    },

    mouseMove (e) {
      if (this.dragging) {
        let width = document.body.clientWidth - e.clientX
        if (width >= 300 && width <= document.body.clientWidth - 100){
          this.changeSideViewWidth(width)
        }
      }
    },

    handleKeyboard (e) {
      if (e.key == "Escape") {
        this.close()
      }
    },
  },


  watch: {
    isOpen () {
      if (this.isOpen) {
        // Emmit keyboard listener
        document.addEventListener('keyup', this.handleKeyboard)
      } else {
        this.dragging = false
        // Remove keyboard listener
        document.removeEventListener('keyup', this.handleKeyboard)
      }
    }
  }
}
</script>



<style lang="scss">
.nice-sideview {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2000;
  --side-view-width: 500px;

  .handle {
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: transparent;
    cursor: col-resize;

    &:hover, &.active {
      background: var(--nice-base-color-darker);
    }
  }

  .side-view-body {
    position: fixed;
    top: 0;
    right: 0;
    width: var(--side-view-width);
    max-width: 90%;
    height: 100vh;
    background: white;
    padding: 3rem;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
    z-index: 2;
    overflow: auto;

    .side-wrapper {
      display: flex;
      flex-direction: column;
      min-height: 100%;

      form {
        display: flex;
        flex-direction: column;
        min-height: 100%;

        .side-body {
          flex-grow: 1;
        }

        .side-actions {
          margin-top: 1rem;
          flex-shrink: 0;
          display: flex;
          justify-content: flex-end;
        }
      }
    }
  }

  .overlay {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background: rgba(255, 255, 255, 0.5);
    background: rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  // Mobile
  @media (max-width: 576px) {
    .handle {
      display: none;
    }

    .side-view-body {
      padding: 1.5rem;
    }
  }
}

.side-view-enter-active { animation: side-view .3s; }
.side-view-leave-active { animation: side-view .3s reverse; }
@keyframes side-view {
  from { transform: translateX(100%); opacity: 1; }
  to { transform: translateX(0); opacity: 1; }
}

.side-overlay-enter-active { animation: side-overlay .3s; }
.side-overlay-leave-active { animation: side-overlay .3s reverse; }
@keyframes side-overlay {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>