<template>
  <div class="image-card" :style="cardVars">
    <NuxtLink to="/noticia-x">
      <div class="image-card__content">
        <span class="image-card__content-tag uppercase">{{ tag }}</span>
        <p class="image-card__content-title p-bold">{{ title }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    tag: {
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
        '--bg-image': `url(${this.src})`,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.image-card {
  border-radius: 0.5rem;
  height: 100%;
  min-height: 22.5rem;
  background-image: var(--bg-image);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
  }
  .image-card__content {
    background-color: rgba(color('dark', 'base'), 0.3);
    border-radius: 0 0 0.5rem 0.5rem;
    padding: 1rem;
    color: color('light', 'lightest');
    z-index: 999;
    bottom: 0;
  }
}
</style>
