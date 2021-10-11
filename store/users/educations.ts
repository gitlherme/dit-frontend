import { Module, VuexModule, Action } from 'vuex-module-decorators'
import { $axios } from '@/utils/nuxt-instance'

interface CreatePayload {
  school: string
  degree: string
  startDate: string
  endDate: string
  description: string
}

interface UpdatePayload {
  school: string
  degree: string
  startDate: string
  endDate: string
  description: string
}

@Module({ name: 'users/educations', stateFactory: true, namespaced: true})
export default class UserEducations extends VuexModule {

  @Action
  public async create (payload: CreatePayload) {
    const education = await $axios.$post('/api/user/education', payload)
    this.context.commit('users/SET_USER_EDUCATIONS', education, { root: true })
  }

  @Action
  public async update (payload: UpdatePayload) {
    const education = await $axios.$put('/api/user/education', payload)
    this.context.commit('users/SET_USER_EDUCATIONS', education, { root: true })
  }
}
