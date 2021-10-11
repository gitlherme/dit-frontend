<template>
  <div class="hard-skill-item p-10 bg-gray-50 w-64 rounded-md text-center">
    <p class="hard-skill-item__title mb-2">{{ title }}</p>
    <p v-if="experienceYears > 0" class="hard-skill-item__experience-years font-light">{{ experienceYears }} anos</p>
    <p v-if="experienceYears == 0" class="hard-skill-item__experience-years font-light">Menos de um ano</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    experienceYears: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.hard-skill-item {
  background-color: color('secondaryLight', 'lightest');
  .hard-skill-item__title {
    font-weight: 700;
    font-size: 1.5rem;
  }
}

</style>
