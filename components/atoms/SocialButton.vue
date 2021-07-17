<template>
  <a
    class="social-button rounded-3xl"
    :href="link"
    target="blank"
    :style="cssVars"
  >
    <font-awesome-icon :icon="['fab', icon]" />
  </a>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  computed: {
    cssVars() {
      return {
        '--color': this.color,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
a {
  display: flex;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  background: var(--color);
  align-items: center;
  justify-content: center;
  svg {
    color: color('light', 'lightest');
    font-size: 1.25rem;
  }
}
</style>
