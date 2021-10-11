<template>
  <div class="experience-item grid grid-cols-12 gap-4 mb-4">
    <div class="experience-item__date flex flex-col col-span-2 items-end">
      <span class="span-bold">{{ fromYear }} - {{ toYear }}</span>
      <span class="uppercase">{{ fromMonth }} - {{ toMonth }}</span>
    </div>
    <div class="experience-item__resume col-span-10">
      <span class="span-bold uppercase">{{ company }} </span>
      <span>- {{ role }} </span>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fromYear: {
      type: String,
    },
    toYear: {
      type: String,
    },
    fromMonth: {
      type: String,
    },
    toMonth: {
      type: String,
    },
    role: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
