<template>
  <img :src="src" class="rounded-lg" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
  },
}
</script>
