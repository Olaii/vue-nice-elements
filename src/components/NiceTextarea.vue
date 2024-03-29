<template>
  <textarea @focus="resize" v-model="val" :style="computedStyles"></textarea>
</template>


<script>
export default {
  name: 'NiceTextarea',

  created () {
    this.updateVal() // fill val with initial value passed via the same name prop
  },

  mounted () {
    this.resize() // perform initial height adjustment
  },

  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    autosize: {
      type: Boolean,
      default: true
    },
    minHeight: {
      type: [Number],
      default: null
    },
    maxHeight: {
      type: [Number],
      default: null
    },
    important: {
      type: [Boolean, Array],
      default: false
    }
  },

  data () {
    return {
      // data property for v-model binding with real textarea tag
      val: null,
      // works when content height becomes more then value of the maxHeight property
      maxHeightScroll: false
    }
  },

  computed: {
    computedStyles () {
      let objStyles = {}

      if (this.autosize) {
        objStyles.resize = !this.isResizeImportant ? 'none' : 'none !important'
        if (!this.maxHeightScroll) {
          objStyles.overflow = !this.isOverflowImportant ? 'hidden' : 'hidden !important'
        }
      }

      return objStyles
    },

    isResizeImportant () {
      const imp = this.important
      return imp === true || (Array.isArray(imp) && imp.includes('resize'))
    },

    isOverflowImportant () {
      const imp = this.important
      return imp === true || (Array.isArray(imp) && imp.includes('overflow'))
    },

    isHeightImportant () {
      const imp = this.important
      return imp === true || (Array.isArray(imp) && imp.includes('height'))
    }
  },

  methods: {
    /*
     * Update local val with prop value
    */
    updateVal () {
      this.val = this.value
    },

    /*
     * Auto resize textarea by height
    */
    resize: function () {
      const important = this.isHeightImportant ? 'important' : ''

      this.$el.style.setProperty('height', 'auto', important)

      let contentHeight = this.$el.scrollHeight + 1

      if (this.minHeight) {
        contentHeight = contentHeight < this.minHeight ? this.minHeight : contentHeight
      }

      if (this.maxHeight) {
        if (contentHeight > this.maxHeight) {
          contentHeight = this.maxHeight
          this.maxHeightScroll = true
        } else {
          this.maxHeightScroll = false
        }
      }

      const heightVal = contentHeight + 'px'
      this.$el.style.setProperty('height', heightVal, important)
      return this
    }
  },

  watch: {
    /*
     * Update val from prop when changed in parent
    */
    value () {
      this.updateVal()
    },

    /*
     * Emit input event as in https://vuejs.org/v2/guide/components.html#Form-Input-Components-using-Custom-Events
    */
    val (val) {
      this.$nextTick(this.resize)
      this.$emit('input', val)
    }
  }
}
</script>


<style lang="scss" scoped>
textarea {
  border: 0 none;
}
</style>