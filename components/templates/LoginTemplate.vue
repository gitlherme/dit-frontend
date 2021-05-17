<template>
  <div class="login-template">
    <h1>Entrar na plataforma</h1>
    <FormLogin />
    <span>Esqueceu a senha?</span>
    <span>Registrar-se</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.login-template {
  display: flex;
  flex-direction: column;
  color: color('primaryDark');
  span {
    text-align: center;
    margin: 0.5rem 0;
  }
  h1 {
    font-weight: bold;
    font-size: 1.5rem;
    text-align: center;
    font-family: $secondary-font;
  }
}
</style>
