<template>
  <input :id="id" :type="type" :placeholder="placeholder" />
</template>

<script lang="ts">
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
      default: 'Digite aqui...',
    },
    type: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
input {
  border: none;
  border-radius: 10px;
  box-shadow: 2px 2px 5px color('dark', 'lightest');
  height: 42px;
  min-width: 300px;
  padding: 0.8rem;
  margin: 0.5rem 0rem;
  &:focus {
    outline: none;
  }
}
</style>
