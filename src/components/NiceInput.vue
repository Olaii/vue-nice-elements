<template>
  <div class="nice-component nice-input" :class="{ 'disabled': disabled, 'no-margin': noMargin, 'validation-error': errorMessage || error }">
    <div class="nice-label" v-if="title">{{ title }}<span v-if="required">*</span></div>
    <div class="input-group">
      <div class="prepend" v-if="prepend">{{ prepend }}</div>

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

      <div class="append" v-if="append">{{ append }}</div>
    </div>

    <div class="error-message" v-if="errorMessage">{{ errorMessage }}</div>
    <div class="error-message" v-if="error">{{ error[0].message }}</div>
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
    prepend: String,
    append: String,
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
.input-group {
  display: flex;
  border-radius: var(--nice-border-radius);
  overflow: hidden;

  .append, .prepend {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--nice-bg-hover);
    padding: 0 1rem;
  }

  input {
    border-radius: 0;
  }
}

.validation-error {
  label {
    color: var(--nice-error-color);
  }

  input, textarea {
    // border: 2px solid var(--nice-error-color);
    // color: var(--nice-error-color);
  }
}

.error-message {
  // padding-left: 1rem;
  // padding-right: 1rem;
  padding-top: 5px;
  font-size: 0.8em;
  color: var(--nice-error-color);
}
</style>