<template>
  <transition-group name="toast" key="div" class="nice-toasts">
    <div class="nice-toast" v-for="toast in toasts" :key="toast.id">{{ toast.message }}</div>
  </transition-group>
</template>



<script>
export default {
  name: "NiceToast",

  data () {
    return {
      eventName: 'nice-toast',
      timeoutTime: 3000,
      toasts: []
    }
  },

  mounted () {
    this.$events.$on(this.eventName, message => {
      this.createToast(message)
    })
  },

  methods: {
    createToast (message) {
      // Create new toast
      var toast = {
        id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10),
        message: message
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
  z-index: 9999;
  position: fixed;
  bottom: 1rem;
  right: 50%;
  transform: translateX(50%);

  display: flex;
  flex-direction: column;
  align-items: center;

  .nice-toast {
    background: var(--nice-card);
    padding: 0.5rem 1rem;
    border-radius: 30px;
    font-size: 0.8em;
    font-weight: bold;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.12);
    margin-top: 0.5rem;
    max-width: 500px;
  }
}

.toast-enter-active {
  animation: bounce-in .5s;
}

.toast-leave-active {
  animation: bounce-in .5s reverse;
}

@keyframes bounce-in {
  from { transform: translateY(100%); opacity: 1; }
  to { transform: translateY(0); opacity: 1; }
}
</style>

