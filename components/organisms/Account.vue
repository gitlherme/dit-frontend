<template>
  <div class="account">
    <div class="account-avatar w-full flex items-center flex-column p-12">
      <img :src="$user.avatar ? $user.avatar.url : 'https://caocidadao.com.br/wp-content/uploads/2019/09/user.png'" :alt="`Foto de ${$user.name}`" class="w-48 h-48 rounded-full">
      <div class="account-change-avatar flex flex-column text-center mt-3">
        <label for="avatar" class="text-indigo-600 cursor-pointer">Alterar foto de perfil</label>
        <input type="file" id="avatar" @input="updateAvatar" class="hidden">
      </div>
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