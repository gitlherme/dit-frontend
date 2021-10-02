<template>
  <div class="container col-span-12">
    <form class="edit-profile-form" @submit.prevent="updateUser()">
    <div class="form-group">
      <label for="username">Username</label>
      <input type="text" class="form-control" id="username" v-model="user.username" placeholder="Seu nome de usuário">
    </div>
    <div class="form-group">
      <label for="name">Nome</label>
      <input type="text" class="form-control" id="name" v-model="user.name" placeholder="Seu nome completo">
    </div>
    <div class="form-group">
      <label for="bio">Bio</label>
      <textarea class="form-control" id="bio" rows="3" v-model="user.bio" placeholder="Um pouco sobre voce"></textarea>
    </div>
    <button type="submit">
      Salvar
    </button>
  </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { userMain } from '@/store'
export default Vue.extend({
  data() {
    return {
      user: {
        ...userMain.$user
      }
    }
  }
})
</script>