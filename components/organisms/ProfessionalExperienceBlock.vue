<template>
  <div class="professional-experience">
    <h2 class="mb-4">Experiências</h2>
    <div class="professional-experience__block light-block">
      <div v-for="experience in $user.previewExperiences" :key="experience.id">
        <ExperienceItem
          fromMonth="fev"
          fromYear="2020"
          toMonth="ago"
          toYear="2020"
          :role="experience.role"
          :company="experience.company"
          :description="experience.description"
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
