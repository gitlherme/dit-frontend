<template>
  <button :type="type" :class="buttonClass">{{ value }}</button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    type: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    buttonClass: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
button {
  border: none;
  border-radius: 10px;
  height: 42px;
  font-family: $secondary-font;
  font-weight: bold;
  cursor: pointer;

  &.primary {
    background-color: color('tertiary', 'lightest');
    transition: background-color 0.3s ease-in;
    &:hover {
      background-color: color('tertiary', 'base');
    }
  }
}
</style>
