<template>
  <div>
    <form
      class="form-register px-20 py-32 rounded-2xl flex flex-col"
      @submit.prevent="registerUser"
    >
      <h1 class="mb-3">Crie uma nova conta</h1>
      <small class="mb-3">
        Vamos criar sua conta! Insira seu e-mail abaixo.
      </small>
      <label for="email-register">E-mail</label>
      <input
        id="emailRegister"
        v-model="form.email"
        class="px-3 py-2 mb-3 rounded-lg"
        type="text"
        name=""
      />
      <Button type="submit" value="Cadastrar" buttonClass="primary" />
      <NuxtLink to="/login" class="mt-3 mb-3 text-center">
        Já possuo uma conta
      </NuxtLink>
    </form>
    <ModalRegister :visible="modal.isVisible" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        redirectUrl: 'http://localhost:3000/register/finish',
        email: '',
      },
      modal: {
        isVisible: false,
      },
    }
  },
  methods: {
    async registerUser() {
      await this.$axios.$post('/api/users/register', this.form, {
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
