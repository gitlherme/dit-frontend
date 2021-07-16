<template>
  <div class="icon-text-button-card" :style="cardVars">
    <div
      class="icon-text-button-card__content flex flex-col justify-end h-full"
    >
      <span class="icon-text-button-card__content-icon">
        <font-awesome-icon :icon="['fas', icon]" />
      </span>
      <span class="icon-text-button-card__content-title"> {{ title }} </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    title: {
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
.icon-text-button-card {
  height: 115px;
  width: 115px;
  border-radius: 0.5rem;
  background-color: var(--bg-color);
  .icon-text-button-card__content {
    padding: 1rem;
    color: color('light', 'lightest');
    z-index: 999;
    bottom: 0;
    .icon-text-button-card__content-icon {
      svg {
        font-size: 1.5rem;
      }
    }
  }
}
</style>
