<template>
  <div class="profile-template grid grid-cols-12 col-span-12">
    <div class="col-span-12 mt-12 row-span-1">
      <HeaderProfile />
    </div>
    <div class="col-span-12 grid grid-cols-12 gap-4 mt-36">
      <div class="col-span-6">
        <ProfessionalExperienceBlock />
      </div>
      <div class="col-span-6">
        <EducationExperienceBlock />
      </div>
    </div>
    <div class="col-span-12 mt-36">
      <TechnicalKnowledgeBlock />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
