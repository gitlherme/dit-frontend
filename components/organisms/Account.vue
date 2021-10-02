<template>
  <div class="account">
    <div class="account-avatar">
      <img :src="$user.avatar ? $user.avatar.url : 'https://caocidadao.com.br/wp-content/uploads/2019/09/user.png'" :alt="`Foto de ${$user.name}`">
      <label for="avatar">Alterar foto de perfil</label>
      <input type="file" id="avatar" @input="updateAvatar">
    </div>
    <AccountForm />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { users, userAvatar } from '@/store'
export default Vue.extend({
  computed: {
    $user() {
      return users.$single
    }
  },
  methods: {
    async updateAvatar(event: any) {
      const file = event.target.files[0]
      await userAvatar.update({ file })
    }
  }
})
</script>