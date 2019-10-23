<template>
  <div class="nice-component nice-toggle" :class="{ 'disabled': disabled, 'no-margin': noMargin }">
    <div class="input-group">
      <div class="nice-label" v-if="title">{{ title }}</div>
      <div class="toggle-wrapper" @click="toggle">
        <div class="value">{{ no }}</div>
        <div class="value">{{ yes }}</div>
        <div class="selected-value" :class="{ 'active': selected }" :data-yes="yes" :data-no="no"></div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "NiceToggle",
  props: {
    value: [Boolean],
    title: String,
    name: String,
    noMargin: Boolean,
    yes: {
      default: "Yes",
      type: [String, Number]
    },
    no: {
      default: "No",
      type: [String, Number]
    },
    disabled: Boolean
  },
  data () {
    return {
      selected: false,
      selectedValue: "No"
    }
  },
  watch: {
    value () {
      this.selected = this.value
      this.$emit('input', this.selected)
      this.$emit('changed', this.selected)
    }
  },
  methods: {
    toggle () {
      if (!this.disabled) {
        this.selected = !this.selected
        this.$emit('input', this.selected)
      }
    }
  },
  mounted () {
    this.selected = this.value
    if (!this.value) {
      this.$emit('input', this.selected)
      this.$emit('changed', this.selected)
    }
  }
};
</script>



<style lang="scss" scoped>
.nice-toggle {
  .toggle-wrapper {
    position: relative;
    width: 100%;
    max-width: 100%;
    font-size: 1em;
    background: var(--nice-bg);
    border-radius: var(--nice-border-radius);
    height: var(--nice-height);
    border: var(--nice-border);

    &:focus {
      outline: 0;
      background: var(--nice-bg-focus);
    }

    &:hover {
      background: var(--nice-bg-hover);
    }

    .value {
      display: inline-block;
      width: 50%;
      text-align: center;
      height: var(--nice-height);
      line-height: var(--nice-height);
      user-select: none;
    }

    .selected-value {
      position: absolute;
      top: 4px;
      bottom: 4px;
      left: 4px;
      margin-right: 4px;
      right: 50%;
      color: white;
      background: var(--nice-base-color);
      border-radius: var(--nice-border-radius);
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.3s;
      user-select: none;

      &:before{
        content: attr(data-no);
      }

      &.active {
        right: 4px;
        margin-right: 4px;
        left: 50%;
        color: white;
        background: var(--nice-base-color);

        &:before{
          content: attr(data-yes);
        }
      }
    }
  }
}
</style>

