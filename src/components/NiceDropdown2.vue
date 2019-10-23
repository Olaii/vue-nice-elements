<template>
  <div class="nice-component nice-dropdown" :class="{ 'disabled': disabled, 'no-margin': noMargin }">
    <div class="nice-label" v-if="title">{{ title }}<span v-if="required">*</span></div>
    <div class="input-group">
      <div class="select-wrapper">
        <div class="selected-value" @click="open">
          <input :required="required" class="hidden-input" v-if="!value" />
          <div class="option" v-if="!loading && value">
            <slot name="selected-option" :item="value">{{ value[valueName] }}</slot>
          </div>
          <div class="no-options" v-if="!nullable && !loading && !value && (!innerValues || innerValues.length == 0) && !required">No options</div>
          <div class="no-options" v-if="!nullable && !loading && !value">Not Selected</div>
          <div class="no-options" v-if="loading">Loading</div>
          <div class="arrow-down"></div>
        </div>

        <div class="nice-backdrop" @click="close" v-if="isOpen"></div>
        <div class="nice-dropdown" v-if="isOpen"> <!-- v-click-outside="close" -->
          <div class="input-group" v-if="searchFunction">
            <input v-model="search" type="text" placeholder="Search..." name="Search" @input="handleSearch" ref="search" />
            <div class="loading" v-if="innerLoading"><Loader :size="30" /></div>
          </div>
          <div class="options">
            <div class="option" v-if="nullable" :value="null" :selected="!value">{{ nullText }}</div>
            <div class="option" v-for="(item, index) in innerValues" :key="item[keyName]" :class="{ 'hover': innerIndex == index, 'selected': value && item[keyName] == value[keyName] }" @click="handleChange(item)">
              <slot name="option" :item="item">{{ item[valueName] }}</slot>
            </div>
            <div class="option" v-if="!innerLoading && (!innerValues || innerValues.length == 0)">No options</div>
          </div>
        </div>
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
  name: "NiceDropdown2",
  
  props: {
    value: [Object, String, Number],
    title: String,
    noMargin: Boolean,
    required: Boolean,
    nullable: Boolean,
    disabled: Boolean,
    loading: Boolean,
    keyOnly: Boolean,
    searchFunction: {
      type: Function,
      default: null
    },
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
      default: "key"
    },
    valueName: {
      type: String,
      default: "value"
    },
  },

  data () {
    return {
      search: null,
      isOpen: false,
      innerIndex: null,
      debounceTimeout: null,
      debounce: 500,
      innerLoading: false,
      innerValues: null
    }
  },

  methods: {
    open () {
      if (!this.disabled) {
        this.isOpen = true
      }
    },

    close () {
      if (this.isOpen) this.isOpen = false
    },

    handleChange (item) {
      let value = item[this.keyName]
      let selected = this.innerValues.find(item => { return item[this.keyName] == value })
      if (selected) {
        this.changeValue(selected)
      } else {
        this.changeValue(undefined)
      }
      this.isOpen = false
    },

    handleDefault () {
      // Select default value
      if (this.innerValues && this.innerValues.length > 0 && !this.nullable) {
        this.changeValue(this.innerValues[0])
      }
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
    },

    handleSearch () {
      clearTimeout(this.debounceTimeout);
      return this.debounceTimeout = setTimeout(async () => {
        this.innerValues = await this.fetchSearch()
      }, this.debounce)
    },

    async fetchSearch () {
      if (this.searchFunction) {
        this.innerLoading = true
        let response = await this.searchFunction(this.search)
        this.innerIndex = 0
        this.innerLoading = false
        return response
      } else {
        return null;
      }
    },

    handleKeyboard (e) {
      if (e.key == "ArrowDown") {
        if (this.innerIndex < this.innerValues.length - 1) {
          this.innerIndex += 1
        }
        e.preventDefault()
      } else if (e.key == "ArrowUp") {
        if (this.innerIndex > 0) {
          this.innerIndex -= 1
        }
        e.preventDefault()
      } else if (e.key == "Escape") {
        this.isOpen = false
        e.preventDefault()
      } else if (e.key == "Enter") {
        this.changeValue(this.innerValues[this.innerIndex])
        this.isOpen = false
        e.preventDefault()
      }
    }
  },

  watch: {
    async isOpen () {
      if (this.isOpen) {
        // Fetch default items
        if (!this.innerValues) {
          this.innerValues = await this.fetchSearch()
        }

        // Find current selected index
        if (this.value != undefined) {
          this.innerIndex = this.innerValues.findIndex(i => i[this.keyName] == this.value[this.keyName])
        } else {
          // this.handleDefault()
          this.innerIndex = 0
        }
        // Focus on search input
        setTimeout(() => {
          if (this.$refs.search) this.$refs.search.focus()
        }, 100)
        // Emmit keyboard listener
        document.addEventListener('keydown', this.handleKeyboard);
      } else {
        this.search = null
        this.innerLoading = false
        // Remove keyboard listener
        document.removeEventListener('keydown', this.handleKeyboard)
      }
    }
  }
};
</script>


<style lang="scss" scoped>
.nice-dropdown {
  .input-group {
    position: relative;
    margin-bottom: 0;
    display: flex;

    .select-wrapper {
      flex-grow: 1;
    }

    .btn {
      flex-shrink: 0;
      margin-left: 1rem;
    }

    .hidden-input {
      padding: 0;
      background: transparent;
      height: auto;
      opacity: 0;
    }

    .arrow-down {
      position: absolute;
      top: 50%;
      right: 1rem;
      margin-top: -2px;
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 6px solid rgba(189, 189, 189, 0.8);
    }

    .no-options {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 1rem;
      opacity: 0.5;
    }

    .selected-value {
      position: relative;
      width: 100%;
      max-width: 100%;
      display: block;
      font-size: 1em;
      background: var(--nice-bg);
      padding: 0.8rem 2.5rem 0.8rem 1rem;
      border-radius: var(--nice-border-radius);
      border: var(--nice-border);
      font-family: inherit;
      min-height: var(--nice-height);
      line-height: 1.2;
      cursor: pointer;

      &:focus {
        outline: 0;
        background: var(--nice-bg-active);
      }

      &:hover {
        background: var(--nice-bg-hover);
      }

      &:active {
        background: var(--nice-bg-active);
        box-shadow: inset 0 0 25px rgba(0, 0, 0, 0.1);
      }
    }

    .nice-dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      margin-top: 0.5rem;
      background: white;
      box-shadow: 0 0 25px rgba(0, 0, 0, 0.1);
      border: var(--nice-border);
      border-radius: var(--nice-border-radius);
      line-height: 1.2;
      z-index: 1000;
      overflow: hidden;

      .input-group {
        position: relative;
        border: 0 none;
        
        input {
          border: 0 none;
          border-bottom: var(--nice-border);
          background: white;
          border-radius: 0;
        }

        .loading {
          position: absolute;
          top: 50%;
          right: 10px;
          margin-top: -15px;
        }
      }

      .options {
        max-height: 300px;
        overflow: auto;
        .option {
          padding: 0.8rem 1rem;
          cursor: pointer;

          &:hover, &.hover {
            background: var(--nice-bg-hover);
          }

          &.selected {
            background: var(--nice-base-color);
            color: white;
          }
        }
      }
    }
  }
}
</style>