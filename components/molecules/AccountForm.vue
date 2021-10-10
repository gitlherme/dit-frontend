<template>
  <div class="container col-span-12">
    <FormulateForm @submit="updateUser">
      <div class="form-block flex mb-5 flex-column md:flex-row">
        <div class="w-full md:w-50">
          <h3 class="mb-2">Informações Pessoais</h3>
          <FormulateInput type="group" name="personal-information">
            <FormulateInput v-model="user.username" type="text" name="username" label="Nome de Usuário" />
            <FormulateInput v-model="user.name" type="text" name="name" label="Nome" />
            <FormulateInput v-model="user.role" type="text" name="role" label="Cargo/Objetivo" />
            <FormulateInput
              v-model="user.bio"
              type="textarea"
              name="bio"
              label="Biografia"
              validation="max:500,length"
              validation-name="Biografia"
              :help="`Use no máximo 500 caracteres.`"/>
          </FormulateInput>
        </div>
        <div class="w-full md:w-50">
          <h3 class="mb-2">Redes Sociais</h3>
          <FormulateInput type="group" name="social-media">
            <FormulateInput v-model="user.socials.linkedinUrl" type="url" name="linkedin" label="LinkedIn" />
            <FormulateInput v-model="user.socials.githubUrl" type="url" name="github" label="Github" />
            <FormulateInput v-model="user.socials.twitterUrl" type="url" name="twitter" label="Twitter" />
        </FormulateInput>
        </div>
      </div>
      <div class="form-block flex mb-5 flex-column md:flex-row">
        <div class="w-full md:w-50">
          <h3 class="mb-2">Educação</h3>
          <FormulateInput type="group" name="personal-information">
            <FormulateInput v-model="user.educations[0].school" type="text" name="school" label="Instituição de Ensino" />
            <FormulateInput v-model="user.educations[0].description" type="text" name="description" label="Descrição" :help="`Qual curso, graduação, etc foi feita? Ex: Análise em Desenvolvimento de Sistemas, Curso de Web Completo`"/>
            <FormulateInput
              v-model="user.educations[0].degree"
              :options="{
                highSchool: 'Ensino Médio',
                graduate: 'Graduação',
                mba: 'Pós Graduação / MBA',
                doc: 'Doutorado',
                postdoc: 'Pós Doutorado',
                course: 'Curso',
                bootcamp: 'Bootcamp',
              }"
              type="select"
              placeholder="Selecione uma opção"
              label="Tipo de formação"
            />
            <FormulateInput
              v-model="user.educations[0].startDate"
              type="date"
              name="startDate"
              label="Data de Início"
              min="1910-12-01"
              :max="new Date().toISOString().split('T')[0]"
            />
            <FormulateInput
              v-model="user.educations[0].startDate"
              type="date"
              name="startDate"
              label="Data de Término"
              min="1910-12-01"
            />
          </FormulateInput>
        </div>
        <div class="w-full md:w-50">
          <h3 class="mb-2">Experiencias Anteriores</h3>
          <FormulateInput type="group" name="personal-information">
            <FormulateInput v-model="user.previewExperiences[0].company" type="text" name="company" label="Empresa" />
            <FormulateInput v-model="user.previewExperiences[0].description" type="text" name="description" label="Descrição" />
            <FormulateInput
              v-model="user.educations[0].startDate"
              type="date"
              name="startDate"
              label="Data de Início"
              min="1910-12-01"
              :max="new Date().toISOString().split('T')[0]"
            />
            <FormulateInput
              v-model="user.educations[0].startDate"
              type="date"
              name="startDate"
              label="Data de Término"
              min="1910-12-01"
            />
            <FormulateInput
              v-model="value"
              type="checkbox"
              label="Trabalho aqui atualmente."
              class="form-account-checkbox"
            />
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
        previewExperiences: [
          {
            company: '',
            role: '',
            startDate: '',
            endDate: '',
            description: '',
          }
        ],
        educations: [
          {
            school: '',
            degree: 'bootcamp',
            startDate: '',
            endDate: '',
            description: ''
          }
        ],
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