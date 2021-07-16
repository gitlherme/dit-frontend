<template>
  <div class="square-card" :style="cardVars">
    <div class="square-card__content">
      <span class="square-card__content-first-line">{{ firstLine }}</span>
      <div class="square-card__content-second-line">{{ secondLine }}</div>
      <span class="square-card__content-third-line span-bold">
        {{ thirdLine }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    firstLine: {
      type: String,
      required: true,
    },
    secondLine: {
      type: String,
      required: true,
    },
    thirdLine: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  computed: {
    cardVars() {
      return {
        '--bg-color': this.color,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.square-card {
  border-radius: 0.5rem;
  background-color: var(--bg-color);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  .square-card__content {
    padding: 1rem;
    color: color('light', 'lightest');
    .square-card__content-second-line {
      font-size: 6rem;
      font-weight: 700;
    }
  }
}
</style>
