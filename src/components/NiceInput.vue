<template>
  <div class="nice-component nice-input" :class="{ 'disabled': disabled, 'no-margin': noMargin }">
    <div class="input-group" :class="{ 'validation-error': errorMessage || error }">
      <div class="nice-label" v-if="title">{{ title }}<span v-if="required">*</span></div>
      <input 
        v-if="!textarea" 
        v-model="inputVal"
        :placeholder="placeholder" 
        :name="name" 
        :type="type" 
        :required="required"
        :disabled="disabled"
        @input="validation"
      >
      
      <NiceTextarea 
        v-if="textarea"
        v-model="inputVal"
        :placeholder="placeholder" 
        :name="name" 
        :required="required"
        :disabled="disabled"
        @input="validation"
      />

      <div class="error-message" v-if="errorMessage">{{ errorMessage }}</div>
      <div class="error-message" v-if="error">{{ error[0].message }}</div>
    </div>
  </div>
</template>



<script>
import NiceTextarea from "@/components/NiceTextarea"

export default {
  name: "NiceInput",

  props: {
    value: [String, Number],
    title: String,
    name: String,
    type: {
      type: String,
      default: "text"
    },
    placeholder: String,
    error: [String, Object, Array],
    required: Boolean,
    textarea: Boolean,
    disabled: Boolean,
    noMargin: Boolean
  },

  components: {
    NiceTextarea
  },

  data () {
    return {
      dirty: false,
      inputVal: this.value,
      errorMessage: null
    }
  },

  mounted () {
    this.validation()
  },

  methods: {
    validation () {
      this.errorMessage = null

      if (this.inputVal) {
        this.dirty = true
      }

      if (this.required) {
        if (this.dirty && (!this.inputVal || this.inputVal.length == 0)) {
          this.errorMessage = "This field is required"
        }
      }
    }
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
.validation-error {
  label {
    color: var(--error-color);
  }

  input, textarea {
    // border: 2px solid var(--error-color);
    // color: var(--error-color);
  }
}

.error-message {
  // padding-left: 1rem;
  // padding-right: 1rem;
  padding-top: 5px;
  font-size: 0.8em;
  color: var(--error-color);
}
</style>