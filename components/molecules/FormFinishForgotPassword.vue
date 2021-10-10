<template>
  <div>
    <form
      class="form-forgot-password px-10 py-32 rounded-2xl flex flex-col"
      @submit.prevent="updatePassword"
    >
      <h1 class="mb-3">Criar nova senha</h1>
      <small class="mb-3"> Digite sua nova senha abaixo. </small>
      <label for="password">Nova senha</label>
      <input
        id="password"
        v-model="form.password"
        class="px-3 py-2 mb-3 rounded-lg"
        type="password"
      />

      <label for="passwordConfirmation">Confirme sua nova senha</label>
      <input
        id="passwordConfirmation"
        v-model="form.passwordConfirmation"
        class="px-3 py-2 mb-3 rounded-lg"
        type="password"
      />
      <Button type="submit" value="Redefinir Senha" variant="primary" />
      <NuxtLink to="/login" class="mt-3 mb-3 text-center">
        Fazer login
      </NuxtLink>
    </form>
    <ModalRegister
      title="Sua senha foi redefinida!"
      content="A redefinição da sua senha foi finalizada. Clique no botão abaixo para fazer login."
      redirectTo="/login"
      icon="check-circle"
      buttonText="Fazer login"
      :visible="modal.isVisible"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        key: this.$route.params.id,
        password: '',
        passwordConfirmation: '',
      },
      modal: {
        isVisible: false,
      },
    }
  },

  methods: {
    async updatePassword() {
      await this.$axios.$put('/api/forgot-password', this.form)
      this.showModal()
    },

    showModal() {
      this.modal.isVisible = true
    },
  },
}
</script>

<style lang="scss" scoped>
.form-forgot-password {
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
