<template>
  <div class="nice-component nice-select" :class="{ 'disabled': disabled, 'no-margin': noMargin }">
    <div class="input-group">
      <div class="nice-label" v-if="title">{{ title }}<span v-if="required">*</span></div>
      <div class="form-group">
        <div class="nice-select-values" :class="{ 'nice-inline-values': inlineValues }">
          <div class="nice-select-value" v-for="(value, index) in list" :key="index" @click="handleValueSelected(value)">
            <div class="nice-select-value-checkbox" :class="{ 'checked': isInList(value) }">
              <svg class="check" viewBox="0 0 28 28">
                <path d="M26.109 8.844c0 0.391-0.156 0.781-0.438 1.062l-13.438 13.438c-0.281 0.281-0.672 0.438-1.062 0.438s-0.781-0.156-1.062-0.438l-7.781-7.781c-0.281-0.281-0.438-0.672-0.438-1.062s0.156-0.781 0.438-1.062l2.125-2.125c0.281-0.281 0.672-0.438 1.062-0.438s0.781 0.156 1.062 0.438l4.594 4.609 10.25-10.266c0.281-0.281 0.672-0.438 1.062-0.438s0.781 0.156 1.062 0.438l2.125 2.125c0.281 0.281 0.438 0.672 0.438 1.062z"></path>
              </svg>
            </div>
            <div class="nice-select-value-name">{{ value[valueName] }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NiceSelect",

  props: {
    value: [Array],
    list: [Array, Map],
    title: String,
    required: Boolean,
    disabled: Boolean,
    noMargin: Boolean,
    canEdit: Boolean,
    inlineValues: Boolean,
    keyName: {
      type: String,
      default: "id"
    },
    valueName: {
      type: String,
      default: "name"
    },
  },

  data () {
    return {
      innerValue: []
    }
  },

  watch: {
    value () {
      this.innerValue = this.value || [];
    }
  },

  methods: {
    isInList (value) {
      if (this.innerValue) {
        return this.innerValue.findIndex(v => v[this.keyName] == value[this.keyName]) >= 0;
      } else {
        return false;
      }
    },

    handleValueSelected (value) {
      if (this.innerValue) {
        const valueIndex = this.innerValue.findIndex(v => v[this.keyName] == value[this.keyName]);
        if (valueIndex >= 0) {
          this.innerValue.splice(valueIndex, 1);
        } else {
          this.innerValue.push(value);
        }
        this.handleChange();
      }
    },

    handleChange () {
      this.$emit("input", this.innerValue);
      this.$emit("change", this.innerValue);
    }
  },

  mounted () {
    // console.log(this.list)
    // console.log(this.value)
    this.innerValue = this.value || [];
  }
};
</script>

<style lang="scss" scoped>
.nice-select {
  .nice-select-values {

    &.nice-inline-values {
      display: flex;
      .nice-select-value {
        margin-right: 1.5rem;
      }
    }

    .nice-select-value {
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;
      cursor: pointer;

      &:hover {
        .nice-select-value-checkbox {
          background: var(--nice-hover-color);
        }
      }

      &:active {
        .nice-select-value-checkbox {
          transform: scale(0.9);
        }
      }

      .nice-select-value-checkbox {
        height: 20px;
        width: 20px;
        border-radius: var(--nice-border-radius);
        border: 1px solid var(--nice-border-color);
        margin-right: 0.5rem;
        background: var(--nice-bg);
        padding: 0 3px;

        &.checked {
          svg {
            display: block;
          }
        }

        svg {
          display: none;
          height: 100%;
          width: 100%;
          fill: var(--nice-base-color);
        }
      }

      .nice-select-value-name {
        font-size: 0.8em;
      }
    }
  }
}
</style>