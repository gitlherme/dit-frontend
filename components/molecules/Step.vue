<template>
    <div class="step grid grid-cols-12 gap-5 mt-16">
      <div class="left-step text-right col-span-6">
        <h4>{{ titleLeft }}</h4>
        <p>{{ textLeft }}</p>
      </div>
      <StepCircle :class="`${withLine ? 'with-line' : 'without-line' } ${variation} col-span-1`"/>
      <div class="right-step col-span-5">
        <h4>{{ titleRight }}</h4>
        <p>{{ textRight }}</p>
      </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    withLine: {
      type: Boolean,
      required: false,
      default: false,
    },
    variation: {
      type: String,
      required: false,
      default: 'default',
    },
    titleLeft: {
      type: String,
    },
    textLeft: {
      type: String,
    },
    titleRight: {
      type: String,
    },
    textRight: {
      type: String,
    },
    isLastStep: {
      type: Boolean,
      required: false,
      default: false,
    }
  }
})
</script>

<style lang="scss" scoped>
  .step {
    max-width: 700px;
  }
</style>