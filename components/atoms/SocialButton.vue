<template>
  <a class="social-button rounded-3xl" :href="link" target="blank">
    <font-awesome-icon :icon="['fas', 'github']" />
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
    text: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
a {
  display: block;
  padding: 1rem;
  margin-bottom: 0.75rem;
  background: #727272;
}
</style>
