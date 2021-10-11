<template>
  <div class="education-experience">
    <h2 class="mb-4">Educação</h2>
    <div class="education-experience__block light-block">
      <div v-for="education in $user.educations" :key="education.id">
        <ExperienceItem
          fromMonth="fev"
          fromYear="2020"
          toMonth="ago"
          toYear="2020"
          :role="education.degree.toUpperCase()"
          :company="education.school"
          :description="education.description"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { users } from '@/store'
export default Vue.extend({
  computed: {
    $user() {
      return users.$single
    }
  },
})
</script>

<style lang="scss" scoped></style>
