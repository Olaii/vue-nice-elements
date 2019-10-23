<template>
  <div class="nice-progress-circle" :title="amount + ' / ' + total">
    <div class="progress" :style="{ '--percentage': ((amount/total)*100) + '%' }">
    </div>
  </div>
</template>



<script>
export default {
  name: "NiceProgressCircle",

  props: {
    amount: {
      type: Number,
      default: 0
    },
    total: {
      type: Number,
      default: 0
    }
  }
};
</script>



<style lang="scss" scoped>
.nice-progress-circle {
  --size: 20px;
  --percentage: 0%;
  height: var(--size);
  width: var(--size);
  border-radius: 50%;
  background: var(--nice-bg);
  position: relative;

  .progress {
    position: absolute;
    top: 0;
    left: 0;
    height: var(--size);
    width: var(--size);
    border-radius: 50%;
    transform: rotate(-90deg);
    background: conic-gradient(from 90deg, var(--nice-base-color) 0%, var(--nice-base-color) var(--percentage), transparent var(--percentage), transparent 100%);
  }
}
</style>