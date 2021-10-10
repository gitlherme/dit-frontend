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

    <Button type="submit" value="Entrar" variant="primary" />
    <NuxtLink to="/forgot-password" class="mt-3 mb-2 text-center">
      Esqueci minha senha
    </NuxtLink>
    <NuxtLink to="/register" class="mb-3 text-center">
      Quero me cadastrar
    </NuxtLink>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import { auth } from '@/store'
export default Vue.extend({
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      wrongPassword: false
    }
  },
  methods: {
    async authUser () {
      try {
        await auth.create({
          email: this.form.email,
          password: this.form.password
        })
        this.$router.push('/dashboard')
      } catch (error) {
        this.wrongPassword = true
      }
    }
  }
})
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
