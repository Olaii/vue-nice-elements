<template>
  <button class="nice-component nice-button btn" :class="[addClass, { 'disabled': disabled }]" :disabled="disabled" :type="type" @click="handleClick">
    <span :class="{ 'hidden': loading || innerLoading }">
      <span>{{ text }}</span>
      <slot></slot>
    </span>
    <NiceLoading v-if="loading || innerLoading" class="loader" :size="30" />
  </button>
</template>



<script>

export default {
  name: "NiceButton",

  data () {
    return {
      innerLoading: false
    }
  },

  props: {
    text: String,
    disabled: Boolean,
    type: String,
    addClass: String,
    loading: Boolean,
    function: Function
  },

  methods: {
    async handleClick () {
      if (!this.loading && !this.disabled) {
        if (this.function) {
          this.innerLoading = true
          await this.function()
          this.innerLoading = false
        }
        this.$emit('click')
      }
    }
  }
};
</script>



<style lang="scss" scoped>
.nice-button {
  position: relative;
  margin-bottom: 0;

  .text {
    display: inline-block;
    margin-left: 1rem;
  }

  .hidden {
    opacity: 0;
  }

  .loader {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>