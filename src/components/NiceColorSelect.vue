<template>
  <div class="nice-component nice-color-select" :class="{ 'disabled': disabled, 'no-margin': noMargin }">
    <div class="input-group">
      <div class="nice-label" v-if="title">{{ title }}<span v-if="required">*</span></div>
      <div class="form-group">
        <input
          type="color"
          class="color-picker"
          @change="handleChange($event.target.value)"
          v-model="insideValue"
          :required="required"
          :disabled="disabled"
        />
        <input
          type="input" 
          class="color-input"
          @change="handleChange($event.target.value)"
          v-model="insideValue"
          :required="required"
          :disabled="disabled"
          :placeholder="placeholder"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NiceColorSelect",

  props: {
    value: String,
    title: String,
    placeholder: String,
    required: Boolean,
    disabled: Boolean,
    noMargin: Boolean
  },

  data () {
    return {
      insideValue: this.value
    };
  },

  methods: {
    handleChange (value) {
      this.$emit("input", value);
      this.$emit("change", value);
    },
  },

  watch: {
    insideValue () {
      this.handleChange(this.insideValue);
    },

    value (newVal, oldVal) {
      if (oldVal == undefined) {
        this.insideValue = this.value;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.form-group {
  display: flex;

  .color-picker {
    padding: 0;
    width: 40px;
    min-height: calc(var(--nice-height) + 1px);
    border-right: 0 none;
    flex-shrink: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .color-input {
    border-left: 0 none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}
</style>