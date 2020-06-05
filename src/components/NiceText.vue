<template>
  <div class="nice-component nice-text" :class="{ 'no-margin': noMargin, 'large': large, 'bold': bold }">
    <div class="nice-label">{{ title }}</div>
    <p>{{ text }}</p>
    <div class="error-message" v-if="error">{{ error }}</div>
  </div>
</template>



<script>
export default {
  name: "NiceText",

  props: {
    title: String,
    text: [String, Number],
    large: Boolean,
    bold: Boolean,
    error: [String, Object, Array],
    noMargin: Boolean
  },

  data () {
    return {
      inputVal: this.value
    }
  }
};
</script>



<style lang="scss" scoped>
.nice-text {
  label {
    font-weight: bold;
    font-size: 0.8em;
  }

  p {
    width: 100%;
    max-width: 100%;
    display: block;
    font-size: 1em;
    background:var(--nice-bg);
    // padding: 0.8rem 1rem;
    padding: 0.3rem 0;
    border-radius: var(--nice-border-radius);
    // border: var(--nice-border);
    // height: var(--nice-height);
    overflow: hidden;
    line-height: 1.3;
  }

  &.large {
    p {
      font-size: 1.5em;
    }
  }

  &.bold {
    p {
      font-weight: bold;
    }
  }

  .error-message {
    font-weight: bold;
    padding-top: 0;
    font-size: 0.8em;
    color: var(--nice-error-color);
  }
}
</style>