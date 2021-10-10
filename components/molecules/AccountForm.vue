<template>
  <div class="container col-span-12">
    <FormulateForm @submit="updateUser">
      <div class="form-block flex mb-5">
        <div class="w-50">
          <h3 class="mb-2">Informações Pessoais</h3>
          <FormulateInput type="group" name="personal-information">
            <FormulateInput v-model="user.username" type="text" name="username" label="Nome de Usuário" />
            <FormulateInput v-model="user.name" type="text" name="name" label="Nome" />
            <FormulateInput v-model="user.role" type="text" name="role" label="Cargo/Objetivo" />
            <FormulateInput v-model="user.bio" type="textarea" name="bio" label="Biografia" id="bio" />
          </FormulateInput>
        </div>
        <div class="w-50">
          <h3 class="mb-2">Redes Sociais</h3>
          <FormulateInput type="group" name="social-media">
            <FormulateInput v-model="user.socials.linkedinUrl" type="url" name="linkedin" label="LinkedIn" />
            <FormulateInput v-model="user.socials.githubUrl" type="url" name="github" label="Github" />
            <FormulateInput v-model="user.socials.twitterUrl" type="url" name="twitter" label="Twitter" />
        </FormulateInput>
        </div>
      </div>
      <Button value="Salvar" type="submit" variant="primary"/>
    </FormulateForm>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { users, userSocials } from '@/store'
export default Vue.extend({
  data() {
    return {
      user: {
        name: users.$single.name,
        username: users.$single.username,
        role: users.$single.role,
        bio: users.$single.bio,
        socials: {
          linkedinUrl: users.$single.socials?.linkedin_url,
          githubUrl: users.$single.socials?.github_url,
          twitterUrl: users.$single.socials?.twitter_url
        },
        previewExperiences: [],
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
#bio {
  resize: none;
}
</style>