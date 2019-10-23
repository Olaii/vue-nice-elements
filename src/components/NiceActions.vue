<template>
  <div class="nice-component nice-actions no-margin">
    <button class="btn btn-outline-default" :class="{ 'active': isOpen }" @click="handleClick">
      <slot name="button">
        <svg viewBox="0 0 24 24" v-if="type == 'dots'">
          <path d="M14 12c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path>
          <path d="M14 5c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path>
          <path d="M14 19c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path>
        </svg>

        <svg viewBox="0 0 24 24" v-if="type == 'filter'">
          <path d="M22.9 2.6c-0.2-0.4-0.5-0.6-0.9-0.6h-20c-0.4 0-0.7 0.2-0.9 0.6-0.2 0.3-0.1 0.7 0.1 1l7.8 9.2v6.2c0 0.4 0.2 0.7 0.6 0.9l4 2c0.1 0.1 0.2 0.1 0.4 0.1s0.4 0 0.5-0.1c0.3-0.2 0.5-0.5 0.5-0.9v-8.2l7.8-9.2c0.2-0.3 0.3-0.7 0.1-1zM13.2 11.8c-0.1 0.2-0.2 0.4-0.2 0.7v6.9l-2-1v-5.9c0-0.2-0.1-0.5-0.2-0.6l-6.6-7.9h15.7l-6.7 7.8z"></path>
        </svg>

        <svg viewBox="0 0 24 24" v-if="type == 'export'">
          <path d="M15.3 16.3l-2.3 2.3v-6.6c0-0.6-0.4-1-1-1s-1 0.4-1 1v6.6l-2.3-2.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l4 4c0.1 0.1 0.2 0.2 0.3 0.2 0.1 0.1 0.3 0.1 0.4 0.1s0.3 0 0.4-0.1c0.1-0.1 0.2-0.1 0.3-0.2l4-4c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0z"></path>
          <path d="M22.9 10.5c-1.1-1.5-2.9-2.5-4.9-2.5 0 0 0 0 0 0h-0.5c-1.5-4.4-6.2-6.9-10.7-5.7-2.4 0.6-4.3 2-5.6 4.1-1.2 2.1-1.6 4.5-1 6.8 0.4 1.4 1 2.7 2 3.7 0.4 0.4 1 0.5 1.4 0.1s0.5-1 0.1-1.4c-0.7-0.8-1.3-1.8-1.5-2.9-0.5-1.8-0.2-3.7 0.8-5.3s2.5-2.8 4.3-3.2c3.7-1 7.6 1.3 8.5 5 0.1 0.4 0.5 0.8 1 0.8h1.2c0 0 0 0 0 0 1.3 0 2.5 0.6 3.3 1.7 0.6 0.9 0.9 1.9 0.7 3s-0.8 2-1.6 2.6c-0.5 0.3-0.6 0.9-0.2 1.4 0.2 0.3 0.5 0.4 0.8 0.4 0.2 0 0.4-0.1 0.6-0.2 1.3-0.9 2.2-2.3 2.5-3.9s-0.3-3.1-1.2-4.5z"></path>
        </svg>
      </slot>
    </button>
    

    <!-- <transition name="down"> -->
      <div class="nice-backdrop" v-if="isOpen" @click="clickOutside"></div>
      <ul class="nice-dropdown" v-if="isOpen" > <!-- v-click-outside="clickOutside" -->
        <slot name="dropdown"></slot>
      </ul>
    <!-- </transition> -->
  </div>
</template>



<script>
export default {
  name: "NiceActions",

  props: {
    type: {
      type: String,
      default: 'dots'
    }
  },

  data () {
    return {
      isOpen: false
    }
  },

  methods: {
    handleClick () {
      this.isOpen = !this.isOpen
    },

    clickOutside () {
      this.isOpen = false
    }
  }
};
</script>



<style lang="scss" scoped>
.nice-actions {
  position: relative;

  .nice-dropdown {
    z-index: 1000;
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: 1rem;
    padding: 1rem;
    background: var(--nice-card);
    min-width: 220px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    border-radius: var(--nice-border-radius);

    &:before {
      content: " ";
      position: absolute;
      top: -0.8rem;
      right: 0.9rem;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 0.8rem 0.8rem 0.8rem;
      border-color: transparent transparent white transparent;
    }

    li {
      margin-bottom: 0.5rem;
      white-space: nowrap;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}


.down-enter-active {
  animation: table-tr .3s;
  transform-origin: top center;
}

.down-leave-active {
  animation: table-tr .3s reverse;
  transform-origin: top center;
}

@keyframes table-tr {
  from { transform: translateX(50%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
</style>