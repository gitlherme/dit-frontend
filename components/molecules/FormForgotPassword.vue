<template>
  <div>
    <form
      class="form-forgot-password px-10 py-32 rounded-2xl flex flex-col"
      @submit.prevent="sendNewPassword"
    >
      <h1 class="mb-3">Recuperar senha</h1>
      <small class="mb-3">
        Digite seu e-mail abaixo para receber um e-mail de redefinição.
      </small>
      <label for="email-register">E-mail</label>
      <input
        id="emailRegister"
        v-model="form.email"
        class="px-3 py-2 mb-3 rounded-lg"
        type="text"
        name=""
      />
      <Button type="submit" value="Receber e-mail" variant="primary" />
      <NuxtLink to="/login" class="mt-3 mb-3 text-center">
        Fazer login
      </NuxtLink>
    </form>
    <ModalRegister
      title="E-mail enviado!"
      content="Você recebeu um e-mail com a redefinição de senha. Cheque sua caixa de entrada."
      redirectTo="/login"
      :visible="modal.isVisible"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        redirectUrl: 'http://localhost:3000/forgot-password/finish',
        email: '',
      },
      modal: {
        isVisible: false,
      },
    }
  },
  methods: {
    async sendNewPassword() {
      await this.$axios.$post('/api/forgot-password', this.form, {
        headers: { 'Content-Type': 'application/json' },
      })
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
