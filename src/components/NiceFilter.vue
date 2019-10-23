<template>
  <div class="nice-filter">
    <div class="title">{{ text }}</div>
    <div class="button-filter" :class="{ 'active': isOpen }">
      <svg viewBox="0 0 24 24" @click="handleClick">
        <path d="M22.9 2.6c-0.2-0.4-0.5-0.6-0.9-0.6h-20c-0.4 0-0.7 0.2-0.9 0.6-0.2 0.3-0.1 0.7 0.1 1l7.8 9.2v6.2c0 0.4 0.2 0.7 0.6 0.9l4 2c0.1 0.1 0.2 0.1 0.4 0.1s0.4 0 0.5-0.1c0.3-0.2 0.5-0.5 0.5-0.9v-8.2l7.8-9.2c0.2-0.3 0.3-0.7 0.1-1zM13.2 11.8c-0.1 0.2-0.2 0.4-0.2 0.7v6.9l-2-1v-5.9c0-0.2-0.1-0.5-0.2-0.6l-6.6-7.9h15.7l-6.7 7.8z"></path>
      </svg>

      <div class="dropdown-filter" v-if="isOpen">
        <slot></slot>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "NiceFilter",

  data () {
    return {
      isOpen: false
    }
  },

  props: {
    text: String
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
.nice-filter {
  display: flex;
  cursor: pointer;

  .title {
    flex-grow: 1;
  }

  &:hover, &.active {
    svg {
      transform: scale(1.1);
    }
  }

  .button-filter {
    position: relative;
    cursor: pointer;

    svg {
      height: 15px;
      fill: var(--nice-base-color);
    }

    .dropdown-filter {
      font-size: 1.3em;
      position: absolute;
      top: 100%;
      right: 0;
      width: 200px;
      margin-top: 0.8rem;
      margin-right: -1.4rem;
      background: white;
      padding: 0.5rem;
      border-radius: var(--nice-border-radius);
      box-shadow: 0 0 20px #ccc;

      &:before {
        content: " ";
        position: absolute;
        top: -0.8rem;
        right: 1rem;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 0.8rem 0.8rem 0.8rem;
        border-color: transparent transparent white transparent;
      }
    }
  }
}
</style>