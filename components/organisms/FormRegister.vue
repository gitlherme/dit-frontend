<template>
  <form class="form-register">
    <label for="email-register">E-mail</label>
    <InputPrimary
      id="email-register"
      placeholder="Digite seu e-mail"
      type="email"
    />
    <label for="password-register">Senha</label>
    <InputPrimary
      id="password-register"
      placeholder="Digite sua senha"
      type="password"
    />
    <Button type="submit" value="Registrar" buttonClass="primary" />
  </form>
</template>

<style lang="scss" scoped>
.form-register {
  display: flex;
  flex-direction: column;
  input {
    margin-bottom: 2rem;
  }
}
</style>
