<template>
  <div>
    <form
      class="form-register px-8 md:px-20 py-32 rounded-2xl flex flex-col"
      @submit.prevent="updateUser"
    >
      <h1 class="mb-3">Continuar cadastro</h1>
      <small class="mb-3">Vamos finalizar sua conta!</small>

      <label for="email-register">E-mail</label>
      <input
        id="email"
        v-model="user.email"
        class="px-3 py-2 mb-3 rounded-lg"
        type="text"
        name="email"
        readonly
      />

      <label for="name-register">Nome</label>
      <input
        id="name"
        v-model="user.name"
        class="px-3 py-2 mb-3 rounded-lg"
        type="text"
        name="name"
      />

      <label for="password-register">Senha</label>
      <input
        id="password"
        v-model="user.password"
        class="px-3 py-2 mb-3 rounded-lg"
        type="password"
        name="password"
      />

      <label for="password-confirmation-register">Confirme sua senha</label>
      <input
        id="password-confirmation"
        v-model="user.passwordConfirmation"
        class="px-3 py-2 mb-3 rounded-lg"
        type="password"
        name="password-confirmation"
      />

      <Button type="submit" value="Finalizar cadastro" variant="primary" />
      <NuxtLink to="/login" class="mt-3 mb-3 text-center">
        Já possuo uma conta
      </NuxtLink>
    </form>
    <ModalRegister
      title="Seja bem vinde!"
      content="Sua conta foi criada. Clique no botão abaixo para fazer login."
      redirectTo="/login"
      icon="user-check"
      buttonText="Fazer login"
      :visible="modal.isVisible"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { userRegister } from '@/store'
export default Vue.extend({
  data () {
    return {
      user: {
        email: userRegister.$user.email,
        name: '',
        password: '',
        passwordConfirmation: ''
      },
      modal: {
        isVisible: false,
      }
    }
  },
  methods: {
    async updateUser() {
      try {
         await userRegister.update({
          key: this.$route.params.key,
          ...this.user
         })
         this.modal.isVisible = true
      } catch (error) {
        alert('Aconteceu algo errado.')
      }
    }
  }

})
</script>

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
