<template>
  <div class="nice-component nice-color" :class="{ 'disabled': disabled, 'no-margin': noMargin }">
    <div class="input-group">
      <div class="nice-label" v-if="title">{{ title }}<span v-if="required">*</span></div>
      <div class="colors">
        <div class="color" v-for="(color, index) in colors" :key="index" @click="select(color)" :class="{ 'active': color == value }" :style="{ 'background-color': color }"></div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "NiceColor",

  props: {
    value: String,
    title: String,
    required: Boolean,
    disabled: Boolean,
    noMargin: Boolean
  },

  data () {
    return {
      inputVal: this.value,
      colors: [
        "#f44336",
        "#E91E63",
        "#9C27B0",
        "#673AB7",
        "#3F51B5",
        "#2196F3",
        "#03A9F4",
        "#00BCD4",
        "#009688",
        "#4CAF50",
        "#8BC34A",
        "#CDDC39",
        "#FFEB3B",
        "#FFC107",
        "#FF9800",
        "#FF5722",
        "#795548",
        "#9E9E9E",
        "#607D8B",
      ]
    }
  },

  mounted () {
  },

  methods: {
    select (color) {
      this.inputVal = color
      this.$emit('input', color);
    },
  },

  watch: {
    inputVal(val) {
      this.$emit('input', val);
    },
    value () {
      this.inputVal = this.value
    }
  }
};
</script>



<style lang="scss" scoped>
.colors {
  padding: 0.8rem 1rem;
  padding-bottom: 0;
  padding-right: 0;
  background: var(--nice-bg);
  border: 1px solid var(--nice-border-color);
  border-radius: var(--nice-border-radius);

  .color {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
    }

    &.active {
      transform: scale(1.2);
      border: 2px solid var(--nice-base-color);
    }
  }
}
</style>