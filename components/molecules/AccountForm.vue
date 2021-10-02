<template>
  <div class="container col-span-12">
  <form class="account-form" @submit.prevent="updateUser()">
    <h3>Informações Pessoais</h3>
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
    <hr />
    <h3>Redes Sociais</h3>
    <div class="form-group">
      <label for="social-linkedin">Linkedin</label>
      <input type="social-linkedin"
        v-model="user.socials.linkedinUrl"
        class="form-control"
        id="social-linkedin"
        placeholder="Seu linkedin">
    </div>
    <div class="form-group">
      <label for="social-github">Github</label>
      <input type="social-github"
        v-model="user.socials.githubUrl"
        class="form-control"
        id="social-github"
        placeholder="Seu github">
    </div>
    <div class="form-group">
      <label for="social-twitter">Twitter</label>
      <input type="social-twitter"
        v-model="user.socials.twitterUrl"
        class="form-control"
        id="social-twitter"
        placeholder="Seu twitter">
    </div>

    <Button type="submit" value="Salvar" buttonClass="primary" />
  </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { users, userSocials } from '@/store'
export default Vue.extend({
  data() {
    return {
      user: {
        username: users.$single.username,
        name: users.$single.name,
        bio: users.$single.bio,
        socials: {
          linkedinUrl: users.$single.socials?.linkedin_url,
          githubUrl: users.$single.socials?.github_url,
          twitterUrl: users.$single.socials?.twitter_url
        }
      }
    }
  },
  methods: {
    async updateUser() {
      await users.update(this.user)
      await userSocials.create({ ...this.user.socials })
    }
  }
})
</script>