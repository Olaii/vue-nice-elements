<template>
  <div class="nice-component nice-dropdown-simple" :class="{ 'disabled': disabled, 'no-margin': noMargin }">
    <div class="nice-label" v-if="title">{{ title }}<span v-if="required">*</span></div>
    <div class="input-group">
      <div class="select-wrapper" :class="{ 'no-value': value == null }">
        <select :required="required" :disabled="disabled" @change="handleChange" v-if="!keyOnly">
          <option v-if="nullable" :value="null" :selected="!value">{{ nullText }}</option>
          <option v-for="item in values" :value="item[keyName]" :key="item[keyName]" :selected="value && item[keyName] == value[keyName]">{{ item[valueName] }}</option>
        </select>
        <select :required="required" :disabled="disabled" @change="handleChange" v-if="keyOnly">
          <option v-if="nullable" :value="null" :selected="!value">{{ nullText }}</option>
          <option v-for="item in values" :value="item[keyName]" :key="item[keyName]" :selected="item[keyName] == value">{{ item[valueName] }}</option>
        </select>
        <div class="no-options" v-if="!nullable && !loading && (!values || values.length == 0)">No options</div>
        <div class="no-options" v-if="loading">Loading</div>
        <div class="arrow-down"></div>
      </div>

      <button class="btn" type="button" v-if="addFunction" :disabled="disabled" @click="addFunction">
        <svg viewBox="0 0 24 24">
          <path d="M19 11h-6v-6c0-0.6-0.4-1-1-1s-1 0.4-1 1v6h-6c-0.6 0-1 0.4-1 1s0.4 1 1 1h6v6c0 0.6 0.4 1 1 1s1-0.4 1-1v-6h6c0.6 0 1-0.4 1-1s-0.4-1-1-1z"></path>
        </svg>
      </button>
    </div>
  </div>
</template>



<script>
export default {
  name: "NiceDropdownSimple",
  
  props: {
    value: [Object, String, Number],
    values: Array,
    title: String,
    noMargin: Boolean,
    required: Boolean,
    nullable: Boolean,
    disabled: Boolean,
    loading: Boolean,
    keyOnly: Boolean,
    addFunction: {
      type: Function,
      default: null
    },
    nullText: {
      type: String,
      default: "None"
    },
    keyName: {
      type: String,
      default: "id"
    },
    valueName: {
      type: String,
      default: "value"
    },
  },

  methods: {
    handleChange (e) {
      if (e.target.value) {
        let selected = this.values.find(item => { return item[this.keyName] == e.target.value })
        if (selected) {
          this.changeValue(selected)
        } else {
          this.changeValue(undefined)
        }
      } else {
        this.changeValue(undefined)
      }
    },

    handleDefault () {
      // Select default value
      setTimeout(() => {
        if (!this.value && this.values.length > 0 && !this.nullable) {
          this.changeValue(this.values[0])
        }
      })
    },

    changeValue (value) {
      if (value) {
        if (this.keyOnly) {
          this.$emit('input', value[this.keyName])
          this.$emit('changed', value[this.keyName])
        } else {
          this.$emit('input', value)
          this.$emit('changed', value)
        }
      } else {
        this.$emit('input', undefined)
        this.$emit('changed', undefined)
      }
    }
  },

  mounted () {
    this.handleDefault()
  },

  watch: {
    value () {
      // console.log(this.value)
      // if (this.value != null) {
      //   if (this.keyOnly) {
      //     let selected = this.values.find(item => { return item[this.keyName] == this.value })
      //     this.handleChange({ target: { value: this.selected } })
      //   } else {
      //     this.handleChange({ target: { value: this.value } })
      //   }
      // }
    },
    values () {
      this.handleDefault()
    }
  }
};
</script>



<style lang="scss" scoped>
.nice-dropdown-simple {
  .input-group {
    margin-bottom: 0;
    display: flex;

    .select-wrapper {
      flex-grow: 1;

      select {
        padding: .4rem 1rem;
      }

      &.no-value {
        select {
          color: #ccc;
        }
      }
    }

    .btn {
      flex-shrink: 0;
      margin-left: 1rem;
    }
  }
}
</style>

