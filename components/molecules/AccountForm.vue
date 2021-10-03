<template>
  <div class="container col-span-12">
  <form class="account-form" @submit.prevent="updateUser()">
    <div class="account-form__personal-information mb-5">
      <h3 class="mb-3">Informações Pessoais</h3>
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
        <textarea class="form-control" id="bio" rows="6" v-model="user.bio" placeholder="Um pouco sobre voce"></textarea>
      </div>
    </div>
    <div class="account-form__social-media mb-5">
      <h3 class="mb-3">Redes Sociais</h3>
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
    </div>

    <div class="account-form__skills">
      <h3 class="mb-3">Habilidades</h3>
      <div class="form-group">
        <label for="skills">Habilidades</label>
        <input type="text"
          v-model="user.skills"
          class="form-control"
          id="skills"
          placeholder="Habilidades">
      </div>
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
        },
        hardSkills: [],
        softSkills: []
      }
    }
  },
  methods: {
    async updateUser() {
      try {
        await users.update(this.user)
        await userSocials.update({ ...this.user.socials })
        this.$notify({
          title: 'Sucesso',
          text: 'Seus dados foram atualizados com sucesso',
          type: 'success'
        })
      } catch {
        this.$notify({
          title: 'Erro',
          text: 'Oops! Algo deu errado.',
          type: 'error'
        })
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.form-group #bio {
  resize: none;
}
</style>