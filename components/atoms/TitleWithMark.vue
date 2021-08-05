<template>
  <h1>{{ text }}</h1>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
h1 {
  z-index: 999;
  &::after {
    content: '\00a0';
    font-size: 3.5rem;
    padding: 0rem 6rem;
    background-color: color('primaryLight', 'lightest');
    position: relative;
    top: -2rem;
    left: -15%;
    z-index: -999;
  }
}
</style>
