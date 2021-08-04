<template>
  <form class="form-register px-20 py-32 rounded-2xl flex flex-col">
    <h1 class="mb-3">Entrar na plataforma</h1>
    <label for="email-register">E-mail</label>
    <input id="" class="px-3 py-2 mb-3 rounded-lg" type="text" name="" />
    <label for="email-register">Senha</label>
    <input id="" class="px-3 py-2 mb-3 rounded-lg" type="text" name="" />
    <Button type="submit" value="Cadastrar" buttonClass="primary" />
    <NuxtLink to="/forgot-password" class="mt-3 mb-2 text-center">
      Esqueci minha senha
    </NuxtLink>
    <NuxtLink to="/register" class="mb-3 text-center">
      Quero me cadastrar
    </NuxtLink>
  </form>
</template>

<style lang="scss" scoped>
.form-register {
  h1 {
    font-size: 1.5em;
    margin-bottom: 0;
    margin-top: 0;
    line-height: initial;
  }
  border: 1px solid color('primaryLight', 'lightest');
  background: rgba(176, 190, 198, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 10px;
  input {
    border: 1px solid rgba(176, 190, 198, 1);
  }
}
</style>
