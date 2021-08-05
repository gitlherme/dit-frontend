<template>
  <div class="tag-item" :style="cssVars">
    <span class="uppercase">{{ label }}</span>
  </div>
</template>

<script>
export default {
  props: {
    label: {
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
.tag-item {
  padding: 0.5rem 1.5rem;
  background-color: var(--color);
  border-radius: 0.5rem;
}
</style>
