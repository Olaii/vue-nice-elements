<template>
  <div class="nice-component nice-file" :class="{ 'disabled': disabled, 'no-margin': noMargin }">
    <div class="input-group" :class="{ 'validation-error': errorMessage }">
      <div class="nice-label" v-if="title">{{ title }}<span v-if="required">*</span></div>
      <div class="form-group">
        <input
          :name="name" 
          type="file" 
          ref="fileInput"
          class="file-input"
          :required="required"
          :disabled="disabled"
          @change="filesChange($event.target.name, $event.target.files)"
          @dragenter="dragenter"
          @dragleave="dragleave"
          @dragend="dragend"
        />
        <input 
          v-model="name" 
          :required="true" 
          placeholder="File name..." 
          class="file-name" @input="nameChanged" 
          v-if="file"
          :disabled="canEdit"
        />
        <div class="drop-area" :class="{ 'dragging': dragging }" v-else>Click to select file</div>
        <button type="button" class="btn-default btn-close" @click="clear" v-if="file">
          <svg viewBox="0 0 24 24">
            <path d="M13.4 12l5.3-5.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-5.3 5.3-5.3-5.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5.3 5.3-5.3 5.3c-0.4 0.4-0.4 1 0 1.4 0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l5.3-5.3 5.3 5.3c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4l-5.3-5.3z"></path>
          </svg>
        </button>
      </div>
      <div class="error-message" v-if="errorMessage">{{ errorMessage }}</div>
    </div>
  </div>
</template>



<script>
export default {
  name: "NiceFile",

  props: {
    title: String,
    required: Boolean,
    disabled: Boolean,
    noMargin: Boolean,
    canEdit: Boolean
  },

  data () {
    return {
      dragging: false,
      files: null,
      file: null,
      name: null,
      errorMessage: null
    }
  },

  methods: {
    filesChange (name, files) {
      this.dragging = false
      this.files = files
      if (this.files.length > 0) {
        this.file = this.files[0]
        this.name = this.files[0].name
      }
      this.handleChange()
    },

    clear () {
      const input = this.$refs.fileInput
      input.type = 'text'
      input.type = 'file'
      this.files = null
      this.file = null
      this.name = null
      this.$emit('input', null)
      this.$emit('change', null)
    },

    nameChanged () {
      this.handleChange()
    },

    handleChange () {
      this.$emit('input', {
        name: this.name,
        file: this.file
      })
      this.$emit('change', {
        name: this.name,
        file: this.file
      })
    },

    dragenter () {
      this.dragging = true
    },

    dragleave () {
      this.dragging = false
    },

    dragend () {
      this.dragging = false
    }
  }
};
</script>



<style lang="scss" scoped>
.form-group {
  position: relative;

  input {
    text-align: center;
    background: var(--nice-bg);

    &:focus {
      outline: 0;
      background: var(--nice-bg-focus);
    }

    &:hover {
      background: var(--nice-bg-hover);
    }
  }

  .drop-area {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    // border-radius: var(--nice-border-radius);
    // background: var(--nice-bg);
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1em;
    background: var(--nice-bg);
    border-radius: var(--nice-border-radius);
    border: var(--nice-border);
    font-family: inherit;

    &.dragging {
      border: 2px dashed var(--nice-base-color);
    }

    &:focus {
      outline: 0;
      background: var(--nice-bg-focus);
    }

    &:hover {
      background: var(--nice-bg-hover);
    }
  }

  .file-input {
    min-height: 100px;
    width: 100%;
    padding: 2rem;
    border: 2px solid var(--nice-bg);
    z-index: 1;
    opacity: 0;
    cursor: pointer;
  }

  .file-name {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    height: 30px;
    width: 30px;
    background: transparent;
    border: 0 none;
    z-index: 4;
  }
}

.validation-error {
  label {
    color: var(--nice-error-color);
  }
  .error-message {
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 0.8em;
    color: var(--nice-error-color);
  }
}
</style>