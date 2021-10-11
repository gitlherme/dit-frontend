<template>
  <div class="technical-knowledge">
    <h2 class="mb-5 text-center">Conhecimento Técnico</h2>
    <div class="flex gap-6 justify-center">
      <div v-for="hardSkill in $user.hardSkills" :key="hardSkill.id">
        <HardSkillItem :title="hardSkill.name" :experienceYears="hardSkill.experience_years" />
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
  mounted() {
    console.log(this.$user)
  }
})
</script>

<style lang="scss" scoped>
.technical-knowledge {
  .technical-knowledge__block {
    padding: 0;
    margin: 0;
    .technical-knowledge__block-bg {
      img {
        border-radius: 0.5rem 0 0 0.5rem;
      }
    }
  }
}
</style>
