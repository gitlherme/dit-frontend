<template>
  <form
    class="form-login px-20 py-32 rounded-2xl flex flex-col"
    @submit.prevent="authUser"
  >
    <h1 class="mb-3">Entrar na plataforma</h1>

    <label for="email-register">E-mail</label>
    <input
      id="email"
      v-model="form.email"
      class="px-3 py-2 mb-3 rounded-lg"
      type="text"
    />

    <label for="email-register">Senha</label>
    <input
      id="password"
      v-model="form.password"
      class="px-3 py-2 mb-3 rounded-lg"
      type="password"
    />
    <small v-if="wrongPassword">Senha incorreta! </small>

    <Button type="submit" value="Entrar" buttonClass="primary" />
    <NuxtLink to="/forgot-password" class="mt-3 mb-2 text-center">
      Esqueci minha senha
    </NuxtLink>
    <NuxtLink to="/register" class="mb-3 text-center">
      Quero me cadastrar
    </NuxtLink>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      wrongPassword: false,
    }
  },
  methods: {
    async authUser() {
      try {
        const response = await this.$axios.$post('/api/auth', this.form, {
          headers: { 'Content-Type': 'application/json' },
        })
        const token = `${response.type} ${response.token}`
        const tokenExpires = response.expires_at
        localStorage.setItem('token', token)
        localStorage.setItem('token_expires', tokenExpires)
        this.$router.push('/dashboard')
      } catch (e) {
        if (e.status === 400) {
          this.wrongPassword = true
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.form-login {
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
