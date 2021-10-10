<template>
  <button :type="type" :class="variant">{{ value }}</button>
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
    variant: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
button {
  border: none;
  border-radius: 8px;
  cursor: pointer;
  padding: 0.5rem 1.5rem;

  &.primary {
    background-color: color('tertiary', 'lightest');
    transition: background-color 0.3s ease-in;
    font-weight: bold;
    font-family: $secondary-font;
    &:hover {
      background-color: color('tertiary', 'base');
    }
  }
  &.secondary {
    background-color: transparent;
    border: 1px solid color('dark', 'lightest');
    color: color('dark', 'lightest');
    font-family: $primary-font;
  }
  &.tertiary {
    background-color: color('dark', 'lightest');
    color: color('light', 'lightest');
    border: 1px solid color('dark', 'lightest');
    font-family: $primary-font;
  }
}
</style>
