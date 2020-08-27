<template>
  <transition-group name="toast" key="div" class="nice-toasts" :class="positions[position]">
    <div class="nice-toast" v-for="toast in toasts" :class="toast.type" :key="toast.id">{{ toast.message }}</div>
  </transition-group>
</template>



<script>
export default {
  name: "NiceToast",

  data () {
    return {
      eventName: 'nice-toast',
      types: {
        "DEFAULT": "default",
        "ERROR": "error",
        "SUCCESS": "success",
        "INFO": "info",
        "WARNING": "warning"
      }, 
      positions: {
        "TOP": "top center",
        "TOP_LEFT": "top left",
        "TOP_RIGHT": "top right",
        "BOTTOM": "bottom center",
        "BOTTOM_LEFT": "bottom left",
        "BOTTOM_RIGHT": "bottom right",
      },
      timeoutTime: 3000,
      toasts: []
    }
  },

  props: {
    position: {
      default: "BOTTOM",
      type: String
    }
  },

  mounted () {
    this.$events.$on(this.eventName, (message, type) => {
      this.createToast(message, type)
    })
  },

  methods: {
    createToast (message, type = this.types.DEFAULT) {
      // Create new toast
      var toast = {
        id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10),
        message: message,
        type: type
      }

      // Append toast
      this.toasts.unshift(toast)

      // Remove after some time
      setTimeout(() => {
        this.removeToast(toast)
      }, this.timeoutTime)
    },

    removeToast (toast) {
      let toastIndex = this.toasts.findIndex(a => { return a.id == toast.id })
      if (toastIndex >= 0) {
        this.toasts.splice(toastIndex, 1)
      }
    }
  },

  destroyed () {
    this.$events.$off(this.eventName);
  }
};
</script>



<style lang="scss" scoped>
.nice-toasts {
  --nice-toasts-padding: 1rem;
  z-index: 9999;
  position: fixed;
  bottom: var(--nice-toasts-padding);
  right: 50%;
  transform: translateX(50%);

  display: flex;
  flex-direction: column;
  align-items: center;

  &.top {
    top: var(--nice-toasts-padding);
    bottom: unset;
    flex-direction: column-reverse;
  }

  &.left {
    right: unset;
    left: var(--nice-toasts-padding);
    transform: unset;
  }
  
  &.right {
    right: var(--nice-toasts-padding);
    transform: unset;
  }

  .nice-toast {
    background: var(--nice-card);
    padding: 0.5rem 1rem;
    border-radius: 30px;
    font-size: 0.8em;
    font-weight: bold;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.12);
    margin-top: 0.5rem;
    max-width: 500px;

    &.error { color: white; background: var(--nice-error-color); }
    &.success { color: white; background: var(--nice-success-color); }
    &.info { color: white; background: var(--nice-info-color); }
    &.warning { color: white; background: var(--nice-warning-color); }
  }
}

.toast-enter-active {
  animation: bounce-in-bottom .5s;
}

.toast-leave-active {
  animation: bounce-in-bottom .5s reverse;
}

@keyframes bounce-in-bottom {
  from { transform: translateY(100%); opacity: 1; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes bounce-in-top {
  from { transform: translateY(-100%); opacity: 1; }
  to { transform: translateY(0); opacity: 1; }
}
</style>

