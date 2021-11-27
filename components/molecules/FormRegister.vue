<template>
  <div>
    <form
      class="form-register px-8 md:px-20 py-32 rounded-2xl flex flex-col"
      @submit.prevent="registerUser"
    >
      <h1 class="mb-3">Crie uma nova conta</h1>
      <small class="mb-3">
        Vamos criar sua conta! Insira seu e-mail abaixo.
      </small>
      <label for="email-register">E-mail</label>
      <input
        id="emailRegister"
        v-model="email"
        class="px-3 py-2 mb-3 rounded-lg"
        type="text"
        name=""
      />
      <Button type="submit" value="Cadastrar" variant="primary" />
      <NuxtLink to="/login" class="mt-3 mb-3 text-center">
        Já possuo uma conta
      </NuxtLink>
    </form>
    <ModalRegister :visible="modal.isVisible" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { userRegister } from '@/store'
export default Vue.extend({
  data() {
    return {
      email: '',
      modal: {
        isVisible: false,
      }
    }
  },
  methods: {
    async registerUser() {
      try {
        await userRegister.create({ email: this.email, redirectUrl: "http://localhost:3000/register" })
        this.email = ''
        this.modal.isVisible = true

      } catch {
        alert('Oops! Algo deu errado')
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
