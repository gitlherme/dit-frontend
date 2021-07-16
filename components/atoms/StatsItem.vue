<template>
  <div class="stats-item">
    <div class="stats-item__number" :style="cssVars">{{ number }}</div>
    <div class="stats-item__label">{{ label }}</div>
  </div>
</template>

<script>
export default {
  props: {
    label: { type: String, required: true },
    number: { type: String, required: true },
    color: { type: String, required: true },
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
.stats-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  gap: 1rem;
  font-size: 1.375rem;
  .stats-item__number {
    padding: 0.5rem 2rem;
    border-radius: 0.5rem;
    border: 1px solid var(--color);
    color: var(--color);
    font-weight: 700;
  }
  .stats-item__label {
    font-weight: 300;
  }
}
</style>
