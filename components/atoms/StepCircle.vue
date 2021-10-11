<template>
  <span :class="`step-circle ${isFirst ? 'is-first' : 'not-first'} ${ isLast ? 'is-last' : 'not-last'} ${variant}`">{{ step }}</span>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    step: {
      type: Number,
      required: true
    },
    isFirst: {
      type: Boolean,
      required: false,
      default: false
    },
    isLast: {
      type: Boolean,
      required: false,
      default: false
    },
    variant: {
      type: String,
      required: true,
    }
  }
})
</script>

