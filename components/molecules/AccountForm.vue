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
          <div v-for="education in user.educations" :key="education.id" class="mb-5">
            <FormulateInput type="group" name="educations">
              <FormulateInput v-model="education.id" type="hidden" name="id" />
              <FormulateInput v-model="education.school" type="text" name="school" label="Instituição de Ensino" />
              <FormulateInput v-model="education.description" type="text" name="description" label="Descrição" :help="`Qual curso, graduação, etc foi feita? Ex: Análise em Desenvolvimento de Sistemas, Curso de Web Completo`"/>
              <FormulateInput
                v-model="education.degree"
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
                v-model="education.startDate"
                type="date"
                name="startDate"
                label="Data de Início"
                min="1910-12-01"
                :max="new Date().toISOString().split('T')[0]"
              />
              <FormulateInput
                v-model="education.endDate"
                type="date"
                name="endDate"
                label="Data de Término"
                min="1910-12-01"
              />
            </FormulateInput>
          </div>
        </div>
        <div class="w-full md:w-50">
          <h3 class="mb-2">Experiencias Anteriores</h3>
          <div v-for="experience in user.previewExperiences" :key="experience.id">
            <FormulateInput type="group" name="preview-experience">
              <FormulateInput v-model="experience.id" type="hidden" name="id" />
              <FormulateInput v-model="experience.company" type="text" name="company" label="Empresa" />
              <FormulateInput v-model="experience.description" type="text" name="description" label="Descrição" />
              <FormulateInput
                v-model="experience.startDate"
                type="date"
                name="startDate"
                label="Data de Início"
                min="1910-12-01"
                :max="new Date().toISOString().split('T')"
              />
              <FormulateInput
                v-model="experience.endDate"
                type="date"
                name="endDate"
                label="Data de Término"
                min="1910-12-01"
              />
              <FormulateInput

                type="checkbox"
                label="Trabalho aqui atualmente."
                class="form-account-checkbox"
              />
            </FormulateInput>
          </div>
        </div>
      </div>
      <div class="form-block flex mb-5 flex-column md:flex-row">
        <div class="w-full md:w-50">
          <h3 class="mb-2">Conhecimento Técnico</h3>
          <div v-for="hardSkill in user.hardSkills" :key="hardSkill.id">
            <FormulateInput type="group" name="technical-knowledge">
            <FormulateInput v-model="hardSkill.name" type="text" name="name" label="Tecnologia" />
            <FormulateInput
              v-model="hardSkill.experience_years"
              type="select"
              name="experience-years"
              label="Anos de Experiencia"
              :options="{
                0: 'Menos de um ano',
                1: '1 ano',
                2: '2 anos',
                3: '3 anos',
                4: '4 anos',
                5: '5 anos',
                6: '6 anos',
                7: '7 anos',
                8: '8 anos',
                9: '9 anos',
                10: '10 anos ou mais',
              }"
            />
          </FormulateInput>
          </div>
        </div>
        <div class="w-full md:w-50">
          <h3 class="mb-2">Soft Skills</h3>
          <FormulateInput type="group" name="soft-skills">
            <FormulateInput
              v-model="user.softSkills.name"
              type="text"
              name="name"
              label="Skill"
              :help="`Ex: Liderança, Empatia, etc`"
            />
            <FormulateInput v-model="user.softSkills.description" type="text" name="description" label="Descrição" />
          </FormulateInput>
        </div>
      </div>
      <Button value="Salvar" type="submit" variant="primary"/>
    </FormulateForm>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { users, userSocials, userEducations } from '@/store'
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
        previewExperiences: Object.assign({}, users.$single.previewExperiences),
        educations: Object.assign({}, users.$single.educations),
        hardSkills: Object.assign({}, users.$single.hardSkills),
        softSkills: Object.assign({}, users.$single.softSkills),
      }
    }
  },
  mounted() {
    console.log(users.$single)
    console.log('previewExperiences:', this.user.previewExperiences)
  },
  methods: {
    async updateUser() {
      try {
        await users.update(this.user)
        if (this.user.socials) {
          await userSocials.update(this.user.socials)
        }
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