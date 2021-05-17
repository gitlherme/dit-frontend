<template>
  <div class="login-template">
    <h1>Entrar na plataforma</h1>
    <FormLogin />
    <NuxtLink to="/forgot-password"> Esqueceu a senha? </NuxtLink>
    <NuxtLink to="/register"> Registrar-se </NuxtLink>
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
  a {
    text-align: center;
    margin: 0.5rem 0;
    text-decoration: none;
    color: color('primaryDark');
  }
  h1 {
    font-family: $secondary-font;
  }
}
</style>
