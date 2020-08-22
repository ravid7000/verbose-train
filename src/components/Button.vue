<template>
  <button :class="[size && size]" v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    size: {
      default: '',
      type: String
    }
  }
}
</script>

<style scoped>
button {
  display: inline-block;
  border-width: 2px;
  font-weight: 700;
  font-size: 1rem;
  padding: 10px 26px;
  border-color: transparent;
  background-color: #ec635a;
  color: #ffffff;
  border-radius: 4px;
  cursor: pointer;
  transition: all 300ms;
}

button.sm {
  font-size: 0.8rem;
  padding: 5px 12px;
}

button:focus {
  outline: none;
}
</style>
