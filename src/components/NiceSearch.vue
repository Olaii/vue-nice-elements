<template>
  <div class="nice-component nice-search" :class="{ 'disabled': disabled }">
    <div class="nice-label" v-if="title">{{ title }}</div>
    <div class="input-group">
      <!-- v-model="inputVal"  -->
      <input 
        :placeholder="placeholder" 
        :disabled="disabled" 
        :value='inputVal'
        @input='handleInput'
        @keydown="handleKeyboard"
      />
      <svg class="icon" viewBox="0 0 24 24">
        <path d="M21.7 20.3l-3.7-3.7c1.2-1.5 2-3.5 2-5.6 0-5-4-9-9-9s-9 4-9 9c0 5 4 9 9 9 2.1 0 4.1-0.7 5.6-2l3.7 3.7c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4zM4 11c0-3.9 3.1-7 7-7s7 3.1 7 7c0 1.9-0.8 3.7-2 4.9 0 0 0 0 0 0s0 0 0 0c-1.3 1.3-3 2-4.9 2-4 0.1-7.1-3-7.1-6.9z"></path>
      </svg>
    </div>
  </div>
</template>



<script>
export default {
  name: "NiceSearch",
  props: {
    title: String,
    value: String,
    placeholder: String,
    disabled: Boolean,
    debounce: {
      default: 500,
      type: Number
    }
  },

  data () {
    return {
      debounceTimeout: null,
      inputVal: this.value
    }
  },

  watch: {
    value () {
      this.inputVal = this.value
    }
  },

  methods: {
    handleKeyboard (e) {
      if (e.key == "Escape") {
        this.inputVal = ''
        this.handleInput(e)
      }
    },

    handleInput (e) {
      this.debounceValue(e.target.value)
    },

    debounceValue (val) {
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = setTimeout(() => {
        if (val == '') {
          val = undefined
        }
        this.$emit('input', val);
        this.$emit('change', val);
      }, this.debounce);
    }
  }
};
</script>



<style lang="scss" scoped>
.nice-search {
  margin-bottom: 0;
  width: 100%;

  .input-group {
    position: relative;
    margin-bottom: 0;

    input {
      padding-right: 3rem;
      overflow: hidden;
    }

    .icon {
      position: absolute;
      top: 50%;
      right: 1rem;
      transform: translateY(-50%);
      height: 20px;
      fill: var(--font-color);
    }
  }
}
</style>

