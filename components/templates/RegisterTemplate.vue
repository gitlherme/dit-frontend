<template>
  <div class="register-template">
    <NuxtLink to="/login" class="back-to-login">
      <font-awesome-icon :icon="['fas', 'home']" /> Voltar
    </NuxtLink>
    <h1>Registre-se na plataforma</h1>
    <FormRegister />
  </div>
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
.register-template {
  margin-top: 2rem;
  .back-to-login {
    display: flex;
    align-items: center;
    color: color('primaryDark');
    text-decoration: none;
    svg {
      margin-right: 0.5rem;
    }
  }
  h1 {
    font-family: $secondary-font;
  }
}
</style>
