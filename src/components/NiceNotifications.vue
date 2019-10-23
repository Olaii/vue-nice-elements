<template>
  <div class="nice-notifications">
    <transition-group name="notification" tag="div">
      <div v-for="notification in notifications" :key="notification.id" class="nice-notification" :class="notification.type">
        <label>{{ notification.title }}</label>
        <p>{{ notification.message }}</p>
      </div>
    </transition-group>
  </div>
</template>



<script>
export default {
  name: "NiceNotifications",


  data () {
    return {
      timeoutTime: 3000,
      notifications: [],
      types: {
        "ERROR": "Error",
        "SUCCESS": "Success",
        "INFO": "Info",
        "WARNING": "Warning"
      }
    }
  },


  mounted () {
    this.$events.$on('notification', (type, message, title) => {
      this.createNotification(type, title, message)
    })
  },


  destroyed () {
    this.$events.$off('notification');
  },


  methods: {
    createNotification (type, title, message) {
      // Create object with random id
      var notification = {
        id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10),
        type: type,
        title: title,
        message: message
      }

      // Set default title
      if (!title) {
        if (type == "ERROR") {
          notification.title = "Error"
        } else if (type == "SUCCESS") {
          notification.title = "Success"
        } else if (type == "INFO") {
          notification.title = "Info"
        } else if (type == "WARNING") {
          notification.title = "Warning"
        }
      }

      // Append notification
      this.notifications.unshift(notification)

      // Remove after some time
      setTimeout(() => {
        this.removeNotification(notification)
      }, this.timeoutTime)
    },

    removeNotification (notification) {
      let notificationIndex = this.notifications.findIndex(a => { return a.id == notification.id })
      if (notificationIndex >= 0) {
        this.notifications.splice(notificationIndex, 1)
      }
    }
  }
};
</script>



<style lang="scss" scoped>
.nice-notifications {
  z-index: 99999;
  position: fixed;
  top: 0;
  right: 0;
  max-height: 100vh;
  flex-wrap: wrap;
  display: flex;
  overflow: auto;
  overflow-x: hidden;

  .nice-notification {
    background: #E5E5E5;
    padding: 1.2rem 1.5rem;
    border-radius: var(--nice-border-radius);
    margin: 0.5rem 1rem;
    line-height: 1;
    min-width: 250px;

    label {
      display: block;
      font-weight: bold;
      font-size: 1.2em;
      margin-bottom: 0.8rem;
    }

    p {
      font-size: 1em;
      padding: 0;
      margin: 0;
    }

    &.ERROR {
      background: var(--nice-error-color);
      color: white;
    }

    &.SUCCESS {
      background: var(--nice-success-color);
      color: white;
    }

    &.WARNING {
      background: var(--nice-warning-color);
      color: white;
    }

    &.INFO {
      background: var(--nice-info-color);
      color: white;
    }
  }
}

.notification-enter-active {
  animation: bounce-in .5s;
}

.notification-leave-active {
  animation: bounce-in .5s reverse;
}

@keyframes bounce-in {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
</style>

