<template>
  <div class="nice-loading" :class="[ addClass, { 'fulldiv': fullDiv } ]" :style="{ '--loader-color': color, '--loader-size': size ? size + 'px' : '' }">
    <svg class="loader" viewBox="0 0 50 50">
      <path d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"></path>
    </svg>
    <p v-if="message">{{ message }}</p>
  </div>
</template>



<script>
export default {
  name: 'NiceLoading',
  props: {
    message: String,
    fullDiv: Boolean,
    color: String,
    size: Number,
    addClass: String
  }
}
</script>



<style lang="scss" scoped>
.nice-loading {
  --loader-color: var(--nice-base-color);
  --loader-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &.fulldiv {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &.table {
    border-top: 1px solid var(--nice-border-color);
    padding: 0.5rem;
  }

  &.table-outside {
    --loader-size: 30px;
    margin-top: -1.5rem;
    margin-bottom: 1.5rem;
  }

  p {
    margin: 0;
    margin-top: 0.3rem;
    font-size: 0.8em;
    color: var(--font-color);
    opacity: 0.3;
    font-weight: bold;
  }

  .loader {
    height: var(--loader-size);
    width: var(--loader-size);
    animation: spin 0.5s infinite;
    animation-delay: 0s;
    fill: var(--loader-color);
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes lds-ripple {
  0% {
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
}

@keyframes spin {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
}
</style>

