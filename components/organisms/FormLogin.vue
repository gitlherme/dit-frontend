<template>
  <form class="form-login">
    <label for="email-login">E-mail</label>
    <InputPrimary
      id="email-login"
      placeholder="Digite seu e-mail"
      type="text"
    />
    <label for="password-login">Senha</label>
    <InputPrimary
      id="password-login"
      placeholder="Digite sua senha"
      type="password"
    />
    <Button type="submit" value="Entrar" buttonClass="primary" />
  </form>
</template>

<style lang="scss" scoped>
.form-login {
  display: flex;
  flex-direction: column;
  input {
    margin-bottom: 2rem;
  }
}
</style>
