<template>
  <form class="form-login">
    <label for="email-login">E-mail</label>
    <InputPrimary
      id="email-login"
      placeholder="Digite seu e-mail"
      type="email"
    />
    <label for="password-login">Senha</label>
    <InputPrimary
      id="password-login"
      placeholder="Digite sua senha"
      type="password"
    />
    <NuxtLink to="/dashboard">
      <Button type="submit" value="Entrar" buttonClass="primary" />
    </NuxtLink>
  </form>
</template>

<script>

</script>

<style lang="scss" scoped>
.form-login {
  display: flex;
  flex-direction: column;
  a {
    width: 100%;
    color: black;
  }
  button {
    width: 100%;
    color: color('primaryDark');
  }
  input {
    margin-bottom: 2rem;
  }
}
</style>
