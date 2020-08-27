<template>
  <div class="nice-progress" :title="amount + ' / ' + total">
    <div class="text">{{ amount }} / {{ total }}</div>
    <div class="progress" :style="{ 'width': ((amount/total)*100) + '%' }">
      <div class="text" :style="{ 'width': elementWidth + 'px' }">{{ amount }} / {{ total }}</div>
    </div>
  </div>
</template>



<script>
export default {
  name: "NiceProgress",

  props: {
    amount: {
      type: Number,
      default: 0
    },
    total: {
      type: Number,
      default: 0
    }
  },

  data () {
   return {
     elementWidth: 0
    }
  },

  mounted () {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  },

  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },

  methods: {
    handleResize () {
      this.elementWidth = this.$el.offsetWidth
    }
  }
};
</script>



<style lang="scss" scoped>
.nice-progress {
  --height: 10px;
  position: relative;
  background: var(--background-color);
  border-radius: var(--nice-border-radius);
  overflow: hidden;
  height: var(--height);
  line-height: var(--height);
  font-size: 0.6em;
  color: var(--nice-font-color);
  text-align: center;

  .text {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .progress {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: var(--nice-base-color);
    border-radius: var(--nice-border-radius);
    color: white;
    overflow: hidden;
  }
}
</style>