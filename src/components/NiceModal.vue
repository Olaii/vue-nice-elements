<template>
  <div class="nice-modal">
    <transition name="modal-view">
      <div class="side-view-body" v-if="isOpen">
        <slot></slot>
      </div>
    </transition>
  
    <transition name="modal-overlay">
      <div class="overlay" v-if="isOpen" @click="close"></div>
    </transition>
  </div>
</template>



<script>
export default {
  name: 'NiceModal',


  props: {
    isOpen: Boolean
  },


  methods: {
    close () {
      this.$emit("close")
    },

    handleKeyboard (e) {
      if (e.key == "Escape") {
        this.close()
      }
    }
  },


  watch: {
    isOpen () {
      if (this.isOpen) {
        // Emmit keyboard listener
        document.addEventListener('keyup', this.handleKeyboard)
      } else {
        // Remove keyboard listener
        document.removeEventListener('keyup', this.handleKeyboard)
      }
    }
  }
}
</script>



<style lang="scss">
.nice-modal {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 3000;

  .side-view-body {
    position: fixed;
    top: 0;
    left: 50%;
    width: 500px;
    transform: translateX(-50%);
    max-width: 100%;
    max-height: 90vh;
    color: var(--nice-font-color);
    background: var(--nice-bg);
    padding: 3rem;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
    z-index: 2;
    overflow: auto;
    border-bottom-left-radius: var(--nice-border-radius);
    border-bottom-right-radius: var(--nice-border-radius);
    height: auto !important;

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
    .side-view-body {
      padding: 2rem;
      width: 90%;
      margin-left: 0;
    }
  }
}

.modal-view-enter-active { animation: modal-view .3s; }
.modal-view-leave-active { animation: modal-view .3s reverse; }
@keyframes modal-view {
  from { transform: translateX(-50%) translateY(-100%); opacity: 0; }
  to { transform: translateX(-50%) translateY(0); opacity: 1; }
}

.modal-overlay-enter-active { animation: modal-overlay .3s; }
.modal-overlay-leave-active { animation: modal-overlay .3s reverse; }
@keyframes modal-overlay {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>