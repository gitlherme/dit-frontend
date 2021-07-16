<template>
  <div class="job-tag" :style="cssVars">
    <div class="job-tag__status">{{ status }}</div>
    <div class="job-tag__localization">{{ localization }}</div>
  </div>
</template>

<script>
export default {
  props: {
    status: {
      type: String,
      required: true,
    },
    localization: {
      type: String,
      required: false,
      default: 'Remoto',
    },
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    cssVars() {
      if (this.type === 'approved') {
        return { '--light-color': '#2ED47A', '--dark-color': '#1ABF65' }
      } else if (this.type === 'pending') {
        return { '--light-color': '#E5A11E', '--dark-color': '#CB8010' }
      } else if (this.type === 'selected') {
        return { '--light-color': '#00A8E8', '--dark-color': '#0297C5' }
      } else {
        return { '--light-color': '#C4C4C4', '--dark-color': '#C4C4C4' }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.job-tag {
  display: flex;
  font-weight: 300;
  .job-tag__status {
    padding: 0.5rem 1rem;
    background-color: var(--light-color);
    color: color('dark', 'lightest');
    border-radius: 0.5rem 0 0 0.5rem;
  }
  .job-tag__localization {
    text-transform: uppercase;
    padding: 0.5rem 1rem;
    background-color: var(--dark-color);
    color: rgba(color('dark', 'lightest'), 0.5);
    border-radius: 0rem 0.5rem 0.5rem 0;
  }
}
</style>
